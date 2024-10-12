import React, { useState, useEffect } from "react";

const ViewCategoryModal = ({ category, visible, onClose }) => {
  // State to hold the current category
  const [currentCategory, setCurrentCategory] = useState(category);

  useEffect(() => {
    setCurrentCategory(category);
  }, [category]);

  if (!visible) return null; // Return null if the modal is not visible

  return (
    <div
      className="modal fade show" // Add show class for Bootstrap modal visibility
      style={{ display: "block" }} // Set display to block when visible
      tabIndex="-1"
      aria-labelledby="viewCategoryModalLabel"
      aria-hidden="true"
    >
      <div className="modal-dialog modal-dialog-centered">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title" id="viewCategoryModalLabel">
              Category Details
            </h5>
            <button
              type="button"
              className="btn-close"
              onClick={onClose} // Use onClose function to close the modal
              aria-label="Close"
            ></button>
          </div>
          <div className="modal-body">
            <div className="row mb-3">
              <div className="col-4">
                <h6 className="fw-bold">Category Name:</h6>
              </div>
              <div className="col-8">
                <p className="text-primary">{currentCategory?.name || "N/A"}</p>
              </div>
            </div>
            <div className="row mb-3">
              <div className="col-4">
                <h6 className="fw-bold">Category Image:</h6>
              </div>
              <div className="col-8">
                <img
                  src={currentCategory?.image || "placeholder-image-url.jpg"} // Replace with a placeholder URL if no image is available
                  alt="Category Image"
                  className="img-fluid"
                  style={{ maxWidth: "100px", maxHeight: "100px" }} // Adjust image size here
                />
              </div>
            </div>
            <div className="row mb-3">
              <div className="col-4">
                <h6 className="fw-bold">Slug:</h6>
              </div>
              <div className="col-8">
                <p className="text-primary">{currentCategory?.slug || "N/A"}</p>
              </div>
            </div>
            <div className="row mb-3">
              <div className="col-4">
                <h6 className="fw-bold">SEO Title:</h6>
              </div>
              <div className="col-8">
                <p className="text-primary">
                  {currentCategory?.seo_title || "N/A"}
                </p>
              </div>
            </div>
            <div className="row mb-3">
              <div className="col-4">
                <h6 className="fw-bold">Image Alt Text:</h6>
              </div>
              <div className="col-8">
                <p className="text-primary">
                  {currentCategory?.image_alt || "N/A"}
                </p>
              </div>
            </div>
            <div className="row mb-3">
              <div className="col-4">
                <h6 className="fw-bold">Meta Description:</h6>
              </div>
              <div className="col-8">
                <p className="text-secondary">
                  {currentCategory?.seo_description || "N/A"}
                </p>
              </div>
            </div>
            <div className="row mb-3">
              <div className="col-4">
                <h6 className="fw-bold">Created Date:</h6>
              </div>
              <div className="col-8">
                <p className="text-secondary">
                  {currentCategory?.created || "N/A"}
                </p>
              </div>
            </div>
            <div className="row mb-3">
              <div className="col-4">
                <h6 className="fw-bold">Updated Date:</h6>
              </div>
              <div className="col-8">
                <p className="text-secondary">
                  {currentCategory?.updated || "N/A"}
                </p>
              </div>
            </div>
          </div>
          <div className="modal-footer">
            <button
              type="button"
              className="btn btn-secondary"
              onClick={onClose} // Use onClose function to close the modal
            >
              Close
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ViewCategoryModal;
