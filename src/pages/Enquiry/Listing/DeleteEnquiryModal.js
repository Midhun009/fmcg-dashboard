import React from "react";

const DeleteEnquiryModal = ({ isOpen, onClose, onConfirmDelete }) => {
  const handleDelete = () => {
    onConfirmDelete(); // Call the function to confirm deletion
    onClose(); // Close the modal after confirmation
  };

  if (!isOpen) return null; // If the modal is not open, don't render anything

  return (
    <div className="modal fade show" style={{ display: "block" }} role="dialog">
      <div className="modal-dialog modal-dialog-centered">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title">Confirm Deletion</h5>
            <button
              type="button"
              className="btn-close"
              onClick={onClose}
              aria-label="Close"
            ></button>
          </div>
          <div className="modal-body">
            <p>Are you sure you want to remove this enquiry?</p>
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
              onClick={handleDelete}
            >
              Delete
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DeleteEnquiryModal;
