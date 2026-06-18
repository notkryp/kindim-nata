# Kindin Na Ta

A real-time social/chat web app built with the MERN stack and Socket.io. Users can sign up, connect with others, and chat in real time. It also supports image uploads via Cloudinary and sends OTP emails for account verification.

## What it does

- Sign up with email and verify your account via OTP
- Log in securely with JWT-based authentication
- Real-time messaging powered by Socket.io
- Upload and share images through Cloudinary
- Connect with other users on the platform
- Toast notifications for actions and events

## Tech stack

**Frontend** — React 18, Vite, React Router, Axios, Socket.io Client, React Toastify

**Backend** — Node.js, Express, MongoDB (Mongoose), Socket.io

**Auth** — JWT, bcrypt, OTP via Nodemailer, otp-generator

**Media** — Cloudinary, Multer

## Project structure

```
kindim-nata/
├── client/    # React + Vite frontend
└── server/    # Express + Socket.io backend
```

## Getting started

### Backend

```bash
cd server
npm install
```

Create a `.env` file in the `server` folder:

```
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret
CLOUDINARY_CLOUD_NAME=your_cloudinary_cloud_name
CLOUDINARY_API_KEY=your_cloudinary_api_key
CLOUDINARY_API_SECRET=your_cloudinary_api_secret
EMAIL_USER=your_email@gmail.com
EMAIL_PASS=your_email_app_password
PORT=5000
```

Then run:

```bash
npm run dev
```

### Frontend

```bash
cd client
npm install
npm run v
```

The frontend runs on `http://localhost:5173` and connects to the backend at `http://localhost:5000`.
