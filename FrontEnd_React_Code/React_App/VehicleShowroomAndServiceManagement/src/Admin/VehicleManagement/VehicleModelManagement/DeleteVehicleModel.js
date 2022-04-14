import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'

const DeleteVehicleModel = () => {

    const [modelName, setModelName] = useState('');
    const [quantity, setQuantity] = useState('');
    const [segment, setSegment] = useState('');
    const [basePrice, setBasePrice] = useState('');
    const [status, setStatus] = useState('');
    const navigate = useNavigate();
    const { id } = useParams();

    const deleteVehicleModel = () => {
        //e.preventDefault();
        axios.delete(`http://localhost:8080/admin/deleteVehicleModel/${id}`,
        {
          headers : {
            'Authorization' : 'Bearer ' + localStorage.getItem('JWTtoken')
          }
        }
        )
            .then((res) => {
                console.log(res)
                if(res.status === 200){
                    setStatus(<div className='alert alert-success' role="alert">Model Deleted Successfully</div>);
                    //navigate('/admin');
                    setModelName('');
                    setQuantity('');
                    setSegment('');
                    setBasePrice('');
                }
                else{
                    setStatus(<div className='alert alert-success' role="alert">Delete Failed</div>);
                }
            })
            .catch((err) => {
                console.log(err);
            })
    
    }

    const init = () => {
        axios.get(`http://localhost:8080/admin/getVehicleModel/${id}`,
        {
          headers : {
            'Authorization' : 'Bearer ' + localStorage.getItem('JWTtoken')
          }
        })
          .then((response) => {
              console.log(response.data);
              setModelName(response.data.modelName);
              setQuantity(response.data.quantity);
              setSegment(response.data.vehicleSpecification.segment);
              setBasePrice(response.data.basePrice);
              console.log(modelName);
          })
          .catch((error) => {
                console.log(error);
            //    setStatus("Data Deletion failed")
          })
    }
  

    useEffect(() => {
        init();
    }, [])

    return (

        <div>
            
            <div className="container">
                <h3>Confirm Delete Vehicle Model from List</h3>
                <hr />
                {status}
                {/* {msg} */}
                {/* <form> */}
                <div className="form-group">
                    <input
                        type="text"
                        className="form-control col-4"
                        id="modelName"
                        value={modelName}
                        readOnly
                        placeholder="Model Name"
                    />

                </div>
                <div className="form-group">
                    <input
                        type="text"
                        className="form-control col-4"
                        id="quantity"
                        value={quantity}
                        readOnly
                        placeholder="Available number of vehicles"
                    />

                </div>
                <div className="form-group">
                    <input
                        type="text"
                        className="form-control col-4"
                        id="segment"
                        value={segment}
                        readOnly
                        placeholder="segment"
                    />
                </div>
                <div className="form-group">
                    <input
                        type="text"
                        className="form-control col-4"
                        id="basePrice"
                        value={basePrice}
                        readOnly
                        placeholder="Base Price"
                    />
                </div>
               
            </div>
            <div className='col-4'>
            <button className='btn btn-primary float-left ml-2' onClick={() => deleteVehicleModel()}>Confirm Delete Model</button>
            <button className='btn btn-primary float-right ml-2' onClick={() => navigate(-1)}>Back</button>
            </div>
        </div>
    )
}

export default DeleteVehicleModel