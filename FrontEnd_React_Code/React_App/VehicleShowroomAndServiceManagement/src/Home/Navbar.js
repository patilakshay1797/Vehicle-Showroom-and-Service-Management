import React, { useEffect, useState } from 'react';
import { Button, Container, Nav, NavDropdown } from 'react-bootstrap';
import { Link, Navigate, useNavigate } from 'react-router-dom';
import HomePage from './HomePage.js';
import LoginForm from './RegisterAndLogin/LoginForm.js';
import Login from './RegisterAndLogin/Login.js';
import Register from './RegisterAndLogin/Register.js';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';


function Navbar() {
  const [displaySignInSignUp, setdisplay] = useState(true);
  const [displayComp, setDisplayComp] = useState();
  const [displayProfile, setDisplayProfile] = useState();
  const navigate = useNavigate();
  const userRole = localStorage.getItem('userRole');
  // useEffect(() => {
  //   setAuth = localStorage.getItem('JWTtoken');
  // })
  const[auth, setAuth] = useState(false);
  useEffect(() => {
    if(localStorage.getItem('JWTtoken') === null){
    setAuth(true);
    }
    else{
      setAuth(false);
      //navigate('/customer');
    }
  })

  useEffect(() => {
    if(localStorage.getItem("JWTtoken")){
      setDisplayProfile(true);
    }
    else{
      setDisplayProfile(false);
    }
  },[displayProfile])

    const logout = (e) => {
      // e.preventDefaults();
      localStorage.removeItem('JWTtoken');
      localStorage.removeItem('user');
      console.log(auth);
      //props.changeStatus();
      // setAuth()
      navigate("/")
    }

    const profile = (e) => {
      e.preventDefault();
      console.log("in profile button ")
      setDisplayProfile(false);
      if(userRole === 'admin'){
      navigate("/admin");
      }else if(userRole === 'employee'){
        navigate("/employee");
      }else {
        navigate("/customer");
      }
    }

    return (
      <>
      <div className='row'>
      <nav className="navbar bg-dark col-12">
      <h2 className="navbar-logo text-light ml-5 col-3"><strong className='text-danger'>C</strong>ar<strong className='text-danger'>S</strong>howRoom</h2>
      <div className='col-6'>
        <ul >
          <li className=''>
            <Link to='/' className='btn btn-light ml-4 mt-3'>Home</Link>            
          </li>
          <li>
            <Link to='aboutUs' className='btn btn-light ml-4 mt-3'>About Us</Link>            
          </li>
          <li>
            <Link to='contactUs' className='btn btn-light ml-4 mt-3'>Contact Us</Link>            
          </li>
        </ul>
      </div>
      {/* {console.log(props.authenticate)} */}
      {auth ?          
      <div className='col-2'>
        <Link to='customer/login' className='btn btn-outline-primary mr-4' /*onClick={() => setDisplayComp(<Login />)}*/>Sign In</Link>
        <Link to='customer/registration' className='btn btn-outline-primary' /*onClick={() => setDisplayComp(<Register />)}*/>SIGN UP</Link>
      </div>
      : <div className='col-2'>
          {/* <Link to='/admin' className='btn btn-success'>Profile</Link> */}
          <button className='btn btn-success' onClick={(e) => profile(e)}>Profile</button>
          <button className='btn btn-outline-danger ml-2' onClick={(e) => logout(e)}>LogOut</button>
      </div>
      }
    </nav>
    </div>
    {/* <div className='row'>
        {displayComp}
    </div> */}
    </>
    );
  };

  export default Navbar;