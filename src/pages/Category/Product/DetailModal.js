import React from "react";

const ViewCategoryModal = ({ category }) => {
  return (
    <div
      className="modal fade"
      id="viewCategoryModal"
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
              data-bs-dismiss="modal"
              aria-label="Close"
            ></button>
          </div>
          <div className="modal-body">
            <div className="mb-3">
              <h6 className="fw-bold">Category Name:</h6>
              <p className="text-primary">{category?.name || "N/A"}</p>
            </div>
            <div className="mb-3">
              <h6 className="fw-bold">Category Image:</h6>
              <img
                src={category?.image || "placeholder-image-url.jpg"} // Replace with a placeholder URL if no image is available
                alt="Category Image"
                className="img-fluid"
              />
            </div>
            <div className="mb-3">
              <h6 className="fw-bold">Slug:</h6>
              <p className="text-primary">{category?.slug || "N/A"}</p>
            </div>
            <div className="mb-3">
              <h6 className="fw-bold">Meta Title:</h6>
              <p className="text-primary">{category?.metaTitle || "N/A"}</p>
            </div>
            <div className="mb-3">
              <h6 className="fw-bold">Image Alt Text:</h6>
              <p className="text-primary">{category?.imageAlt || "N/A"}</p>
            </div>
            <div className="mb-3">
              <h6 className="fw-bold">Meta Description:</h6>
              <p className="text-secondary">
                {category?.metaDescription || "N/A"}
              </p>
            </div>
            <div className="mb-3">
              <h6 className="fw-bold">Created Date:</h6>
              <p className="text-secondary">{category?.createdDate || "N/A"}</p>
            </div>
            <div className="mb-3">
              <h6 className="fw-bold">Updated Date:</h6>
              <p className="text-secondary">{category?.updatedDate || "N/A"}</p>
            </div>
          </div>
          <div className="modal-footer">
            <button
              type="button"
              className="btn btn-secondary"
              data-bs-dismiss="modal"
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
