import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'

const UpdateVehicle = () => {
    const [modelName, setModelName] = useState('');
    const [vehicleNo, setVehicleNo] = useState('');
    const [vehicleType, setType] = useState('');
    const [engineNo, setEnginNumber] = useState('');
    const [chassisNo, setChassisNo] = useState('');
    const [price, setPrice] = useState('');
    const [data, setData] = useState([]);
    const [sendData, setSendData] = useState([]);
    const [msg, setMsg] = useState('');
    const { id } = useParams();



    const updateVehicle = (e) => {
        e.preventDefault();
        const dataTOSend = {
            "chassisNo": data.chassisNo,
            "engineNo": engineNo,
            "modelName": modelName,
            "vehicleNo": vehicleNo,
            "vehicleType": vehicleType,
            "color": data.color,
            "price": price,
            "bookedStatus": data.bookedStatus,
            "purchasedStatus": data.purchasedStatus,
            "customer": data.customer,
            "dateOfBooking": data.dateOfBooking,
            "dateOfPurchase": data.dateOfPurchase
        }
        axios.put("http://localhost:8080/admin/updateVehicle", dataTOSend,
            {
                headers: {
                    'Authorization': 'Bearer ' + localStorage.getItem('JWTtoken')
                }
            }
        )
            .then((response) => {
                console.log(response);
                setMsg(<div className='alert alert-success' role="alert">Data Updated</div>)
            })
            .catch((error) => {
                console.log(error);
                setMsg(<div className='alert alert-danger' role="alert">Failed To Update Data</div>)
            })
    }

    const init = () => {
        axios.get(`http://localhost:8080/admin/getVehicle/${id}`,
            {
                headers: {
                    'Authorization': 'Bearer ' + localStorage.getItem('JWTtoken')
                }
            }
        )
            .then((response) => {
                console.log(response.data);
                setData(response.data);
            })
    }

    useEffect(() => {
        init();
    }, [])
    return (
        <div>
            <div className="container">
                <h3>Update Vehicle Details</h3>
                <hr />
                {msg}
                <form>
                    <div className="form-group">
                        <input
                            type="text"
                            className="form-control col-4"
                            id="modelName"
                            defaultValue={data.modelName}
                            onChange={(e) => setModelName(e.target.value)}
                            placeholder="Enter Model Name"
                        />

                    </div>
                    <div className="form-group">
                        <input
                            type="text"
                            className="form-control col-4"
                            id="vehicleNo"
                            defaultValue={data.vehicleNo}
                            onChange={(e) => setVehicleNo(e.target.value)}
                            placeholder="Enter Regestration Number"
                        />

                    </div>
                    <div className="form-group">
                        <input
                            type="text"
                            className="form-control col-4"
                            id="vehicleType"
                            defaultValue={data.vehicleType}
                            onChange={(e) => setType(e.target.value)}
                            placeholder="Enter Type"
                        />
                    </div>
                    <div className="form-group">
                        <input
                            type="text"
                            className="form-control col-4"
                            id="engineNo"
                            defaultValue={data.engineNo}
                            onChange={(e) => setEnginNumber(e.target.value)}
                            placeholder="Enter Engine Number"
                        />
                    </div>
                    <div className="form-group">
                        <input
                            type="text"
                            className="form-control col-4"
                            id="chassisNo"
                            Value={data.chassisNo}
                            //onChange={(e) => setChassisNumber(e.target.value)}
                            placeholder="Enter Chassis Number"
                            //disabled
                            readOnly
                        />
                    </div>
                    <div className="form-group">
                        <input
                            type="text"
                            className="form-control col-4"
                            id="price"
                            defaultValue={data.price}
                            onChange={(e) => setPrice(e.target.value)}
                            placeholder="Enter Entry Date"
                        />
                    </div>
                    <div >
                        <button onClick={() => updateVehicle()} className="btn btn-primary">Update</button>

                    </div>
                </form>
                <hr />
                <Link to='/admin/vehicleList' className="btn btn-primary">Back to Vehicle List</Link>
            </div>
        </div>
    )
}

export default UpdateVehicle