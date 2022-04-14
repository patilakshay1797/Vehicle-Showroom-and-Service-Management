import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import DataTableExtensions from "react-data-table-component-extensions";
import "react-data-table-component-extensions/dist/index.css";
import DataTable from "react-data-table-component";
import axios from 'axios';

const VehicleList = () => {
  

  const [Vehicles, setVehicles] = useState([]);
  const [data, setData] = useState([]);

  const columns = [
    {
      name: "Chassis Number",
      selector: (row) => row.chassisNo,
      sortable:true
    },
    {
      name: "Model Name",
      selector: (row) => row.modelName,
      sortable:true
    },
    {
      name: "Vehicle Type",
      selector: (row) => row.vehicleType,
      sortable:true
    },
    {
      name: "Price",
      selector: (row) => row.price,
      sortable:true
    },
    {
      name: "View",
      cell: (row) => (
        <Link to={{state:{data:row},pathname:`details/${row.chassisNo}`}} className="btn btn-link">View</Link>
      )
    },
    {
      name: "update",
      button: true,
      cell: (row) => (            
            <Link to={{state:{data:row},pathname:`edit/${row.chassisNo}`}} className="btn btn-link">Update</Link>
      )
    },
    {
      name: "Delete",
      button: true,
      cell: (row) => (
            <Link to={{state:{data:row},pathname:`delete/${row.chassisNo}`}} className="btn btn-link">Delete</Link>
      )
    }
  ]

  const deleteVehicle = (chassisNo) => {
    console.log(chassisNo);
  }
  const init = () => {
    axios.get("http://localhost:8080/admin/vehicleList",
        {
          headers : {
            'Authorization' : 'Bearer ' + localStorage.getItem('JWTtoken')
          }
        }
      )
      .then((response) => {
        console.log(response);
        setData(response.data);
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
      <h3>List of Vehicle</h3>
      <hr/>
      <Link to="vehicleModelList" className='btn btn-primary mb-2'>Vehicle Model List</Link>
    
      <Link to="addBulkVehicle" className='btn btn-primary mb-2 ml-2'>Add Vehicle List</Link>

      <DataTableExtensions {...tableData}
        export={false}
        print={false}>
          <DataTable 
            columns={columns}
            data={data}
            //noHeader
            defaultSortField="id"
            //sortIcon={<sortIcon />}
            defaultSortAsc={true}
            pagination
            highlightOnHover
            //dense
            />
        </DataTableExtensions>
    </div>
  );
}

export default VehicleList;
