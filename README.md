# Oatly

Plant-based dairy e-commerce web application built using the MERN stack.

## 📄 Documentation

[Project Documentation](https://docs.google.com/document/d/1e2d-Yw3VK4YT1WzLzOm8OaMOwKsAkaC_1FbW4a9pGgA/edit?usp=sharing)

---

## 🚀 Overview

Oatly is a full-stack e-commerce platform for purchasing plant-based dairy products online.  
The application provides secure authentication, online payments, real-time order tracking, and admin management features.

---

## ✨ Features

- User Sign Up & Sign In
- Password Reset
- Add to Cart
- Razorpay Payment Integration
- Real-Time Order Tracking using Socket.io
- Admin Panel
- User & Delivery Management
- Responsive Design

---

## 🛠️ Tech Stack

### Frontend
- React.js
- Zustand
- Tailwind CSS

### Backend
- Node.js
- Express.js

### Database
- MongoDB Atlas

### Other Tools
- Socket.io
- Razorpay
- JWT Authentication

---

## ⚙️ Installation

### Clone Repository

```bash
git clone https://github.com/raviitaliya/oatly.git
cd oatly

🔐 Environment Variables

Create a .env file inside the Backend folder.

PORT=8000

MONGODB_URI=your_mongodb_uri

EMAIL_USER=your_email

EMAIL_PASS=your_email_password

JWT_SECRET=your_jwt_secret

CLIENT_URL=http://localhost:5173

CLOUDINARY_CLOUD_NAME=your_cloud_name

CLOUDINARY_API_KEY=your_cloudinary_api_key

CLOUDINARY_API_SECRET=your_cloudinary_api_secret

RAZORPAY_API_KEY=your_razorpay_api_key

RAZORPAY_API_SECRET=your_razorpay_api_secret

RAZORPAY_KEY_ID=your_razorpay_key_id
