import React, { useState } from 'react'
import { Link } from 'react-router-dom';

const UpdateService = () => {
    const[name, setName] = useState('');
    const[price, setPrice] = useState('');
    const[serviceIncludes, setserviceIncludes] = useState('');

    const updateSer = (e) => {
        e.preventDefault();
    }
  return (
    <div>
        <div className="container">
            <h3>Update Service</h3>
            <hr/>
            <form>
                <div className="form-group">
                    <input 
                        type="text" 
                        className="form-control col-4"
                        id="name"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        placeholder="Enter Service name"
                    />

                </div>
                <div className="form-group">
                    <input 
                        type="text" 
                        className="form-control col-4"
                        id="department"
                        value={serviceIncludes}
                        onChange={(e) => setserviceIncludes(e.target.value)}
                        placeholder="Enter What Service includes"
                    />

                </div>
                <div className="form-group">
                    <input 
                        type="text" 
                        className="form-control col-4"
                        id="location"
                        value={price}
                        onChange={(e) => setPrice(e.target.value)}
                        placeholder="Enter Service Cost"
                    />
                </div>
                <div >
                    <button onClick={(e) => updateSer(e)} className="btn btn-primary">Update</button>
                    
                </div>
            </form>
            <hr/>
            <Link to='/admin' className="btn btn-primary">Back to Admin Home</Link>
        </div>
    </div>
  )
}

export default UpdateService