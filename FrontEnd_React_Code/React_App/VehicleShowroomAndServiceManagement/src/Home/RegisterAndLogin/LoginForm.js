import React, { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'; 
import './LoginForm.css'
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';

const LoginForm = () => {

    const [email, setEmail] = useState();
    const [password, setPassword] = useState();
    // const [display, setDisplay] = useState(false);
    const [msg, setMsg] = useState("Enter correct password")
    // const [JwtToken, setJwtToken] = useState();
    let  navigate  = useNavigate();

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
        axios.post("http://localhost:8080/api/signin",userCredentials)
            .then((response) => {
                // setJwtToken(response.data.jwt);
                console.log(response);
                console.log(response.data.jwt);
                if(response.status === 200){
                    navigate('/customer');
                }
                else if (response.status === 403){
                    console.log("pls entre correct credentials")
                }
            })
            .catch((error) => {
                console.log(error);
            })
    // }else {
    //     setDisplay(true);
    // }
}


  return (
    <div>
        
        <div className="text-center">
        {/* <h5 className='text-'>Customer Login</h5><br /> */}
        <form onSubmit={authenticateCustomer} >
        <div className=''>
        <input 
                type="email" 
                className="form-control"
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
                className="form-control"
                id="password"
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Enter Password"
            />
        </div>
        </div>
        <hr className=''/>
        <div className=''>
            <button type="submit" className="btn btn-primary">Login</button>
        </div> 
        <div>
            {/* <Link to='login/employee' className='btn btn-link fixed-bottom'>Employee Login</Link>
            <Link to='login/employee' className='btn btn-link fixed-bottom'>Employee Login</Link> */}
        </div>
        </form>
        </div>
       
    </div>
  )
}

export default LoginForm