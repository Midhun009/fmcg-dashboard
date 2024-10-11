import React, { useState } from "react";
import "./sidebar.css";
import "../../customScript";
import { Link } from "react-router-dom";

const Sidebar = () => {
  const [openSubmenu, setOpenSubmenu] = useState(null); // Store the currently open submenu
  const [selectedItem, setSelectedItem] = useState("");

  // Function to toggle the submenu
  const toggleSubmenu = (menu) => {
    setOpenSubmenu(openSubmenu === menu ? null : menu); // Toggle the submenu
  };

  // Function to handle item click
  const handleItemClick = (item) => {
    setSelectedItem(item);
  };

  return (
    <div className="vertical-menu">
      <div data-simplebar className="h-100">
        <div id="sidebar-menu">
          <ul className="metismenu list-unstyled" id="side-menu">
            <li className="menu-title">Menu</li>
            <li>
              <Link
                to="/"
                className={`waves-effect ${
                  selectedItem === "dashboard" ? "active" : ""
                }`}
                onClick={() => handleItemClick("dashboard")}
              >
                <i className="bx bx-home"></i>
                <span>Dashboard</span>
              </Link>
            </li>
            <li>
              <a
                href="javascript:void(0);"
                className={`has-arrow waves-effect ${
                  selectedItem === "profileSettings" ? "active" : ""
                }`}
                onClick={() => {
                  toggleSubmenu("profileSettings");
                  handleItemClick("profileSettings");
                }}
              >
                <i className="bx bx-user"></i>
                <span>Profile Settings</span>
              </a>
              <ul
                className={`sub-menu ${
                  openSubmenu === "profileSettings" ? "show" : ""
                }`}
                aria-expanded={openSubmenu === "profileSettings"}
              >
                <li>
                  <a
                    href="javascript:void(0);"
                    className={
                      selectedItem === "changePassword" ? "active" : ""
                    }
                    onClick={() => handleItemClick("changePassword")}
                  >
                    Change Password
                  </a>
                </li>
                <li>
                  <a
                    href="javascript:void(0);"
                    className={selectedItem === "logout" ? "active" : ""}
                    onClick={() => handleItemClick("logout")}
                  >
                    Logout
                  </a>
                </li>
              </ul>
            </li>
            <li className="menu-title">Apps</li>
            <li>
              <a
                href="javascript:void(0);"
                className={`has-arrow waves-effect ${
                  selectedItem === "categories" ? "active" : ""
                }`}
                onClick={() => {
                  toggleSubmenu("categories");
                  handleItemClick("categories");
                }}
              >
                <i className="bx bx-grid-alt"></i>
                <span>Categories</span>
              </a>
              <ul
                className={`sub-menu ${
                  openSubmenu === "categories" ? "show" : ""
                }`}
                aria-expanded={openSubmenu === "categories"}
              >
                <li>
                  <Link
                    to="/listing-category" // Replace with your desired route
                    className={
                      selectedItem === "listingCategory" ? "active" : ""
                    }
                    onClick={() => handleItemClick("listingCategory")}
                  >
                    Listing Category
                  </Link>
                </li>
                <li>
                  <a
                    href="javascript:void(0);"
                    className={
                      selectedItem === "productCategory" ? "active" : ""
                    }
                    onClick={() => handleItemClick("productCategory")}
                  >
                    Product Category
                  </a>
                </li>
              </ul>
            </li>
            {/* Repeat similar structure for other menu items */}
            <li>
              <a
                href="javascript:void(0);"
                className={`has-arrow waves-effect ${
                  selectedItem === "inquiries" ? "active" : ""
                }`}
                onClick={() => {
                  toggleSubmenu("inquiries");
                  handleItemClick("inquiries");
                }}
              >
                <i className="bx bx-envelope"></i>
                <span>Enquiry</span>
              </a>
              <ul
                className={`sub-menu ${
                  openSubmenu === "inquiries" ? "show" : ""
                }`}
                aria-expanded={openSubmenu === "inquiries"}
              >
                <li>
                  <Link
                    to="/listing-enquiry"
                    className={
                      selectedItem === "listingEnquiry" ? "active" : ""
                    }
                    onClick={() => handleItemClick("listingEnquiry")}
                  >
                    Listing Enquiry
                  </Link>
                </li>
                <li>
                  <Link
                    to="/product-enquiry"
                    className={
                      selectedItem === "productEnquiry" ? "active" : ""
                    }
                    onClick={() => handleItemClick("productEnquiry")}
                  >
                    Product Enquiry
                  </Link>
                </li>
              </ul>
            </li>
            <li>
              <a
                href="javascript:void(0);"
                className={`has-arrow waves-effect ${
                  selectedItem === "reviews" ? "active" : ""
                }`}
                onClick={() => {
                  toggleSubmenu("reviews");
                  handleItemClick("reviews");
                }}
              >
                <i className="bx bx-star"></i>
                <span>Reviews</span>
              </a>
              <ul
                className={`sub-menu ${
                  openSubmenu === "reviews" ? "show" : ""
                }`}
                aria-expanded={openSubmenu === "reviews"}
              >
                <li>
                  <a
                    href="javascript:void(0);"
                    className={
                      selectedItem === "listingReviews" ? "active" : ""
                    }
                    onClick={() => handleItemClick("listingReviews")}
                  >
                    Listing Reviews
                  </a>
                </li>
                <li>
                  <a
                    href="javascript:void(0);"
                    className={
                      selectedItem === "productReviews" ? "active" : ""
                    }
                    onClick={() => handleItemClick("productReviews")}
                  >
                    Product Reviews
                  </a>
                </li>
              </ul>
            </li>
            <li>
              <a
                href="javascript:void(0);"
                className={`has-arrow waves-effect ${
                  selectedItem === "keywords" ? "active" : ""
                }`}
                onClick={() => {
                  toggleSubmenu("keywords");
                  handleItemClick("keywords");
                }}
              >
                <i className="bx bx-search"></i>
                <span>Keywords</span>
              </a>
              <ul
                className={`sub-menu ${
                  openSubmenu === "keywords" ? "show" : ""
                }`}
                aria-expanded={openSubmenu === "keywords"}
              >
                <li>
                  <a
                    href="javascript:void(0);"
                    className={
                      selectedItem === "listingKeywords" ? "active" : ""
                    }
                    onClick={() => handleItemClick("listingKeywords")}
                  >
                    Listing Keywords
                  </a>
                </li>
                <li>
                  <a
                    href="javascript:void(0);"
                    className={
                      selectedItem === "productKeywords" ? "active" : ""
                    }
                    onClick={() => handleItemClick("productKeywords")}
                  >
                    Product Keywords
                  </a>
                </li>
              </ul>
            </li>
            <li>
              <a
                href="javascript:void(0);"
                className={`has-arrow waves-effect ${
                  selectedItem === "locations" ? "active" : ""
                }`}
                onClick={() => {
                  toggleSubmenu("locations");
                  handleItemClick("locations");
                }}
              >
                <i className="bx bx-globe"></i>
                <span>Location Settings</span>
              </a>
              <ul
                className={`sub-menu ${
                  openSubmenu === "locations" ? "show" : ""
                }`}
                aria-expanded={openSubmenu === "locations"}
              >
                <li>
                  <a
                    href="javascript:void(0);"
                    className={selectedItem === "countries" ? "active" : ""}
                    onClick={() => handleItemClick("countries")}
                  >
                    Countries
                  </a>
                </li>
                <li>
                  <a
                    href="javascript:void(0);"
                    className={selectedItem === "states" ? "active" : ""}
                    onClick={() => handleItemClick("states")}
                  >
                    States
                  </a>
                </li>
              </ul>
            </li>
            <li>
              <a
                href="javascript:void(0);"
                className={`has-arrow waves-effect ${
                  selectedItem === "businessListings" ? "active" : ""
                }`}
                onClick={() => {
                  toggleSubmenu("businessListings");
                  handleItemClick("businessListings");
                }}
              >
                <i className="bx bx-building-house"></i>
                <span>Business Listings</span>
              </a>
              <ul
                className={`sub-menu ${
                  openSubmenu === "businessListings" ? "show" : ""
                }`}
                aria-expanded={openSubmenu === "businessListings"}
              >
                <li>
                  <a
                    href="javascript:void(0);"
                    className={selectedItem === "organizations" ? "active" : ""}
                    onClick={() => handleItemClick("organizations")}
                  >
                    Organizations
                  </a>
                </li>
                <li>
                  <a
                    href="javascript:void(0);"
                    className={selectedItem === "brands" ? "active" : ""}
                    onClick={() => handleItemClick("brands")}
                  >
                    Brands
                  </a>
                </li>
              </ul>
            </li>
            <li>
              <a href="chat.html" className="waves-effect">
                <i className="bx bx-briefcase-alt"></i>
                <span>Advertisements</span>
              </a>
            </li>
            <li>
              <a href="apps-filemanager.html" className="waves-effect">
                <i className="bx bx-box"></i>
                <span>Subscription Packages</span>
              </a>
            </li>
            <li>
              <a href="apps-filemanager.html" className="waves-effect">
                <i className="bx bx-bar-chart"></i>
                <span>Insights</span>
              </a>
            </li>
            <li>
              <a href="apps-filemanager.html" className="waves-effect">
                <i className="bx bxs-group"></i>
                <span>User Management</span>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
