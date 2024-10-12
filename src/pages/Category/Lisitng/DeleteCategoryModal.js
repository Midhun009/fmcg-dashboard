import React from "react";
import { toast } from "react-toastify"; // Optional: For user feedback

const DeleteCategoryModal = ({ category, onClose, onDelete, visible }) => {
  const handleDelete = async () => {
    if (!category) return; // Ensure category is defined

    try {
      const response = await fetch(
        `http://127.0.0.1:8000/api/listing_category/delete/${category.id}/`,
        {
          method: "DELETE",
        }
      );

      if (!response.ok) {
        throw new Error("Failed to delete the category");
      }

      onDelete(category.id); // Notify parent to remove the category from state
      toast.success("Category deleted successfully!"); // Show success message
      onClose(); // Close the modal after deletion
    } catch (error) {
      console.error("Error deleting category:", error);
      toast.error("Error deleting category. Please try again."); // Show error message
    }
  };

  const handleConfirmDelete = () => {
    handleDelete(); // Call the delete function
  };

  if (!visible) return null; // Do not render the modal if not visible

  return (
    <div
      className="modal fade show"
      style={{ display: "block" }} // Ensure it's displayed as block
      tabIndex="-1"
      aria-labelledby="deleteCategoryModalLabel"
      aria-hidden="true"
    >
      <div className="modal-dialog">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title" id="deleteCategoryModalLabel">
              Confirm Delete
            </h5>
            <button
              type="button"
              className="btn-close"
              onClick={onClose}
            ></button>
          </div>
          <div className="modal-body">
            <div className="alert alert-warning">
              Are you really sure you want to delete this category?
            </div>
          </div>
          <div className="modal-footer">
            <button
              type="button"
              className="btn btn-secondary"
              onClick={onClose}
            >
              Cancel
            </button>
            <button
              type="button"
              className="btn btn-danger"
              onClick={handleConfirmDelete} // Call delete function on confirmation
            >
              Confirm Delete
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DeleteCategoryModal;
