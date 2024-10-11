// src/pages/homepage.js
import React from "react";
import Header from "../components/Header/header";
import Sidebar from "../components/Sidebar/sidebar";
import { Outlet } from "react-router-dom";
import "./homePage.css";

const Homepage = () => {
  return (
    <div className="homepage-container">
      <Header />
      <div className="sidebar-and-content">
        <Sidebar />
        <main className="main-content">
          <Outlet /> {/* This will render the component for the active route */}
        </main>
      </div>
    </div>
  );
};

export default Homepage;
