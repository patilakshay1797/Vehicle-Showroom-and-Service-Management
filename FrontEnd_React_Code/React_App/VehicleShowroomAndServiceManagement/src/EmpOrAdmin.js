import React, { useState } from 'react'
import { Link } from 'react-router-dom'

const EmpOrAdmin = () => {
    const [email, setEmail] = useState();
    const [password, setPassword] = useState();

    const authenticateUser = (event) => {
        event.preventDefault();
        console.log("authenticate User");
    }
  return (
    <div className="row ">
        <div className="any">
        <div className='col-10'>
            <div>
                <h5 className='text-light ml-3'>
                    Management Login 
                </h5>
            </div>
            <br />
        {/* <input 
                type="email" 
                className="form-control col-6"
                id="emailId"
                // value=''
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter Email Id"
            /> */}
            <Link to="login/Employee" className='btn btn-light col-4 '>Employee Login</Link>
        </div>
        <br />
        <div className=''>
        <div className='col-10'>
        {/* <input 
                type="password" 
                className="form-control col-6"
                id="password"
                // value=''
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Enter Password"
            /> */}
        <Link to="login/Admin" className='btn btn-light col-4 '>Admin Login</Link>
        </div>
        </div>
        {/* <hr className='col-6'/>
        <div className='text-center col-6'>
            <button onClick={(event) => authenticateUser(event)} className="btn btn-primary">Login</button>
        </div>  */}
        <div>
            {/* <Link to='login/employee' className='btn btn-link fixed-bottom'>Employee Login</Link>
            <Link to='login/employee' className='btn btn-link fixed-bottom'>Employee Login</Link> */}
        </div>

        </div>
    </div>
  )
}

export default EmpOrAdmin