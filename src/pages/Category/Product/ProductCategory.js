import React, { useState } from "react";
import AddCategoryModal from "./AddCategoryModal";
import EditCategoryModal from "./EditCategoryModal";
import ViewCategoryModal from "./DetailModal"; // Ensure you have the right import for the view modal
import DeleteCategoryModal from "./DeleteCategoryModal";

// Dummy Data
const categories = [
  {
    id: 1,
    name: "Neal Matthews",
    image: "image-url", // Replace with actual image URL
    slug: "neal-matthews",
    createdDate: "2024-10-10",
    updatedDate: "2024-10-11",
    metaTitle: "Neal Matthews Meta Title",
    imageAlt: "Neal Matthews Image Alt",
    metaDescription: "Neal Matthews Meta Description",
  },
  // Add more dummy data as needed
];

const ProductCategory = () => {
  const [selectedCategory, setSelectedCategory] = useState(null);

  const handleEditClick = (category) => {
    setSelectedCategory(category);
  };

  const handleViewClick = (category) => {
    setSelectedCategory(category);
  };

  return (
    <div className="page-content">
      <div className="container-fluid">
        {/* Start Page Title */}
        <div className="row">
          <div className="col-12">
            <div className="page-title-box d-sm-flex align-items-center justify-content-between">
              <h4 className="mb-sm-0 font-size-18">Product Category</h4>
              <div className="page-title-right">
                <ol className="breadcrumb m-0">
                  <li className="breadcrumb-item">
                    <a href="javascript: void(0);">Products</a>
                  </li>
                  <li className="breadcrumb-item active">Product Category</li>
                </ol>
              </div>
            </div>
          </div>
        </div>
        {/* End Page Title */}

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
                        <i className="mdi mdi-plus me-1"></i> Add Product
                      </button>
                    </div>
                  </div>
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
                        <th className="align-middle">Created Date</th>
                        <th className="align-middle">Updated Date</th>
                        <th className="align-middle">View Details</th>
                        <th className="align-middle">Action</th>
                      </tr>
                    </thead>
                    <tbody>
                      {categories.map((category) => (
                        <tr key={category.id}>
                          <td>
                            <div className="form-check font-size-16">
                              <input
                                className="form-check-input"
                                type="checkbox"
                                id={`orderidcheck${category.id}`}
                              />
                              <label
                                className="form-check-label"
                                htmlFor={`orderidcheck${category.id}`}
                              ></label>
                            </div>
                          </td>
                          <td>
                            <a
                              href="javascript:void(0);"
                              className="text-body fw-bold"
                            >
                              #SK{category.id}
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
                          <td>{category.createdDate}</td>
                          <td>{category.updatedDate}</td>
                          <td>
                            <button
                              type="button"
                              className="btn btn-primary btn-sm btn-rounded"
                              data-bs-toggle="modal"
                              data-bs-target="#viewCategoryModal"
                              onClick={() => handleViewClick(category)}
                            >
                              View Details
                            </button>
                          </td>
                          <td>
                            <div className="d-flex gap-3">
                              <a
                                href="javascript:void(0);"
                                className="text-success"
                                onClick={() => handleEditClick(category)}
                                data-bs-toggle="modal"
                                data-bs-target="#editCategoryModal"
                              >
                                <i className="mdi mdi-pencil font-size-18"></i>
                              </a>
                              <a
                                href="javascript:void(0);"
                                className="text-danger"
                                data-bs-toggle="modal"
                                data-bs-target="#deleteCategoryModal"
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
        {/* End Row */}
      </div>
      {/* Modals */}
      <AddCategoryModal />
      <EditCategoryModal category={selectedCategory} />
      <ViewCategoryModal category={selectedCategory} />
      <DeleteCategoryModal />
    </div>
  );
};

export default ProductCategory;
