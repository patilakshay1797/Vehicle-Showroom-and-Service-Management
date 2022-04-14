import axios from "axios";
import { useState } from "react";
import { Link } from "react-router-dom";
import { useEffect } from "react/cjs/react.development";


const AddVehicle = () => {
    const [model, setModel] = useState('');
    const [vehicleType, setVehicleType] = useState('');
    const [chassisNo, setChassisNo] = useState('');
    const [engineNo, setEngineNo] = useState('');
    const [price, setPrice] = useState('');
    const [color, setColor] = useState('');
    const [selectedFile, setSelectedFile] = useState(null);
    const [submitData, setSubmitData] = useState('');

    const onchangeFile = (e) => {
        setSelectedFile(e.target.files[0]);
        console.log(e.target.files);
    }

    const saveVehicle = (e) => {
        e.preventDefault();
        const data = new FormData();

        const vh1 = {
            'chassisNo': chassisNo,
            'engineNo': engineNo,
            'modelName': model,
            'vehicleType': vehicleType,
            'price': price,
            'color': color
        }
        const strin = JSON.stringify(vh1);
        console.log(selectedFile);
        data.append("vh1", strin);
        data.append("image", selectedFile);
        console.log(strin);
        console.log(data);
        axios.post("http://localhost:8080/admin/addVehicleWithImage", data,
            {
                headers: {
                    'Authorization': 'Bearer ' + localStorage.getItem('JWTtoken'),
                    'Content-Type': `multipart/form-data; boundary=${data._boundary}`,
                }
            },
        )
            .then((Response) => {

                if (Response.status == 201) {
                    console.log(Response.status, "Vehicle added successfully...");
                    setSubmitData(<div className="alert alert-success" role='alert'>Data Added successfully</div>);
                }
                else {
                    setSubmitData(<div className="alert alert-danger" role="alert">Failed To Add</div>);
                }
            })

    }


    return (
        <div className="container">
            <h3>Add Vehicle</h3>
            <hr />
            {submitData}
            <form>
                <div className="form-group">
                    <input
                        type="text"
                        className="form-control col-4"
                        id="chassisNo"
                        value={chassisNo}
                        onChange={(e) => setChassisNo(e.target.value)}
                        placeholder="Enter Chasis No."
                    />

                </div>
                <div className="form-group">
                    <input
                        type="text"
                        className="form-control col-4"
                        id="engineNo"
                        value={engineNo}
                        onChange={(e) => setEngineNo(e.target.value)}
                        placeholder="Enter EngineNo."
                    />

                </div>
                <div className="form-group">
                    <input
                        type="text"
                        className="form-control col-4"
                        id="model"
                        value={model}
                        onChange={(e) => setModel(e.target.value)}
                        placeholder="Enter Model"
                    />
                </div>
                <div className="form-group">
                    <input
                        type="text"
                        className="form-control col-4"
                        id="vehicleType"
                        value={vehicleType}
                        onChange={(e) => setVehicleType(e.target.value)}
                        placeholder="Enter VehicleType"
                    />

                </div>
                <div className="form-group">
                    <input
                        type="number"
                        className="form-control col-4"
                        id="price"
                        value={price}
                        onChange={(e) => setPrice(e.target.value)}
                        placeholder="Enter Price"
                    />

                </div>
                <div className="form-group">
                    <input
                        type="text"
                        className="form-control col-4"
                        id="color"
                        value={color}
                        onChange={(e) => setColor(e.target.value)}
                        placeholder="Enter color"
                    />
                </div>
                <div className="form-group">
                    <input
                        type="file"
                        className="form-control col-4"
                        id="image"
                        name='image'
                        //value={selectedFile}
                        accept="image/*"
                        onChange={(e) => onchangeFile(e)}
                        placeholder="Upload Image"
                    />
                </div>
                <div >
                    <button onClick={(e) => saveVehicle(e)} className="btn btn-primary">Save</button>
                </div>
            </form>
            <hr />
            <Link to="/admin/vehicleList" className="btn btn-primary">Back to Vehicle List</Link>
        </div>
    )
}

export default AddVehicle;