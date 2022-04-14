import React from 'react'
import { Link, Route, Routes } from 'react-router-dom'
import AvailVehicleDetails from './AvailVehicleDetails'
import AvailVehicleList from './AvailVehicleList'
import CustomerBookService from './CustomerBookService'
import { useNavigate } from 'react-router-dom'
import BookVehicle from './BookVehicle'
import BookTestDrive from './BookTestDrive'

const Customer = () => {

  const navigate = useNavigate();
  const checkAuth = (e) => {
    if(localStorage.getItem("JWTtoken") === null){
        navigate("/customer/login")
    }
    else{
        navigate("CustomerBookService");
    }
  }

  return (
    
      <div className="row">
       <div className="col-2 box-height side-panel p-5 vh-100 bg-secondary" >
           <nav className="nav flex-column">
               <Link to='availVehicleList' className="btn btn-light mb-3" /*onClick={() => {setRightComponent(<EmployeeList />)}}*/>Vehicles </Link>
               <Link to='customerBookVehicle' className="btn btn-light mb-3" /*onClick={() => {setRightComponent(<VehicleList />)}}*/>Book Vehicle</Link>
               <Link to='customerBookService' className="btn btn-light mb-3" /*onClick={(e) => checkAuth(e)}*/>Book Service</Link>
               <Link to='bookTestDrive' className="btn btn-light mb-3" /*onClick={() => {setRightComponent(<ServicesList />)}}*/>Book Test Drive</Link>
               {/* <button className="btn btn-light mb-3" onClick={() => {setRightComponent(<BillingList />)}}>Biling Section</button> */}
               {/* <Link to='/' className="btn btn-danger mb-3 ml-5 col-2 fixed-bottom" >Log Out</Link>       */}
           </nav>
       </div>
       <div className="col-10 box-height">
        <Routes>
          <Route path='availVehicleList' element={<AvailVehicleList />}></Route>
          <Route path='availVehicleList/book/:id' element={<BookVehicle />}></Route>
          <Route path='availVehicleList/details/:id' element={<AvailVehicleDetails />}></Route>
          <Route path='customerBookVehicle' element={<BookVehicle />}></Route>
          <Route path='customerBookService' element={<CustomerBookService />}></Route>
          <Route path='bookTestDrive' element={<BookTestDrive />}></Route>
        </Routes>
       </div>
    </div>
  )
}

export default Customer