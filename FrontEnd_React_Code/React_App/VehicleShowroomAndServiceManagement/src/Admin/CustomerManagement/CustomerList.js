import { useEffect, useState } from 'react';
import { Link, Route, useHistory } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import DataTableExtensions from "react-data-table-component-extensions";
import "react-data-table-component-extensions/dist/index.css";
import DataTable from "react-data-table-component";
import axios from 'axios';
import moment from 'react-moment';

const CustomerList = () => {

  const [data, setData] = useState([]);
  const datetimeFormatter = (cell, row) => {
    return moment(cell).format('DD MMM YYYY hh:mm');
  }
  const columns = [
    {
      name: "ID",
      selector: (row) => row.id,
      sortable:true
    },
    {
      name: "Customer Name",
      selector: (row) => row.name,
      sortable:true
    },
    {
      name: "Location",
      selector: (row) => row.address.city,
      sortable:true
    },
    {
      name: "Registration_Date",
      selector: (row) => row.dateOfRegistration,
      formatter: datetimeFormatter,
      sortable:true
      
    },
    {
      name: "View",
      //selector : (row) => row.id,
      cell: (row) => (
        <Link to={{state:{data:row},pathname:`details/${row.id}`}} className="btn btn-link">View</Link>
      )
    },
    {
      name: "update",
      button: true,
      cell: (row) => (            
            <Link to={{state:{data:row},pathname:`edit/${row.id}`}} className="btn btn-link">Update</Link>
      )
    },
    {
      name: "Delete",
      button: true,
      cell: (row) => (
            <Link to={{state:{data:row},pathname:`delete/${row.id}`}} className="btn btn-link">Delete</Link>
      )
    }
  ]
 

  const init = () => {
    axios.get("http://localhost:8080/admin/customerList",
    {
      headers : {
        'Authorization' : 'Bearer ' + localStorage.getItem('JWTtoken')
      }
    })
      .then((response) => {
        console.log(response.data);
        setData(response.data);
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
      <h3>List of Customers</h3>
      <hr/>
      <Link to="addCustomer" className="btn btn-primary mb-2">Add Customer</Link>
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

export default CustomerList;

