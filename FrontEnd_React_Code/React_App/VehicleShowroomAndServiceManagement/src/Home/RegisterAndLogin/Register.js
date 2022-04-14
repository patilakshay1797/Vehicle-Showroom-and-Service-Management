import React, { useEffect, useRef, useState } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import "./Register.css";
// import "./Login.css"
import { Link, Navigate } from 'react-router-dom';
import axios from "axios";


export default function Register() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [checkPass, setCheckPassMsg] = useState("");
  const [Confirmedpassword, setComPassword] = useState("");
  const [confirmedPassMsg, setConfirmedPassMsg] = useState();
  const [name, setName] = useState("");
  const [address, setAddress] = useState("");
  const [mobileno, setMobileno] = useState("");
  const [content, setContent] = useState("New to Our Website please Sign Up to access more Services");
  const [display, setDisplay] = useState(true);
  const [city, setCity] = useState();
  const [state, setState] = useState();
  const [country, setCountry] = useState();
  const [zipcode, setZipCode] = useState();
  const isInitialMount = useRef(true);  /*to avoid code to run on initial componenet mounting*/
  const strongRegex = new RegExp("^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})");

  // function validateForm() {
  //   return email.length > 0 && password.length > 0;
  // }

  // function handleSubmit(event) {
  //   event.preventDefault();
  // }

  const checkConfirmedPass = (e) => {
    //setComPassword(e.target.value);
    if(Confirmedpassword != password){
      console.log("in check password not validated");
      setConfirmedPassMsg("should be same as above password");
    }
    else{
      console.log("in check password validated");
      setConfirmedPassMsg("");
    }
  }

  
  const checkPasswordStrength = (e) => {
      console.log("in check password strength");
      if(strongRegex.test(password)){

        console.log("entered pass is strong");
        setCheckPassMsg("");
      }
      else{
        console.log("entered pass is weak");
        //setCheckPassMsg("pls enter strong password"); 
        setCheckPassMsg("password should contain : (at least one capital letter, one numeric value and one special character)")
      }
  }

  
  useEffect(() => {
    if (isInitialMount.current) {
       isInitialMount.current = false;
    } else {
      checkPasswordStrength();
    }
  },[password]);

  useEffect(() => {
    checkConfirmedPass();
  },[Confirmedpassword])

  // useEffect(() => {
  //   checkPasswordStrength();
  // },[password])

  const passwordValidation = (event) => {
    event.preventDefault();
    console.log("in form validation");
    
    console.log("before password check")
    if (strongRegex.test(password) && (Confirmedpassword === password)) {
      console.log("password accepted");
      const userDetails = {
        "email": email,
        "password": password,
        "userName": name,
        "contactNumber": mobileno,
        "address": {
          "city": city,
          "state": state,
          "country": country,
          "zipcode": zipcode
        },
        "roles": [
          "ROLE_USER"
        ],
        "dateOfRegistration": new Date()
      }
      console.log("before userDetails");
      console.log(userDetails);
      axios.post("http://localhost:8080/customer/signup",userDetails)
        .then((response) => {
          // setJwtToken(response.data.jwt);
          console.log(response);
          //console.log(response.data.jwt);
          if (response.status === 201) {
            //Navigate('/');
          }
          else if (response.status === 400) {
            console.log("pls entre correct credentials")
          }
        })
        .catch((error) => {
          console.log(error);
        })
      }
      else{
        console.log("password rejected");
      }
    }
  

  return (
  <div className="justify-content-center Register_back vh-100 ">
    <div className="row">
    <h4 className="text-center text-light mb-5 mt-4"><strong>Sign UP</strong></h4>
    </div>
  <form onSubmit={passwordValidation}>
    <div className="row">
      <div className="row justify-content-center">
      <div className="col-4">
        <div className="form-group">
        {/* <label for="fullName">Full Name</label> */}
          <input 
              type="text" 
              id="fullName" 
              className="form-control" 
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Enter Full Name"></input>
        </div>
        <div className="form-group">
          <input 
              type="email" 
              id="inputEmail" 
              className="form-control" 
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter Email Id"></input>
        </div>
        <span className="text-danger">{checkPass}</span>
        <div className="form-group">
          <input 
              type="password" 
              id="inputPassword" 
              className="form-control"
              value={password}
              onChange={(e) => setPassword(e.target.value)} 
              placeholder="Enter Password">
            </input>
        </div>
        <span className="text-danger">{confirmedPassMsg}</span>
        <div className="form-group">
          <input 
              type="password" 
              id="inputConfirmPassword" 
              className="form-control"
              value={Confirmedpassword} 
              onChange={(e) => setComPassword(e.target.value)}
              placeholder="Confirm Password">
            </input>
        </div>

        <div className="form-group">
          <input 
              type="number" 
              maxLength="14" 
              minLength="10" 
              id="inputPnoneNumber" 
              className="form-control"
              value={mobileno}
              onChange={(e) => setMobileno(e.target.value)}  
              placeholder="Enter Phone Number">
            </input>
        </div>

      </div >
      <div className="col-4">
        <button className="btn btn-secondary  mb-3" disabled>Address : </button>
        <div className="form-group">
          <input 
              type="text" 
              maxLength="20" 
              //minLength="10" 
              id="inputCity" 
              className="form-control"
              value={city}
              onChange={(e) => setCity(e.target.value)} 
              placeholder="Enter City">
            </input>
        </div>

        <div className="form-group">
          <input 
              type="text" 
              maxLength="20" 
              //minLength="10" 
              id="inputState" 
              className="form-control" 
              value={state}
              onChange={(e) => setState(e.target.value)}
              placeholder="Enter State">
            </input>

        </div>
        <div className="form-group">
          <input 
              type="text" 
              maxLength="20" 
              //minLength="10" 
              id="inputCountry" 
              className="form-control"
              value={country}
              onChange={(e) => setCountry(e.target.value)} 
              placeholder="Enter Country">
            </input>

        </div>

        <div className="form-group">
          <input 
              type="text" 
              maxLength="20" 
              //minLength="10" 
              id="inputZinCode" 
              className="form-control"
              value={zipcode}
              onChange={(e) => setZipCode(e.target.value)} 
              placeholder="Enter ZinCode">
            </input>

        </div>

      </div>
        <div className="col-8">
          <button type="submit" className="btn btn-primary float-right" /*</div>onClick={(e) => passwordValidation}*/>Register</button>
        </div>
     
       {/* <div className="row float-bottom">
        <div>
          <form onSubmit={(e) => passwordValidation}>
          <div className="row register-form">
            <h4 className="text-center text-light mb-5"><strong>Sign UP</strong></h4>
             <form className="" onSubmit={(e) => passwordValidation}> 
            <div className="col-md-6">

              <div className="form-group">
                <input type="text" className="form-control" placeholder="Full Name *" value={name} onChange={(e) => setName(e.target.value)} />
              </div>
              <div className="form-group">
                <input type="email" className="form-control" placeholder="Email *" value={email} onChange={(e) => setEmail(e.target.value)} />
              </div>
              <div className="form-group">
                <input type="password" className="form-control" placeholder="Password *" value={password} onChange={(e) => setPassword(e.target.value)} />
              </div>
              <div className="form-group">
                <input type="password" className="form-control" placeholder="Confirm Password *" value={Confirmedpassword} onChange={(e) => setComPassword(e.target.value)} />
              </div>

              <div className="form-group">
                <input type="number" className="form-control" placeholder="Your Phone *" value={mobileno} onChange={(e) => setMobileno(e.target.value)} />
              </div>

            </div>
            <div className="col-md-6">

              <button className="btn btn-dark" disabled><strong className="text-light">Address :</strong></button><p></p>
              <div className="form-group">
                <input type="text" maxLength="20" className="form-control" placeholder="City *" value={city} onChange={(e) => setCity(e.target.value)} />
              </div>

              <div className="form-group">
                <input type="text" minLength="10" maxLength="20" className="form-control" placeholder="State *" value={state} onChange={(e) => setState(e.target.value)} />
              </div>
              <div className="form-group">
                <input type="text" className="form-control" placeholder="Country *" value={country} onChange={(e) => setCountry(e.target.value)} />
              </div>
              <div className="form-group">
                <input type="text" minLength="6" maxLength="8" className="form-control" placeholder="ZipCode *" value={zipcode} onChange={(e) => setZipCode(e.target.value)} />
              </div>
              <input type="submit" onClick={(e) => passwordValidation} className="mt-2 float-right  btnRegister" value="Register" />
            </div>
             </form> 
          </div>
          </form>
        </div>
      </div> */}
      </div>
    </div>
    </form>
    </div>

    //     <div className="row register-form">
    // <div className="col-md-6">
    // <div className="form-group">
    // <input type="text" className="form-control" placeholder="Full Name *" /*value=""*/ />
    // </div>
    // <div className="form-group">
    // <input type="text" className="form-control" placeholder="Email *" /*value=""*/ />
    // </div>
    // <div className="form-group">
    // <input type="password" className="form-control" placeholder="Password *" /*value=""*/ />
    // </div>
    // <div className="form-group">
    // <input type="password" className="form-control" placeholder="Confirm Password *" /*value=""*/ />
    // </div>
    // <div>
    // <input type="email" className="form-control" placeholder="Your Email *" /*value=""*/ />
    // </div>
    // <br />
    // <div className="form-group">
    // <input type="number" className="form-control" placeholder="Your Phone *" /*value=""*/ />
    // </div>
    /* <div className="form-group">
    <div className="maxl">
    <label className="radio inline">
    <input type="radio" name="gender" value="male" checked />
    <span> Male </span>
    </label>
    <label className="radio inline">
    <input type="radio" name="gender" value="female" />
    <span>Female </span>
    </label>
    </div>
    </div>
    // </div>
    <div className="col-md-6">
    <div className="form-group">
    <input type="number" className="form-control" placeholder="Your Phone *" value="" />
    </div>
    <h5>Address :</h5><br />
    <div className="form-group">
    <input type="text" maxlength="20" name="cityName" className="form-control" placeholder="City *" /*value="" />
    
    </div>
    <div className="form-group">
    <select className="form-control">
    <option className="hidden" selected disabled>Please select your Sequrity Question</option>
    <option>What is your Birthdate?</option>
    <option>What is Your old Phone Number</option>
    <option>What is your Pet Name?</option>
    </select>
    </div>
    <div className="form-group">
    <input type="text" minlength="10" maxlength="20" name="stateName" className="form-control" placeholder="State *" /*value="" />
    </div>
    <div className="form-group">
    <input type="text" className="form-control" placeholder="Country *" /*value="" />
    </div>
    <div className="form-group">
    <input type="text" minlength="6" maxlength="8" name="zipCode" className="form-control" placeholder="ZipCode *" /*value="" />
    </div>
    <input type="submit" classNameName="mt-2 float-left  btnRegister" value="Register"/>
    </div>
    </div> 
        // <div classNameName="Register">
        //   <Form onSubmit={handleSubmit}>
        //     <Form.Group size="lg" controlId="email">
        //       {/* <Form.Label>Email</Form.Label> */
    //       <Form.Control
    //         autoFocus
    //         type="email"
    //         // value={email}
    //         onChange={(e) => setEmail(e.target.value)}
    //         placeholder="Enter Email"
    //       /><br />
    //     </Form.Group>
    //     <Form.Group size="lg" controlId="name">
    //       {/* <Form.Label>Name</Form.Label> */}
    //       <Form.Control
    //         type="name"
    //         // value={name}
    //         onChange={(e) => setName(e.target.value)}
    //         placeholder="Enter Name"
    //       /><br />
    //        </Form.Group>
    //       <Form.Group size="lg" controlId="password">
    //       {/* <Form.Label>Password</Form.Label> */}
    //       <Form.Control
    //         type="password"
    //         // value={password}
    //         onChange={(e) => setPassword(e.target.value)}
    //         placeholder="Enter Password"
    //       /><br />
    //     </Form.Group>
    //     <Form.Group size="lg" controlId="address">
    //       {/* <Form.Label>Address</Form.Label> */}
    //       <Form.Control
    //         type="address"
    //         // value={address}
    //         onChange={(e) => setAddress(e.target.value)}
    //         placeholder="Enter Address"
    //       /><br />
    //     </Form.Group>
    //     <Form.Group size="lg" controlId="mobileno">
    //       {/* <Form.Label>MobileNo</Form.Label> */}
    //       <Form.Control
    //         type="mobileno"
    //         // value={mobileno}
    //         onChange={(e) => setMobileno(e.target.value)}
    //         placeholder="Enter Mobile Number"
    //       />
    //     </Form.Group>
    //     <hr/>
    //     <Button block size="lg" type="submit" disabled={!validateForm()}>
    //      Register
    //     </Button><span />
    //     </Form>
    //     </div>

  );
}