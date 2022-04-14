import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
//import { Link } from 'react-router-dom';
import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import axios from "axios";

const CustomerDetails = (props) => {
  const [responseData, setResponseData] = useState([]);
  const [responseAddress, setResponseAddress] = useState([]);
  const { id } = useParams();

  const init = () => {
    axios
      .get(`http://localhost:8080/admin/getCustomer/${id}`,
      {
        headers : {
          'Authorization' : 'Bearer ' + localStorage.getItem('JWTtoken')
        }
      })
      .then((response) => {
        console.log(response.data);
        setResponseData(response.data);
        setResponseAddress(response.data.address);
        console.log(response.data.address.city);
      });
  };

  useEffect(() => {
    init();
  }, []);

  return (
    <div className="container bootstrap snippets bootdey bg-white">
      <div className="panel-body inf-content">
        <div className="row">
          <div className="col-md-3">
            <p></p>
          </div>
          <div className="col-md-10">
            <strong>Information</strong>
            <p></p>
            <div className="table-responsive">
              <table className="table table-user-information">
                <tbody>
                  <tr>
                    <td>
                      <strong>Customer ID</strong>
                    </td>
                    <td class="text-primary">{responseData.id}</td>
                  </tr>
                  <tr>
                    <td>
                      <strong>Customer Name</strong>
                    </td>
                    <td className="text-primary">{responseData.name}</td>
                  </tr>
                  <tr>
                    <td>
                      <strong>Customer Password</strong>
                    </td>
                    <td className="text-primary">{responseData.password}</td>
                  </tr>
                  <tr>
                    <td>
                      <strong>Customer Email ID</strong>
                    </td>
                    <td className="text-primary">{responseData.emailId}</td>
                  </tr>
                  <tr>
                    <td>
                      <strong>Customer Contact No</strong>
                    </td>
                    <td className="text-primary">
                      {responseData.contactNumber}
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <strong>Customer Date Of Registration</strong>
                    </td>
                    <td className="text-primary">
                      {responseData.dateOfRegistration}
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <strong>Customer Address</strong>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <strong>City</strong>
                    </td>
                    <td className="text-primary">{responseAddress.city}</td>
                  </tr>
                  <tr>
                    <td>
                      <strong>State</strong>
                    </td>
                    <td className="text-primary">{responseAddress.state}</td>
                  </tr>
                  <tr>
                    <td>
                      <strong>Country</strong>
                    </td>
                    <td className="text-primary">{responseAddress.country}</td>
                  </tr>
                  <tr>
                    <td>
                      <strong>Zip-Code</strong>
                    </td>
                    <td className="text-primary">{responseAddress.zipCode}</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
      <Link to="/admin/customerList" className="btn btn-primary float-right ">
        Back
      </Link>
    </div>
  );
};

export default CustomerDetails;
