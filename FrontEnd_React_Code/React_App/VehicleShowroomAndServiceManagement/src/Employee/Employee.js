import React from 'react'
import { Link, Route, Routes } from 'react-router-dom'
import Addcustomer from '../Admin/CustomerManagement/AddCustomer'
import AddServiceTypesToServices from './AddServiceTypesToServices'
import BookedServiceDetails from './BookedServiceDetails'
import BookedServices from './BookedServices'
import BookVehicleForCustomer from './BookVehicleForCustomer'
import SellVehicle from './SellVehicle'

const Employee = () => {

    const checkUrl = () => {
        console.log(window.location.pathname);
    }

    return (
        <div className="row">
            <div className="col-3 side-panel p-5 vh-100 bg-secondary" >
                <nav className="nav flex-column">
                    <button className='btn btn-success mb-3' disabled>Welcome Employee</button>
                    <Link to='addCustomer' className="btn btn-light mb-3" /*onClick={() => {setRightComponent(<EmployeeList />)}}*/>Add Customer</Link>
                    <Link to='employeeBookVehicle' className="btn btn-light mb-3" /*onClick={() => {setRightComponent(<VehicleList />)}}*/>Book Vehicle for Customer</Link>
                    <Link to='sellVehicle' className="btn btn-light mb-3">Sell Vehicle</Link>
                    <Link to='bookedServiceList' className="btn btn-light mb-3" /*onClick={(e) => checkAuth(e)}*/>Booked Services</Link>
                    
                    {/* <button className="btn btn-light mb-3" onClick={() => {setRightComponent(<BillingList />)}}>Biling Section</button> */}
                    {/* <Link to='/' className="btn btn-danger mb-3 ml-5 col-2 fixed-bottom" >Log Out</Link>       */}
                </nav>


            </div>
            <div className="col-9 box-height">
                <Routes>
                    <Route path='addCustomer' element={<Addcustomer />}></Route>
                    <Route path='employeeBookVehicle' element={<BookVehicleForCustomer />}></Route>
                    <Route path='bookedServiceList' element={<BookedServices />}></Route>
                    <Route path='sellVehicle' element={<SellVehicle />}></Route>
                    <Route path='bookedServiceList/details/:id' element={<BookedServiceDetails />}></Route>
                    <Route path='bookedServiceList/addServices/:id' element={<AddServiceTypesToServices />}></Route>
                </Routes>
            </div>
        </div>
    )
}

export default Employee