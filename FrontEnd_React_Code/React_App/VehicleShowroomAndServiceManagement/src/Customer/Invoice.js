//import React from 'react'
import { Col, Divider, Row, Table } from 'antd';
import 'antd/dist/antd.css';
//import { useState } from 'react';
import axios from "axios";
import React, { useEffect, useState } from "react";
import html2canvas from 'html2canvas';
import jsPDF from 'jspdf';
import { useNavigate } from 'react-router-dom';

const Invoice = () => {
  const custId = localStorage.getItem("custId");
  const [data, SetData] = useState([]);
  const [modelName, setModelName] = useState('');
  const [color, SetColor] = useState('');
  const [engineNo, setEngineNo] = useState('');
  const [chassisNo, setChassisNo] = useState('');
  const [price, setPrice] = useState('');
  const [display, setDisplay] = useState(true);
  const gst = price * 0.14;
  var date = new Date().toLocaleDateString();
  const datatosend = new FormData();
  const navigate = useNavigate();
  datatosend.append("custId", custId);
  const generateInvoice = () => {

    axios.post(`http://localhost:8080/customer/bookVehicleInvoice`, datatosend,
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
  const generateInvoicePdf = () => {
    const input = document.getElementById('divToPrint');
    html2canvas(input)
      .then((canvas) => {
        const imgData = canvas.toDataURL('image/png');
        const pdf = new jsPDF();
        pdf.addImage(imgData, 'JPEG', 0, 0);
        // pdf.output('dataurlnewwindow');
        pdf.save("download.pdf");
        navigate("/customer");
      })
      ;
  }

  const init = () => { }
  useEffect(() => {
    init();
  }, []);

  return (
    <div >
      {display ?
        (<div>
          <div className="alert alert-success" role="alert">
            Vehicle Booking Successful
          </div>

          <button className="btn btn-primary" onClick={() => generateInvoice()}>Generate Invoice</button>
        </div>
        ) :
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

                <Col span={4} offset={2}>
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
              <Row style={{ marginTop: 48 }}>
                <Table dataSource={[{
                  id: 1,
                  modelName: modelName,
                  color: color,
                  chassisNo: chassisNo,
                  engineNo: engineNo,
                  price: price,

                }]}
                  pagination={false}
                >
                  <Table.Column title="Model Name" dataIndex='modelName' />
                  <Table.Column title="Color" dataIndex='color' />
                  <Table.Column title="chassisNo" dataIndex='chassisNo' />
                  <Table.Column title="engineNo" dataIndex='engineNo' />
                  <Table.Column title="Booking Amount" dataIndex='price' />

                </Table>
              </Row>

              <Row style={{ marginTop: 48 }}>
                <Col span={4} offset={7}>
                  <table>
                    <tr>
                      <th>Gross Total :</th>
                      <td> Rs. {data.price}</td>
                    </tr>
                    <tr>
                      <th>IGST @14% :</th>
                      <td>Rs.{gst}</td>
                    </tr>
                    <tr>
                      <th>CGST @14% :</th>
                      <td>Rs. {gst}</td>
                    </tr>
                    <tr>
                      <th>Nett Total :</th>
                      <td><strong>Rs.{data.total}</strong></td>
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
              <button className="btn btn-primary" onClick={() => generateInvoicePdf()}>Download PDF</button>
            </div>
          </div>
        )
      }
    </div>
  );

}

export default Invoice