// src/routes.js
import React from "react";
import { Route, Routes, Navigate } from "react-router-dom"; // Import Navigate here
import Homepage from "./pages/homepage";
import Dashboard from "./components/Dashboard/Dashboard";
import ProfileSettings from "./components/ProfileSettings/ProfileSettings";
import ListingCategory from "./pages/Category/Lisitng/ListingCategory";
import ProductEnquiry from "./pages/Enquiry/Product/ProductEnquiry";
import ListingEnquiry from "./pages/Enquiry/Listing/ListingEnquiry";

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Homepage />}>
        <Route path="dashboard" element={<Dashboard />} />
        <Route path="profile-settings" element={<ProfileSettings />} />
        <Route path="listing-category" element={<ListingCategory />} />
        <Route path="product-enquiry" element={<ProductEnquiry />} />
        <Route path="listing-enquiry" element={<ListingEnquiry />} />
        <Route patth="product-category" element={<ListingCategory />} />
        {/* Optionally, add a redirect for the root path */}
        <Route path="/" element={<Navigate to="/dashboard" />} />
      </Route>
    </Routes>
  );
};

export default AppRoutes;
