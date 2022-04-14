import { useState } from "react";
import { Link } from "react-router-dom";
import { useEffect } from "react/cjs/react.development";
import axios from "axios";

const AddEmployee = () => {
    const [name, setName] = useState('');
    const [gender, setGender] = useState('');
    const [contactNumber, setContactNumber] = useState('');
    const [departmentName, setDepartmentName] = useState('');
    const [designation, setDesignation] = useState('')
    const [emailId, setEmailId] = useState('');
    const [password, setPassword] = useState('');
    const [dateOfJoining, setDateOfJoining] = useState('');
    const [basicSalary, setBasicSalary] = useState('')
    const [address, setAddress] = useState([]);
    const [city, setCity] = useState('');
    const [state, setState] = useState('');
    const [country, setCountry] = useState('');
    const [zipCode, setZipCode] = useState('');
    const [dateOfLeaving, setDateOfLeaving] = useState('');
    // const history = useHistory();
    // const {id} = useParams();
    const [submitData, setSubmitData] = useState('');
    const [bankname, setBankname] = useState('');
    const [accountNo, setAccountNo] = useState('');
    const [ifscCode, setIfscCode] = useState('');
    const [banklocation, setBanklocation] = useState('');
    const [msg, setMsg] = useState('');

    const handleChange = (event) => {
        setGender(event.target.value)
    }

    useEffect(() => {
        setMsg('');
    }, [name, gender, contactNumber, departmentName, designation, emailId, password, dateOfJoining, basicSalary, city, state, country, zipCode, bankname, accountNo, banklocation])

    const saveEmployee = (e) => {
        e.preventDefault();

        console.log(gender);
        console.log(departmentName);
        //var genderofemployee=
        //var today=new Date();
        if (name === '' || gender === '' || contactNumber === '' || departmentName === '' || designation === '' || emailId === '' || password === ''
            || dateOfJoining === '' || basicSalary === '' || city === '' || state === '' || country === '' || zipCode === '' || bankname === '' || accountNo === ''
            || banklocation === '') {
            return setMsg(<div className="alert alert-danger" role="alert">All fields are required</div>)
        }

        const employee = {

            'name': name,
            'gender': gender,
            'departmentName': departmentName,
            'basicSalary': basicSalary,
            'emailId': emailId,
            'password': password,
            'designation': designation,
            'dateOfJoining': dateOfJoining,
            'dateOfLeaving': '',
            'contactNumber': contactNumber,

            'address': {
                'city': city,
                'state': state,
                'country': country,
                'zipCode': zipCode
            },
            'bankDetail': {
                'name': bankname,
                'accountNo': accountNo,
                'ifscCode': ifscCode,
                'location': banklocation

            }

        };


        axios.post("http://localhost:8080/admin/addEmployee", employee,
            {
                headers: {
                    'Authorization': 'Bearer ' + localStorage.getItem('JWTtoken')
                }
            })
            .then((Response) => {

                if (Response.status === 201) {
                    console.log(Response.status, "employee added successfully...");
                    setSubmitData(<div className="alert alert-success" role="alert">Employee Added successfully</div>);
                }
                else {
                    setSubmitData(<div className="alert alert-danger" role="alert">Failed to add Employee</div>);
                }
            })
    }
    return (
        <div>
            <div className="container">
                <h3>Add Employee</h3>
                <hr />
                {/* {msg} */}
                {submitData}
                <form>
                    <div className="">
                        <div className="row">
                            <div className="form-group col-sm-6">
                                <input
                                    type="text"
                                    className="form-control col-8"
                                    id="name"
                                    value={name}
                                    onChange={(e) => setName(e.target.value)}
                                    placeholder="Enter name*"
                                />

                            </div>
                            <div className="form-group col-sm-6">
                                <input
                                    type="text"
                                    className="form-control col-8"
                                    id="departmentName"
                                    value={departmentName}
                                    onChange={(e) => setDepartmentName(e.target.value)}
                                    placeholder="Enter Department Name*"
                                />
                            </div>


                            <div className="form-group col-sm-6">
                                <input
                                    type="email"
                                    className="form-control col-8"
                                    id="emailId"
                                    value={emailId}
                                    onChange={(e) => setEmailId(e.target.value)}
                                    placeholder="Enter EmailID*"
                                />

                            </div>
                            <div className="form-group col-sm-6">
                                <input
                                    type="text"
                                    className="form-control col-8"
                                    id="designation"
                                    value={designation}
                                    onChange={(e) => setDesignation(e.target.value)}
                                    placeholder="Enter Designation*"
                                />
                            </div>
                            <div className="form-group col-sm-6">
                                <input
                                    type="password"
                                    className="form-control col-8"
                                    id="password"
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}
                                    placeholder="Enter Password*"
                                />
                            </div>
                            <div className="form-group col-sm-6">
                                <input
                                    type="number"
                                    className="form-control col-8"
                                    id="basicSalary"
                                    value={basicSalary}
                                    onChange={(e) => setBasicSalary(e.target.value)}
                                    placeholder="Enter Basic Salary*"
                                />
                            </div>
                            <div className="form-group col-sm-6">
                                <input
                                    type="text"
                                    className="form-control col-8"
                                    id="contactNumber"
                                    value={contactNumber}
                                    onChange={(e) => setContactNumber(e.target.value)}
                                    placeholder="Enter Contact No*"
                                />
                            </div>

                            <div className="form-group col-sm-6">
                                <span className="form-check form-check-inline">
                                    Male
                                    <input className="form-check-input mt-1" type="radio" name="exampleRadios" id="male" value="male" checked={gender === 'male'}
                                        onChange={handleChange} />
                                    <label className="form-check-label text-white" for="exampleRadios1">
                                        Male
                                    </label>
                                </span>
                                <span className="form-check form-check-inline">
                                    female
                                    <input className="form-check-input mt-1" type="radio" name="exampleRadios" id="female" value="female" checked={gender === 'female'}
                                        onChange={handleChange}></input>
                                    <label className="form-check-label text-white" for="exampleRadios2">
                                        Female
                                    </label>
                                </span>
                            </div>




                            <div className="form-group col-sm-6">
                                <input
                                    type="text"
                                    className="form-control col-8"
                                    id="city"
                                    value={city}
                                    onChange={(e) => setCity(e.target.value)}
                                    placeholder="Enter city*"
                                />
                            </div>

                            <div className="form-group col-sm-6">

                                <input
                                    type="text"
                                    className="form-control col-8"
                                    id="state"
                                    value={state}
                                    onChange={(e) => setState(e.target.value)}
                                    placeholder="Enter state*"
                                />
                            </div>
                            <div className="form-group col-sm-6">
                                <input
                                    type="text"
                                    className="form-control col-8"
                                    id="country"
                                    value={country}
                                    onChange={(e) => setCountry(e.target.value)}
                                    placeholder="Enter country*"
                                />
                            </div>
                            <div className="form-group col-sm-6">
                                <input
                                    type="text"
                                    className="form-control col-8"
                                    id="zipCode"
                                    value={zipCode}
                                    onChange={(e) => setZipCode(e.target.value)}
                                    placeholder="Enter zipCode*"
                                />
                            </div>
                            <div className="form-group col-sm-6">
                                <input
                                    type="text"
                                    className="form-control col-8"
                                    id="bankname"
                                    value={bankname}
                                    onChange={(e) => setBankname(e.target.value)}
                                    placeholder="Enter bankname*"
                                />
                            </div>
                            <div className="form-group col-sm-6">
                                <input
                                    type="text"
                                    className="form-control col-8"
                                    id="accountNo"
                                    value={accountNo}
                                    onChange={(e) => setAccountNo(e.target.value)}
                                    placeholder="Enter accountNo*"
                                />
                            </div>
                            <div className="form-group col-sm-6">
                                <input
                                    type="text"
                                    className="form-control col-8"
                                    id="ifscCode"
                                    value={ifscCode}
                                    onChange={(e) => setIfscCode(e.target.value)}
                                    placeholder="Enter ifscCode*"
                                />
                            </div>
                            <div className="form-group col-sm-6">
                                <input
                                    type="text"
                                    className="form-control col-8"
                                    id="banklocation"
                                    value={banklocation}
                                    onChange={(e) => setBanklocation(e.target.value)}
                                    placeholder="Enter banklocation*"
                                />
                            </div>


                            <div className="form-group col-sm-6">
                                Enter Date of Joining*
                                <label className="form-check-label text-white col-6">Enter Date of Joining</label>
                                <input
                                    type="date"
                                    className="form-control col-8"
                                    id="dateOfJoining"
                                    value={dateOfJoining}
                                    onChange={(e) => setDateOfJoining(e.target.value)}
                                    placeholder="Enter Date Of Joining*"
                                />
                            </div>

                        </div>


                    </div>
                    <div >
                        <button onClick={(e) => saveEmployee(e)} className="btn btn-primary ">Save</button>
                        <Link to='/admin/employeeList' className="btn btn-primary float-right mr-5">Back</Link>
                    </div>
                </form>
                {/* <hr className="bg-info width=100%"/> */}
                {/* <Link to="/admin">Back to List</Link> */}
                {/* <Link to='/admin' className="btn btn-primary">Back</Link> */}
                {/* <h4>{submitData}</h4> */}
            </div>
        </div>
    )
}
export default AddEmployee;