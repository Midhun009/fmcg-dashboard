import React, { useState, useEffect } from "react";

const EditCategoryModal = ({ category }) => {
  const [formData, setFormData] = useState({
    name: "",
    image: null,
    slug: "",
    metaTitle: "",
    imageAlt: "",
    metaDescription: "",
  });

  // Update formData when category prop changes
  useEffect(() => {
    if (category) {
      setFormData({
        name: category.name,
        image: null, // Keep image as null or manage separately if needed
        slug: category.slug,
        metaTitle: category.metaTitle || "",
        imageAlt: category.imageAlt || "",
        metaDescription: category.metaDescription || "",
      });
    }
  }, [category]);

  // Handle input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  // Handle file change
  const handleFileChange = (e) => {
    setFormData({ ...formData, image: e.target.files[0] });
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form data submitted:", formData);
    // You can add API call logic here to update the category
  };

  return (
    <div
      className="modal fade"
      id="editCategoryModal"
      tabIndex="-1"
      aria-labelledby="editCategoryModalLabel"
      aria-hidden="true"
    >
      <div className="modal-dialog modal-dialog-centered">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title" id="editCategoryModalLabel">
              Edit Category
            </h5>
            <button
              type="button"
              className="btn-close"
              data-bs-dismiss="modal"
              aria-label="Close"
            ></button>
          </div>
          <div className="modal-body">
            <form
              autoComplete="off"
              className="needs-validation"
              id="editCategoryForm"
              noValidate
              onSubmit={handleSubmit}
            >
              <div className="mb-3">
                <label htmlFor="editCategoryNameField" className="form-label">
                  Category Name
                </label>
                <input
                  type="text"
                  id="editCategoryNameField"
                  name="name"
                  className="form-control"
                  placeholder="Enter category name"
                  required
                  value={formData.name}
                  onChange={handleChange}
                />
                <div className="invalid-feedback">
                  Please enter a category name.
                </div>
              </div>

              <div className="mb-3">
                <label htmlFor="editFormFile" className="form-label">
                  Image
                </label>
                <input
                  className="form-control"
                  type="file"
                  id="editFormFile"
                  onChange={handleFileChange}
                />
                <div className="invalid-feedback">Please upload an image.</div>
                {formData.image && (
                  <div className="mt-2">
                    <strong>Current Image:</strong> {formData.image.name}
                  </div>
                )}
              </div>

              <div className="mb-3">
                <label htmlFor="editSlugField" className="form-label">
                  Slug
                </label>
                <input
                  type="text"
                  id="editSlugField"
                  name="slug"
                  className="form-control"
                  placeholder="Enter slug"
                  required
                  value={formData.slug}
                  onChange={handleChange}
                />
                <div className="invalid-feedback">Please enter a slug.</div>
              </div>

              <div className="mb-3">
                <label htmlFor="editMetaTitleField" className="form-label">
                  Meta Title
                </label>
                <input
                  type="text"
                  id="editMetaTitleField"
                  name="metaTitle"
                  className="form-control"
                  placeholder="Meta title"
                  required
                  value={formData.metaTitle}
                  onChange={handleChange}
                />
                <div className="invalid-feedback">
                  Please enter a meta title.
                </div>
              </div>

              <div className="mb-3">
                <label htmlFor="editImageAltField" className="form-label">
                  Image Alt
                </label>
                <input
                  type="text"
                  id="editImageAltField"
                  name="imageAlt"
                  className="form-control"
                  placeholder="Image alt"
                  required
                  value={formData.imageAlt}
                  onChange={handleChange}
                />
                <div className="invalid-feedback">
                  Please enter an image alt.
                </div>
              </div>

              <div className="mb-3">
                <label
                  htmlFor="editMetaDescriptionField"
                  className="form-label"
                >
                  Meta Description
                </label>
                <textarea
                  id="editMetaDescriptionField"
                  name="metaDescription"
                  className="form-control"
                  rows="3"
                  placeholder="Meta description"
                  value={formData.metaDescription}
                  onChange={handleChange}
                ></textarea>
              </div>

              <div className="modal-footer">
                <button
                  type="button"
                  className="btn btn-secondary"
                  data-bs-dismiss="modal"
                >
                  Close
                </button>
                <button type="submit" className="btn btn-primary">
                  Save changes
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EditCategoryModal;
