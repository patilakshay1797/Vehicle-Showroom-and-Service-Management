import { useEffect, useState } from 'react';
import { Link, Route, useHistory } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import DataTableExtensions from "react-data-table-component-extensions";
import "react-data-table-component-extensions/dist/index.css";
import DataTable from "react-data-table-component";
import axios from 'axios';
import moment from 'react-moment';

const BillingList = () => {
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
      name: "Type of Inoice",
      selector: (row) => row.typeofInvoice,
      sortable:true
    },
    {
      name: "Date of Invoice",
      selector: (row) => row.dateOfInvoice,
      formatter: datetimeFormatter,
      sortable:true
    },
    {
      name: "Amount of Invoice",
      selector: (row) => row.totalCost,
      
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
      name: "Delete",
      button: true,
      cell: (row) => (
            <Link to={{state:{data:row},pathname:`delete/${row.id}`}} className="btn btn-link">Delete</Link>
      )
    }
  ]

  const init = () => {
    axios.get("http://localhost:8080/admin/invoiceList",
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
    <h3>List of Invoices</h3>
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

export default BillingList;
