import React from 'react'
import { Link, Route, Routes } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import CustomerList from './CustomerManagement/CustomerList';
import ServicesList from './serviceSection/ServicesList';
import { useState } from 'react';

import EmployeeList from './EmployeeManagement/EmployeesList';
import VehicleList from './VehicleManagement/VehicleList';
import BillingList from './BillingSection/BillingList';
import Addcustomer from './CustomerManagement/AddCustomer';
import CustomerDetails from './CustomerManagement/CustomerDetails';
import DeleteCustomer from './CustomerManagement/DeleteCustomer';
import UpdateCustomer from './CustomerManagement/UpdateCustomer';
import AddVehicle from './VehicleManagement/AddVehicle';
import VehicleDetails from './VehicleManagement/VehicleDetails';
import UpdateVehicle from './VehicleManagement/UpdateVehicle';
import DeleteVehicle from './VehicleManagement/DeleteVehicle';
import AddEmployee from './EmployeeManagement/AddEmployee';
import EmployeeDetails from './EmployeeManagement/EmployeeDetails';
import UpdateEmployee from './EmployeeManagement/UpdateEmployee';
import DeleteEmployee from './EmployeeManagement/DeleteEmployee';
import BookService from './serviceSection/BookService';
import ServiceDetails from './serviceSection/ServiceDetails';
import UpdateService from './serviceSection/UpdateService';
import ServiceTypeList from './serviceSection/ServiceTypeList';
import AddServiceTypeDetails from './serviceSection/ServiceTypeSection/AddServiceTypeDetails';
import AddBulkVehicle from './VehicleManagement/AddBulkVehicle';
import VehicleModelList from './VehicleManagement/VehicleModelManagement/VehicleModelList';
import AddVehicleModel from './VehicleManagement/VehicleModelManagement/AddVehicleModel';
import VehicleModelDetails from './VehicleManagement/VehicleModelManagement/VehicleModelDetails';
import UpdateVehicleModel from './VehicleManagement/VehicleModelManagement/UpdateVehicleModel';
import DeleteVehicleModel from './VehicleManagement/VehicleModelManagement/DeleteVehicleModel';
// import 
//import './Admin.css'

const Admin = () => {

  const [rightComponent,setRightComponent] = useState()

  return (
    // <div className='container container-table'>
    //   <div className='row verticle-center-row'>
    //     <div className='"text-center col-md-4 col-md-offset-4'>
    //       <h5>Welcome ADMIN</h5>
    //       <Link to='/admin/empMag'>Emp Management</Link> <br />
    //       <Link to='/admin/vehMag'>Vehicle Management</Link> <br />
    //       <Link to='/admin/custMag'>Customer Management</Link> <br />
    //       <Link to='/admin/servSec'>Service Section</Link> <br />
    //       <Link to='/bilSec'>Biling Section</Link> <br />
    //     </div>
    //   </div>
    //   </div>


      
       <div className="row">
       <div className="col-3 box-height side-panel p-5 vh-100 float-bottom bg-secondary" >
           <nav className="nav flex-column">
               <Link to='employeeList' className="btn btn-light mb-3" /*onClick={() => {setRightComponent(<EmployeeList />)}}*/>Employee Management</Link>
               <Link to='vehicleList' className="btn btn-light mb-3" /*onClick={() => {setRightComponent(<VehicleList />)}}*/>Vehicle Management</Link>
               <Link to='customerList' className="btn btn-light mb-3" /*onClick={() => {setRightComponent(<CustomerList />)}}*/>Customer Management</Link>
               <Link to='servicesList' className="btn btn-light mb-3" /*onClick={() => {setRightComponent(<ServicesList />)}}*/>Service Section</Link>
               <Link to='billinglist' className="btn btn-light mb-3" /*onClick={() => {setRightComponent(<ServicesList />)}}*/> Biling Section</Link>
               {/* <Link to='/' className="btn btn-danger mb-3 ml-5 col-2 fixed-bottom" >Log Out</Link>       */}
           </nav>


       </div>
       <div className="col-9 box-height">
               {/* {rightComponent} */}
               <Routes>
                {/* Employee Management List */}
                <Route path='employeeList' element={<EmployeeList />}></Route>
                <Route path='employeeList/addEmployee' element={<AddEmployee />}></Route>
                <Route path='employeeList/details/:id' element={<EmployeeDetails />}></Route>
                <Route path='employeeList/edit/:id' element={<UpdateEmployee />}></Route>
                <Route path='employeeList/delete/:id' element={<DeleteEmployee />}></Route>

                 {/* Vehicle Management List */}
                <Route path='vehicleList' element={<VehicleList />}></Route>
                <Route path='vehicleList/addVehicle' element={<AddVehicle />}></Route>
                <Route path='vehicleList/addBulkVehicle' element={<AddBulkVehicle />}></Route>
                <Route path='vehicleList/details/:id' element={<VehicleDetails />}></Route>
                <Route path='vehicleList/edit/:id' element={<UpdateVehicle />}></Route>
                <Route path='vehicleList/delete/:id' element={<DeleteVehicle />}></Route>
                <Route path='vehicleList/vehicleModelList' element={<VehicleModelList />}></Route>
                <Route path='vehicleList/vehicleModelList/addVehicleModel' element={<AddVehicleModel />}></Route>
                <Route path='vehicleList/vehicleModelList/details/:id' element={<VehicleModelDetails />}></Route>
                <Route path='vehicleList/vehicleModelList/edit/:id' element={<UpdateVehicleModel />}></Route>
                <Route path='vehicleList/vehicleModelList/delete/:id' element={<DeleteVehicleModel />}></Route>
                

                {/* Customer Management List */}
                <Route path='customerList' element={<CustomerList />}></Route>
                <Route path='customerList/addCustomer' element={<Addcustomer />}></Route>
                <Route path='customerList/details/:id' element={<CustomerDetails />}></Route>
                <Route path='customerList/edit/:id' element={<UpdateCustomer />}></Route>
                <Route path='customerList/delete/:id' element={<DeleteCustomer />}></Route>

                {/* Service Management List */}
                <Route path='servicesList' element={<ServicesList />}></Route>
                <Route path='servicesList/addservice' element={<BookService />}></Route>
                <Route path='servicesList/serviceTypes' element={<ServiceTypeList />}></Route>
                <Route path='servicesList/serviceTypes/addServiceType' element={<AddServiceTypeDetails />}></Route>
                <Route path='servicesList/details/:id' element={<ServiceDetails />}></Route>
                {/* <Route path='servicesList/edit/:id' element={<UpdateService />}></Route>
                <Route path='servicesList/delete/:id' element={<DeleteCustomer />}></Route> */}

                {/*Billing Management List*/}
                <Route path='billinglist' element={<BillingList/>}></Route>
               </Routes>
       </div>
   </div>
    
  )
}

export default Admin;