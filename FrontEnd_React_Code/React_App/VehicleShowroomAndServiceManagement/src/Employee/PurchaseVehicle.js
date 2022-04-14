import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";


const PurchaseVehicle = () => {
    const [responseData, setResponseData] = useState([]);
    const { id } = useParams();
    const navigate = useNavigate();
    const[price,setPrice]=useState();
    const[submitData, setSubmitData] = useState('');

    const purchaseVehicle=()=>{

      axios
          .post(`http://localhost:8080/employee/purchaseVehicle/${id}`,
              {
                  headers: {
                      'Authorization': 'Bearer ' + localStorage.getItem('JWTtoken')
                  }
              },
          )
          .then((response) => {
               console.log(response); 
               console.log(response.status);
            if(response.status === 201){
                console.log(response.status,"Vehicle Available for Booking.....");
                navigate(`/employee/sellVehicle/purchaseVehicle/invoice/${responseData.chassisNo}`);
                // setSubmitData("Vehicle Booked Successfully");
            }
            else{
                setSubmitData("Vehicle Out of Stock please try after some days");
                console.log("in else");
            }
        })
        .catch((error) => {
            console.log(error)
            console.log("in atch")
        })
  };
    
    
    const init = () => {
      axios
        .get(`http://localhost:8080/admin/getVehicle/${id}`,
        {
          headers : {
            'Authorization' : 'Bearer ' + localStorage.getItem('JWTtoken')
          }
        }
      )
        .then((response) => {
          console.log(response.data);
          setResponseData(response.data);
          setPrice(response.data.price);
        });
    };
  
    useEffect(() => {
      init();
    }, []);

    const registrationcost=price*0.04;
    const insurance=price*0.05;
    const tcstax=price*0.05;
    const total=price+registrationcost+insurance+tcstax;
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
                  <tr>
                    <td>
                      <h4>Additional Charges</h4>
                    </td>
                    <td className="text-primary">
                        <table>
                            <tbody>
                                <tr>
                                    <td><strong>Registration Charges</strong></td><td className="text-primary">{registrationcost}</td>
                                </tr>
                                <tr>
                                    <td><strong>Insurance</strong></td><td className="text-primary">{insurance}</td>
                                </tr>
                                <tr>
                                    <td><strong>TCS tax @5%</strong></td><td className="text-primary">{tcstax}</td>
                                </tr>
                            </tbody>
                        </table>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <h5>Total Cost</h5>
                    </td>
                    <td className="text-primary"><h5>{total}</h5></td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
      {/* <Link to="" className="btn btn-primary float-right ">
        Back
      </Link> */}
       <button className="btn btn-primary float-left" onClick={() => navigate(-1)}>
                Back
            </button>
             {/* <Link to={`/employee/sellVehicle/purchaseVehicle/invoice/${responseData.chassisNo}`} className="btn btn-primary float-right ">
        Continue to Purchase
      </Link> */}
       <button className="btn btn-primary float-right" onClick={() => purchaseVehicle()}>
                Continue to Purchase
            </button>
    </div>
  );
}

export default PurchaseVehicle