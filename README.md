# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh



### 📱 Frontend – Zerodha Clone (Dashboard)
This is the frontend dashboard of the Zerodha Clone project, built with React, styled using Tailwind CSS, and powered by Vite for lightning-fast development.

The dashboard mimics Zerodha’s clean interface and includes components like Holdings, Orders, Watchlist, Summary, Buy Actions, and various visual charts to simulate real-time trading insights.

### 🧰 Tech Stack
```
Tool / Library	Purpose
React	Core frontend framework
Vite	Build tool for fast dev and hot reload
Tailwind CSS	Utility-first CSS for responsive UI
React Router	Page routing within the SPA
Recharts / Chart.js	Visual data representation (optional)
```
### 📁 Project Structure
```
frontend/
│
├── public/                   # Static assets (logo, favicon, etc.)
├── src/
│   ├── assets/               # Images and icons
│   ├── components/           # Reusable UI components
│   │   ├── Home.jsx
│   │   ├── Topbar.jsx
│   │   ├── Menu.jsx
│   │   ├── Holdings.jsx
│   │   ├── Orders.jsx
│   │   ├── WatchList.jsx
│   │   ├── Summary.jsx
│   │   ├── Verticalchart.jsx
│   │   └── window/
│   │       └── BuyAction.jsx
│   ├── data/                 # Static/fake data used for charts/lists
│   ├── App.jsx               # Root component
│   ├── main.jsx              # Entry point
│   └── index.css             # Tailwind base styles
│
├── .gitignore
├── index.html
├── package.json
├── vite.config.js
└── README.md
```
### 🚀 How to Run the Project
""" 1. Clone the Repo """
```
git clone https://github.com/Eng-Shailendra/Zerodha-Clone.git
cd /frontend
npm install
npm run dev
```


### 💡 Where to Start Editing

Main Entry Point: src/main.jsx

Root Component: src/App.jsx

Add New Pages/Views: Inside src/components/

Styling: Done via Tailwind CSS in index.css or directly in components

Fake Data: Modify data in src/data/data.js to simulate backend values
