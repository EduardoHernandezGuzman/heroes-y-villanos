import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import App from './App';
import "./styles/index.css"
import Pagina1 from "../src/pages/Pagina1.jsx"
import Pagina2 from "../src/pages/Pagina2.jsx"


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Router>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/pagina1" element={<Pagina1/>} />
        <Route path="/pagina2" element={<Pagina2/>} />
      </Routes>
    </Router>
  </React.StrictMode>,
);