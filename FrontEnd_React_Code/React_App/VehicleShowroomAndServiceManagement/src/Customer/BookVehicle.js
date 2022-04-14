import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { createContext } from "react";
import Payment from "./Payment";
//  const VehicleModelName=createContext();
//  const VehicleColor=createContext();
//  const CustomerID=createContext();

const BookVehicle = () => {

    const [responseData, setResponseData] = useState([]);
    //const [vehicleSpec, setVehicleSpec] = useState([]);
    const navigate = useNavigate();
    const { id } = useParams();
    const [data, setData] = useState([]);
    const [vehicleSpec, setVehicleSpec] = useState([]);
    const [image, setImage] = useState('');
    const [color, SetColor] = useState('');
    const [modelName, setModelName] = useState('');
    const [custId, SetCustID] = useState(1);
    const [submitData, setSubmitData] = useState('');
    const [bookData, setBookData] = useState();
    // const[vehicleData,setVehicleData]=useState([]);

    const bookVehicle = (e) => {
        e.preventDefault();
        const data = new FormData();
        data.append("modelName", modelName);
        data.append("color", color);
        data.append("custId", custId);
        console.log(data);
        const vehicleData = {
            'modelName': modelName,
            'color': color,
            'custId': custId
        }
        setBookData(vehicleData);
        localStorage.setItem("modelName", modelName);
        localStorage.setItem("color", color);
        localStorage.setItem("custId", custId);
        //setVehicleData(vehdata);
        console.log(bookData);
        for (var pair of data.entries()) {
            console.log(pair[0] + ', ' + pair[1]);
        }
        axios
            .post(`http://localhost:8080/customer/checkAvailabilityForBooking`, data,
                {
                    headers: {
                        'Authorization': 'Bearer ' + localStorage.getItem('JWTtoken')
                    }
                },
            )
            .then((response) => {
                console.log(response);
                console.log(response.status);
                if (response.status === 204) {
                    console.log(response.status, "Vehicle Available for Booking.....");
                    navigate("/customer/availVehicleList/payment", { state: modelName });
                    // setSubmitData("Vehicle Booked Successfully");
                }
                else {
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
        axios.get(`http://localhost:8080/admin/getVehicleModel/${id}`,
            {
                headers: {
                    'Authorization': 'Bearer ' + localStorage.getItem('JWTtoken')
                }
            }
        )
            .then((response) => {
                console.log(response.data);
                setData(response.data);
                console.log(response.data.imageName)
                setImage(response.data.imageName)
                console.log(image);
                setModelName(response.data.modelName)
                setVehicleSpec(response.data.vehicleSpecification);
            })
    }

    useEffect(() => {
        init();
    }, []);


    return (

        <div className="container bootstrap snippets bootdey bg-white">
            {/* <VehicleModelName.Provider value={modelName}>
          <VehicleColor.Provider value={color}>
              <CustomerID.Provider value={custId}>

              </CustomerID.Provider>
          </VehicleColor.Provider>
          </VehicleModelName.Provider> */}
            <div className="panel-body inf-content">
                <div className="row">
                    <div className="col-2">

                        {/* <img src={require(`../images/${image}`)} width={1000} height={600} alt="menu-img" className='img-fluid' /> */}
                    </div>
                    <div className="col-md-8">
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
                                        <td className="text-primary">{modelName}</td>
                                    </tr>
                                    <tr>
                                        <td>
                                            <strong>Quantity Available</strong>
                                        </td>
                                        <td className="text-primary">
                                            {data.quantity}
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>
                                            <strong>Segment</strong>
                                        </td>
                                        <td className="text-primary">{vehicleSpec.segment}</td>
                                    </tr>
                                    <tr>
                                        <td>
                                            <strong>Engine CC</strong>
                                        </td>
                                        <td className="text-primary">{vehicleSpec.engineCC}</td>
                                    </tr>
                                    <tr>
                                        <td>
                                            <strong>Vehicle Cylinder Info</strong>
                                        </td>
                                        <td className="text-primary">{vehicleSpec.engineCylinderinfo}</td>
                                    </tr>

                                    <tr>
                                        <td>
                                            <strong>Fuel Tank Capacity</strong>
                                        </td>
                                        <td className="text-primary">{vehicleSpec.fuelTankCapacity}</td>
                                    </tr>

                                    <tr>
                                        <td>
                                            <strong>Mileage</strong>
                                        </td>
                                        <td className="text-primary">{vehicleSpec.mileage} km/litre</td>
                                    </tr>

                                    <tr>
                                        <td>
                                            <strong>Seating Capacity</strong>
                                        </td>
                                        <td className="text-primary">{vehicleSpec.seatingCapacity}</td>
                                    </tr>

                                    <tr>
                                        <td>
                                            <strong>Transmission Type</strong>
                                        </td>
                                        <td className="text-primary">{vehicleSpec.transmission}</td>
                                    </tr>

                                    <tr>
                                        <td>
                                            <strong>Vehicle Base price</strong>
                                        </td>
                                        <td className="text-primary">{data.price}</td>
                                    </tr>
                                    <tr>
                                        <td>
                                            <strong>select Vehicle Color</strong>
                                        </td>
                                        <td >
                                            <div className="form-check" onChange={(e) => SetColor(e.target.value)}>
                                                {/* <div> */}
                                                <input className="form-check-input" type="radio" value="red" name="color" />RED<p />
                                                <input className="form-check-input" type="radio" value="white" name="color" />WHITE<p />
                                                <input className="form-check-input" type="radio" value="blue" name="color" />BLUE<p />
                                                <input className="form-check-input" type="radio" value="black" name="color" />BLACK<p />
                                            </div>
                                        </td>
                                    </tr>

                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>


            <button className="btn btn-primary float-left" onClick={() => navigate(-1)}>
                Back
            </button>
            <button className="btn btn-primary float-right" onClick={(e) => bookVehicle(e)}>
                Proceed to Book
            </button>
            <div className="text-center text-danger"><strong> {submitData}</strong></div>
        </div>
    )
}

export default BookVehicle
// export {VehicleModelName,VehicleColor,CustomerID};