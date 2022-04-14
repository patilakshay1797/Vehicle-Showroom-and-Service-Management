import axios from 'axios'
import React, { useEffect, useState } from 'react'
import DataTable from "react-data-table-component";
import DataTableExtensions from "react-data-table-component-extensions";
import { Link } from 'react-router-dom';
import moment from 'react-moment';

const BookedServices = () => {

  const [data, setData] = useState([]);
  const datetimeFormatter = (cell, row) => {
    return moment(cell).format('DD MMM YYYY hh:mm');
  }

  const init = () => {
    axios.get('http://localhost:8080/employee/bookedServices')
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
  },[])

  const columns = [
    {
      name: "Service ID",
      selector: (row) => row.id,
      sortable:true
    },
    {
      name: "Customer Name",
      selector: (row) => row.customerName,
      sortable:true
    },
    {
      name: "Model Name",
      selector: (row) => row.modelName,
      sortable:true
    },
    {
      name: "Booking Date",
      selector: (row) => row.serviceBookingDate,
      sortable:true
    },
    {
      name: "Servicing Date",
      selector: (row) => row.servicingDate,
      sortable:true
    },
    {
      name: "Service Details",
      button: true,
      cell: (row) => (
            // <button className="btn btn-link"  onClick={deleteVehicle(row.chassisNo)}>Delete</button>
            <Link to={{state:{data:row},pathname:`details/${row.id}`}} className="btn btn-link">View</Link>
      )
    },
    {
      name: "Add Services",
      button: true,
      cell: (row) => (
            // <button className="btn btn-link"  onClick={deleteVehicle(row.chassisNo)}>Delete</button>
            <Link to={{state:{data:row},pathname:`addServices/${row.id}`}} className="btn btn-link">Add Services</Link>
      )
    }
    
  ]

  const tableData = {
    columns,
    data
  };

  const handleCheck = () => {
    console.log("handle check");
  }

  return (
    <div>
      <h3>List of Customers</h3>
      <hr/>
      {/* <Link to="addCustomer" className="btn btn-primary mb-2">Add Customer</Link> */}
      <DataTableExtensions {...tableData}>
          <DataTable 
            columns={columns}
            data={data}
            // selectableRows
            // selectableRowsHighlight
            //noHeader
            // onSelectedRowsChange={handleCheck}
            defaultSortField="id"
            //sortIcon={<sortIcon />}
            defaultSortAsc={true}
            pagination
            highlightOnHover
            //dense
            />
        </DataTableExtensions>
    </div>
  )
}

export default BookedServices