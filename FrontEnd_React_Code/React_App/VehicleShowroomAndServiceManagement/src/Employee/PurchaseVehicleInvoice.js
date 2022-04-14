import { Col, Divider, Row, Table } from 'antd';
import 'antd/dist/antd.css';
//import { useState } from 'react';
import axios from "axios";
import React, { useEffect, useState } from "react";
import html2canvas from 'html2canvas';
import jsPDF from 'jspdf';
import { useNavigate } from 'react-router-dom';
import { useParams } from 'react-router-dom';

const PurchaseVehicleInvoice = () => {
    const { id } = useParams();
    const custId=localStorage.getItem("custId");
const[data,SetData]=useState([]);
const[modelName,setModelName]=useState('');
const[color,SetColor]=useState('');
const[engineNo,setEngineNo]=useState('');
const[chassisNo,setChassisNo]=useState('');
const[price,setPrice]=useState('');
const[display,setDisplay]=useState(true);
const gst=price*0.09;
const registrationcost=price*0.04;
const insurance=price*0.05;
const tcstax=price*0.05;
var date=new Date().toLocaleDateString();
const datatosend = new FormData();
const navigate = useNavigate();
datatosend.append("custId",custId);
datatosend.append("chassisNo",id);

  const generateInvoice = () => {
    
    axios.post(`http://localhost:8080/employee/purchaseVehicleInvoice`,datatosend,
        {
            headers: {
                'Authorization': 'Bearer ' + localStorage.getItem('JWTtoken')
            }
        }
    )
        .then((response) => {
            SetData(response.data);
            setModelName(response.data.modelName);
            SetColor(response.data.color);
            setChassisNo(response.data.chassisNo);
            setEngineNo(response.data.engineNo);
            setPrice(response.data.price);
            console.log(response.data);
            setDisplay(false);
        })
}
const generateInvoicePdf=()=>{
  const input = document.getElementById('divToPrint');
  html2canvas(input)
    .then((canvas) => {
      const imgData = canvas.toDataURL('image/png');
      const pdf = new jsPDF();
      pdf.addImage(imgData, 'JPEG', 0, 0);
      // pdf.output('dataurlnewwindow');
      pdf.save("download.pdf");
      navigate("/employee");
    })
  ;
}
  
const init=()=>{}
  useEffect(() => {
      init();
  }, []);

  return (
    <div >
    { display ? (<div>
      <div className="alert alert-success" role="alert">
                  Vehicle Sold to Customer <h5>Ruhi</h5> Successfully
                </div>
                
      <button className="btn btn-primary" onClick={()=>generateInvoice()}>Generate Invoice</button>
    </div>):
    (
    <div style={{ padding: 20 }}>
      <div id="divToPrint" 
      
      className="mt4 height=100% width=100% container"
      // {...css({
      //   backgroundColor: '#f5f5f5',
      //   width: '210mm',
      //   minHeight: '297mm',
      //   marginLeft: 'auto',
      //   marginRight: 'auto'
      // })}
      >
      <Row>
        <Col span={12}>
          <Divider style={{ textAlign: 'center' }}><h4>Invoice</h4></Divider>
        </Col>
      </Row>

      <Row gutter={24} style={{ marginTop: 32 }}>
        <Col span={6}>
          <h5>Vehicle Showroom And Service Management</h5>
          <div>Pune , Maharashtra</div>
          {/* <div>Vijaya Bank Layout,</div>
          <div>Bannerghatta Road,</div> */}
          <div>India - 560076</div>
        </Col>
       
        <Col span={6} offset={2}>
          <table>
            <tr>
              <th>Invoice ID :</th>
              <td>{data.invoiceId}</td>
            </tr>
            <tr>
              <th>Invoice Date :</th>
              <td>{date}</td>
            </tr>
           
          </table>
        </Col>
      </Row>
      <Row>
<Col span={6}>
          <h5>Bill To</h5>
          <div>{data.customerName}</div>
          <div>{data.city},{data.state},</div>
          <div>{data.country}-{data.zipCode}</div>
          <div>{data.emailId}</div>
          <div>{data.contactNumber}</div>
        </Col>
</Row>
      {/* <Row style={{ marginTop: 48 }}>
        <div>Bill To: <strong>{data.customerName}</strong></div>
        <div>{data.city}</div>
        <div>{data.state}</div><p></p>
        <div>{data.country}-{data.zipCode}</div><p></p>
        <div>{data.emailId}</div><p></p>
        <div>{data.contactNumber}</div><p></p>
        <Col span={8}>
          <h3>Bill To</h3>
          <div>{data.customerName}</div>
          <div>{data.city},{data.state},</div>
          <div>{data.country}-{data.zipCode}</div>
          <div>{data.emailId}</div>
          <div>{data.contactNumber}</div>
        </Col>
      </Row> */}



      <Row style={{ marginTop: 48 }}>
        <Table dataSource={[{
            id: 1,
            modelName:modelName,
            color:color,
            chassisNo:chassisNo,
            engineNo:engineNo,
            price: price,
            
        }]}
        pagination={false}
        >
          <Table.Column title="Model Name"  dataIndex='modelName' />
          <Table.Column  title="Color" dataIndex='color' />
          <Table.Column title="chassisNo" dataIndex='chassisNo' />
          <Table.Column   title="engineNo" dataIndex='engineNo' />
          <Table.Column   title="Ex-Showroom Price" dataIndex='price' />
          
        </Table>
      </Row>

      <Row style={{ marginTop: 48 }}>
        <Col span={5} offset={7}>
          <table>
            <tr>
              <th>Gross Total :</th>
              <td> Rs. {data.price}</td>
            </tr>
            <tr>
            <td><strong>Registration Charges</strong></td>
            <td className="text-primary">{registrationcost}</td>
             </tr>
            <tr>
            <td><strong>Insurance</strong></td>
            <td className="text-primary">{insurance}</td>
            </tr>
            <tr>
            <td><strong>TCS tax @5%</strong></td>
            <td className="text-primary">{tcstax}</td>
            </tr>
            <tr>
              <th>IGST @14% :</th>
              <td>Rs. 1540000</td>
            </tr>
            <tr>
              <th>CGST @14% :</th>
              <td>Rs. 154000</td>
            </tr>
            <tr>(by deducting booking token)</tr>
            <tr></tr>
            <tr>
              <th>Nett Total :</th>
              <td><strong>Rs.1552000 </strong></td>
            </tr>
          </table>
        </Col>
      </Row>

      <Row style={{ marginTop: 48, textAlign: 'center' }} className="text-primary">
       we are proud to serve you
      </Row>

      <Row style={{ marginTop: 48, textAlign: 'center' }}>
        
      </Row>
      </div>
      <div>
      <button className="btn btn-primary" onClick={()=>generateInvoicePdf()}>Download PDF</button>
      </div>
    </div>
    )
      }
      </div>
  );
  
}

export default PurchaseVehicleInvoice