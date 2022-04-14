import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Link, useNavigate, useParams } from 'react-router-dom';

const UpdateVehicleModel = () => {

    const [data, setData] = useState([]);
    const [modelName, setModelName] = useState('');
    const [vehicleSpec, setVehicleSpec] = useState([]);
    const [quantity, setQuantity] = useState('');
    const [basePrice, setBasePrice] = useState('');
    const [engineCC, setEnginCC] = useState('');
    const [fuelCapacity, setFuelCapacity] = useState('');
    const [engineCylinderinfo, setEngineCylinderinfo] = useState('');
    const [mileage, setMileage] = useState('');
    const [seatingCapacity, setSeatingCapacity] = useState('');
    const [transmission, setTransmission] = useState('');
    const [msg, setMsg] = useState("");
    const navigate = useNavigate();
    const { id } = useParams();

    const updateVehicleModel = (e) => {
        e.preventDefault();
        const dataTOSend = {
            "modelName": modelName,
            "quantity": quantity,
            "basePrice": basePrice,
            "engineCC" : engineCC,
            "fuelCapacity" : fuelCapacity,
            "engineCylinderinfo" : engineCylinderinfo,
            "mileage" : mileage,
            "seatingCapacity" :seatingCapacity,
            "transmission" : transmission
        }
        //setSendData(dataTOSend);
        axios.put("http://localhost:8080/admin/updateVehicleModel", dataTOSend,
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
                setMsg(<div className='alert alert-success' role="alert">Failed to update data</div>)
            })
    }

    const init = () => {
        axios.get(`http://localhost:8080/admin/getVehicleModel/${id}`,
            {
                headers: {
                    'Authorization': 'Bearer ' + localStorage.getItem('JWTtoken')
                }
            }
        )
            .then((response) => {
                console.log(response.data);
                setData(response.data);
                setVehicleSpec(response.data.vehicleSpecification);
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
                <div className='row'>
                    <div className='col-md-8'>
                        <form>
                            <div className="form-group">
                                <strong>Model Name :</strong>
                                <input
                                    type="text"
                                    className="form-control col-8"
                                    id="modelName"
                                    value={data.modelName}
                                    //onChange={(e) => setModelName(e.target.value)}
                                    //placeholder="Enter Model Name"
                                    readonly
                                />

                            </div>
                            <div className="form-group">
                            <strong>Available Quantity :</strong>
                                <input
                                    type="text"
                                    className="form-control col-8"
                                    id="quantity"
                                    defaultValue={data.quantity}
                                    onChange={(e) => setQuantity(e.target.value)}
                                    placeholder="Enter Quantity"
                                />

                            </div>
                            <div className="form-group">
                            <strong>Base Price :</strong>
                                <input
                                    type="text"
                                    className="form-control col-8"
                                    id="basePrice"
                                    defaultValue={data.basePrice}
                                    onChange={(e) => setBasePrice(e.target.value)}
                                    placeholder="Enter Base Price"
                                />
                            </div>
                            <div className="form-group">
                            <strong>Engine CC :</strong>
                                <input
                                    type="text"
                                    className="form-control col-8"
                                    id="engineCC"
                                    defaultValue={vehicleSpec.engineCC}
                                    onChange={(e) => setEnginCC(e.target.value)}
                                    placeholder="Enter Engine CC"
                                />
                            </div>
                            <div className="form-group">
                            <strong>Engine Info :</strong>
                                <input
                                    type="text"
                                    className="form-control col-8"
                                    id="engineInfo"
                                    defaultValue={vehicleSpec.engineCylinderinfo}
                                    onChange={(e) => setEngineCylinderinfo(e.target.value)}
                                    placeholder="Enter Engine Cylinder Info"
                                //disabled
                                // readOnly
                                />
                            </div>
                            <div className="form-group">
                            <strong>Fuel Tank Capacity :</strong>
                                <input
                                    type="text"
                                    className="form-control col-8"
                                    id="fuelTankCapacity"
                                    defaultValue={vehicleSpec.fuelTankCapacity}
                                    onChange={(e) => setFuelCapacity(e.target.value)}
                                    placeholder="Enter Fuel Tank Capacity"
                                />
                            </div>
                            <div className="form-group">
                            <strong>Mileage :</strong>
                                <input
                                    type="text"
                                    className="form-control col-8"
                                    id="mileage"
                                    defaultValue={vehicleSpec.mileage}
                                    onChange={(e) => setMileage(e.target.value)}
                                    placeholder="Enter Mileage"
                                />
                            </div>
                            <div className="form-group">
                            <strong>Seating Capacity :</strong>
                                <input
                                    type="text"
                                    className="form-control col-8"
                                    id="seatingCapacity"
                                    defaultValue={vehicleSpec.seatingCapacity}
                                    onChange={(e) => setSeatingCapacity(e.target.value)}
                                    placeholder="Enter Mileage"
                                />
                            </div>
                            <div className="form-group">
                            <strong>Transmission Type :</strong>
                                <input
                                    type="text"
                                    className="form-control col-8"
                                    id="transmission"
                                    defaultValue={vehicleSpec.transmission}
                                    onChange={(e) => setTransmission(e.target.value)}
                                    placeholder="Enter Mileage"
                                />
                            </div>
                            <div >
                                <button onClick={() => updateVehicleModel()} className="btn btn-primary">Update</button>

                            </div>
                        </form>
                    </div>
                </div>
                <hr />
                <button className="btn btn-primary" onClick={() => navigate(-1)}>Back to Vehicle List</button>
            </div>
        </div>
    )
}

export default UpdateVehicleModel