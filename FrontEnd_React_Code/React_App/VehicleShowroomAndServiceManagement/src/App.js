// import Admin from './pages/Admin';
// import Home from './Home/Home';
import { BrowserRouter, Routes, Route, useNavigate } from 'react-router-dom';
import Layout from './Home/Layout';
import Navbar from './Home/Navbar';
import Register from './Home/RegisterAndLogin/Register';
// import Admin from './Home/RegisterAndLogin/Admin';
import Admin from './Admin/Admin';

import Login from './Home/RegisterAndLogin/Login';
import HomePage from './Home/HomePage';
import { useEffect, useState } from 'react';

import CustomerList from './Admin/CustomerManagement/CustomerList'
import AddCustomer from './Admin/CustomerManagement/AddCustomer'
import CustomerDetails from './Admin/CustomerManagement/CustomerDetails'
import UpdateCustomer from './Admin/CustomerManagement/UpdateCustomer'
import Addcustomer from './Admin/CustomerManagement/AddCustomer';
import DeleteCustomer from './Admin/CustomerManagement/DeleteCustomer';

import VehicleList from './Admin/VehicleManagement/VehicleList'
import AddVehicle from './Admin/VehicleManagement/AddVehicle'
import VehicleDetails from './Admin/VehicleManagement/VehicleDetails';
import UpdateVehicle from './Admin/VehicleManagement/UpdateVehicle';
import DeleteVehicle from './Admin/VehicleManagement/DeleteVehicle';

import AddEmployee from './Admin/EmployeeManagement/AddEmployee';
import EmployeeList from './Admin/EmployeeManagement/EmployeesList';
import EmployeeDetails from './Admin/EmployeeManagement/EmployeeDetails';
import UpdateEmployee from './Admin/EmployeeManagement/UpdateEmployee';
import DeleteEmployee from './Admin/EmployeeManagement/DeleteEmployee';


import ServicesList from './Admin/serviceSection/ServicesList';
import BookService from './Admin/serviceSection/BookService';
import ServiceTypeList from './Admin/serviceSection/ServiceTypeList';
import UpdateService from './Admin/serviceSection/UpdateService';
import AddServiceTypeDetails from './Admin/serviceSection/ServiceTypeSection/AddServiceTypeDetails';
import Customer from './Customer/Customer';
import AvailVehicleList from './Customer/AvailVehicleList';
import AboutUs from './Home/NavBarPages/AboutUs';
import ContactUs from './Home/NavBarPages/ContactUs';
import AddBulkVehicle from './Admin/VehicleManagement/AddBulkVehicle';
import CustomerBookService from './Customer/CustomerBookService';
import Employee from './Employee/Employee';
import BookVehicleForCustomer from './Employee/BookVehicleForCustomer';
import BookedServices from './Employee/BookedServices';
import SellVehicle from './Employee/SellVehicle';
import BookVehicle from './Customer/BookVehicle';
import BookTestDrive from './Customer/BookTestDrive';
import BookedServiceDetails from './Employee/BookedServiceDetails';
import AddServiceTypesToServices from './Employee/AddServiceTypesToServices';
import ServiceDetails from './Admin/serviceSection/ServiceDetails';
import ForgotPassword from './Home/RegisterAndLogin/ForgotPassword';

