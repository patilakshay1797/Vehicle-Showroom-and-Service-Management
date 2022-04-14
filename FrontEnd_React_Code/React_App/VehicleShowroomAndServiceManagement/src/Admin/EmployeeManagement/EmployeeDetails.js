import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";
import { useEffect } from "react";
import axios from "axios";

const EmployeeDetails = (props) => {
  const [responseData, setResponseData] = useState([]);
  const [responseAddress, setResponseAddress] = useState([]);
  const [responseBankDetails, setResponseBankDetails] = useState([]);
  const { id } = useParams();

  const init = () => {
    axios
      .get(`http://localhost:8080/admin/getEmployee/${id}`,
        {
          headers: {
            'Authorization': 'Bearer ' + localStorage.getItem('JWTtoken')
          }
        })
      .then((response) => {
        console.log(response.data);
        setResponseData(response.data);
        setResponseAddress(response.data.address);
        setResponseBankDetails(response.data.bankDetail);
        console.log(response.data.address.city);
        console.log(response.data.bankDetail.name);
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
                      <strong>Employee ID</strong>
                    </td>
                    <td class="text-primary">{responseData.id}</td>
                  </tr>
                  <tr>
                    <td>
                      <strong>Employee Name</strong>
                    </td>
                    <td className="text-primary">{responseData.name}</td>
                  </tr>
                  <tr>
                    <td>
                      <strong>Employee Password</strong>
                    </td>
                    <td className="text-primary">{responseData.password}</td>
                  </tr>
                  <tr>
                    <td>
                      <strong>Employee Email ID</strong>
                    </td>
                    <td className="text-primary">{responseData.emailId}</td>
                  </tr>
                  <tr>
                    <td>
                      <strong>Employee Contact No</strong>
                    </td>
                    <td className="text-primary">
                      {responseData.contactNumber}
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <strong>Employee Date Of Joining</strong>
                    </td>
                    <td className="text-primary">
                      {responseData.dateOfJoining}
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <strong>Employee Address</strong>
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
                  <tr>
                    <td>
                      <strong>Employee Bank Details</strong>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <strong>Bank Name</strong>
                    </td>
                    <td className="text-primary">{responseBankDetails.name}</td>
                  </tr>
                  <tr>
                    <td>
                      <strong>Bank Account Number</strong>
                    </td>
                    <td className="text-primary">
                      {responseBankDetails.accountNo}
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <strong>Bank IFSC Code</strong>
                    </td>
                    <td className="text-primary">
                      {responseBankDetails.ifscCode}
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <strong>Branch Location</strong>
                    </td>
                    <td className="text-primary">
                      {responseBankDetails.location}
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
      <Link to="/admin/employeeList" className="btn btn-primary float-right ">
        Back
      </Link>
    </div>
  );
};

export default EmployeeDetails;
