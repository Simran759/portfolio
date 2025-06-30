# 💼 Simran Bajaj – Developer Portfolio

Welcome to my personal portfolio website built using **React**, **Tailwind CSS**, **Framer Motion**, **EmailJS**, and **Vite**. This platform showcases my work, achievements, contact form, and live project demos with smooth animations and a responsive layout.

---

## 🌟 Features

- 🔥 Modern, responsive UI with TailwindCSS
- 🧩 Animated skill badges and project cards using Framer Motion
- 📬 Contact form with working email functionality via EmailJS
- 📂 Project filtering and categorization
- 🏆 Animated achievements with icons and badges
- 🌐 Social media links integration
- ⚡ Lightning-fast performance with Vite

---

## 🚀 Live Demo

🔗 [Visit Portfolio](https://portfolio-nine-chi-82.vercel.app/)

---

## 🛠️ Tech Stack

- **Frontend:** React + TypeScript
- **Styling:** Tailwind CSS
- **Animations:** Framer Motion
- **Email:** EmailJS
- **Icons:** Lucide React
- **Build Tool:** Vite

---

## 📁 Project Structure

src/
│
├── components/ # Reusable UI components (Card, Button, Badge, etc.)
├── sections/ # Major sections like About, Projects, Skills, Contact
├── assets/ # Images and static assets
├── App.tsx # Main app structure
└── main.tsx # App entry point


---

## 📦 Setup Instructions

1. **Clone the Repository**
```bash
git clone https://github.com/yourusername/portfolio.git
cd portfolio
```
2. **Install Dependencies**
```bash
npm install
```

3. **Setup Environment Variables**
Create a .env file in the root directory and add your EmailJS credentials:
```bash
VITE_EMAILJS_SERVICE_ID=your_service_id
VITE_EMAILJS_TEMPLATE_ID=your_template_id
VITE_EMAILJS_PUBLIC_KEY=your_public_key
```
You can get these from [EmailJS Dashboard](https://dashboard.emailjs.com/admin)

4. **Start Development Server**
```bash 
npm run dev
```

