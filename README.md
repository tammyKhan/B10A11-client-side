# 🍽️ Community Food Sharing & Surplus Reduction Platform

## 🚀 Project Overview
This project is a **Food Sharing Website** designed to **reduce food waste** by allowing users to **share surplus food** with their community. Users can add food items, request available food, manage their food listings, and more. The platform ensures **secure authentication** and **user-friendly interactions** using modern web technologies.

## 🌍 Live Website
🔗https://food-sharing-2841d.web.app/

---

## 🎯 Key Features
✅ **User Authentication**: Login & signup with **Email/Password** and **Google Auth** (Firebase).  
✅ **JWT Security**: Secure routes using **JSON Web Tokens (JWT)**.  
✅ **Food Management (CRUD)**: Users can **add, edit, delete, and view** food items.  
✅ **Request System**: Users can request food, and requested items are removed from availability.  
✅ **Sorting & Searching**: Sort foods by **expiration date** and search by **food name**.  
✅ **Dynamic Layout**: Toggle between **3-column** and **2-column** food display.  
✅ **Framer Motion Animations**: Smooth UI animations for an enhanced experience.  
✅ **Responsive Design**: Works on **mobile, tablet, and desktop** screens.  
✅ **Secure Environment Variables**: Firebase & MongoDB credentials **protected** using **.env**.  
✅ **Protected Routes**: Only logged-in users can access **Add Food, Manage My Foods, and My Food Requests** pages.  

---

## 🛠️ Technologies Used
### **Frontend (Client-Side)**
- ⚛️ **React.js** - Frontend UI
- 🌊 **Tailwind CSS** & **DaisyUI** - Styling & Components
- 🔥 **Firebase Authentication** - Login & Signup
- 🔄 **TanStack Query** - Data Fetching & Mutations
- 🎭 **Framer Motion** - UI Animations

### **Backend (Server-Side)**
- 🟢 **Node.js & Express.js** - Backend Framework
- 🍃 **MongoDB & Mongoose** - Database & ODM
- 🔑 **JSON Web Token (JWT)** - Secure Authentication
- 🔄 **Cors & dotenv** - Security & Environment Variables

---

## 📦 Installation & Setup
### **Step 1: Clone the Repository**
```sh
 git clone https://github.com/tammyKhan/B10A11-client-side.git
 git clone https://github.com/tammyKhan/B10A11-server-side.git
 cd your-repo
```
### **Step 2: Install Dependencies**
```sh
# Install frontend dependencies
npm install  # (inside client folder)

# Install backend dependencies
npm install  # (inside server folder)
```

### **Step 3: Set Up Environment Variables**
Create a `.env` file in both `client` and `server` directories with:
```
# Server-side .env
PORT=5000
MONGODB_URI=your-mongodb-connection-string
JWT_SECRET=your-secret-key

# Client-side .env
REACT_APP_FIREBASE_API_KEY=your-firebase-api-key
```

### **Step 4: Start the Development Server**
```sh
# Start backend server
npm run server  # (inside server folder)

# Start frontend
npm start  # (inside client folder)
```

---

## 💡 Future Improvements
🔹 Implement **Email Verification & Password Reset**.  
🔹 Improve **Admin Panel** for better food management.  
🔹 Add **Geolocation-based food discovery**.  

---

## 🤝 Contributing
Feel free to fork this repo and make improvements! 🚀

---

## 🏆 Credits
Developed by **Farhana Islam**. If you find this project useful, ⭐ the repository! 😊

