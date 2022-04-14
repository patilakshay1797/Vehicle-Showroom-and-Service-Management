import { useEffect, useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import DataTableExtensions from "react-data-table-component-extensions";
import "react-data-table-component-extensions/dist/index.css";
import DataTable from "react-data-table-component";
import axios from 'axios';
//import "./List.css";


//import employeeService from '../services/employee.service';

const AvailModelList = () => {

  const [vehicleSpec, setVehicleSpec] = useState([]);
  const [Vehicles, setVehicles] = useState([]);
  const [data, setData] = useState([]);
  const image = "honda.jpg";

  const columns = [
    {
      name: "Chassis Number",
      selector: (row) => row.chassisNo,
      sortable: true
    },
    {
      name: "Model Name",
      selector: (row) => row.modelName,
      sortable: true
    },
    {
      name: "Vehicle Type",
      selector: (row) => row.vehicleType,
      sortable: true
    },
    {
      name: "Price",
      selector: (row) => row.price,
      sortable: true
    },
    {
      name: "View",
      //selector : (row) => row.id,
      cell: (row) => (
        <Link to={{ state: { data: row }, pathname: `details/${row.chassisNo}` }} className="btn btn-link">View</Link>
      )
    },
    {
      name: "update",
      button: true,
      cell: (row) => (
        <Link to={{ state: { data: row }, pathname: `edit/${row.chassisNo}` }} className="btn btn-link">Update</Link>
      )
    },
    {
      name: "Delete",
      button: true,
      cell: (row) => (
        // <button className="btn btn-link"  onClick={deleteVehicle(row.chassisNo)}>Delete</button>
        <Link to={{ state: { data: row }, pathname: `delete/${row.chassisNo}` }} className="btn btn-link">Delete</Link>
      )
    }
  ]

  const init = () => {
    axios.get("http://localhost:8080/employee/getModelList",
      {
        headers: {
          'Authorization': 'Bearer ' + localStorage.getItem('JWTtoken')
        }
      })
      .then((response) => {
        console.log(response.data);
        setData(response.data);
        setVehicleSpec(response.data.vehicleSpecification)

      })
      .catch((error) => {
        console.log(error);
      })
  }

  useEffect(() => {
    init();
  }, []);

  const tableData = {
    columns,
    data
  };

  return (
    <div className="container">
      <h3>Vehicles in Showroom</h3>
      <hr />

      <div className='col-12 col-md-12 col-lg-12 col-xl-12 my-5'>
        <div className='row Item-inside'>
          {data.map((element) => {
            return (
              <table>

                <tr key={element.id}>
                  {/* <div className='col-12 col-md-6 col-lg-6 ing-div'> */}
                  {/* <img src={honda} alt="menu-img" className='img-fluid' /> */}
                  <div className="row">
                    <div className="col-6">
                      <td className='col-6'>
                        <Link to={`details/${element.id}`} className="photo"><img src={require(`../../images/${element.imageName}`)} width={800} height={400} alt="menu-img" className='img-fluid' /></Link>
                        <hr />
                      </td>
                    </div>
                    {/* </div> */}
                    {/* <div className='col-12 col-md-6 col-lg-6'> */}
                    <div className="col-6">
                      <td className='col-6 '>
                        <hr />
                        <h5><strong>Mahindra :</strong> {element.modelName} {element.color}</h5>
                        <h6><strong>SegMent :</strong> {element.vehicleSpecification.segment}</h6>
                        <h6><strong>Engine CC :</strong>{element.vehicleSpecification.engineCC}</h6>
                        <h6><strong>Engine Info :</strong>{element.vehicleSpecification.engineCylinderinfo}</h6>
                        <h6><strong>Transmission :</strong>{element.vehicleSpecification.transmission}</h6>
                        <h6><strong>Seating Capacity :</strong>{element.vehicleSpecification.seatingCapacity}</h6>
                        <h6><strong>Mileage :</strong>{element.vehicleSpecification.mileage} Km/litre</h6>
                        <Link to={`book/${element.id}`} className="align-center btn btn-primary">Book Vehicle</Link>
                        <h5><strong></strong></h5>
                        <hr />
                      </td>
                    </div>
                  </div>
                  {/* </div> */}
                </tr>

              </table>)
          })}
        </div>
      </div>
    </div>
  );
}

export default AvailModelList;
