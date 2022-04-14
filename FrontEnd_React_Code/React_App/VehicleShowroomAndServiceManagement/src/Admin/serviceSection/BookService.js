import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'


const BookService = (props) => {

    //const[name, setName] = useState('');
    //const[cost, setCost] = useState('');
    //const[ServiceInclude, setServiceInclude] = useState('');
    const [slist, setSlist] = useState([]);
    const [customerName, setCustomerName] = useState('');
    const [vehicleNo, setVehicleNo] = useState('');
    const [modelName, setModelName] = useState('');
    const [chassisNo, setChassisNo] = useState('');
    const [serviceBookingDate, setServiceBookingDate] = useState('');
    const [servicingDate, setServicingDate] = useState('');
    const [sevicesincluded, setSevicesincluded] = useState('');
    const [Select, setSelect] = useState(true);
    const saveService = (e) => {
        e.preventDefault();


    }
    const addServiceType = (id) => {

    }
    const deleteServiceType = (id) => {

    }
    const init = () => {
        axios.get(`http://localhost:8080/admin/stypeList`)
            .then((response) => {
                console.log(response.data);
                setSlist(response.data);
            })
            .catch((error) => {
                console.log(error);
            })
    }

    useEffect(() => {
        init();
    }, [])
    return (
        <div className="container bootstrap snippets bootdey bg-white">
            <div className="panel-body inf-content">
                <div className="row">
                    <div className="col-md-3">
                        <p></p>
                    </div>
                    <div className="col-md-12">
                        <strong>Information</strong><p></p>
                        <div className="table-responsive">
                            <table className="table table-user-information">
                                <tbody>
                                    <tr>
                                        <td className="col-md-2">
                                            <strong>
                                                Customer Name
                                            </strong>
                                        </td>
                                        <td class="text-primary col-md-9">
                                            <div className="form-group">
                                                <input
                                                    type="text"
                                                    className="form-control col-4"
                                                    id="customerName"
                                                    value={customerName}
                                                    onChange={(e) => setCustomerName(e.target.value)}
                                                    placeholder="Enter Customer Name."
                                                    required
                                                />

                                            </div>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>
                                            <strong>
                                                Vehicle Registration No
                                            </strong>
                                        </td>
                                        <td className="text-primary">
                                            <div className="form-group">
                                                <input
                                                    type="text"
                                                    className="form-control col-4"
                                                    id="vehicleNo"
                                                    value={vehicleNo}
                                                    onChange={(e) => setVehicleNo(e.target.value)}
                                                    placeholder="Enter Vehicle Registration No."
                                                    required
                                                />
                                            </div>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>
                                            <strong>
                                                Vehicle Model Name
                                            </strong>
                                        </td>
                                        <div className="form-group">
                                            <input
                                                type="text"
                                                className="form-control col-4"
                                                id="modelName"
                                                value={modelName}
                                                onChange={(e) => setModelName(e.target.value)}
                                                placeholder="Enter Model Name."
                                                required
                                            />
                                        </div>
                                    </tr>

                                    <tr>
                                        <td>
                                            <strong>
                                                Vehicle Chassis No
                                            </strong>
                                        </td>
                                        <td className="text-primary">
                                            <div className="form-group">
                                                <input
                                                    type="text"
                                                    className="form-control col-4"
                                                    id="chassisNo"
                                                    value={chassisNo}
                                                    onChange={(e) => setChassisNo(e.target.value)}
                                                    placeholder="Enter Chassis No."
                                                    required
                                                />
                                            </div>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>
                                            <strong>
                                                Date of Servicing
                                            </strong>
                                        </td>
                                        <td className="text-primary">
                                            <div className="form-group">
                                                <input
                                                    type="date"
                                                    className="form-control col-4"
                                                    id="servicingDate"
                                                    value={servicingDate}
                                                    onChange={(e) => setServicingDate(e.target.value)}
                                                    placeholder="Enter Servicing Date."
                                                    required
                                                />
                                            </div>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>
                                            <strong>
                                                Include Services
                                            </strong>
                                        </td>
                                        <td className="text-primary">
                                            <table>
                                                <thead>
                                                    <th>Service Name</th>
                                                    <th>Service Description</th>
                                                    <th>Service charges</th>
                                                    <th>Select</th>
                                                    <th>DeSelect</th>
                                                </thead>
                                                {slist.map((data, idx) => (

                                                    <tbody>
                                                        <tr>
                                                            <td className="text-primary"><h6 >{data.serviceName}</h6></td>

                                                            <td className="text-primary"> <h6 >{data.serviceDesciption}</h6></td>

                                                            <td className="text-primary"> <h6 >{data.amount}</h6></td>

                                                            <td className="text-primary">
                                                                <button onClick={() => addServiceType(data.id)} className="btn btn-primary">Select</button>
                                                            </td>
                                                            <td className="text-primary">
                                                                <button onClick={() => deleteServiceType(data.id)} className="btn btn-primary">DeSelect</button>
                                                            </td>

                                                        </tr>
                                                    </tbody>
                                                ))}
                                            </table>


                                        </td>
                                    </tr>

                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
            <button onClick={() => saveService()} className="btn btn-primary">Proceed to Pay</button>
            <Link to='/admin/servicesList' className="btn btn-primary float-right ">Back</Link>
        </div>

    )
}

export default BookService