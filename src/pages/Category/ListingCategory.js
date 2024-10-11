import React, { useState } from "react";

const ListingCategory = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [categories, setCategories] = useState([
    {
      id: "#SK2540",
      name: "Neal Matthews",
      image: "assets/images/product/img-7.png", // Replace with the actual image URL
      slug: "wireless-headphone-black",
      seoTitle: "Wireless Headphone (Black)",
      seoDescription:
        "High-quality wireless headphone with noise cancellation.",
      imageAlt: "Headphone image",
    },
    {
      id: "#SK2541",
      name: "David Warner",
      image: "assets/images/product/img-8.png", // Replace with the actual image URL
      slug: "david-warner",
      seoTitle: "David Warner Headphone",
      seoDescription: "David Warner's exclusive headphone.",
      imageAlt: "David Warner headphone image",
    },
  ]);
  const [selectedCategory, setSelectedCategory] = useState(null); // State for selected category for modal

  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
  };

  const handleViewDetails = (category) => {
    setSelectedCategory(category); // Set the selected category for modal display
  };

  return (
    <div className="page-content">
      <div className="container-fluid">
        {/* start page title */}
        <div className="row">
          <div className="col-12">
            <div className="page-title-box d-sm-flex align-items-center justify-content-between">
              <h4 className="mb-sm-0 font-size-18">Listing Category</h4>
              <div className="page-title-right">
                <ol className="breadcrumb m-0">
                  <li className="breadcrumb-item">
                    <a href="javascript: void(0);">Categories</a>
                  </li>
                  <li className="breadcrumb-item active">Listing Category</li>
                </ol>
              </div>
            </div>
          </div>
        </div>
        {/* end page title */}

        <div className="row">
          <div className="col-12">
            <div className="card">
              <div className="card-body">
                <div className="row mb-2">
                  <div className="col-sm-4">
                    <div className="search-box me-2 mb-2 d-inline-block">
                      <div className="position-relative">
                        <input
                          type="text"
                          className="form-control"
                          placeholder="Search..."
                          value={searchTerm}
                          onChange={handleSearchChange}
                        />
                        <i className="bx bx-search-alt search-icon"></i>
                      </div>
                    </div>
                  </div>
                  <div className="col-sm-8">
                    <div className="text-sm-end">
                      <button
                        type="button"
                        className="btn btn-success btn-rounded waves-effect waves-light mb-2 me-2"
                      >
                        <i className="mdi mdi-download me-1"></i> Export
                      </button>
                      <button
                        type="button"
                        className="btn btn-success btn-rounded waves-effect waves-light mb-2 me-2"
                      >
                        <i className="mdi mdi-upload me-1"></i> Import
                      </button>
                      <button
                        type="button"
                        className="btn btn-success btn-rounded waves-effect waves-light mb-2 me-2"
                        data-bs-toggle="modal"
                        data-bs-target="#addCategoryModal"
                      >
                        <i className="mdi mdi-plus me-1"></i> Add Category
                      </button>
                    </div>
                  </div>
                  {/* end col */}
                </div>

                <div className="table-responsive">
                  <table className="table table-striped table-hover align-middle table-nowrap">
                    <thead className="table-light">
                      <tr>
                        <th style={{ width: "20px" }} className="align-middle">
                          <div className="form-check font-size-16">
                            <input
                              className="form-check-input"
                              type="checkbox"
                              id="checkAll"
                            />
                            <label
                              className="form-check-label"
                              htmlFor="checkAll"
                            ></label>
                          </div>
                        </th>
                        <th className="align-middle">ID</th>
                        <th className="align-middle">Name</th>
                        <th className="align-middle">Image</th>
                        <th className="align-middle">Slug</th>
                        <th className="align-middle">View Details</th>
                        <th className="align-middle">Action</th>
                      </tr>
                    </thead>
                    <tbody>
                      {categories.map((category, index) => (
                        <tr key={index}>
                          <td>
                            <div className="form-check font-size-16">
                              <input
                                className="form-check-input"
                                type="checkbox"
                                id={`orderidcheck${index}`}
                              />
                              <label
                                className="form-check-label"
                                htmlFor={`orderidcheck${index}`}
                              ></label>
                            </div>
                          </td>
                          <td>
                            <a
                              href="javascript:void(0);"
                              className="text-body fw-bold"
                            >
                              {category.id}
                            </a>
                          </td>
                          <td>{category.name}</td>
                          <td>
                            <img
                              src={category.image}
                              alt="Image"
                              className="img-thumbnail"
                              style={{ width: "50px" }}
                            />
                          </td>
                          <td>{category.slug}</td>
                          <td>
                            <button
                              type="button"
                              className="btn btn-primary btn-sm btn-rounded"
                              data-bs-toggle="modal"
                              data-bs-target="#orderdetailsModal"
                              onClick={() => handleViewDetails(category)}
                            >
                              View Details
                            </button>
                          </td>
                          <td>
                            <div className="d-flex gap-3">
                              <a
                                href="javascript:void(0);"
                                className="text-success"
                              >
                                <i className="mdi mdi-pencil font-size-18"></i>
                              </a>
                              <a
                                href="javascript:void(0);"
                                className="text-danger"
                              >
                                <i className="mdi mdi-delete font-size-18"></i>
                              </a>
                            </div>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>

                <ul className="pagination pagination-rounded justify-content-end mb-2">
                  <li className="page-item disabled">
                    <a
                      className="page-link"
                      href="javascript: void(0);"
                      aria-label="Previous"
                    >
                      <i className="mdi mdi-chevron-left"></i>
                    </a>
                  </li>
                  <li className="page-item active">
                    <a className="page-link" href="javascript: void(0);">
                      1
                    </a>
                  </li>
                  <li className="page-item">
                    <a className="page-link" href="javascript: void(0);">
                      2
                    </a>
                  </li>
                  <li className="page-item">
                    <a className="page-link" href="javascript: void(0);">
                      3
                    </a>
                  </li>
                  <li className="page-item">
                    <a className="page-link" href="javascript: void(0);">
                      4
                    </a>
                  </li>
                  <li className="page-item">
                    <a className="page-link" href="javascript: void(0);">
                      5
                    </a>
                  </li>
                  <li className="page-item">
                    <a
                      className="page-link"
                      href="javascript: void(0);"
                      aria-label="Next"
                    >
                      <i className="mdi mdi-chevron-right"></i>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        {/* end row */}

        {/* Modal for Adding a Category */}
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
                  Add New Category
                </h5>
                <button
                  type="button"
                  className="btn-close"
                  data-bs-dismiss="modal"
                  aria-label="Close"
                ></button>
              </div>
              <div className="modal-body">
                <form>
                  <div className="mb-3">
                    <label htmlFor="categoryName" className="form-label">
                      Category Name
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      id="categoryName"
                      placeholder="Enter category name"
                    />
                  </div>
                  <div className="mb-3">
                    <label htmlFor="categoryImage" className="form-label">
                      Image
                    </label>
                    <input
                      type="file"
                      className="form-control"
                      id="categoryImage"
                    />
                  </div>
                  <div className="mb-3">
                    <label htmlFor="slug" className="form-label">
                      Slug
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      id="slug"
                      placeholder="Enter slug"
                    />
                  </div>
                  <div className="mb-3">
                    <label htmlFor="metaTitleField" className="form-label">
                      Meta Title
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      id="metaTitleField"
                      placeholder="Meta title"
                    />
                  </div>
                  <div className="mb-3">
                    <label htmlFor="imageAltField" className="form-label">
                      Image Alt
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      id="imageAltField"
                      placeholder="Image Alt"
                    />
                  </div>
                  <div className="mb-3">
                    <label
                      htmlFor="metaDescriptionField"
                      className="form-label"
                    >
                      Meta Description
                    </label>
                    <textarea
                      className="form-control"
                      id="metaDescriptionField"
                      rows="3"
                      placeholder="Meta Description"
                    ></textarea>
                  </div>
                  <button type="submit" className="btn btn-primary">
                    Add Category
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>

        {/* Modal for Viewing Category Details */}
        <div
          className="modal fade orderdetailsModal"
          id="orderdetailsModal"
          tabIndex="-1"
          role="dialog"
          aria-labelledby="orderdetailsModalLabel"
          aria-hidden="true"
        >
          <div className="modal-dialog modal-dialog-centered" role="document">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title" id="orderdetailsModalLabel">
                  Listing Category Details
                </h5>
                <button
                  type="button"
                  className="btn-close"
                  data-bs-dismiss="modal"
                  aria-label="Close"
                ></button>
              </div>
              <div className="modal-body">
                {selectedCategory && (
                  <div>
                    <div className="d-flex justify-content-between align-items-center">
                      <div>
                        <p className="mb-2">
                          <strong>ID:</strong>{" "}
                          <span className="text-primary">
                            {selectedCategory.id}
                          </span>
                        </p>
                        <p className="mb-4">
                          <strong>Name:</strong>{" "}
                          <span className="text-primary">
                            {selectedCategory.name}
                          </span>
                        </p>
                      </div>
                      <div>
                        <img
                          src={selectedCategory.image}
                          alt="Listing Image"
                          className="img-thumbnail"
                          style={{ width: "100px" }}
                        />
                      </div>
                    </div>

                    <div className="table-responsive mt-4">
                      <table className="table align-middle table-nowrap">
                        <tbody>
                          <tr>
                            <td>
                              <div>
                                <p>
                                  <strong>Slug:</strong>
                                </p>
                                <textarea
                                  className="form-control"
                                  rows="1"
                                  readOnly
                                  value={selectedCategory.slug}
                                ></textarea>

                                <p>
                                  <strong>SEO Title:</strong>
                                </p>
                                <textarea
                                  className="form-control"
                                  rows="1"
                                  readOnly
                                  value={selectedCategory.seoTitle}
                                ></textarea>

                                <p>
                                  <strong>SEO Description:</strong>
                                </p>
                                <textarea
                                  className="form-control"
                                  rows="3"
                                  readOnly
                                  value={selectedCategory.seoDescription}
                                ></textarea>

                                <p>
                                  <strong>Image Alt:</strong>
                                </p>
                                <textarea
                                  className="form-control"
                                  rows="1"
                                  readOnly
                                  value={selectedCategory.imageAlt}
                                ></textarea>
                              </div>
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>
                )}
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
      </div>
      {/* end container-fluid */}
    </div>
  );
};

export default ListingCategory;
