import React, { useState, useEffect } from "react";
import { toast, ToastContainer } from "react-toastify"; // Ensure toast is imported
import "react-toastify/dist/ReactToastify.css";
import {
  getCategories,
  createCategory,
  editCategory,
  deleteCategory,
} from "./api"; // Adjust the import based on your file structure
import AddCategoryModal from "./AddCategoryModal";
import EditCategoryModal from "./EditCategoryModal";
import ViewCategoryModal from "./DetailModal"; // Corrected import name
import DeleteCategoryModal from "./DeleteCategoryModal";

const ListingCategory = () => {
  const [categories, setCategories] = useState([]); // State to hold categories
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [isAddModalVisible, setIsAddModalVisible] = useState(false); // State to manage AddCategoryModal visibility
  const [isEditModalVisible, setIsEditModalVisible] = useState(false); // State for Edit modal visibility
  const [isViewModalVisible, setIsViewModalVisible] = useState(false); // State for View modal visibility
  const [isDeleteModalVisible, setIsDeleteModalVisible] = useState(false);

  // Fetch categories on component mount
  useEffect(() => {
    fetchCategories();
  }, []);

  const fetchCategories = async () => {
    try {
      const data = await getCategories(); // Call the API to get categories
      setCategories(data); // Set the categories state
    } catch (error) {
      console.error("Error fetching categories:", error);
      toast.error("Error fetching categories. Please try again."); // Notify user of the error
    }
  };

  const handleAddCategory = async (newCategory) => {
    // Optimistically update the UI
    setCategories((prevCategories) => [...prevCategories, newCategory]);
    toast.success("Category added successfully!");
    setIsAddModalVisible(false);
    await fetchCategories(); // Ensure the function name is correct
  };

  const handleEditCategory = async (updatedCategory) => {
    // Update the local state to reflect the edit
    setCategories((prevCategories) =>
      prevCategories.map((category) =>
        category.id === updatedCategory.id ? updatedCategory : category
      )
    );
    toast.success("Category updated successfully!");
    setIsEditModalVisible(false);
    await fetchCategories(); // Ensure the function name is correct
  };

  const handleDeleteClick = (category) => {
    setSelectedCategory(category);
    setIsDeleteModalVisible(true); // Set the delete modal to visible
  };

  // Handle deleting a category
  const handleDeleteCategory = (categoryId) => {
    // Remove category from state
    setCategories((prevCategories) =>
      prevCategories.filter((category) => category.id !== categoryId)
    );
   
  };

  const handleEditClick = (category) => {
    setSelectedCategory(category); // Set the selected category for editing
    setIsEditModalVisible(true); // Open the Edit modal
  };

  // Define the handleViewClick function
  const handleViewClick = (category) => {
    setSelectedCategory(category); // Set the selected category for viewing
    setIsViewModalVisible(true); // Open the View modal
  };

  return (
    <div className="page-content">
      <ToastContainer /> {/* Ensure ToastContainer is included */}
      <div className="container-fluid">
        {/* Start Page Title */}
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
                        onClick={() => setIsAddModalVisible(true)} // Open Add Category modal
                      >
                        <i className="mdi mdi-plus me-1"></i> Add Category
                      </button>
                    </div>
                  </div>
                </div>

                <div className="table-responsive">
                  <table className="table table-striped table-hover align-middle table-nowrap">
                    <thead className="table-light">
                      <tr>
                        <th className="align-middle">ID</th>
                        <th className="align-middle">Name</th>
                        <th className="align-middle">Image</th>
                        <th className="align-middle">Slug</th>
                        <th className="align-middle">View Details</th>
                        <th className="align-middle">Action</th>
                      </tr>
                    </thead>
                    <tbody>
                      {categories.map((category) => (
                        <tr key={category.id}>
                          <td>{category.id}</td>
                          <td>{category.name}</td>
                          <td>
                            <img
                              src={category.image}
                              alt={category.name}
                              style={{ width: "50px", height: "50px" }}
                            />
                          </td>
                          <td>{category.slug}</td>
                          <td>
                            <button
                              type="button"
                              className="btn btn-primary"
                              onClick={() => handleViewClick(category)} // Opens the View modal with the selected category
                            >
                              View Category
                            </button>
                          </td>
                          <td>
                            <button
                              type="button"
                              className="btn btn-primary"
                              onClick={() => handleEditClick(category)} // Open Edit modal
                            >
                              Edit
                            </button>
                            <button
                              type="button"
                              className="btn btn-danger"
                              onClick={() => handleDeleteClick(category)} // Open Delete modal
                            >
                              Delete
                            </button>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Add Category Modal */}
      <AddCategoryModal
        visible={isAddModalVisible}
        onClose={() => setIsAddModalVisible(false)}
        onFetchCategories={fetchCategories} // Correctly pass the fetch function
        onAddCategory={handleAddCategory} // Pass the add handler
      />
      {/* Edit Category Modal */}
      {selectedCategory && (
        <EditCategoryModal
          visible={isEditModalVisible}
          onClose={() => setIsEditModalVisible(false)} // Correct handler
          onFetchCategories={fetchCategories} // Ensure this is a function
          categoryToEdit={selectedCategory}
        />
      )}
      {/* View Category Modal */}
      {selectedCategory && (
        <ViewCategoryModal
          visible={isViewModalVisible}
          onClose={() => setIsViewModalVisible(false)}
          category={selectedCategory} // Pass the selected category
        />
      )}
      {/* Delete Category Modal */}
      {selectedCategory && (
        <DeleteCategoryModal
          visible={isDeleteModalVisible}
          onClose={() => setIsDeleteModalVisible(false)} // Close delete modal
          onDelete={() => handleDeleteCategory(selectedCategory.id)} // Call the delete handler with the ID
          category={selectedCategory} // Pass the selected category to the modal
        />
      )}
    </div>
  );
};

export default ListingCategory;
