import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import { editCategory } from "./api"; // Adjust the path as necessary

const EditCategoryModal = ({
  visible,
  onClose,
  onFetchCategories,
  categoryToEdit,
}) => {
  const [category, setCategory] = useState({
    name: "",
    image: null,
    slug: "",
    seo_title: "",
    image_alt: "",
    seo_description: "",
  });
  const [error, setError] = useState(""); // State for error messages

  // Effect to set the initial state from the category to edit
  useEffect(() => {
    if (categoryToEdit) {
      setCategory({
        name: categoryToEdit?.name || "",
        image: null, // Reset image input to avoid conflicts
        slug: categoryToEdit?.slug || "",
        seo_title: categoryToEdit?.seo_title || "",
        image_alt: categoryToEdit?.image_alt || "",
        seo_description: categoryToEdit?.seo_description || "",
      });
    }
  }, [categoryToEdit]);

  // Handle input field changes
  const handleChange = (e) => {
    const { name, value, files } = e.target;
    if (name === "image") {
      setCategory((prevCategory) => ({
        ...prevCategory,
        image: files?.[0] || null, // Update with the selected file or null
      }));
    } else {
      setCategory((prevCategory) => ({
        ...prevCategory,
        [name]: value,
      }));
    }
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(""); // Reset error message

    // Prepare form data
    const formData = new FormData();
    formData.append("name", category.name);
    formData.append("slug", category.slug);
    formData.append("seo_title", category.seo_title);
    formData.append("image_alt", category.image_alt);
    formData.append("seo_description", category.seo_description);

    if (category.image && category.image instanceof File) {
      formData.append("image", category.image); // Append image if a new file is selected
    }

    try {
      await editCategory(categoryToEdit.id, formData); // Call API to update category
      await onFetchCategories(); // Fetch updated categories list
      onClose(); // Close the modal
    } catch (error) {
      console.error("Error updating category:", error);
      setError("Failed to update category. Please try again."); // Set error message
    }
  };

  if (!visible) return null; // Return null if the modal is not visible

  return (
    <div
      className={`modal fade ${visible ? "show" : ""}`}
      style={{ display: visible ? "block" : "none" }}
      tabIndex="-1"
      role="dialog"
    >
      <div className="modal-dialog" role="document">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title">Edit Category</h5>
            <button
              type="button"
              className="btn btn-secondary"
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
                  placeholder="Enter category name"
                  required
                />
              </div>
              <div className="form-group">
                <label htmlFor="categoryImage">Image Upload</label>
                {categoryToEdit?.image && (
                  <div>
                    <a
                      href={categoryToEdit.image}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      View Current Image
                    </a>
                    <p>Current Image Preview:</p>
                    <img
                      src={categoryToEdit.image}
                      alt="Current"
                      style={{ width: "100px", height: "auto" }}
                    />
                  </div>
                )}
                <input
                  type="file"
                  className="form-control"
                  id="categoryImage"
                  name="image"
                  accept="image/*"
                  onChange={handleChange}
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
                  onChange={handleChange}
                  placeholder="Enter slug"
                  required
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
                  placeholder="Enter SEO title"
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
                  placeholder="Enter image alt text"
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
                  placeholder="Enter SEO description"
                ></textarea>
              </div>
              <div className="modal-footer">
                <button
                  type="button"
                  className="btn btn-secondary"
                  onClick={onClose}
                >
                  <i className="bi bi-x-circle"></i>
                </button>
                <button type="submit" className="btn btn-primary">
                  Update Category
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
EditCategoryModal.propTypes = {
  visible: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
  onFetchCategories: PropTypes.func.isRequired,
  categoryToEdit: PropTypes.object.isRequired,
};

export default EditCategoryModal;
