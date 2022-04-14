import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Navigate, useNavigate, useParams } from 'react-router-dom'
import './AddService.css'

const AddServiceTypesToServices = () => {

    const [slist, setSlist] = useState([]);
    const [msg, setMsg] = useState();
    const [isChecked, setIsChecked] = useState(false);
    const [arr, setArr] = useState([]);
    const user = localStorage.getItem("userId");
    const [btnType, setBtnType] = useState("btn btn-outline-danger heigh");
    const { id } = useParams();
    const navigate = useNavigate();

    const addServices = () => {
        console.log("in add services");
        const servicesToAdd = {
            "customerId" : user,
            "id" : id,
            "serviceTypes" : arr
        }
        console.log(servicesToAdd);

        axios.post('http://localhost:8080/employee/addServicesToBookedService', servicesToAdd,
        {
            headers : {
              'Authorization' : 'Bearer ' + localStorage.getItem('JWTtoken')
            }
          })
          .then((response) => {
              console.log(response);
              setMsg(<div className='alert alert-success' role="alert">Services Added</div>);
          })
          .catch((error) => {
              console.log(error);
              setMsg(<div className='alert alert-danger' role="alert">Services Failed to addd</div>);
          })
    }

    const handleOnChange = (e) => {
        //console.log(isChecked);
        console.log("**********************");
        console.log(e.target.value);
        console.log(arr);

        //arr.push(e.target.value);
        //setIsChecked(!isChecked);
        console.log(arr.includes(e.target.value))
        if ((arr.includes(e.target.value))) {
            setBtnType("btn btn-outline-danger heigh")
            for (var i = 0; i < arr.length; i++) {

                if (arr[i] === e.target.value) {

                    arr.splice(i, 1); 
                }
            }

        }
        else{
            setBtnType("btn btn-success heigh")
            arr.push(e.target.value);
        }
        console.log(arr);
    };

    const init = () => {
        console.log(user);
        axios.get('http://localhost:8080/employee/getAllServiceTypes',
            {
                headers: {
                    'Authorization': 'Bearer ' + localStorage.getItem('JWTtoken')
                }
            })
            .then((response) => {
                console.log(response);
                setSlist(response.data);
            })
    }

    useEffect(() => {
        init();
    }, [])

    const columns = [
        { key: 'id', name: 'ID' },
        { key: 'title', name: 'Title' }
      ];
    
    const rows = [
        { id: 0, title: 'Example' },
        { id: 1, title: 'Demo' }
    ];

    return (
        <div>
            <h4>Add Service Types To Services</h4>
            <hr />
            {msg}

            
            <table className='table table-bordered'>
                <tbody>
                    {slist.map((data, idx) => (


                        <tr key={data.id}>

                             <td><input
                                type="checkbox"
                                id="serviceType"
                                name="serviceType"
                                className="form-check-input ml-1"
                                value={data.id}
                                //checked={isChecked}
                                onChange={handleOnChange}
                            />
                            </td>

                            <td className="text-primary"><h6 className='ml-2'>{data.serviceName}</h6></td>

                            <td className="text-primary"> <h6 className='ml-1'>{data.serviceDesciption}</h6></td>

                            <td className="text-primary"> <h6 className='ml-1'>{data.amount}</h6></td>
                        </tr>
                    ))}
                </tbody>
            </table>
            <button className='btn btn-primary' onClick={() => addServices()}>Add Services</button>
            <button className='btn btn-primary float-right mr-3' onClick={() => navigate(-1)}>Back</button>
        </div>
    )
}

export default AddServiceTypesToServices