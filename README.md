# ProductApp

A simple web application built with **Next.js** and **NextAuth.js** that allows users to browse products, view a dashboard, and securely log in with Google authentication.  

---

## 🚀 Features
- Google login & logout with **NextAuth.js**  
- Protected routes (Dashboard)  
- Clean & responsive Navbar with navigation  
- Next.js 13+ App Router support  

---

## ⚙️ Setup & Installation  

1. **Clone the repository**  
   ```bash
   git clone https://github.com/your-username/productapp.git
   cd productapp


Install dependencies

npm install
Environment variables
Create a .env.local file in the root directory and add:


NEXTAUTH_SECRET=your-secret-key
NEXTAUTH_URL=http://localhost:3000
GOOGLE_CLIENT_ID=your-google-client-id
GOOGLE_CLIENT_SECRET=your-google-client-secret
Run the development server


npm run dev
Open http://localhost:3000 in your browser.

📌 Route Summary
Route	Description
/	Home page (welcome screen)
/products	Products listing page
/dashboard	Protected page (requires login)
/api/auth/*	NextAuth authentication routes