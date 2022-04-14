import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
//import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import axios from 'axios';
//import { useParams } from 'react-router-dom';
//import Glyphicon from 'react-bootstrap/lib/Glyphicon';
//import { Glyphicon } from 'react-bootstrap';
//import { Glyphicon } from 'react-bootstrap';
// import { icons } from 'react-icons';
// import { AiFillGift } from "react-icons/ai";
// import {BsFillEyeFill} from "react-icons/bs";
//import { ain } from 'glyphicons';
const ServiceTypeDetails = () => {
    const[responseData, setResponseData] = useState([]);
    //const[responseAddress, setResponseAddress] = useState([]);
    const {id} = useParams(); 
  
    const init = () => {
      axios.get(`http://localhost:8080/admin/getServiceType/${id}`)
        .then((response) => {
          console.log(response.data);
          setResponseData(response.data);
          //setResponseAddress(response.data.address)
         //console.log(response.data.address.city);
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
                <div className="col-md-10">
                    <strong>Information</strong><p></p>
                    <div className="table-responsive">
                    <table className="table table-user-information">
                        <tbody>
                            <tr>        
                                <td>
                                    <strong>
                                        Service Name                                                
                                    </strong>
                                </td>
                                <td class="text-primary">
                                    {responseData.serviceName}    
                                </td>
                            </tr>
                            <tr>    
                                <td>
                                    <strong>
                                       Service Description                                                
                                    </strong>
                                </td>
                                <td className="text-primary">
                                    {responseData.serviceDesciption}    
                                </td>
                            </tr>
                            <tr>        
                                <td>
                                    <strong>
                                        Price                                                
                                    </strong>
                                </td>
                                <td class="text-primary">
                                    {responseData.amount}  
                                </td>
                            </tr>
        
                            <tr>        
                                <td>
                                    <strong>
                                       Discount                                                
                                    </strong>
                                </td>
                                <td className="text-primary">
                                    {responseData.discount} 
                                </td>
                            </tr>                               
                        </tbody>
                    </table>
                    </div>
                </div>
            </div>
        </div>
        <Link to='/admin/serviceTypes' className="btn btn-primary float-right ">Back</Link>
        </div>                               
    )
}

export default ServiceTypeDetails