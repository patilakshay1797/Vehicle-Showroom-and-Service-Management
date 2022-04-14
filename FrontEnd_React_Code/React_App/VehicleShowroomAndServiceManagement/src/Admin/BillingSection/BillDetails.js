import React from 'react'
import { Link } from 'react-router-dom'

const BillDetails = (props) => {
  return (
    <div className='container'>
    <h3>Bill Details</h3>
    <hr/>
    <div>
      <h6>Bill ID :{props.id}</h6>
      <h6>Bill Type :{props.id}</h6>
      <h6>Bill Amount Per Service :{props.id}</h6>
      <h6>Bill Customer Id :{props.id}</h6>
      <h6>Bill Total Bill :{props.id}</h6>
      <h6>Bill Total Quantity :{props.id}</h6>
      </div>
      <div>
      <Link to='/admin' className="btn btn-primary" >Back to Admin Home</Link>
    </div>
    <hr />
  
</div>
  )
}

export default BillDetails