function App() {
  const [auth, setAuth] = useState(localStorage.getItem('JWTtoken'));
  const [authTrue, setAuthTrue] = useState();

  //setAuth(localStorage.getItem('JWTtoken'));
  // const authent = () => {
  //   setAuth(localStorage.getItem('JWTtoken'));
  //   console.log(auth);
  // }
  useEffect(() => {
    // setAuth(localStorage.getItem('JWTtoken'))
    if (localStorage.getItem('JWTtoken')) {
      setAuth(localStorage.getItem('JWTtoken'));
      setAuthTrue(true);
    }
    else {
      setAuthTrue(false);
    }
    console.log("set token");
    console.log(auth)
    // return() => {
    //   localStorage.removeItem('JWTtoken');
    // }
  })
  return (

    <BrowserRouter>
      <Navbar authenticate={auth} />
      <Routes>

        <Route path='/' exact element={<HomePage />}></Route>
        <Route path='contactUs' element={<ContactUs />}></Route>
        <Route path='aboutUs' element={<AboutUs />}></Route>
        <Route path='customer/login' element={<Login access={auth} />}></Route>
        <Route path='customer/registration' element={<Register />}></Route>
        <Route path='forgotPassword' element={<ForgotPassword />}></Route>

        {/* ADMIN FLOW */}
        <Route path='admin/*' element={<Admin />}>

          {/* Customer Management Flow */}
          {/* <Route path='login' element={<Login acces />}></Route> */}
          <Route path='customerList' element={<CustomerList />}>
            {/* <Route path='addCustomer' element={<Addcustomer />}></Route>
            <Route path='details' >
              <Route path=':id' element={<CustomerDetails />}></Route>
            </Route>
            <Route path='edit'>
              <Route path=':id' element={<UpdateCustomer />}></Route>
            </Route>
            <Route path='delete'>
              <Route path=':id' element={<DeleteCustomer />}></Route>
            </Route> */}
          </Route>

          {/* Vehicle Management Flow */}
          <Route path='vehicleList' element={<VehicleList />}>
            {/* <Route path='addVehicleModel' element={<AddVehicleModel />}></Route> */}
            {/* <Route path='vehicleModelList' element={<VehicleModelList />}></Route> */}
            {/* <Route path='addVehicle' element={<AddVehicle />}></Route> */}
            {/* <Route path='addBulkVehicle' element={<AddBulkVehicle />}></Route> */}
            {/* <Route path='details'>
              <Route path=':id' element={<VehicleDetails />}></Route>
            </Route> */}
            {/* <Route path='edit'>
              <Route path=':id' element={<UpdateVehicle />}></Route>
            </Route> */}
            {/* <Route path='delete'>
              <Route path=':id' element={<DeleteVehicle />}></Route>
            </Route> */}
          </Route>

          {/* Employee Management Flow */}
          <Route path='employeeList' element={<EmployeeList />}>
            {/* <Route path='addEmployee' element={<AddEmployee />}></Route>
            <Route path='details'>
              <Route path=':id' element={<EmployeeDetails />}></Route>
            </Route>
            <Route path='edit'>
              <Route path=':id' element={<UpdateEmployee />}></Route>
            </Route>
            <Route path='delete'>
              <Route path=':id' element={<DeleteEmployee />}></Route>
            </Route> */}
          </Route>


          {/* Service Management Flow */}
          <Route path='servicesList' element={<ServicesList />}>
            <Route path='addService' element={<BookService />}></Route>
            <Route path='serviceTypes' element={<ServiceTypeList />}>
              <Route path='addServiceType' element={<AddServiceTypeDetails />}></Route>
            </Route>
            <Route path='details'>
              <Route path=':id' element={<ServiceDetails />}></Route>
            </Route>
             <Route path='edit'>
              <Route path=':id' element={<UpdateEmployee />}></Route>
            </Route>
             <Route path='delete'>
              <Route path=':id' element={<DeleteEmployee />}></Route>
          </Route>
          </Route>
        </Route>
        {/* ADMIN FLOW Ended */}

        {/* CUSTOMER FLOW */}
        <Route path='customer' element={<Customer />}>
          <Route path='availVehicleList' element={<AvailVehicleList />}>
            <Route path='details'>
              <Route path=':id' element={<UpdateService />}></Route>
            </Route>
          </Route>
          <Route path='customerBookVehicle' element={<BookVehicle />}></Route>
          <Route path='customerBookService' element={<CustomerBookService authenticate={authTrue} />}></Route>
          <Route path='bookTestDrive' element={<BookTestDrive />}></Route>
        </Route>


        {/* EMPLOYEE FLOW */}
        <Route path='employee' element={<Employee />}>
          <Route path='addCustomer' element={<Addcustomer />}></Route>
          <Route path='employeeBookVehicle' element={<BookVehicleForCustomer />}></Route>
          <Route path='bookedServiceList' element={<BookedServices />}>
            <Route path='details'>
              <Route path=':id' element={<BookedServiceDetails />}></Route>
            </Route>
            <Route path='addServices'>
              <Route path=':id' element={<AddServiceTypesToServices />}></Route>
            </Route>
          </Route>
          <Route path='sellVehicle' element={<SellVehicle />}></Route>
        </Route>
      </Routes>

      {/* <Routes>
      <Route path='/' element={<Home />} ></Route>
      <Route path='about' element={<About />}></Route>
      <Route path='admin/empMag' element={<Admin/>}></Route>
      <Route path='login' element={<Login />}></Route>
      <Route path='register' element={<Register />}></Route>
      <Route path='admin' element={<Admin />}></Route>
      <Route path='admin/empMag' element={<EmployeeManagement />}></Route>
      <Route path='admin/vehMag' element={<VehicleManagemenet />}></Route>
      <Route path='admin/custMag' element={<CustomerList />}></Route>
      <Route path='admin/servSec' element={<ServicesList />}></Route>

      Customer management
      
      <Route path='admin/addCustomer' element={<AddCustomer />}></Route>
      <Route path='admin/customer/details/:id' element={<CustomerDetails />}></Route>
      <Route path='admin/customer/edit/:id' element={<UpdateCustomer />}></Route>

      Service Section
      <Route path='admin/addService' element={<AddService />}></Route>
      <Route path='admin/serviceDetails/:id' element={<ServiceDetails />}></Route>
      <Route path='admin/updateService/:id' element={<UpdateService />}></Route>

      Employee management
      <Route path='admin/addEmployee' element={<AddEmployee />}></Route>
      <Route path='admin/employees/details/:id' element={<EmployeeDetails />}></Route>
      <Route path='admin/employees/edit/:id' element={<UpdateEmployee />}></Route>

      Vehicle Management
      <Route path='admin/addVehicle' element={<AddVehicle />}></Route>
      <Route path='admin/vehicle/details/:id' element={<VehicleDetails />}></Route>
      <Route path='admin/vehicle/edit/:id' element={<UpdateVehicle />}></Route>
      <Route path='admin/vehicle/delete/:id' element={<DeleteVehicle />}></Route>

      Billing section
      <Route path='admin/addBillDetails' element={<AddBill />}></Route>
      <Route path='admin/bills/Details/:id' element={<BillDetails />}></Route>
      <Route path='admin/bills/edit/:id' element={<UpdateBill />}></Route>

      
      <Route path='login/customer' element={<Login />}></Route>
      <Route path='login/:user' element={<EmpAdminLogin />}></Route>
      <Route path='login/:user' element={<EmpAdminLogin />}></Route>
        </Routes> */}
    </BrowserRouter>


  );
}

export default App;
