import React, { useEffect, useState } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import "./Login.css";
import { Link, useNavigate, useParams } from 'react-router-dom';
import LoginForm from "./LoginForm";
import axios from "axios";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';

// import Register from "./Register"
// import EmpOrAdmin from "../EmpOrAdmin";


export default function Login(props) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [data, setData] = useState([]);
  //const [user, setUser] = useState("");
  //const [arrow, setArrow] = useState(true);
  const [comp, setComp] = useState(<LoginForm />)
  const [loginOrRegister, setLOR] = useState('Register Here');
  const [role, setRole] = useState("");
  const [para, setPara] = useState('');
  const {user} = useParams();
  const [action, setAction] = useState("Login");
  const [content, setContent] = useState("New to Our Website please Sign Up to access more Services");
  const [display, setDisplay] = useState(true);
  const [otherLogin, setOtherLogin] = useState("Management Login")
  const navigate = useNavigate();
  const [msg, setMsg] = useState();


  function validateForm() {
    return email.length > 0 && password.length > 0;
  }

  // function handleSubmit(event) {
  //   event.preventDefault();
  // }

  useEffect(() => {
    setMsg("");
  },[email,password])

  const setRegisterForm = (e) => {
      e.preventDefault();
      // if(loginOrRegister === "Register Here"){
      // // setComp(<Register />);
      // setLOR("Login Here")
      // setAction("Registration")
      // setContent("Already registered... please Login Here")
      // }
      // else{
      //   // setComp(<LoginForm />);
      //   setLOR("Register Here");
      //   setAction("Login");
      //   setContent("New to Our Website please Register below to access more Services");
      // }
      navigate('register');

  }

  const authenticateCustomer = (event) => {
    event.preventDefault();
    // var re = {
    //     'capital' : /[A-Z]/,
    //     'digit'   : /[0-9]/,
    //     'except'  : /[aeiou]/,
    //     'full'    : /^[@#][A-Za-z0-9]{7,13}$/
    // };
    // if(re.capital .test(password) && 
    //        re.digit   .test(password) && 
    //       !re.except  .test(password) && 
    //        re.full    .test(password)){

    console.log("authenticate User");
    const userCredentials = {
        "email": email,
        "password":password
    }
     async function post() {await axios.post("http://localhost:8080/api/signin",userCredentials)
        .then((response) => {
            // setJwtToken(response.data.jwt);
            console.log(response);
            console.log(response.data.customer.id);
            console.log(response.data.jwt);
            localStorage.setItem('JWTtoken', response.data.jwt);
            localStorage.setItem('userId', response.data.customer.id);
            localStorage.setItem('userRole', response.data.userRole);
            setRole(response.data.userRole);
            setData(response.data);
            console.log(localStorage.getItem("userId"));
            if(response.status === 200){
              console.log("in 1st if")
              
              if(response.data.userRole === "user"){
                console.log("navigate to customer")
                navigate('/customer');
              }
              else if(response.data.userRole === "admin"){
                console.log("navigate to admin")
                navigate('/admin/employeeList')
              }
              else if(response.data.userRole === "employee"){
                navigate("/employee");
              }
                //props.authentication();
            }
            else if (response.status === 401){
                console.log("pls entre correct credentials")
                setMsg("please enter correct email and password");
            }
        })
        .catch((error) => {
            console.log(error);
            setMsg("please enter correct email and password");
        })
      }
      post();
// }else {
//     setDisplay(true);
// }
}

  const setEmpAdminComp = (e) => {
    e.preventDefault();
    if(display){
      
      setAction("");
      setRole("");
      // setComp(<EmpOrAdmin />);
      setDisplay(false);
    }
    else{
      setDisplay(true);
      if(loginOrRegister === "Register Here"){
      // setComp(<LoginForm />)
      }
      else{
        // setComp(<Register />)
      }
      setAction("Login");
      setRole("Customer");
    }
  }
  
  return (
    <div className="register">
      <div className="row vh-100">
        <div className="col-md-3 register-left">
          <img src="https://image.ibb.co/n7oTvU/logo_white.png" alt=""/>
            <h3 className="welcomeColor"><strong>Welcome</strong></h3>
              {display ?
              <p className="text-light">{content}</p> 
              : <p className="text-light">Welcome to Vehicle Showroom and Service Management System</p>}
              {/* {display ? <button className="btn btn-light"  onClick={(e) => setRegisterForm(e)} name="" value="Login">{loginOrRegister}</button>
              : <p></p>} */}
              <br />
          </div>

          <div className="col-9 register-right backsidecolor" >
            <div>
            {/* {arrow && <BsCaretUpFill />} */}
            </div>
            <div className="tab-content" id="myTabContent">
              <div className="tab-pane fade show active" id="home" role="tabpanel" aria-labelledby="home-tab">
                {/* <h3 class="register-heading text-light">{role} {action}</h3> */}
              </div>
              <div>
                <div className="col-5 loginForm">
                <div className="text-center">
                  <h3 className="text-light"><strong>Login</strong></h3><br />
                  <span className="text-danger">{msg}</span>
                  <form onSubmit={authenticateCustomer} >
                    <div>
                      <input 
                        type="email" 
                        className="form-control text-center"
                        id="emailId"
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="Enter Email Id"
                      />
                    </div>
                    <br />
                    <div className='text-center'>
                      <div className=''>
                        {/* {!display && msg} */}
                          <input 
                            type="password" 
                            className="form-control text-center"
                            id="password"
                            onChange={(e) => setPassword(e.target.value)}
                            placeholder="Enter Password"
                          />
                        </div>
                      </div>
                      <hr/>
                        <div>
                          <button type="submit" className="btn btn-primary">Login</button>
                        </div> 
                    </form>
                    <div>
                      <Link to='/forgotPassword' className="btn btn-link">Forgot PassWord?</Link>
                    </div>
                  </div>
                  
                </div>
              </div>
            </div>
          </div>
        </div>
      </div> 

  );
}