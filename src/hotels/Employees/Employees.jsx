import { Card, CardBody, CardTitle, CardSubtitle, Table } from "reactstrap";
import Breadcrumb from "../../components/Breadcrumb";


const employees = [
    {
        name: "Hanna Gover",
        email: "hgover@gmail.com",
        hotel: "Flexy React",
        address: "pending",


    },
    {
        name: "Hanna Gover",
        email: "hgover@gmail.com",
        hotel: "Lading pro React",
        address: "done",


    },
    {
        name: "Hanna Gover",
        email: "hgover@gmail.com",
        hotel: "Elite React",
        address: "holt",


    },
    {
        name: "Hanna Gover",
        email: "hgover@gmail.com",
        hotel: "Flexy React",
        address: "pending",


    },
    {
        name: "Hanna Gover",
        email: "hgover@gmail.com",
        hotel: "Ample React",
        address: "done",


    },
];

const Employees = () => {
    return (
        <div className='content-wrapper'>
            <div className="content-header">
                <Breadcrumb route={'Employee'} />
                <Card>
                    <CardBody>

                        <Table className="no-wrap mt-3 align-middle" responsive borderless>
                            <thead>
                                <tr>
                                    <th>Employees </th>
                                    <th>Hotel Name</th>
                                    <th>Address</th>

                                </tr>
                            </thead>
                            <tbody>
                                {employees.map((tdata, index) => (
                                    <tr key={index} className="border-top">
                                        <td>
                                            <div className="d-flex align-items-center p-2">

                                                <div className="ms-3">
                                                    <h6 className="mb-0">{tdata.name}</h6>
                                                    <span className="text-muted">{tdata.email}</span>
                                                </div>
                                            </div>
                                        </td>
                                        <td>{tdata.hotel}</td>
                                        <td>
                                            {tdata.address}
                                        </td>

                                    </tr>
                                ))}
                            </tbody>
                        </Table>
                    </CardBody>
                </Card>
            </div>

        </div>
    );
};

export default Employees;
