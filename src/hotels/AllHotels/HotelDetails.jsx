import React from 'react';
import { Card, CardBody, CardTitle, Col, Table } from 'reactstrap';
import Rooms from './Rooms';
import Breadcrumb from '../../components/Breadcrumb';

const HotelDetails = () => {
    return (
        <div className='content-wrapper'>
            <div className='content-header'>
                <Breadcrumb route={'Hotel Name'} />
              
                <Col lg="12">
                    <Card>
                        <CardTitle tag="h6" className="border-bottom p-3 mb-0">
                            <i className="bi bi-card-text me-2"> </i>
                            Employee List
                        </CardTitle>
                        <CardBody className="">
                            <Table bordered striped>
                                <thead>
                                    <tr>
                                        <th>#</th>
                                        <th>Name</th>
                                        <th>Email</th>
                                        <th>Address</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <th scope="row">1</th>
                                        <td>Mark</td>
                                        <td>Otto@hotel.com</td>
                                        <td>mdo</td>
                                    </tr>
                                    <tr>
                                        <th scope="row">2</th>
                                        <td>Jacob</td>
                                        <td>Thornton@hotel.com</td>
                                        <td>fat</td>
                                    </tr>
                                    <tr>
                                        <th scope="row">3</th>
                                        <td>Larry</td>
                                        <td>the Bird@hotel.com</td>
                                        <td>twitter</td>
                                    </tr>
                                </tbody>
                            </Table>
                        </CardBody>
                    </Card>
                </Col>
            </div>
            {/* Rooms details */}
            <Rooms />

        </div>
    );
};

export default HotelDetails;