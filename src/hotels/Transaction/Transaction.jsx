import React, { useState } from 'react';
import { Button, Card, CardBody, CardTitle, Table, Modal, ModalHeader, ModalBody, Form, FormGroup, Label, Input } from 'reactstrap';

const Transaction = () => {
    const transactionData = [
        {
            id: 1,
            hotelName: 'Hotel A',
            date: '2023-07-12',
            amount: 1500,
            paymentMethod: 'Credit Card',
            status: 'Paid'
        },
        {
            id: 2,
            hotelName: 'Hotel B',
            date: '2023-07-11',
            amount: 2000,
            paymentMethod: 'Cash',
            status: 'Pending'
        },
        {
            id: 3,
            hotelName: 'Hotel C',
            date: '2023-07-12',
            amount: 2500,
            paymentMethod: 'Credit Card',
            status: 'Paid'
        }
    ];

    const [modalOpen, setModalOpen] = useState(false);
    const [selectedTransaction, setSelectedTransaction] = useState(null);

    const toggleModal = () => {
        setModalOpen(!modalOpen);
    };

    const openModal = (transaction) => {
        setSelectedTransaction(transaction);
        toggleModal();
    };

    const getTodayCollection = () => {
        const today = new Date().toISOString().split('T')[0];
        const todayTransactions = transactionData.filter((transaction) => transaction.date === today);
        const todayCollection = todayTransactions.reduce((total, transaction) => total + transaction.amount, 0);
        return todayCollection;
    };

    return (
        <div  className='content-wrapper'>
            <Card>
                <CardBody>
                    <CardTitle tag="h5">Transaction History</CardTitle>
                    <Table className="no-wrap mt-3 align-middle" responsive>
                        <thead>
                            <tr>
                                <th>ID</th>
                                <th>Hotel Name</th>
                                <th>Date</th>
                                <th>Amount</th>
                                <th>Payment Method</th>
                                <th>Status</th>
                                <th>Details</th>
                            </tr>
                        </thead>
                        <tbody>
                            {transactionData.map((transaction) => (
                                <tr key={transaction.id}>
                                    <td>{transaction.id}</td>
                                    <td>{transaction.hotelName}</td>
                                    <td>{transaction.date}</td>
                                    <td>{transaction.amount}</td>
                                    <td>{transaction.paymentMethod}</td>
                                    <td>{transaction.status}</td>
                                    <td>
                                        <Button className="btn text-nowrap" color="primary" size="sm" onClick={() => openModal(transaction)}>
                                            See Details
                                        </Button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </Table>
                    <div>
                        <p>Today's Collection: {getTodayCollection()}</p>
                    </div>
                </CardBody>
            </Card>

            <Modal isOpen={modalOpen} toggle={toggleModal}>
                {selectedTransaction && (
                    <>
                        <ModalHeader toggle={toggleModal}>Transaction Details (ID: {selectedTransaction.id})</ModalHeader>
                        <ModalBody>
                            <div>
                                <Form>
                                    <FormGroup>
                                        <Label for="hotelName">Hotel Name</Label>
                                        <Input type="text" name="hotelName" id="hotelName" value={selectedTransaction.hotelName} disabled />
                                    </FormGroup>
                                    <FormGroup>
                                        <Label for="date">Date</Label>
                                        <Input type="text" name="date" id="date" value={selectedTransaction.date} disabled />
                                    </FormGroup>
                                    <FormGroup>
                                        <Label for="amount">Amount</Label>
                                        <Input type="text" name="amount" id="amount" value={selectedTransaction.amount} disabled />
                                    </FormGroup>
                                    <FormGroup>
                                        <Label for="paymentMethod">Payment Method</Label>
                                        <Input
                                            type="text"
                                            name="paymentMethod"
                                            id="paymentMethod"
                                            value={selectedTransaction.paymentMethod}
                                            disabled
                                        />
                                    </FormGroup>
                                    <FormGroup>
                                        <Label for="status">Status</Label>
                                        <Input type="text" name="status" id="status" value={selectedTransaction.status} disabled />
                                    </FormGroup>
                                </Form>
                            </div>
                        </ModalBody>
                    </>
                )}
            </Modal>
        </div>
    );
};

export default Transaction;
