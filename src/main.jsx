import React from 'react'
import ReactDOM from 'react-dom/client'

import App from "./App.jsx";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import HomePage from "./pages/home";
import AuthPage from "./pages/auth";

// Importing the Bootstrap CSS
import 'bootstrap/dist/css/bootstrap.min.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/home" element={<HomePage />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
)
