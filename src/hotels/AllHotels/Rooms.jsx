import React from 'react';
import { Card, CardBody, CardTitle, Col, Table } from 'reactstrap';

const Room = () => {
    // Sample data
    const rooms = [
        {
            id: 1,
            type: 'Single',
            number: 201,
            rent: 1000,
            description: '1 bed Single room',
        },
        {
            id: 2,
            type: 'Double',
            number: 302,
            rent: 1500,
            description: '2 bed Double room',
        },
        {
            id: 3,
            type: 'Single',
            number: 203,
            rent: 900,
            description: '1 bed Single room',
        },
        {
            id: 4,
            type: 'Double',
            number: 401,
            rent: 1800,
            description: '2 bed Double room',
        },
        {
            id: 5,
            type: 'Triple',
            number: 505,
            rent: 2200,
            description: '3 bed Triple room',
        },
    ];

    return (
        <div >
            <Col lg="12">
                <Card>
                    <CardTitle tag="h6" className="border-bottom p-3 mb-0">
                        <i className="bi bi-card-text me-2"> </i>
                        Rooms
                    </CardTitle>
                    <CardBody className="">
                        <Table bordered>
                            <thead>
                                <tr>
                                    <th>#</th>
                                    <th>Types of Rooms</th>
                                    <th>Room Number</th>
                                    <th>Rent</th>
                                    <th>Description</th>
                                </tr>
                            </thead>
                            <tbody>
                                {rooms.map((room) => (
                                    <tr key={room.id}>
                                        <th scope="row">{room.id}</th>
                                        <td>{room.type}</td>
                                        <td>{room.number}</td>
                                        <td>{room.rent}</td>
                                        <td>{room.description}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </Table>
                    </CardBody>
                </Card>
            </Col>
        </div>
    );
};

export default Room;
