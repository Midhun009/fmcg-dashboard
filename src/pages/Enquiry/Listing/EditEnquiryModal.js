import React, { useState, useEffect } from "react";

const EditEnquiryModal = ({ isOpen, onClose, enquiry, onEditEnquiry }) => {
  const [formData, setFormData] = useState({
    companyName: "",
    personName: "",
    email: "",
    mobile: "",
    subject: "",
    message: "",
    status: "",
  });

  useEffect(() => {
    if (enquiry) {
      setFormData(enquiry);
    }
  }, [enquiry]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onEditEnquiry(formData);
    onClose();
  };

  if (!isOpen) return null; // If the modal is not open, don't render anything

  return (
    <div className="modal fade show" style={{ display: "block" }} role="dialog">
      <div className="modal-dialog modal-dialog-centered">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title">Edit Enquiry</h5>
            <button
              type="button"
              className="btn-close"
              onClick={onClose}
              aria-label="Close"
            ></button>
          </div>
          <div className="modal-body">
            <form
              autoComplete="off"
              className="needs-validation"
              onSubmit={handleSubmit}
              noValidate
            >
              {/* Company Name Field */}
              <div className="mb-3">
                <label htmlFor="editCompanyNameField" className="form-label">
                  Company Name
                </label>
                <input
                  type="text"
                  id="editCompanyNameField"
                  className="form-control"
                  name="companyName"
                  placeholder="Enter company name"
                  value={formData.companyName || ""}
                  onChange={handleChange}
                  required
                />
                <div className="invalid-feedback">
                  Please enter a company name.
                </div>
              </div>

              {/* Person Name Field */}
              <div className="mb-3">
                <label htmlFor="editPersonNameField" className="form-label">
                  Person Name
                </label>
                <input
                  type="text"
                  id="editPersonNameField"
                  className="form-control"
                  name="personName"
                  placeholder="Enter person's name"
                  value={formData.personName || ""}
                  onChange={handleChange}
                  required
                />
                <div className="invalid-feedback">
                  Please enter a person's name.
                </div>
              </div>

              {/* Email Field */}
              <div className="mb-3">
                <label htmlFor="editEmailField" className="form-label">
                  Email
                </label>
                <input
                  type="email"
                  id="editEmailField"
                  className="form-control"
                  name="email"
                  placeholder="Enter email"
                  value={formData.email || ""}
                  onChange={handleChange}
                  required
                />
                <div className="invalid-feedback">
                  Please enter a valid email.
                </div>
              </div>

              {/* Mobile Field */}
              <div className="mb-3">
                <label htmlFor="editMobileField" className="form-label">
                  Mobile
                </label>
                <input
                  type="tel"
                  id="editMobileField"
                  className="form-control"
                  name="mobile"
                  placeholder="Enter mobile number"
                  value={formData.mobile || ""}
                  onChange={handleChange}
                  required
                />
                <div className="invalid-feedback">
                  Please enter a mobile number.
                </div>
              </div>

              {/* Subject Field */}
              <div className="mb-3">
                <label htmlFor="editSubjectField" className="form-label">
                  Subject
                </label>
                <input
                  type="text"
                  id="editSubjectField"
                  className="form-control"
                  name="subject"
                  placeholder="Enter subject"
                  value={formData.subject || ""}
                  onChange={handleChange}
                  required
                />
                <div className="invalid-feedback">Please enter a subject.</div>
              </div>

              {/* Message Field */}
              <div className="mb-3">
                <label htmlFor="editMessageField" className="form-label">
                  Message
                </label>
                <textarea
                  className="form-control"
                  id="editMessageField"
                  rows="5"
                  name="message"
                  placeholder="Enter your message"
                  value={formData.message || ""}
                  onChange={handleChange}
                  required
                ></textarea>
                <div className="invalid-feedback">Please enter a message.</div>
              </div>

              {/* Status Field */}
              <div className="mb-3">
                <label htmlFor="editStatusField" className="form-label">
                  Status
                </label>
                <select
                  id="editStatusField"
                  className="form-select"
                  name="status"
                  value={formData.status || ""}
                  onChange={handleChange}
                  required
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
            </form>
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
              className="btn btn-success"
              onClick={handleSubmit}
            >
              Save
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EditEnquiryModal;
