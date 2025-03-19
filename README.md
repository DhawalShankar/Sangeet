# Sangeet - The Rhythm of Your Life

## Overview
Sangeet is a **full-stack music streaming application** built using the **MERN (MongoDB, Express, React, Node.js) stack** with **Tailwind CSS** for a modern and responsive UI. The application allows users to stream music, create and manage playlists, search for songs, and experience seamless music playback with an intuitive interface.

## Features
### 1. **User Authentication & Authorization**
- **Sign Up & Login**: Secure user authentication using JWT (JSON Web Token) and bcrypt for password hashing.
- **Google OAuth Integration**: Allows users to sign in with their Google accounts for a hassle-free experience.
- **Role-Based Access**: Admins can manage song uploads, while users can create and share playlists.

### 2. **Music Streaming & Playback**
- **Real-time Music Streaming**: Songs are fetched from the backend and played directly without downloads.
- **Now Playing Bar**: Displays the currently playing song along with controls.
- **Play/Pause & Seek**: Intuitive controls for playback with progress tracking.
- **Auto-Next**: Automatically plays the next song when the current track ends.

### 3. **Search & Discover Music**
- **Search Functionality**: Users can search for songs, artists, and albums using MongoDB's full-text search.
- **Trending & Recommended Music**: AI-based recommendation system for personalized song suggestions.
- **Genre Filters**: Browse songs by categories like Pop, Rock, Classical, etc.

### 4. **Playlists & Favorites**
- **Create & Manage Playlists**: Users can create, update, and delete playlists.
- **Favorite Songs**: Like and store favorite songs for quick access.
- **Public & Private Playlists**: Users can choose to share playlists with others.

### 5. **Interactive & Engaging UI**
- **Tailwind CSS**: Fully responsive and mobile-friendly design with a sleek modern look.
- **Dark/Light Mode**: Users can toggle between light and dark themes.
- **Smooth Animations**: Framer Motion for interactive UI elements.

### 6. **Backend & Database**
- **Node.js & Express.js**: RESTful API with secure authentication and optimized routing.
- **MongoDB with Mongoose**: NoSQL database for scalable and efficient data storage.
- **Cloudinar## Installation & Setup
### **1. Clone the Repository**
```sh
git clone https://github.com/your-username/sangeet.git
cd sangeet
```

### **2. Install Dependencies**
#### **Backend**
```sh
cd backend
npm install
```
#### **Frontend**
```sh
cd frontend
npm install
```

### **3. Setup Environment Variables**
Create a `.env` file in both frontend and backend directories:

#### **Backend `.env`**
```
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_secret_key
CLOUDINARY_URL=your_cloudinary_api
```

#### **Frontend `.env`**
```
REACT_APP_API_URL=http://localhost:5000
```

### **4. Run the Application**
#### **Start Backend Server**
```sh
cd backend
npm run dev
```

#### **Start Frontend Server**
```sh
cd frontend
npm start
```

### **5. Open in Browser**

y Integration**: Stores album covers and song files in the cloud for faster streaming.

### 7. **Real-Time Features**
- **Live Lyrics Display**: Fetches and syncs lyrics in real time using a third-party API.
- **Activity Feed**: Displays user activity like recent songs played and playlist additions.

### 8. **Admin Panel & Song Upload**
- **Admin Dashboard**: Manage users, songs, and reports.
- **Upload & Edit Songs**: Admins can upload music files and edit song metadata.
- **Report Handling**: Users can report inappropriate content, and admins can take action.

## Tech Stack
- **Frontend**: React.js, Tailwind CSS, Framer Motion
- **Backend**: Node.js, Express.js
- **Database**: MongoDB (with Mongoose ORM)
- **Authentication**: JWT, bcrypt, Google OAuth
- **Cloud Storage**: Cloudinary (for media storage)
- **State Management**: React Context API / Redux (if needed)


## Future Enhancements
- **Offline Mode**: Allow users to download songs for offline playback.
- **Social Features**: Add user-to-user interactions like following and song sharing.
- **AI-Based Playlist Generation**: Auto-create playlists based on user listening history.

## Contributing
If you'd like to contribute to **Sangeet**, feel free to fork the repository, make changes, and submit a pull request!

---

With this **feature-rich, beginner-friendly full-stack project**, you get the best of a modern **music streaming app** while learning essential **MERN stack concepts**! 🚀🎵

