import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import { useEffect } from 'react';

const UpdateEmployee = () => {
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
    const[id1,setId1]=useState('');
    const { id } = useParams();

    const handleChange = (event) => {
        setGender(event.target.value)
      }
   
    const updateEmployee = (e) => {
        e.preventDefault();
       
        console.log(gender);
        console.log(departmentName);
        const dataTOSend = {
            'id':id1,
            'name': name,
            'gender':gender,
            'departmentName':departmentName,
            'basicSalary':basicSalary,
            'emailId': emailId,
            'password': password,
            'designation':designation,
            'dateOfJoining':dateOfJoining,
            'dateOfLeaving':'',
            'contactNumber':contactNumber,
           
            'address':{
               'city' : city,
               'state' : state,
               'country' : country,
               'zipCode' : zipCode
            },
            'bankDetail':{
                'name':bankname,
                'accountNo':accountNo,
                'ifscCode':ifscCode,
                'location':banklocation

            }

        };

        axios.put("http://localhost:8080/admin/updateEmployee",dataTOSend,
        {
          headers : {
            'Authorization' : 'Bearer ' + localStorage.getItem('JWTtoken')
          }
        })
        .then((response) => {
            console.log(response);
            setSubmitData(<div className='alert alert-success' role="alert">Data Updated</div>)
        })
        .catch((error) => {
            console.log(error);
            setSubmitData(<div className='alert alert-danger' role="alert">Failed to Update</div>)
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
                  //setData(response.data);
                  //setAddress(response.data.address);
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
            <h3>Update data of Employee {name} </h3>
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
                    />
                </div>


                <div className="form-group col-sm-6">
                    <input 
                        type="email" 
                        className="form-control col-8"
                        id="emailId"
                        defaultValue={emailId}
                        //onChange={(e) => setEmailId(e.target.value)}
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
                    />
                </div>
              
                <div className="form-group col-sm-6">
                    <span class="form-check form-check-inline">
                    Male
                    <input class="form-check-input mt-1" type="radio" name="exampleRadios" id="male" value="male" checked={gender === 'male'}
                     onChange={handleChange} />
                     <label class="form-check-label text-white" for="exampleRadios1">
                      Male
                     </label>
                     
                     </span>
                    
                    <span class="form-check form-check-inline">
                        Female
                    <input class="form-check-input mt-1" type="radio" name="exampleRadios" id="female" value="female" checked={gender === 'female'}
                    onChange={handleChange}/>
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
                    />
                </div>
                
                </div>
               
           
            </div>
                <div >
                    <button onClick={(e) => updateEmployee(e)} className="btn btn-primary">Update</button>
                </div>
            </form>
            <hr className="bg-info width=100%"/>
            {/* <Link to="/admin">Back to List</Link> */}
            <Link to='/admin/employeeList' className="btn btn-primary">Back</Link>
            <h4>{submitData}</h4>
        </div>
        </div>
    )
}


export default UpdateEmployee