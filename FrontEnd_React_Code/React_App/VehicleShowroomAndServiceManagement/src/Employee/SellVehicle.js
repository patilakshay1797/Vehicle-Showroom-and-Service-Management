import { useEffect, useState } from 'react';
import { Link, Route, useHistory } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
// import AddCustomer from './AddCustomer';
// import CustomerDetails from './CustomerDetails';
// import UpdateCustomer from './UpdateCustomer';
import DataTableExtensions from "react-data-table-component-extensions";
import "react-data-table-component-extensions/dist/index.css";
import DataTable from "react-data-table-component";
import axios from 'axios';
import moment from 'react-moment';

const SellVehicle = () => {
  const [data, setData] = useState([]);
  const[customer,setCustomer]=useState([]);
  const datetimeFormatter = (cell, row) => {
    return moment(cell).format('DD MMM YYYY hh:mm');
  }
  const columns = [
    {
      name: "ID",
      selector: (row) => row.chassisNo,
      sortable:true
    },
    {
      name: "Customer Name",
      selector: (row) => row.customer.name,
      sortable:true
    },
    {
      name: "Booking Date",
      selector: (row) => row.dateOfBooking,
      sortable:true
    },
    {
      name: "Purchasing Date",
      selector: (row) => row.dateOfPurchase,
      formatter: datetimeFormatter,
      sortable:true
      
    },
    // {
    //   name: "Booking Status",
    //   selector: (row) => row.bookStatus,
    //   sortable:true
    // },
    {
      name: "View",
      //selector : (row) => row.id,
      cell: (row) => (
        <Link to={{state:{data:row},pathname:`details/${row.chassisNo}`}} className="btn btn-link">View</Link>
      )
    },
    // {
    //   name: "update",
    //   button: true,
    //   cell: (row) => (            
    //         <Link to={{state:{data:row},pathname:`edit/${row.id}`}} className="btn btn-link">Update</Link>
    //   )
    // },
    {
      name: "Purchase Vehicle",
      button: true,
      cell: (row) => (
            // <button className="btn btn-link"  onClick={deleteVehicle(row.chassisNo)}>Delete</button>
            <Link to={{state:{data:row},pathname:`purchaseVehicle/${row.chassisNo}`}} className="btn btn-link">Purchase Vehicle</Link>
      )
    }
  ]
  const init = () => {
    axios.get("http://localhost:8080/employee/getBookedVehicles",
    {
      headers : {
        'Authorization' : 'Bearer ' + localStorage.getItem('JWTtoken')
      }
    })
      .then((response) => {
        console.log(response.data);
        setData(response.data);
        setCustomer(response.data.customer)

      })
      .catch((error) => {
        console.log(error);
      })
     //setData(fetchedData);
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
    <h3>List of Booked Vehicles</h3>
    <hr/>
  
    <DataTableExtensions {...tableData}>
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

export default SellVehicle