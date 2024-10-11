import $ from 'jquery'; // Import jQuery



import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import './assets/fonts/fonts.css'
import './assets/libs'
import './customScript';
import './assets/css/app.min.css'
import './assets/css/bootstrap.min.css'
import './assets/css/icons.min.css'
import 'bootstrap/dist/css/bootstrap.min.css';

import "bootstrap/dist/css/bootstrap.min.css";


// Make jQuery available globally if needed
window.jQuery = $;
window.$ = $;

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);


reportWebVitals();
