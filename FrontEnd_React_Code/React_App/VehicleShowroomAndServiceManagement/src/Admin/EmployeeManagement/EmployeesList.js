import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import DataTable from "react-data-table-component";
import DataTableExtensions from "react-data-table-component-extensions";
import "react-data-table-component-extensions/dist/index.css";
import axios from 'axios';

const EmployeeList = () => {

  const [data, setData] = useState([]);

  const columns = [
    {
      name: "ID",
      selector: (row) => row.id,
      sortable: true
    },
    {
      name: "Employee Name",
      selector: (row) => row.name,
      sortable: true
    },
    {
      name: "Address",
      selector: (row) => row.address.city,
      sortable: true
    },
    {
      name: "Department",
      selector: (row) => row.departmentName,
      sortable: true
    },
    {
      name: "View",
      selector: (row) => row.id,
      cell: (row) => (

        <Link to={{ state: { data: row }, pathname: `details/${row.id}` }} className="btn btn-link">View</Link>

      )
    },
    {
      name: "update",
      button: true,
      cell: (row) => (

        <Link to={{ state: { data: row }, pathname: `edit/${row.id}` }} className="btn btn-link">Update</Link>
      )
    },
    {
      name: "Delete",
      button: true,
      cell: (row) => (

        <Link to={{ state: { data: row }, pathname: `delete/${row.id}` }} className="btn btn-link">Delete</Link>
      )
    }
  ]

  const init = () => {
    axios.get("http://localhost:8080/admin/employeeList",
      {
        headers: {
          'Authorization': 'Bearer ' + localStorage.getItem('JWTtoken')
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
      <h3>List of Employees</h3>
      <hr />

      <Link to="addEmployee" className="btn btn-primary mb-2">Add Employee</Link>
      <div>

        <DataTableExtensions {...tableData}
          export={false}
          print={false}
        >
          <DataTable
            columns={columns}
            data={data}
            noHeader
            defaultSortField="id"
            //sortIcon={<SortIcon />}
            defaultSortAsc={true}
            pagination
            highlightOnHover
          //dense
          />
        </DataTableExtensions>
      </div>
    </div>
  );
}

export default EmployeeList;
