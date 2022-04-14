import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

const VehicleDetails = (props) => {
  const [responseData, setResponseData] = useState([]);
  const { id } = useParams();

  const init = () => {
    axios
      .get(`http://localhost:8080/admin/getVehicle/${id}`,
        {
          headers: {
            'Authorization': 'Bearer ' + localStorage.getItem('JWTtoken')
          }
        }
      )
      .then((response) => {
        console.log(response.data);
        setResponseData(response.data);
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
                      <strong>Vehicle ID</strong>
                    </td>
                    <td class="text-primary">{id}</td>
                  </tr>
                  <tr>
                    <td>
                      <strong>Model Name</strong>
                    </td>
                    <td className="text-primary">{responseData.modelName}</td>
                  </tr>
                  <tr>
                    <td>
                      <strong>Booking Date</strong>
                    </td>
                    <td className="text-primary">
                      {responseData.dateOfBooking}
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <strong>Vehicle Type</strong>
                    </td>
                    <td className="text-primary">{responseData.vehicleType}</td>
                  </tr>
                  <tr>
                    <td>
                      <strong>Engine Number</strong>
                    </td>
                    <td className="text-primary">{responseData.engineNo}</td>
                  </tr>
                  <tr>
                    <td>
                      <strong>Vehicle color</strong>
                    </td>
                    <td className="text-primary">{responseData.color}</td>
                  </tr>

                  <tr>
                    <td>
                      <strong>Vehicle price</strong>
                    </td>
                    <td className="text-primary">{responseData.price}</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
      <Link to="/admin/vehicleList" className="btn btn-primary float-right ">
        Back
      </Link>
    </div>
  );
};
export default VehicleDetails;
