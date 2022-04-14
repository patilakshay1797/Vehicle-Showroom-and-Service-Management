import axios from "axios";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
//import { Link, useHistory, useParams } from "react-router-dom";
import { useEffect } from "react/cjs/react.development";
//import employeeService from "../services/employee.service";

const AddVehicleModel = () => {
    const [modelName, setModelName] = useState('');
    const [quantity, setQuantity] = useState('');
    const [segment, setSegment] = useState('');
    const [engineCC, setEngineCC] = useState('');
    const [engineCylinderinfo, setEngineCylinderinfo] = useState('');
    const [transmission, setTransmission] = useState('');
    const [seatingCapacity, setSeatingCapacity] = useState('');
    const [mileage, setMileage] = useState('');
    const [fuelTankCapacity, setFuelTankCapacity] = useState('');
    const [selectedFile, setSelectedFile] = useState(null);
    const [price, setPrice] = useState('');
    const star = (<h6 text-danger>*</h6>);
    const navigate = useNavigate();
    const [submitData, setSubmitData] = useState('');

    const onchangeFile = (e) => {
        setSelectedFile(e.target.files[0]);
        console.log(e.target.files);
    }

    useEffect(() => {
        setSubmitData('');
    }, [modelName, quantity, segment, engineCC, engineCylinderinfo, transmission, seatingCapacity, mileage, fuelTankCapacity, selectedFile, price])

    const saveVehicleModel = (e) => {
        e.preventDefault();

        if (modelName == '' || quantity == '' || segment == '' || engineCC == '' || engineCylinderinfo == ''
            || transmission == '' || seatingCapacity == '' || mileage == '' || fuelTankCapacity == ''
            || selectedFile == null || price == '') {
            return setSubmitData(<div className="alert alert-danger" role="alert">All fields are required</div>);
        }

        const data = new FormData();

        const vhmodel1 = {
            'modelName': modelName,
            'quantity': quantity,
            'segment': segment,
            'engineCC': engineCC,
            'engineCylinderinfo': engineCylinderinfo,
            'transmission': transmission,
            'seatingCapacity': seatingCapacity,
            'mileage': mileage,
            'basePrice': price,
            'fuelTankCapacity': fuelTankCapacity

        }
        const strin = JSON.stringify(vhmodel1);
        console.log(selectedFile);
        data.append("vh1", strin);
        data.append("image", selectedFile);

        console.log(strin);
        console.log(data);
        axios.post("http://localhost:8080/admin/addModelWithImage", data,
            {
                headers: {
                    'Authorization': 'Bearer ' + localStorage.getItem('JWTtoken'),
                    'Content-Type': `multipart/form-data; boundary=${data._boundary}`,
                }
            },
        )
            .then((Response) => {

                if (Response.status == 201) {
                    console.log(Response.status, "Vehicle Model added successfully...");
                    setSubmitData(<div className="alert alert-success" role="alert">Data Saved</div>);
                }
                else {
                    setSubmitData(<div className="alert alert-success" role="alert">Error in data Saving</div>);
                }
            })
            .catch((error) => {
                console.log(error)
            })
    }

    return (
        <div className="container">
            <h3>Add Vehicle Model</h3>
            <hr />
            {submitData}
            <form>
                <div className="row">
                    <div className="col-5">
                        <div className="form-group">
                            <input
                                type="text"
                                className="form-control col-10"
                                id="modelName"
                                value={modelName}
                                onChange={(e) => setModelName(e.target.value)}
                                placeholder="Enter Model Name*"
                            />

                        </div>
                        <div className="form-group">
                            <input
                                type="number"
                                className="form-control col-10"
                                id="quantity"
                                value={quantity}
                                onChange={(e) => setQuantity(e.target.value)}
                                placeholder="Enter Quantity*"
                            />

                        </div>
                        <div className="form-group">
                            <input
                                type="text"
                                className="form-control col-10"
                                id="segment"
                                value={segment}
                                onChange={(e) => setSegment(e.target.value)}
                                placeholder="Enter Segment*"
                            />
                        </div>
                        <div className="form-group">
                            <input
                                type="number"
                                className="form-control col-10"
                                id="engineCC"
                                value={engineCC}
                                onChange={(e) => setEngineCC(e.target.value)}
                                placeholder="Enter Engine CC*"
                            />

                        </div>
                        <div className="form-group">
                            <input
                                type="text"
                                className="form-control col-10"
                                id="engineCylinderNos"
                                value={engineCylinderinfo}
                                onChange={(e) => setEngineCylinderinfo(e.target.value)}
                                placeholder="Enter Engine Cylinder info*"
                            />

                        </div>
                        <div className="form-group">
                            <input
                                type="text"
                                className="form-control col-10"
                                id="transmission"
                                value={transmission}
                                onChange={(e) => setTransmission(e.target.value)}
                                placeholder="Enter transmission type*"
                            />
                        </div>
                    </div>
                    <div className="col-5">
                        <div className="form-group">
                            <input
                                type="number"
                                className="form-control col-10"
                                id="fuelTankCapacity"
                                value={fuelTankCapacity}
                                onChange={(e) => setFuelTankCapacity(e.target.value)}
                                placeholder="Enter Fuel Tank Capacity*"
                            />
                        </div>
                        <div className="form-group">
                            <input
                                type="number"
                                className="form-control col-10"
                                id="seatingCapacity"
                                value={seatingCapacity}
                                onChange={(e) => setSeatingCapacity(e.target.value)}
                                placeholder="Enter Seating Capacity*"
                            />
                        </div>
                        <div className="form-group">
                            <input
                                type="number"
                                className="form-control col-10"
                                id="mileage"
                                value={mileage}
                                onChange={(e) => setMileage(e.target.value)}
                                placeholder="Enter mileage*"
                            />
                        </div>
                        <div className="form-group">
                            <input
                                type="number"
                                className="form-control col-10"
                                id="price"
                                value={price}
                                onChange={(e) => setPrice(e.target.value)}
                                placeholder="Enter Base Price*"
                            />
                        </div>
                        <div className="form-group">
                            <input
                                type="file"
                                className="form-control col-10"
                                id="image"
                                name='image'
                                //value={selectedFile}
                                accept="image/*"
                                onChange={(e) => onchangeFile(e)}
                                placeholder="Upload Image*"
                            />
                        </div>
                        <div >
                            <button onClick={(e) => saveVehicleModel(e)} className="btn btn-primary">Save</button>
                        </div>
                    </div>
                </div>
            </form>
            <hr />
            <button className="btn btn-primary" onClick={() => navigate(-1)} >Back to Model List</button>
        </div>
    )
}

export default AddVehicleModel;