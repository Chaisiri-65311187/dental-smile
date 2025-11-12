// src/main.jsx
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';

// ✅ Bootstrap สำหรับ layout + components
import 'bootstrap/dist/css/bootstrap.min.css';

// ✅ Custom CSS สำหรับ modern clinic theme & animations
import './index.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
