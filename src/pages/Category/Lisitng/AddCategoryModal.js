import React, { useState, useRef } from "react";
import PropTypes from "prop-types";
import { createCategory } from "./api"; // Ensure this path is correct
import { toast } from "react-toastify"; // Import toast for notifications

const AddCategoryModal = ({ visible, onClose, onFetchCategories }) => {
  const initialCategoryState = {
    name: "",
    image: null,
    slug: "",
    seo_title: "",
    image_alt: "",
    seo_description: "",
  };

  const [category, setCategory] = useState(initialCategoryState);
  const [error, setError] = useState(""); // State for error messages
  const fileInputRef = useRef(null); // Create a ref for the file input

  // Function to generate slug from category name
  const generateSlug = (name) => {
    return name
      .toLowerCase()
      .replace(/\s+/g, "-") // Replace spaces with hyphens
      .replace(/[^\w-]+/g, "") // Remove all non-word chars
      .slice(0, 50); // Limit to 50 characters (or adjust as needed)
  };

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    if (name === "image") {
      setCategory((prevState) => ({
        ...prevState,
        image: files[0], // Save the file object
      }));
    } else {
      setCategory((prevState) => ({
        ...prevState,
        [name]: value,
        // Automatically generate slug when category name changes
        ...(name === "name" && { slug: generateSlug(value) }),
      }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault(); // Prevent default form submission
    setError(""); // Reset error message

    const formData = new FormData();
    formData.append("name", category.name);
    formData.append("image", category.image); // Append the file
    formData.append("slug", category.slug);
    formData.append("seo_title", category.seo_title);
    formData.append("image_alt", category.image_alt);
    formData.append("seo_description", category.seo_description);

    try {
      await createCategory(formData); // Call API to add category
      onFetchCategories(); // Fetch updated categories list
      setCategory(initialCategoryState); // Reset the category form

      // Clear the file input
      if (fileInputRef.current) {
        fileInputRef.current.value = ""; // Clear the file input value
      }

      toast.success("Category added successfully!"); // Show success toast
      onClose(); // Close the modal
    } catch (error) {
      console.error("Error adding category:", error);
      setError("Failed to add category. Please try again."); // Set error message
      toast.error("Failed to add category. Please try again."); // Show error toast
    }
  };

  return (
    <div
      className={`modal fade ${visible ? "show" : ""}`}
      style={{ display: visible ? "block" : "none" }} // Control visibility
      tabIndex="-1"
      role="dialog"
    >
      <div className="modal-dialog" role="document">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title">Add Category</h5>
            <button
              type="button"
              className="btn btn-transparent" // Use a custom class for transparency
              onClick={onClose}
              aria-label="Close"
            >
              <i className="bi bi-x-circle"></i>
            </button>
          </div>
          <div className="modal-body">
            {error && <div className="alert alert-danger">{error}</div>}{" "}
            {/* Display error message */}
            <form onSubmit={handleSubmit}>
              <div className="form-group">
                <label htmlFor="categoryName">Category Name</label>
                <input
                  type="text"
                  className="form-control"
                  id="categoryName"
                  name="name"
                  value={category.name}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="form-group">
                <label htmlFor="categoryImage">Image Upload</label>
                <input
                  type="file"
                  className="form-control"
                  id="categoryImage"
                  name="image"
                  accept="image/*"
                  onChange={handleChange}
                  ref={fileInputRef} // Attach ref to input
                  required
                />
              </div>
              <div className="form-group">
                <label htmlFor="slug">Slug</label>
                <input
                  type="text"
                  className="form-control"
                  id="slug"
                  name="slug"
                  value={category.slug}
                  readOnly // Make it read-only since it's auto-generated
                />
              </div>
              <div className="form-group">
                <label htmlFor="seoTitle">SEO Title</label>
                <input
                  type="text"
                  className="form-control"
                  id="seoTitle"
                  name="seo_title"
                  value={category.seo_title}
                  onChange={handleChange}
                />
              </div>
              <div className="form-group">
                <label htmlFor="imageAlt">Image Alt</label>
                <input
                  type="text"
                  className="form-control"
                  id="imageAlt"
                  name="image_alt"
                  value={category.image_alt}
                  onChange={handleChange}
                />
              </div>
              <div className="form-group">
                <label htmlFor="seoDescription">SEO Description</label>
                <textarea
                  className="form-control"
                  id="seoDescription"
                  name="seo_description"
                  value={category.seo_description}
                  onChange={handleChange}
                ></textarea>
              </div>
              <div className="modal-footer">
                <button
                  type="button"
                  className="btn btn-secondary"
                  onClick={onClose}
                >
                  Close
                </button>
                <button type="submit" className="btn btn-primary">
                  Add Category
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

// Prop types for validation
AddCategoryModal.propTypes = {
  visible: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
  onFetchCategories: PropTypes.func.isRequired, // Added prop type for fetch function
};

// Export the component
export default AddCategoryModal;
