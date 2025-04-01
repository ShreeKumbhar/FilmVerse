# 🎬 FilmVerse
FilmVerse is a movie exploration platform built with React for the frontend and MongoDB Atlas for the database. Users can browse movies, mark favorites, and see their profiles.
## 🛠 Tech Stack
- **Frontend:** React, React Router, React-Toastify, React-Responsive-Carousel
- **Backend:** Node.js, Express.js, MongoDB Atlas
- **Authentication:** JWT (JSON Web Token)
- **Styling:** CSS
- **API:** The Movie Database (TMDB)
## ⚙️ Installation & Setup
### 1️⃣ Clone the Repository
```sh
git clone https://github.com/your-username/FilmVerse.git
cd FilmVerse
### 2️⃣ Install Dependencies
- ** Backend (Node.js, Express, MongoDB)**
cd backend
npm install
- ** Frontend (React)**
cd ..
npm install
## 🔑 Environment Variables
Set up environment variables for both frontend and backend.
### 📁 Backend: backend/.env
Create a .env file inside the backend/ directory and add:
  MONGO_URI=DATABASE_CONNECTION_STRING
  JWT_SECRET=YOUR_SECRET_KEY
  TMDB_API_KEY=YOUR_TMDB_API_KEY
### 📁 Frontend: .env
Create a .env file in the root directory (FilmVerse/) and add:
  REACT_APP_TMDB_API_KEY=YOUR_TMDB_API_KEY
## 📌 Running the Project
### ▶️ Start Frontend Server
npm start
### ▶️ Start Backend Server
cd backend
node server.js
## 📚 Installed Dependencies
### ✅ Backend
-Express
-Mongoose
-dotenv
-jsonwebtoken
-bcryptjs
-cors
-nodemon
### ✅ Frontend
-React
-React Router
-Axios
-React Toastify
-React Responsive Carousel
-FontAwesome
## 🎯 Features
-Browse popular, top-rated, and upcoming movies
-View movie details including title, overview, and rating
-User authentication (Login, Logout)
-Save favorite movies to profile
-Secure API with JWT authentication
-View movie trailers directly in the app
-See the list of actors in each movie


