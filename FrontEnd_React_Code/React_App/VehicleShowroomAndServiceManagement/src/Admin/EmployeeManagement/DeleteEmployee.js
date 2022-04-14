import React from 'react'
import  { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import { useEffect } from 'react';

const DeleteEmployee = () => {
    const[name, setName] = useState('');
    const[gender, setGender] = useState('');
    const[contactNumber, setContactNumber] = useState('');
    const[departmentName,setDepartmentName]=useState('');
    const[designation,setDesignation]=useState('')
    const[emailId, setEmailId] = useState('');
    const[password, setPassword] = useState('');
    const[dateOfJoining, setDateOfJoining] = useState('');
    const[basicSalary,setBasicSalary]=useState('')
    const[address,setAddress]=useState([]);
    const[city, setCity] = useState('');
    const[state, setState] = useState('');
    const[country, setCountry] = useState('');
    const[zipCode, setZipCode] = useState('');
    const[dateOfLeaving,setDateOfLeaving]=useState('');
    // const history = useHistory();
    // const {id} = useParams();
    const[submitData, setSubmitData] = useState('');
    const[bankname,setBankname]=useState('');
    const[accountNo,setAccountNo]=useState('');
    const[ifscCode,setIfscCode]=useState('');
    const[banklocation,setBanklocation]=useState('');
    //const[submitData, setSubmitData] = useState('');
    const[id1,setId1]=useState('');
    const { id } = useParams();
    const navigate = useNavigate();
    const[status, setStatus] = useState();

    const handleChange = (event) => {
        setGender(event.target.value)
      }
   
    const deleteEmployee = (e) => {
        e.preventDefault();
       
        axios.delete(`http://localhost:8080/admin/deleteEmployee/${id}`,
        {
          headers : {
            'Authorization' : 'Bearer ' + localStorage.getItem('JWTtoken')
          }
        })
        .then((res) => {
            console.log(res)
            if(res.status === 200){
                setStatus(<div className='alert alert-success' role="alert">Delete success</div>);
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
            console.log("hi init");
            axios.get(`http://localhost:8080/admin/getEmployee/${id}`,
            {
              headers : {
                'Authorization' : 'Bearer ' + localStorage.getItem('JWTtoken')
              }
            })
              .then((response) => {
                  console.log(response.data);
                  setId1(response.data.id);
                  setName(response.data.name);
                  setGender(response.data.gender);
                  setDepartmentName(response.data.departmentName);
                  setBasicSalary(response.data.basicSalary);
                  setEmailId(response.data.emailId);
                  setPassword(response.data.password);
                  setDesignation(response.data.designation);
                  setDateOfJoining(response.data.dateOfJoining);
                  setDateOfLeaving(response.data.dateOfLeaving);
                  setContactNumber(response.data.contactNumber);
                  setCity(response.data.address.city);
                  setState(response.data.address.state);
                  setCountry(response.data.address.country);
                  setZipCode(response.data.address.zipCode);
                  setBankname(response.data.bankDetail.name);
                  setAccountNo(response.data.bankDetail.accountNo);
                  setBanklocation(response.data.bankDetail.banklocation);
                  setIfscCode(response.data.bankDetail.ifscCode);
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
            <h3>Confirm Delete Employee</h3>
            <hr/>
            {submitData}
            <form>
                <div className="">
                <div className="row">
                <div className="form-group col-sm-6">
                    <input 
                        type="text" 
                        className="form-control col-8"
                        id="name"
                        defaultValue={name}
                        onChange={(e) => setName(e.target.value)}
                        placeholder="Enter name"
                        readOnly
                    />

                </div>
                <div className="form-group col-sm-6">
                    <input 
                        type="text" 
                        className="form-control col-8"
                        id="departmentName"
                        defaultValue={departmentName}
                        onChange={(e) => setDepartmentName(e.target.value)}
                        placeholder="Enter Department Name"
                        readOnly
                    />
                </div>


                <div className="form-group col-sm-6">
                    <input 
                        type="email" 
                        className="form-control col-8"
                        id="emailId"
                        defaultValue={emailId}
                        onChange={(e) => setEmailId(e.target.value)}
                        placeholder="Enter EmailID"
                        readOnly
                    />

                </div>
                <div className="form-group col-sm-6">
                    <input 
                        type="text" 
                        className="form-control col-8"
                        id="designation"
                        defaultValue={designation}
                        onChange={(e) => setDesignation(e.target.value)}
                        placeholder="Enter Designation"
                        readOnly
                    />
                </div>
                <div className="form-group col-sm-6">
                    <input 
                        type="password" 
                        className="form-control col-8"
                        id="password"
                        defaultValue={password}
                        onChange={(e) => setPassword(e.target.value)}
                        placeholder="Enter Password"
                        readOnly
                    />
                </div>
                <div className="form-group col-sm-6">
                    <input 
                        type="number" 
                        className="form-control col-8"
                        id="basicSalary"
                        defaultValue={basicSalary}
                        onChange={(e) => setBasicSalary(e.target.value)}
                        placeholder="Enter Basic Salary"
                        readOnly
                    />
                </div>
                <div className="form-group col-sm-6">
                    <input 
                        type="text" 
                        className="form-control col-8"
                        id="contactNumber"
                        defaultValue={contactNumber}
                        onChange={(e) => setContactNumber(e.target.value)}
                        placeholder="Enter Contact No"
                        readOnly
                    />
                </div>
              
                <div className="form-group col-sm-6">
                    <span class="form-check form-check-inline">
                        Male
                    <input class="form-check-input mt-1" type="radio" name="exampleRadios" id="male" value="male" checked={gender === 'male'}
                     onChange={handleChange} disabled/>
                     <label class="form-check-label text-white" for="exampleRadios1">
                      Male
                     </label>
                     </span>
                    <span class="form-check form-check-inline">
                        Female
                    <input class="form-check-input mt-1" type="radio" name="exampleRadios" id="female" value="female" checked={gender === 'female'}
                    onChange={handleChange} disabled/>
                    <label class="form-check-label text-white" for="exampleRadios2">
                        Female
                     </label>
                     </span>
            </div>
               
                
                
               
                <div className="form-group col-sm-6">
                    <input 
                        type="text" 
                        className="form-control col-8"
                        id="city"
                        defaultValue={city}
                        onChange={(e) => setCity(e.target.value)}
                        placeholder="Enter city"
                        readOnly
                    />
                </div>
                
                <div className="form-group col-sm-6">

                    <input 
                        type="text" 
                        className="form-control col-8"
                        id="state"
                        defaultValue={state}
                        onChange={(e) => setState(e.target.value)}
                        placeholder="Enter state"
                        readOnly
                    />
                </div>
                <div className="form-group col-sm-6">
                    <input 
                        type="text" 
                        className="form-control col-8"
                        id="country"
                        defaultValue={country}
                        onChange={(e) => setCountry(e.target.value)}
                        placeholder="Enter country"
                        readOnly
                    />
                </div>
                <div className="form-group col-sm-6">
                    <input 
                        type="text" 
                        className="form-control col-8"
                        id="zipCode"
                        defaultValue={zipCode}
                        onChange={(e) => setZipCode(e.target.value)}
                        placeholder="Enter zipCode"
                        readOnly
                    />
                </div>
                <div className="form-group col-sm-6">
                    <input 
                        type="text" 
                        className="form-control col-8"
                        id="bankname"
                        defaultValue={bankname}
                        onChange={(e) => setBankname(e.target.value)}
                        placeholder="Enter bankname"
                        readOnly
                    />
                </div>
                <div className="form-group col-sm-6">
                    <input 
                        type="text" 
                        className="form-control col-8"
                        id="accountNo"
                        defaultValue={accountNo}
                        onChange={(e) => setAccountNo(e.target.value)}
                        placeholder="Enter accountNo"
                        readOnly
                    />
                </div>
                <div className="form-group col-sm-6">
                    <input 
                        type="text" 
                        className="form-control col-8"
                        id="ifscCode"
                        defaultValue={ifscCode}
                        onChange={(e) => setIfscCode(e.target.value)}
                        placeholder="Enter ifscCode"
                        readOnly
                    />
                </div>
                <div className="form-group col-sm-6">
                    <input 
                        type="text" 
                        className="form-control col-8"
                        id="banklocation"
                        defaultValue={banklocation}
                        onChange={(e) => setBanklocation(e.target.value)}
                        placeholder="Enter banklocation"
                        readOnly
                    />
                </div>
                
                
                <div className="form-group col-sm-6">
                <label class="form-check-label text-white col-6">Enter Date of Joining</label>
                    <input 
                        type="date" 
                        className="form-control col-8"
                        id="dateOfJoining"
                        defaultValue={dateOfJoining}
                        onChange={(e) => setDateOfJoining(e.target.value)}
                        placeholder="Enter Date Of Joining"
                        readOnly
                    />
                </div>
                
                </div>
               
           
            </div>
                
                    <button onClick={(e) => deleteEmployee(e)} className="btn btn-primary">Confirm Delete</button>
                    
               
            </form>
            
            <hr className="bg-info width=100%"/>
            <button onClick={() => navigate(-1)} className="btn btn-primary">Back</button>
            <h4>{submitData}</h4>
        </div>
        </div>
    )
}

export default DeleteEmployee