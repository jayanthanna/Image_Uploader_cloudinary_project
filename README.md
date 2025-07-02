# 🌤️ Cloudinary Image Uploader with Node.js

This is a full-stack image uploader built using **Node.js**, **Express**, **MongoDB**, **Multer**, and **Cloudinary**. It allows users to upload images through a simple UI and stores them on **Cloudinary**, while saving image metadata in **MongoDB**.

---

## 🚀 Features

- Upload image from local system
- Store uploaded image on Cloudinary
- Save image metadata to MongoDB
- Display the uploaded image to the user
- EJS-based simple frontend view

---

## 🛠️ Technologies Used

- Node.js
- Express.js
- MongoDB + Mongoose
- Multer
- Cloudinary SDK
- EJS Templating Engine
- Dotenv

---

## 📦 Project Setup


```bash
1. Clone the repository
git clone https://github.com/your-username/cloudinary-image-uploader.git
cd cloudinary-image-uploader


2. Install dependencies
  npm install

4. Create a `.env` file in the root directory
   ```env
   CLOUDINARY_CLOUD_NAME=your_cloud_name
   CLOUDINARY_API_KEY=your_api_key
   CLOUDINARY_API_SECRET=your_api_secret
   MONGODB_URI=your_mongodb_connection_uri
   
6. Run the server
   npm start

Server will run at:
👉 http://localhost:3000
