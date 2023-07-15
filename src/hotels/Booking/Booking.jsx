import React, { useState } from 'react';
import { Button, Card, CardBody, CardTitle, Table, Modal, ModalHeader, ModalBody } from 'reactstrap';

import Breadcrumb from '../../components/Breadcrumb';
const BookingData = [
  {
    customarName: "Tamim",
    Phone: "01712345678",
    bookingStatus: "checkedIn",
    details: {
      roomNo: ['209', '201'],
      roomType: ['single', 'double', 'triple'],
      total: ["1500", "2000", "2500"],
    },
    discount: '200',
    advance: "1000",
    payable: "300",
    due: "",
    checkIn: "12/07/2023",
    checkOut: "12/07/2023"
  },
  {
    customarName: "Jakir",
    Phone: "01712345678",
    bookingStatus: "checkedOut",
    details: {
      roomNo: ['209', '201'],
      roomType: ['single', 'double'],
      total: ["1500", "2000"],
    },
    discount: '200',
    advance: "1000",
    payable: "300",
    due: "",
    checkIn: "12/07/2023",
    checkOut: "12/07/2023"
  }
];

const Booking = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedBooking, setSelectedBooking] = useState(null);

  const toggleModal = () => {
    setModalOpen(!modalOpen);
  };

  const openModal = (booking) => {
    setSelectedBooking(booking);
    toggleModal();
  };

  return (
    <div className='content-wrapper'>
      <div className="content-header">
        <Breadcrumb route={'Booking'} />

        {/* search-bar */}
        <div className="border mb-2 mx-auto search-bar">
          <input type="text" placeholder="Search..." />
          <button type="submit"><i className="fas fa-search"></i></button>
        </div>

        <Card>

          <CardBody>
            <Table className="no-wrap mt-3 align-middle" responsive>
              <thead>
                <tr>
                  <th>Customer Name</th>
                  <th>Phone No</th>
                  <th>Status</th>
                  <th>Details</th>
                </tr>
              </thead>
              <tbody>
                {BookingData.map((booking, index) => (
                  <tr key={index}>
                    <td>{booking.customarName}</td>
                    <td>{booking.Phone}</td>
                    <td>{booking.bookingStatus}</td>
                    <td>
                      <Button className="btn text-nowrap" color="primary" size="sm" onClick={() => openModal(booking)}>
                        See Details
                      </Button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </Table>
          </CardBody>
        </Card>

        <Modal isOpen={modalOpen} toggle={toggleModal}>
          {selectedBooking && (
            <>
              <ModalHeader toggle={toggleModal}>Booking Details of: {selectedBooking.customarName}</ModalHeader>
              <ModalBody>
                <div>
                  <div className="align-items-center d-flex gap-2 mb-2">
                    <img src="https://cdn-icons-png.flaticon.com/128/3135/3135715.png" width="50px" alt="Customer" />
                    <div>
                      <h5 className="fw-bold">{selectedBooking?.customarName}</h5>
                      <h6>{selectedBooking.Phone}</h6>
                    </div>
                  </div>
                  <div className="my-3">
                    <div className="d-flex justify-content-between px-2">
                      <span>Checkedin Date</span>
                      <span>{selectedBooking.checkIn}</span>
                    </div>
                    <div className="d-flex justify-content-between px-2">
                      <span>Checkedout Date</span>
                      <span>{selectedBooking.checkOut}</span>
                    </div>
                  </div>

                  <div className="p-3 rounded-4 shadow-lg">
                    <table className="table border">
                      <thead>
                        <tr>
                          <th className="border" scope="col">
                            Room
                          </th>
                          <th className="border" scope="col">
                            Type
                          </th>
                          <th className="border" scope="col">
                            Rent
                          </th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td className="border">{selectedBooking.details.roomNo.join(', ')}</td>
                          <td className="border">{selectedBooking.details.roomType.join(', ')}</td>
                          <td className="border">{selectedBooking.details.total.join(', ')}</td>
                        </tr>
                      </tbody>
                    </table>
                    <div>
                      <div className="d-flex justify-content-between px-2">
                        <span>Booking Status</span>
                        <span>{selectedBooking.bookingStatus}</span>
                      </div>
                      <div className="d-flex justify-content-between px-2">
                        <span>Discount</span>
                        <span>{selectedBooking.discount}</span>
                      </div>
                      <div className="d-flex justify-content-between px-2">
                        <span>Advance</span>
                        <span>{selectedBooking.advance}</span>
                      </div>
                    </div>
                  </div>
                </div>
              </ModalBody>
            </>
          )}
        </Modal>
      </div>  </div>
  );
};

export default Booking;
