import { useState } from "react";
import { Link} from "react-router-dom";
import { useEffect } from "react/cjs/react.development";
import axios from "axios";
import { useNavigate } from "react-router-dom";
//import employeeService from "../services/employee.service";

const Addcustomer = () => {
    const[name, setName] = useState('');
    const[contactNumber, setContactNumber] = useState('');
    const[emailId, setEmailId] = useState('');
    const[password, setPassword] = useState('');
    const[dateOfRegistration, setDateOfRegistration] = useState('');
    const[address,setAddress]=useState([]);
    const[city, setCity] = useState('');
    const[state, setState] = useState('');
    const[country, setCountry] = useState('');
    const[zipCode, setZipCode] = useState('');
    // const history = useHistory();
    // const {id} = useParams();
    const[submitData, setSubmitData] = useState('');
    // const[uri, setUri] = useState();
    const navigate = useNavigate();

    // useEffect(() => {
    //     setUri(window.location.pathname);
    // },[])

    const saveCustomer = (e) => {
        e.preventDefault();
        var today=new Date();
        const customer = {
            'userName': name,
            'email': emailId,
            'password': password,
            'contactNumber':contactNumber,
            'dateOfRegistration' :today,
            'address':{
               'city' : city,
               'state' : state,
               'country' : country,
               'zipCode' : zipCode
            },
            "roles": [
                "ROLE_USER"
            ],
        };
    

        axios.post("http://localhost:8080/api/signup",customer,
        {
          headers : {
            'Authorization' : 'Bearer ' + localStorage.getItem('JWTtoken')
          }
        })
            .then((Response) => {
                
                if(Response.status === 201){
                    console.log(Response.status,"customer added successfully...");
                    setSubmitData(<div className="alert alert-success" role="alert">Data Saved</div>);
                }
                else{
                    setSubmitData(<div className="alert alert-danger" role="alert">Failed to add customer</div>);
                }
            })
        }
    return(
        <div>
        <div className="container">
            <h3>Add Customer</h3>
            <hr/>
            {submitData}
            <form>
                <div className="form-group">
                    <input 
                        type="text" 
                        className="form-control col-4"
                        id="name"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        placeholder="Enter name"
                    />

                </div>
                <div className="form-group">
                    <input 
                        type="email" 
                        className="form-control col-4"
                        id="emailId"
                        value={emailId}
                        onChange={(e) => setEmailId(e.target.value)}
                        placeholder="Enter EmailID"
                    />

                </div>
                <div className="form-group">
                    <input 
                        type="password" 
                        className="form-control col-4"
                        id="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        placeholder="Enter Password"
                    />
                </div>
                <div className="form-group">
                    <input 
                        type="text" 
                        className="form-control col-4"
                        id="contactNumber"
                        value={contactNumber}
                        onChange={(e) => setContactNumber(e.target.value)}
                        placeholder="Enter Contact No"
                    />
                </div>
                <div className="form-group">
                    <input 
                        type="text" 
                        className="form-control col-4"
                        id="city"
                        value={city}
                        onChange={(e) => setCity(e.target.value)}
                        placeholder="Enter city"
                    />
                </div>
                <div className="form-group">
                    <input 
                        type="text" 
                        className="form-control col-4"
                        id="state"
                        value={state}
                        onChange={(e) => setState(e.target.value)}
                        placeholder="Enter state"
                    />
                </div>
                <div className="form-group">
                    <input 
                        type="text" 
                        className="form-control col-4"
                        id="country"
                        value={country}
                        onChange={(e) => setCountry(e.target.value)}
                        placeholder="Enter country"
                    />
                </div>
                <div className="form-group">
                    <input 
                        type="text" 
                        className="form-control col-4"
                        id="zipCode"
                        value={zipCode}
                        onChange={(e) => setZipCode(e.target.value)}
                        placeholder="Enter zipCode"
                    />
                </div>
                <div >
                    <button onClick={(e) => saveCustomer(e)} className="btn btn-primary">Save</button>
                </div>
            </form>
            <hr className="bg-info width=100%"/>
            {/* <Link to="/admin">Back to List</Link> */}
            {/* <Link to={uri} className="btn btn-primary">Back</Link> */}
            <button className="btn btn-primary" onClick={() => navigate(-1)}>Back</button>
        </div>
        </div>
    )
}

export default Addcustomer;