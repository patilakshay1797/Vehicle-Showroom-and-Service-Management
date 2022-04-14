import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Link, useNavigate, useParams } from 'react-router-dom';

const BookedServiceDetails = () => {


  const [responseData, setResponseData] = useState([]);
  //const[responseAddress, setResponseAddress] = useState([]);
  const [serviceData, setServiceData] = useState([]);
  const { id } = useParams();
  const navigate = useNavigate();

  const init = () => {
    axios.get(`http://localhost:8080/employee/bookedServiceDetails/${id}`,
      {
        headers: {
          'Authorization': 'Bearer ' + localStorage.getItem('JWTtoken')
        }
      })
      .then((response) => {
        console.log(response.data);
        setResponseData(response.data);
        console.log(response.data.types);
        //setResponseAddress(response.data.address)
        //console.log(response.data.address.city);
        setServiceData(response.data.types)
        //    {serviceData.map((data, idx) => (
        //     ))}
      })
  }


  useEffect(() => {
    init();
  }, [])

  return (

    <div className="container bootstrap snippets bootdey bg-white">
      <div className="panel-body inf-content">
        <div className="row">
          <div className="col-md-3">
            <p></p>
          </div>
          <div className="col-md-10">
            <strong>Information</strong><p></p>
            <div className="table-responsive">
              <table className="table table-user-information">
                <tbody>
                  <tr>
                    <td>
                      <strong>
                        Customer Name
                      </strong>
                    </td>
                    <td class="text-primary">
                      {responseData.customerName}
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <strong>
                        Vehicle Registration No
                      </strong>
                    </td>
                    <td className="text-primary">
                      {responseData.vehicleNo}
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <strong>
                        Vehicle Model Name
                      </strong>
                    </td>
                    <td className="text-primary">
                      {responseData.modelName}
                    </td>
                  </tr>

                  {/* <tr>
                      <td>
                        <strong>
                          Vehicle Chassis No
                        </strong>
                      </td>
                      <td className="text-primary">
                        {responseData.chassisNo}
                      </td>
                    </tr> */}
                  <tr>
                    <td>
                      <strong>
                        Services Included
                      </strong>
                    </td>
                    <td className="text-primary">
                      {serviceData.map((data, idx) => (
                        <div>
                          <table>
                            <tbody>
                              <tr><td>Service Name</td>
                                <td className="text-primary"><h6 >{data.serviceName}</h6></td></tr>
                              <tr><td>Service Description</td>
                                <td className="text-primary"> <h6 >{data.serviceDesciption}</h6></td></tr>
                              <tr><td>Service charges</td>
                                <td className="text-primary"> <h6 >{data.amount}</h6></td></tr>
                            </tbody>
                          </table>
                        </div>
                      ))}
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <strong>
                        Date of Servicing
                      </strong>
                    </td>
                    <td className="text-primary">
                      {responseData.serviceBookingDate}
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <strong>
                        Date of Booking
                      </strong>
                    </td>
                    <td className="text-primary">
                      {responseData.servicingDate}
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
      <button className='btn btn-primary' >Send Invoice</button>
      <button onClick={() => navigate(-1)} className="btn btn-primary float-right ">Back</button>
    </div>

  )
}

export default BookedServiceDetails