import axios from 'axios';
import React, { useEffect, useState } from 'react'
import DataTable from 'react-data-table-component';
import DataTableExtensions from "react-data-table-component-extensions";
import { Link, useNavigate } from 'react-router-dom';

const VehicleModelList = () => {

    const [data, setData] = useState([]);
    const navigate = useNavigate();

    const columns = [

        {
            name: "Model Name",
            selector: (row) => row.modelName,
            sortable: true
        },
        {
            name: "Quantity",
            selector: (row) => row.quantity,
            sortable: true
        },
        {
            name: "Segment",
            selector: (row) => row.vehicleSpecification.segment,
            sortable: true
        },
        {
            name: "Base Price",
            selector: (row) => row.basePrice,
            sortable: true
        },
        {
            name: "View",
            //selector : (row) => row.id,
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

    const tableData = {
        columns,
        data
    };


    const init = () => {
        axios.get("http://localhost:8080/admin/getModelList",
            {
                headers: {
                    'Authorization': 'Bearer ' + localStorage.getItem('JWTtoken')
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
        //setData(fetchedData);
    }

    useEffect(() => {
        init();
    }, []);


    return (
        <div>
            <h3>List of Vehicle Models</h3>
            <hr />
            <Link to="addVehicleModel" className="btn btn-primary mb-2 ml-2">Add Vehicle Model</Link>
            <button className='btn btn-primary float-right mr-3' onClick={() => navigate(-1)}>Back to Vehicle List</button>
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
    )
}

export default VehicleModelList