import React, { useState } from 'react'
import { Link } from 'react-router-dom';

const AddBill = () => {
    const[billType, setType] = useState('');
    const[amountPerService, setAmountPerService] = useState('');
    const[customerId, setCustomerId] = useState('');
    const[totalBill, setTotalBill] = useState('');
    const[totalQuantity, setTotalQuantity] = useState('');

    const saveBill = (e) => {
        e.preventDefault();
    }
  return (
    <div className="container">
            <h3>Add Bill</h3>
            <hr/>
            <form>
            <div className="form-group">
                    <input 
                        type="text" 
                        className="form-control col-4"
                        id="billType"
                        value={billType}
                        onChange={(e) => setType(e.target.value)}
                        placeholder="Enter Type Of Bill"
                    />

                </div>
                <div className="form-group">
                    <input 
                        type="text" 
                        className="form-control col-4"
                        id="amountPerService"
                        value={amountPerService}
                        onChange={(e) => setAmountPerService(e.target.value)}
                        placeholder="Enter Amount Per Service"
                    />

                </div>
                <div className="form-group">
                    <input 
                        type="text" 
                        className="form-control col-4"
                        id="customerId"
                        value={customerId}
                        onChange={(e) => setCustomerId(e.target.value)}
                        placeholder="Enter Customer Id"
                    />
                </div>
                    <div className="form-group">
                    <input 
                        type="text" 
                        className="form-control col-4"
                        id="totalBill"
                        value={totalBill}
                        onChange={(e) => setTotalBill(e.target.value)}
                        placeholder="Enter Total Bill"
                    />

                </div>
                <div className="form-group">
                    <input 
                        type="number" 
                        className="form-control col-4"
                        id="totalQuantity"
                        value={totalQuantity}
                        onChange={(e) => setTotalQuantity(e.target.value)}
                        placeholder="Enter Total Quantity"
                    />

                </div>
                
                <div >
                    <button onClick={(e) => saveBill(e)} className="btn btn-primary">Save</button>
                </div>
            </form>
            <hr/>
            <Link to="/admin" className="btn btn-primary">Back to Admin Home</Link>
        </div>
  )
}

export default AddBill