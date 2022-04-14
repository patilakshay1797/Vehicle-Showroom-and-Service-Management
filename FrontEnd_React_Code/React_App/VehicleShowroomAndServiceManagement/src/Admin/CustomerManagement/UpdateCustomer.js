import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import { useEffect } from 'react';

const UpdateCustomer = () => {

    const [name, setName] = useState('');
    const [id1, setId1] = useState('');
    const [contactNumber, setContactNumber] = useState('');
    const [emailId, setEmailId] = useState('');
    const [password, setPassword] = useState('');
    const [dateOfRegistration, setDateOfRegistration] = useState('');
    const [address, setAddress] = useState([]);
    const [data, setData] = useState([]);
    const [city, setCity] = useState('');
    const [state, setState] = useState('');
    const [country, setCountry] = useState('');
    const [zipCode, setZipCode] = useState('');
    const [submitData, setSubmitData] = useState('');
    const { id } = useParams();

    const updateCustomer = (e) => {
        e.preventDefault();
        var today = new Date();
        const dataTOSend = {
            'id': id1,
            'name': name,
            'emailId': emailId,
            'password': password,
            'contactNumber': contactNumber,
            'dateOfRegistration': today,
            'address': {
                'city': city,
                'state': state,
                'country': country,
                'zipCode': zipCode
            }
        };
        axios.put("http://localhost:8080/admin/updateCustomer", dataTOSend,
            {
                headers: {
                    'Authorization': 'Bearer ' + localStorage.getItem('JWTtoken')
                }
            })
            .then((response) => {
                console.log(response);
                setSubmitData(<div className="alert alert-success" role="alert">Data Updated</div>);

            })
            .catch((error) => {
                console.log(error);
                setSubmitData(<div className="alert alert-danger" role="alert">Data Failed to update</div>);
            })
    }


    const init = () => {
        console.log("hi init");
        axios.get(`http://localhost:8080/admin/getCustomer/${id}`,
            {
                headers: {
                    'Authorization': 'Bearer ' + localStorage.getItem('JWTtoken')
                }
            })
            .then((response) => {
                console.log(response.data);
                setId1(response.data.id)
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
    }, [])

    return (
        <div>
            <div className="container">
                <h3>Update Customer</h3>
                <hr />
                {submitData}
                <form>
                    <div className="form-group">
                        <input
                            type="text"
                            className="form-control col-4"
                            id="name"
                            defaultValue={name}
                            onChange={(e) => setName(e.target.value)}
                            placeholder="Enter name"
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
                        />
                    </div>
                    <div className="form-group">
                        <input
                            type="text"
                            className="form-control col-4"
                            id="contactNumber"
                            defaultValue={contactNumber}
                            onChange={(e) => setContactNumber(e.target.value)}
                            placeholder="Enter Contact No"
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
                        />
                    </div>
                    <div >
                        <button onClick={(e) => updateCustomer(e)} className="btn btn-primary">Update</button>
                    </div>
                </form>
                <hr className="bg-info width=100%" />
                {/* <Link to="/admin">Back to List</Link> */}
                <Link to='/admin/customerList' className="btn btn-primary">Back</Link>
            </div>
        </div>
    )
}

export default UpdateCustomer