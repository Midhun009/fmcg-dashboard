import React, { useState, useEffect } from "react";
import AddEnquiryModal from "./AddEnquiryModal";
import EditEnquiryModal from "./EditEnquiryModal";
import DeleteEnquiryModal from "./DeleteEnquiryModal";
import DetailModal from "./DetailModal"; // Import the DetailModal

const ProductEnquiry = () => {
  const [enquiries, setEnquiries] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [isAddModalOpen, setAddModalOpen] = useState(false);
  const [isEditModalOpen, setEditModalOpen] = useState(false);
  const [isDeleteModalOpen, setDeleteModalOpen] = useState(false);
  const [isDetailModalOpen, setDetailModalOpen] = useState(false); // State for detail modal
  const [currentEnquiry, setCurrentEnquiry] = useState(null);
  const [loading, setLoading] = useState(true); // Loading state
  const [error, setError] = useState(null); // Error state

  // Dummy data for enquiries
const dummyData = [
  {
    id: 1,
    productName: "Product A",
    personName: "John Doe",
    email: "john.doe@example.com",
    mobile: "+1234567890",
    status: "Approved",
    message: "I would like to know more about this product.",
  },
  {
    id: 2,
    productName: "Product B",
    personName: "Jane Smith",
    email: "jane.smith@example.com",
    mobile: "+0987654321",
    status: "Pending",
    message: "Can you send me more details?",
  },
  {
    id: 3,
    productName: "Product C",
    personName: "Alice Johnson",
    email: "alice.johnson@example.com",
    mobile: "+1231231234",
    status: "Denied",
    message: "I am interested in the specifications.",
  },
  {
    id: 4,
    productName: "Product D",
    personName: "Bob Brown",
    email: "bob.brown@example.com",
    mobile: "+3213214321",
    status: "Approved",
    message: "Is this product available in my region?",
  },
  {
    id: 5,
    productName: "Product E",
    personName: "Charlie White",
    email: "charlie.white@example.com",
    mobile: "+4564564567",
    status: "Pending",
    message: "I have some questions regarding the pricing.",
  },
  {
    id: 6,
    productName: "Product F",
    personName: "Diana Green",
    email: "diana.green@example.com",
    mobile: "+7897897890",
    status: "Approved",
    message: "Looking forward to your response!",
  },
];


  useEffect(() => {
    // Simulate fetching data with a delay
    const fetchEnquiries = () => {
      setTimeout(() => {
        setEnquiries(dummyData);
        setLoading(false); // Set loading to false after fetching data
      }, 1000); // Simulating a 1-second delay
    };

    fetchEnquiries();
  }, []);

  const handleAddEnquiry = (newEnquiry) => {
    setEnquiries([...enquiries, newEnquiry]);
  };

  const handleEditEnquiry = (updatedEnquiry) => {
    setEnquiries(
      enquiries.map((enquiry) =>
        enquiry.id === updatedEnquiry.id ? updatedEnquiry : enquiry
      )
    );
  };

  const handleDeleteEnquiry = (id) => {
    // Remove the enquiry from state
    setEnquiries(enquiries.filter((enquiry) => enquiry.id !== id));
  };

  const openDeleteModal = (enquiry) => {
    setCurrentEnquiry(enquiry);
    setDeleteModalOpen(true);
  };

  const closeDeleteModal = () => {
    setCurrentEnquiry(null);
    setDeleteModalOpen(false);
  };

  const openDetailModal = (enquiry) => {
    setCurrentEnquiry(enquiry);
    setDetailModalOpen(true);
  };

  const closeDetailModal = () => {
    setCurrentEnquiry(null);
    setDetailModalOpen(false);
  };

  if (loading) return <div>Loading...</div>; // Loading indicator
  if (error) return <div>Error: {error}</div>; // Error message

  return (
    <div className="page-content">
      <div className="container-fluid">
        {/* Start page title */}
        <div className="row">
          <div className="col-12">
            <div className="page-title-box d-sm-flex align-items-center justify-content-between">
              <h4 className="mb-sm-0 font-size-18">Product Enquiry</h4>
              <div className="page-title-right">
                <ol className="breadcrumb m-0">
                  <li className="breadcrumb-item">Enquiry</li>
                  <li className="breadcrumb-item active">Products</li>
                </ol>
              </div>
            </div>
          </div>
        </div>
        {/* End page title */}

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
                          onChange={(e) => setSearchTerm(e.target.value)}
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
                        onClick={() => setAddModalOpen(true)}
                      >
                        <i className="mdi mdi-plus me-1"></i> Add Enquiry
                      </button>
                    </div>
                  </div>
                </div>

                <div className="table-responsive">
                  <table className="table align-middle table-nowrap table-check">
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
                        <th className="align-middle">Product Name</th>
                        <th className="align-middle">Person Name</th>
                        <th className="align-middle">Email</th>
                        <th className="align-middle">Mobile</th>
                        <th className="align-middle">Status</th>
                        <th className="align-middle">View Details</th>
                        <th className="align-middle">Action</th>
                      </tr>
                    </thead>
                    <tbody>
                      {enquiries
                        .filter((enquiry) =>
                          enquiry.productName
                            .toLowerCase()
                            .includes(searchTerm.toLowerCase())
                        )
                        .map((enquiry) => (
                          <tr key={enquiry.id}>
                            <td>
                              <div className="form-check font-size-16">
                                <input
                                  className="form-check-input"
                                  type="checkbox"
                                  id={`orderidcheck${enquiry.id}`}
                                />
                                <label
                                  className="form-check-label"
                                  htmlFor={`orderidcheck${enquiry.id}`}
                                ></label>
                              </div>
                            </td>
                            <td>
                              <a
                                href="javascript:void(0);"
                                className="text-body fw-bold"
                              >
                                {enquiry.id}
                              </a>
                            </td>
                            <td>{enquiry.productName}</td>
                            <td>{enquiry.personName}</td>
                            <td>{enquiry.email}</td>
                            <td>{enquiry.mobile}</td>
                            <td>
                              <span
                                className={`badge badge-pill badge-soft-${enquiry.status.toLowerCase()}`}
                              >
                                {enquiry.status}
                              </span>
                            </td>
                            <td>
                              <button
                                type="button"
                                className="btn btn-primary btn-sm btn-rounded"
                                onClick={() => openDetailModal(enquiry)} // Open the detail modal
                              >
                                View Details
                              </button>
                            </td>
                              <td>
                                <div className="d-flex gap-3">
                                  <a
                                    href="javascript:void(0);"
                                    className="text-success"
                                    onClick={() => {
                                      setCurrentEnquiry(enquiry);
                                      setEditModalOpen(true);
                                    }}
                                  >
                                    <i className="mdi mdi-pencil font-size-18"></i>
                                  </a>
                                  <a
                                    href="javascript:void(0);"
                                    className="text-danger"
                                    onClick={() => openDeleteModal(enquiry)}
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
                      href="javascript:void(0);"
                      aria-label="Previous"
                    >
                      <span aria-hidden="true">«</span>
                    </a>
                  </li>
                  <li className="page-item active">
                    <a className="page-link" href="javascript:void(0);">
                      1
                    </a>
                  </li>
                  <li className="page-item">
                    <a className="page-link" href="javascript:void(0);">
                      2
                    </a>
                  </li>
                  <li className="page-item">
                    <a className="page-link" href="javascript:void(0);">
                      3
                    </a>
                  </li>
                  <li className="page-item">
                    <a
                      className="page-link"
                      href="javascript:void(0);"
                      aria-label="Next"
                    >
                      <span aria-hidden="true">»</span>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* Add Enquiry Modal */}
        {isAddModalOpen && (
          <AddEnquiryModal
            isOpen={isAddModalOpen}
            onClose={() => setAddModalOpen(false)}
            onAdd={handleAddEnquiry}
          />
        )}

        {/* Edit Enquiry Modal */}
        {isEditModalOpen && (
          <EditEnquiryModal
            isOpen={isEditModalOpen}
            onClose={() => setEditModalOpen(false)}
            enquiry={currentEnquiry}
            onEdit={handleEditEnquiry}
          />
        )}

        {/* Delete Enquiry Modal */}
        {isDeleteModalOpen && (
          <DeleteEnquiryModal
            isOpen={isDeleteModalOpen}
            onClose={closeDeleteModal}
            enquiry={currentEnquiry}
            onDelete={handleDeleteEnquiry}
          />
        )}

        {/* Detail Modal */}
        {isDetailModalOpen && (
          <DetailModal
            isOpen={isDetailModalOpen}
            onClose={closeDetailModal}
            enquiry={currentEnquiry}
          />
        )}
      </div>
    </div>
  );
};

export default ProductEnquiry;
