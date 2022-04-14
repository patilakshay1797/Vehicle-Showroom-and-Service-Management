import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Link, useParams, useNavigate } from 'react-router-dom'
import DatePicker from "react-datepicker";



const BookService = (props) => {

    //const[name, setName] = useState('');
    //const[cost, setCost] = useState('');
    //const[ServiceInclude, setServiceInclude] = useState('');
    const [startDate, setStartDate] = useState(new Date());
    const [slist, setSlist] = useState([]);
    const [customerName, setCustomerName] = useState('');
    const [vehicleNo, setVehicleNo] = useState('');
    const [modelName, setModelName] = useState('');
    const [kmsDriven, setkmsDriven] = useState('');
    const [serviceBookingDate, setServiceBookingDate] = useState('');
    const [servicingDate, setServicingDate] = useState(new Date());
    const [sevicesincluded, setSevicesincluded] = useState('');
    const [Select, setSelect] = useState(true);
    const navigate = useNavigate();
    const [msg, setMsg] = useState();
    const [userId, setUserId] = useState();
    const customerId = parseInt(localStorage.getItem("userId"));
    const saveService = (e) => {
        // e.preventDefault();
        //console.log(localStorage.getItem("JWTtoken"));
        //console.log(localStorage.getItem("userId"));
        setUserId(localStorage.getItem("userId"));
        const serviceDetails = {
            "vehicleNo": vehicleNo,
            "customerName": customerName,
            "customerId": customerId,
            "modelName": modelName,
            "kmsDriven": kmsDriven,
            "serviceBookingDate": new Date(),
            "servicingDate": servicingDate
        }
        console.log(serviceDetails);

        axios.post('http://localhost:8080/customer/addService', serviceDetails,
            {
                headers: {
                    'Authorization': 'Bearer ' + localStorage.getItem('JWTtoken')
                }
            })
            .then((response) => {
                console.log(response);
                setMsg("Service Booked for date ", servicingDate, " please reach to servicing center for servicing")
            })
            .catch((error) => {
                console.log(error);
            })

    }

    const init = () => {
        // axios.get(`http://localhost:8080/admin/stypeList`)
        //     .then((response) => {
        //         console.log(response.data);
        //         setSlist(response.data);
        //     })
        //     .catch((error) => {
        //         console.log(error);
        //     })
        //setUserId(localStorage.setItem("userId"));
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
                    {/* <div className="alert alert-success" role="alert"> */}
                    {msg}  

                {/*      */}
                        
                        <strong>Information</strong><p></p>
                        <div className="row">
                            <div className='col-md-3'>
                                <div className='float-left mt-3'>
                                    <h6><strong>Customer Name :</strong></h6>
                                </div>
                                <div className='float-left mt-4'>
                                    <h6><strong>Vehicle Registration Number :</strong></h6>
                                </div>
                                <div className='float-left mt-4'>
                                    <h6><strong>Vehicle Model Name :</strong></h6>
                                </div>
                                <div className='float-left mt-4'>
                                    <h6><strong>Vehicle Kms Driven :</strong></h6>
                                </div>
                                <div className='float-left mt-4'>
                                    <h6><strong>Select Servicing Date :</strong></h6>
                                </div>
                            </div>
                            <div className='col-md-4'>
                                <div className='form-group'>
                                    <input
                                        type="text"
                                        className="form-control"
                                        id="customerName"
                                        value={customerName}
                                        onChange={(e) => setCustomerName(e.target.value)}
                                        placeholder="Enter Customer Name."
                                        required
                                    />
                                </div>
                                <div className='form-group'>
                                    <input
                                        type="text"
                                        className="form-control"
                                        id="vehicleNo"
                                        value={vehicleNo}
                                        onChange={(e) => setVehicleNo(e.target.value)}
                                        placeholder="Enter Vehicle Registration No."
                                        required
                                    />
                                </div>
                                <div className='form-group'>
                                    <input
                                        type="text"
                                        className="form-control"
                                        id="modelName"
                                        value={modelName}
                                        onChange={(e) => setModelName(e.target.value)}
                                        placeholder="Enter Model Name."
                                        required
                                    />
                                </div>
                                <div className='form-group'>
                                    <input
                                        type="text"
                                        className="form-control"
                                        id="kmsDriven"
                                        value={kmsDriven}
                                        onChange={(e) => setkmsDriven(e.target.value)}
                                        placeholder="Enter Kms Driven."
                                        required
                                    />
                                </div>
                                <div className='form-group'>
                                    <input
                                        type="date"
                                        className="form-control"
                                        id="servicingDate"
                                        min={new Date().toISOString().split('T')[0]}
                                        value={servicingDate}
                                        onChange={(e) => setServicingDate(e.target.value)}
                                        placeholder="Enter Servicing Date."
                                        required
                                    />
                                </div>
                            </div>
                           
                        </div>
                    </div>
                </div>
            </div>
            <hr />
            <div className='row'>
                <div className='col-6'>
                    <button onClick={() => saveService()} className="btn btn-primary">Book Service</button>
                </div>
                <div className='col-6'>
                {/* <Link to='/admin/servicesList' className="btn btn-primary float-right ">Back</Link> */}
                <button className='btn btn-primary float-left' onClick={() => navigate(-1)}>Back</button>
                </div>
            </div>
        </div>

    )
}

export default BookService