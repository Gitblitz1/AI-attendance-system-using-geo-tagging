# 📌 AI Attendance System  

An **AI-powered Attendance System** using **React, Firebase Authentication, Face Recognition & Geofencing**.  
This project helps organizations mark attendance based on **face verification** and **location-based geofencing**, along with an **admin panel to export reports**.  

---

## 🚀 Features  

- ✅ User Authentication (Email/Password + Google Login)  
- ✅ Face Capture & Verification using Camera  
- ✅ Geofencing (only mark attendance inside office area)  
- ✅ Export Attendance Data (CSV/Excel)  
- ✅ Firebase Integration (Auth, Firestore, Storage)  
- ✅ Responsive UI with TailwindCSS  
- ✅ Deployed on Vercel / Render  

---

## 🛠️ Tech Stack  

- **Frontend:** React + Vite + TailwindCSS  
- **Backend:** Firebase (Auth, Firestore, Storage) + Python Flask (face recognition)  
- **Database:** Firebase Firestore  
- **Hosting:** Vercel (frontend) + Render/Heroku (backend)  

---

## 📂 Project Structure  
ai-attendance/
│── backend/ # Flask Backend (Face Recognition APIs)
│ ├── app.py
│ ├── requirements.txt
│ └── ...
│
│── frontend/ # React Frontend
│ ├── src/
│ │ ├── components/ # React Components
│ │ ├── firebase/ # Firebase Config
│ │ └── App.jsx
│ ├── package.json
│ └── ...
│
│── README.md # Project Documentation

---

## ⚙️ Installation & Setup  

### 1️⃣ Clone the Repository  
```bash
git clone https://github.com/your-username/ai-attendance.git
cd ai-attendance
cd backend
pip install -r requirements.txt
python app.py
cd frontend
npm install
npm run dev
