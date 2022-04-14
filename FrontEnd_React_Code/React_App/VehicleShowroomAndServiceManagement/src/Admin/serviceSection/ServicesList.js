import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import DataTableExtensions from "react-data-table-component-extensions";
import "react-data-table-component-extensions/dist/index.css";
import DataTable from "react-data-table-component";
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';

const ServicesList = () => {

  const [data, setData] = useState([]);
  const columns = [
    {
      name: "ID",
      selector: (row) => row.id,
      sortable: true
    },
    {
      name: "Customer Name",
      selector: (row) => row.customerName,
      sortable: true
    },
    {
      name: "Vehicle No",
      selector: (row) => row.vehicleNo,
      sortable: true
    },
    {
      name: "Service Booking Date",
      selector: (row) => row.serviceBookingDate,
      sortable: true
    },
    {
      name: "Servicing Date",
      selector: (row) => row.servicingDate,
      sortable: true

    },
    {
      name: "View",
      cell: (row) => (
        <Link to={{ state: { data: row }, pathname: `details/${row.id}` }} className="btn btn-link">View</Link>
      )
    },
  ]
  const tableData = {
    columns,
    data
  };
  const init = () => {
    axios.get("http://localhost:8080/admin/BookedServiceList",
      {
        headers: {
          'Authorization': 'Bearer ' + localStorage.getItem('JWTtoken')
        }
      })
      .then((response) => {
        console.log(response);
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


  return (
    <div className="container">
      <h3>List of Booked Services</h3>
      <hr />
      <Link to="serviceTypes" className="btn btn-primary">List of Available Services In Showroom</Link>
      <DataTableExtensions {...tableData}>
        <DataTable
          columns={<strong>columns</strong>}
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

export default ServicesList;
