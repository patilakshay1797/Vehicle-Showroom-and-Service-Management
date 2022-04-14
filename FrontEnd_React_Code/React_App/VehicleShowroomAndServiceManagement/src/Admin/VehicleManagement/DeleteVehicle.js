import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import { useNavigate } from 'react-router-dom';

const DeleteVehicle = () => {
    const [modelName, setModelName] = useState('');
    const [vehicleNo, setVehicleNo] = useState('');
    const [vehicleType, setType] = useState('');
    const [engineNo, setEnginNumber] = useState('');
    const [chassisNo, setChassisNo] = useState('');
    const [price, setPrice] = useState('');
    const [status, setStatus] = useState('');
    const { id } = useParams();
    const [data, setData] = useState();
    const navigate = useNavigate();
    const [msg, setMsg] = useState();
    const deleteVehicle = () => {
        axios.delete(`http://localhost:8080/admin/deleteVehicle/${id}`,
        {
          headers : {
            'Authorization' : 'Bearer ' + localStorage.getItem('JWTtoken')
          }
        }
        )
            .then((res) => {
                console.log(res)
                if(res.status === 200){
                    setMsg(<div className='alert alert-success' role="alert">Delete Successful</div>);
                    navigate('/admin');
                }
                else{
                    setStatus("delete failed");
                    setMsg(<div className='alert alert-danger' role="alert">Delete Failed</div>);
                }
            })
            .catch((err) => {
                console.log(err);
            })
    }
    const init = () => {
        axios.get(`http://localhost:8080/admin/getVehicle/${id}`,
        {
          headers : {
            'Authorization' : 'Bearer ' + localStorage.getItem('JWTtoken')
          }
        })
          .then((response) => {
              console.log(response.data);
              setModelName(response.data.modelName);
              setVehicleNo(response.data.vehicleNo);
              setType(response.data.vehicleType);
              setEnginNumber(response.data.engineNo);
            //   setChassisNo(response.data.engineNo);
              setChassisNo(response.data.chassisNo);
              setPrice(response.data.price);
              console.log(modelName);
              setData(response.data);
             
          })
          .catch((error) => {
                console.log(error);
               // setMsg("Data Deletion failed")
          })
    }
  
    useEffect(() => {
        init();
    },[])

  return (
    <div>
        {status}
        <div className="container">
        <h3>Confirm Delete Vehicle from List</h3>
        <hr/>
        {msg}
        {/* <form> */}
            <div className="form-group">
                <input 
                    type="text" 
                    className="form-control col-4"
                    id="modelName"
                    value={modelName}
                    placeholder="Model Name"
                    readOnly
                />

            </div>
            <div className="form-group">
                <input 
                    type="text" 
                    className="form-control col-4"
                    id="vehicleNo"
                    value={vehicleNo}
                    placeholder="Regestration Number"
                    readOnly
                />

            </div>
            <div className="form-group">
                <input 
                    type="text" 
                    className="form-control col-4"
                    id="vehicleType"
                    value={vehicleType}
                    placeholder="Type"
                    readOnly
                />
            </div>
            <div className="form-group">
                <input 
                    type="text" 
                    className="form-control col-4"
                    id="engineNo"
                    value={engineNo}
                    placeholder="Engine Number"
                    readOnly
                />
            </div>
            <div className="form-group">
                <input 
                    type="text" 
                    className="form-control col-4"
                    id="chassisNo"
                    value={chassisNo}
                    placeholder="Chassis Number"
                    readOnly
                />
            </div>
            <div className="form-group">
                <input 
                    type="text" 
                    className="form-control col-4"
                    id="price"
                    value={price}
                    placeholder="Price"
                    readOnly
                />
            </div>
            <div >
                <button onClick={() => deleteVehicle()}className="btn btn-primary">Confirm Delete</button>
                
            </div>
        {/* </form> */}
        <hr/>
        <Link to='/admin/vehicleList' className="btn btn-primary">Back to Admin Home</Link>
    </div>
    </div>
  )
}

export default DeleteVehicle