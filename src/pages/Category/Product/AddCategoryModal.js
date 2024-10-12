import React from "react";

const AddCategoryModal = ({ onClose }) => {
  return (
    <div
      className="modal fade"
      id="addCategoryModal"
      tabIndex="-1"
      aria-labelledby="addCategoryModalLabel"
      aria-hidden="true"
    >
      <div className="modal-dialog modal-dialog-centered">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title" id="addCategoryModalLabel">
              Add Category
            </h5>
            <button
              type="button"
              className="btn-close"
              data-bs-dismiss="modal"
              aria-label="Close"
              onClick={onClose}
            ></button>
          </div>
          <div className="modal-body">
            <form
              id="addCategoryForm"
              autoComplete="off"
              className="needs-validation"
              novalidate
            >
              <div className="mb-3">
                <label htmlFor="categoryNameField" className="form-label">
                  Category Name
                </label>
                <input
                  type="text"
                  id="categoryNameField"
                  className="form-control"
                  placeholder="Enter category name"
                  required
                />
                <div className="invalid-feedback">
                  Please enter a category name.
                </div>
              </div>

              <div className="mb-3">
                <label htmlFor="formFile" className="form-label">
                  Image
                </label>
                <input
                  className="form-control"
                  type="file"
                  id="formFile"
                  required
                />
                <div className="invalid-feedback">Please upload an image.</div>
              </div>

              <div className="mb-3">
                <label htmlFor="slugField" className="form-label">
                  Slug
                </label>
                <input
                  type="text"
                  id="slugField"
                  className="form-control"
                  placeholder="Enter slug"
                  required
                />
                <div className="invalid-feedback">Please enter a slug.</div>
              </div>

              <div className="mb-3">
                <label htmlFor="metaTitleField">Meta Title</label>
                <input
                  id="metaTitleField"
                  name="metaTitle"
                  type="text"
                  className="form-control"
                  placeholder="Meta title"
                  required
                />
                <div className="invalid-feedback">
                  Please enter a meta title.
                </div>
              </div>

              <div className="mb-3">
                <label htmlFor="imageAltField">Image Alt</label>
                <input
                  id="imageAltField"
                  name="imageAlt"
                  type="text"
                  className="form-control"
                  placeholder="Image Alt"
                  required
                />
                <div className="invalid-feedback">
                  Please enter an image alt text.
                </div>
              </div>

              <div className="mb-3">
                <label htmlFor="metaDescriptionField">Meta Description</label>
                <textarea
                  className="form-control"
                  id="metaDescriptionField"
                  rows="5"
                  placeholder="Meta Description"
                  required
                ></textarea>
                <div className="invalid-feedback">
                  Please enter a meta description.
                </div>
              </div>
            </form>
          </div>
          <div className="modal-footer">
            <button
              type="button"
              className="btn btn-secondary"
              data-bs-dismiss="modal"
              onClick={onClose}
            >
              Close
            </button>
            <button
              type="submit"
              className="btn btn-primary"
              form="addCategoryForm"
            >
              Add Category
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddCategoryModal;
