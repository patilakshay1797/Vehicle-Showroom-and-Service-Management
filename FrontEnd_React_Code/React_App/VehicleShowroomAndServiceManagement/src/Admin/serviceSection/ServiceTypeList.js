import React from 'react'
import { useEffect, useState } from 'react';
import DataTableExtensions from "react-data-table-component-extensions";
import "react-data-table-component-extensions/dist/index.css";
import DataTable from "react-data-table-component";
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

const ServiceTypeList = () => {

    const [data, setData] = useState([]);
    const navigate = useNavigate();
   
    const columns = [
      
      {
        name: "Service Name",
        selector: (row) => row.serviceName,
        sortable:true,
      
      },
      {
        name: "Servicing Desciption",
        selector: (row) => row.serviceDesciption,
        sortable:true
      },
      {
        name: "Charges",
        selector: (row) => row.amount,
      
        sortable:true,
      
      },
    
      {
        name: "View",
        cell: (row) => (
          <Link to={{state:{data:row},pathname:`details/${row.id}`}} className="btn btn-link mr-5">View</Link>
        )
       
      },
      {
        name: "update",
        button: true,
        cell: (row) => (            
              <Link to={{state:{data:row},pathname:`service/edit/${row.id}`}} className="btn btn-link">Update</Link>
        )
       
      },
      {
        name: "Delete",
        button: true,
        cell: (row) => (
              <Link to={{state:{data:row},pathname:`service/delete/${row.id}`}} className="btn btn-link">Delete</Link>
        )
      }
    ]
    const tableData = {
      columns,
      data
    };
    const init = () => {
      axios.get("http://localhost:8080/admin/getServiceTypes",
      {
        headers : {
          'Authorization' : 'Bearer ' + localStorage.getItem('JWTtoken')
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
    {/* <div className="row"> */}
        <h3>List of Available Services In Showroom</h3>
        <hr/>
        <Link to="addServiceType" className="btn btn-primary mb-2 ml-10 float-left">Add Service Type</Link>

        <button className="btn btn-primary float-right ml-2" onClick={() => navigate(-1)}>Back</button>
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

export default ServiceTypeList