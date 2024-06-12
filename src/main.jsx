import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router } from 'react-router-dom'; // Import BrowserRouter
// import './index.css';
import App from './App';
 

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {/* Wrap the App component with BrowserRouter */}
    <Router>
      <App />
    </Router>
  </React.StrictMode>
);

reportWebVitals();
