import express from "express";
import mongoose from "mongoose";
import multer from "multer";
import dotenv from "dotenv";
import path from "path";

const app = express();
dotenv.config();
import { v2 as cloudinary } from "cloudinary";

cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

mongoose
  .connect(process.env.MONGODB_URI, {
    dbName: "project_image_uploader",
  })
  .then(() => console.log("Connected to MongoDB"))
  .catch((err) => console.error("MongoDB connection error:", err));

app.get("/", (req, res) => {
  res.render("index.ejs", { url: null });
});

const storage = multer.diskStorage({
  // destination: "./public/uploads",
  filename: function (req, file, cb) {
    const uniqueSuffix = Date.now() + path.extname(file.originalname);
    cb(null, file.fieldname + "-" + uniqueSuffix);
  },
});

const upload = multer({ storage: storage });

const imageSchema = new mongoose.Schema({
  fileName: String,
  public_id: String,
  imageUrl: String,
});

const Image = mongoose.model("Cloudinary", imageSchema);

app.post("/upload", upload.single("file"), async (req, res) => {
  const file = req.file.path;

  const cloudinaryResponse = await cloudinary.uploader.upload(file, {
    folder: "project_image_uploader",
  });

  const db = await Image.create({
    fileName: file,
    public_id: cloudinaryResponse.public_id,
    imageUrl: cloudinaryResponse.secure_url,
  });

  res.render("index.ejs", {
    url: cloudinaryResponse.secure_url,
  });
  // res.json({
  //   message: "File uploaded successfully",
  //   cloudinaryResponse,
  //   fileName: file.filename,
  // });
});

app.listen(3000, () => {
  console.log("Server is running on port http://localhost:3000");
});
