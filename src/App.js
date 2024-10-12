import "bootstrap/dist/css/bootstrap.min.css"; // Bootstrap CSS
import "bootstrap/dist/js/bootstrap.bundle.min.js"; // Bootstrap JS with Popper.js


import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import AppRoutes from "./routes"; // Import your routes

const App = () => {
  return (
    <Router>
      <AppRoutes />
    </Router>
  );
};

export default App;
