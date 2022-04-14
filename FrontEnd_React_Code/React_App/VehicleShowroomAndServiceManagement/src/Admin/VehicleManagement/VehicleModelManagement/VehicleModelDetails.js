import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

const VehicleModelDetails = () => {

    const [responseData, setResponseData] = useState([]);
    const [vehicleSpec, setVehicleSpec] = useState([]);
    const navigate = useNavigate();
    const { id } = useParams();

    const init = () => {
        axios
            .get(`http://localhost:8080/admin/getVehicleModel/${id}`,
                {
                    headers: {
                        'Authorization': 'Bearer ' + localStorage.getItem('JWTtoken')
                    }
                }
            )
            .then((response) => {
                console.log(response.data);
                setResponseData(response.data);
                setVehicleSpec(response.data.vehicleSpecification);
            })
            .catch((error) => {
                console.log(error);
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
                                            <strong>Quantity Available</strong>
                                        </td>
                                        <td className="text-primary">
                                            {responseData.quantity}
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
                                        <td className="text-primary">{vehicleSpec.mileage}</td>
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
                                        <td className="text-primary">{responseData.basePrice}</td>
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
        </div>
    )
}

export default VehicleModelDetails