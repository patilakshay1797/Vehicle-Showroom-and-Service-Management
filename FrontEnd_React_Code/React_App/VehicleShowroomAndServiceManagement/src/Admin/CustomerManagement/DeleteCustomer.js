
import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
const DeleteCustomer = () => {
    const[name, setName] = useState('');
    const[id1,setId1]=useState('');
    const[contactNumber, setContactNumber] = useState('');
    const[emailId, setEmailId] = useState('');
    const[password, setPassword] = useState('');
    const[dateOfRegistration, setDateOfRegistration] = useState('');
    const[city, setCity] = useState('');
    const[state, setState] = useState('');
    const[country, setCountry] = useState('');
    const[zipCode, setZipCode] = useState('');
    const[submitData, setSubmitData] = useState('');
    const { id } = useParams();
    const [status, setStatus] = useState('');

    const deleteCustomer = (e) => {
        e.preventDefault();
        axios.delete(`http://localhost:8080/admin/deleteCustomer/${id}`,
        {
          headers : {
            'Authorization' : 'Bearer ' + localStorage.getItem('JWTtoken')
          }
        })
        .then((res) => {
            console.log(res)
            if(res.status === 200){
                setStatus(<div className="alert alert-success" role="alert">Data Deleted</div>);
            }
            else{
                setStatus(<div className="alert alert-danger" role="alert">Failed to Delete</div>);
            }
        })
        .catch((err) => {
            console.log(err);
        })
    }

        
        const init = () => {
            console.log("hi init");
            axios.get(`http://localhost:8080/admin/getCustomer/${id}`,
            {
              headers : {
                'Authorization' : 'Bearer ' + localStorage.getItem('JWTtoken')
              }
            })
              .then((response) => {
                  console.log(response.data);
                  setName(response.data.name);
                  setEmailId(response.data.emailId);
                  setPassword(response.data.password);
                  setContactNumber(response.data.contactNumber);
                  setCity(response.data.address.city);
                  setState(response.data.address.state);
                  setCountry(response.data.address.country);
                  setZipCode(response.data.address.zipCode);
              })
              .catch((error) => {
                console.log(error);
            })
        }
        useEffect(() => {
            init();
        },[])
    
    
    return(
        <div>
        <div className="container">
            <h3>Confirm Delete Customer from List</h3>
            <hr/>
            {status}
            <form>
                <div className="form-group">
                    <input 
                        type="text" 
                        className="form-control col-4"
                        id="name"
                        defaultValue={name}
                        onChange={(e) => setName(e.target.value)}
                        placeholder="Enter name"
                        readOnly
                    />

                </div>
                <div className="form-group">
                    <input 
                        type="email" 
                        className="form-control col-4"
                        id="emailId"
                        defaultValue={emailId}
                        onChange={(e) => setEmailId(e.target.value)}
                        placeholder="Enter EmailID"
                        readOnly
                    />

                </div>
                <div className="form-group">
                    <input 
                        type="text" 
                        className="form-control col-4"
                        id="password"
                        defaultValue={password}
                        onChange={(e) => setPassword(e.target.value)}
                        placeholder="Enter Password"
                        readOnly
                    />
                </div>
                <div className="form-group">
                    <input 
                        type="text" 
                        className="form-control col-4"
                        id="contactNumber"
                        Value={contactNumber}
                        onChange={(e) => setContactNumber(e.target.value)}
                        placeholder="Enter Contact No"
                        readOnly
                    />
                </div>
                <div className="form-group">
                    <input 
                        type="text" 
                        className="form-control col-4"
                        id="city"
                        defaultValue={city}
                        onChange={(e) => setCity(e.target.value)}
                        placeholder="Enter city"
                        readOnly
                    />
                </div>
                <div className="form-group">
                    <input 
                        type="text" 
                        className="form-control col-4"
                        id="state"
                        defaultValue={state}
                        onChange={(e) => setState(e.target.value)}
                        placeholder="Enter state"
                        readOnly
                    />
                </div>
                <div className="form-group">
                    <input 
                        type="text" 
                        className="form-control col-4"
                        id="country"
                        defaultValue={country}
                        onChange={(e) => setCountry(e.target.value)}
                        placeholder="Enter country"
                        readOnly
                    />
                </div>
                <div className="form-group">
                    <input 
                        type="text" 
                        className="form-control col-4"
                        id="zipCode"
                        defaultValue={zipCode}
                        onChange={(e) => setZipCode(e.target.value)}
                        placeholder="Enter zipCode"
                        readOnly
                    />
                </div>
                <div >
                <button onClick={() => deleteCustomer()}className="btn btn-primary">Confirm Delete</button>
                </div>
            </form>
            <hr className="bg-info width=100%"/>
            {/* <Link to="/admin">Back to List</Link> */}
            <Link to='/admin/customerList' className="btn btn-primary">Back</Link>
        </div>
        </div>
  )
}

export default DeleteCustomer