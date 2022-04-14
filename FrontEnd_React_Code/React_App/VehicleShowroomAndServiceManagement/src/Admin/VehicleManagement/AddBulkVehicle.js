import axios from 'axios';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const AddBulkVehicle = () => {
    const [submitData, setSubmitData] = useState('');
    const [selectedFile, setSelectedFile] = useState(null);

    const onchangeFile = (e) => {
        setSelectedFile(e.target.files[0]);
        console.log(e.target.files);
    }

    const saveVehicle = (e) => {
        e.preventDefault();
        const data = new FormData();

        data.append("vehicleList", selectedFile);

        axios.post("http://localhost:8080/admin/addBulkVehicles", data,
            {
                headers: {
                    'Authorization': 'Bearer ' + localStorage.getItem('JWTtoken'),
                    'Content-Type': `multipart/form-data; boundary=${data._boundary}`,
                }
            },
        )
            .then((Response) => {

                if (Response.status == 202) {
                    console.log(Response.status, " Vehicle added successfully...");
                    setSubmitData(<div className='alert alert-success' role="alert">Vehicle List Added Successfully</div>);
                }
                else {
                    setSubmitData(<div className='alert alert-danger' role="alert">Failed to Add Vehicle List</div>);
                }
            })
    }

    return (
        <div className='text-center'>
            <h3>Add Vehicle List</h3> <h6>(CSV FILE ONLY)</h6>
            <hr />
            {submitData}
            <form>
                <div className="form-group text-right">
                    <table>
                        <tr>
                            <td className='col-6'>
                                <h5>Upload CSV File with Vehicle list : </h5>
                            </td>
                            <td>
                                <input
                                    type="file"
                                    className="form-control col-12"
                                    id="csvFile"
                                    name='csvFile'
                                    accept=".csv"
                                    onChange={(e) => onchangeFile(e)}
                                    placeholder="Upload CSV file of Vehicle List"
                                />
                            </td>
                            <td className='col-2'>
                                <span>{submitData}</span>
                            </td>
                        </tr>
                    </table>
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

export default AddBulkVehicle