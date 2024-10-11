import React, { useState } from "react";

const AddEnquiryModal = ({ isOpen, onClose, onAdd }) => {
  const [formData, setFormData] = useState({
    companyName: "", // Company Name
    personName: "", // Person Name
    email: "", // Email
    mobile: "", // Mobile
    status: "", // Status
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onAdd(formData); // Pass the form data to the parent component
    onClose(); // Close the modal
  };

  if (!isOpen) return null; // If the modal is not open, don't render anything

  return (
    <div className="modal fade show" style={{ display: "block" }} role="dialog">
      <div className="modal-dialog modal-dialog-centered">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title">Add New Enquiry</h5>
            <button
              type="button"
              className="btn-close"
              onClick={onClose}
              aria-label="Close"
            ></button>
          </div>
          <div className="modal-body">
            <form
              onSubmit={handleSubmit}
              className="needs-validation"
              noValidate
            >
              {/* Company Name Field */}
              <div className="mb-3">
                <label className="form-label">Company Name</label>
                <input
                  type="text"
                  name="companyName"
                  className="form-control"
                  placeholder="Enter company name"
                  required
                  onChange={handleChange}
                />
                <div className="invalid-feedback">
                  Please enter a company name.
                </div>
              </div>

              {/* Person Name Field */}
              <div className="mb-3">
                <label className="form-label">Person Name</label>
                <input
                  type="text"
                  name="personName"
                  className="form-control"
                  placeholder="Enter person's name"
                  required
                  onChange={handleChange}
                />
                <div className="invalid-feedback">
                  Please enter a person's name.
                </div>
              </div>

              {/* Email Field */}
              <div className="mb-3">
                <label className="form-label">Email</label>
                <input
                  type="email"
                  name="email"
                  className="form-control"
                  placeholder="Enter email"
                  required
                  onChange={handleChange}
                />
                <div className="invalid-feedback">
                  Please enter a valid email.
                </div>
              </div>

              {/* Mobile Field */}
              <div className="mb-3">
                <label className="form-label">Mobile</label>
                <input
                  type="tel"
                  name="mobile"
                  className="form-control"
                  placeholder="Enter mobile number"
                  required
                  onChange={handleChange}
                />
                <div className="invalid-feedback">
                  Please enter a mobile number.
                </div>
              </div>

              {/* Status Field */}
              <div className="mb-3">
                <label className="form-label">Status</label>
                <select
                  name="status"
                  className="form-select"
                  required
                  onChange={handleChange}
                >
                  <option value="" disabled>
                    Select status
                  </option>
                  <option value="approved">Approved</option>
                  <option value="pending">Pending</option>
                  <option value="denied">Denied</option>
                </select>
                <div className="invalid-feedback">Please select a status.</div>
              </div>

              {/* Submit Button */}
              <div className="modal-footer">
                <button
                  type="button"
                  className="btn btn-secondary"
                  onClick={onClose}
                >
                  Close
                </button>
                <button type="submit" className="btn btn-success">
                  Add Enquiry
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddEnquiryModal;
