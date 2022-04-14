import React, { useState } from 'react'
//import { useState } from "react";
import { Link} from "react-router-dom";
import axios from "axios";
const AddServiceTypeDetails = () => {
  
    const[amount,setAmount]=useState('');
    const[discount,setDiscount]=useState('');
    const[serviceName,setServiceName]=useState('');
    
    const[serviceDesciption,setServiceDesciption]=useState('');
    const[submitData, setSubmitData] = useState('');

    const saveServiceType = (e) => {
        e.preventDefault();
        var today=new Date();
        const serviceType = {
            'id':100000,
            'amount':amount,
            'discount':discount,
            'serviceName':serviceName,
            'serviceDesciption':serviceDesciption,
            'bookService':null
        };
    

        axios.post("http://localhost:8080/admin/addServiceType",serviceType,
        {
            headers : {
              'Authorization' : 'Bearer ' + localStorage.getItem('JWTtoken')
            }
          })
            .then((Response) => {
                
                if(Response.status === 202){
                    console.log(Response.status,"ServiceType added successfully...");
                    setSubmitData("Data Saved");
                }
                else{
                    setSubmitData("Error in Data Saving");
                }
            })
            .catch((error) => {
                console.log(error);
            })
        }
    return(
        <div>
        <div className="container">
            <h3>Add Service Type</h3>
            <hr/>
            <h4>{submitData}</h4>
            <form>
                <div className="form-group">
                    <input 
                        type="text" 
                        className="form-control col-4"
                        id="serviceName"
                        value={serviceName}
                        onChange={(e) => setServiceName(e.target.value)}
                        placeholder="Enter Service Type name"
                    />

                </div>
                <div className="form-group">
                    <textarea 
                        //type="" 
                        className="form-control col-4"
                        id="serviceDesciption"
                        value={serviceDesciption}
                        onChange={(e) => setServiceDesciption(e.target.value)}
                        placeholder="Enter Service Description"
                    />

                </div>
                <div className="form-group">
                    <input 
                        type="number" 
                        className="form-control col-4"
                        id="amount"
                        value={amount}
                        onChange={(e) => setAmount(e.target.value)}
                        placeholder="Enter Price of Service"
                    />
                </div>
                <div className="form-group">
                    <input 
                        type="number" 
                        className="form-control col-4"
                        id="discount"
                        value={discount}
                        onChange={(e) => setDiscount(e.target.value)}
                        placeholder="Enter Discount %"
                    />
                </div>
              
                <div >
                    <button onClick={(e) => saveServiceType(e)} className="btn btn-primary">ADD Service Type Details</button>
                </div>
            </form>
            <hr className="bg-info width=100%"/>
            {/* <Link to="/admin">Back to List</Link> */}
            <Link to='/admin/servicesList/serviceTypes' className="btn btn-primary">Back</Link>
        </div>
        </div>
    )
  
}

export default AddServiceTypeDetails