import React from 'react'
import GooglePayButton from "@google-pay/button-react";
import { Navigate, useLocation } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import { useContext } from 'react';
import axios from 'axios';
import { useState } from 'react';
//import VehicleContext from './BookVehicle'
//import { VehicleModelName,VehicleColor,CustomerID } from './BookVehicle';

const Payment = (props) => {
  // const modelContext=useContext(VehicleModelName);
  // const colorContext=useContext(VehicleColor);
  // const customeridContext=useContext(CustomerID);
    const { state } = useLocation();
    const navigate = useNavigate();
    const[submitData, setSubmitData] = useState('');
   const modelName= localStorage.getItem("modelName");
   const color=localStorage.getItem("color");
   const custId=localStorage.getItem("custId");
   console.log("in payment",modelName);
    //const bookData=useContext();
   

  return (
    
    
    <div className="container">
      <div >
        <table>
          <tbody>
            <tr ><td><strong>Booking Amount</strong></td>
            <td className="text-primary">Rs. 10000</td>
            </tr>
            <tr><td><strong>SGST @14%</strong></td>
            <td className="text-primary">Rs. 1400</td>
            </tr>
            <tr><td><strong>CGST @14%</strong></td>
            <td className="text-primary">Rs. 1400</td>
            </tr>
            <tr><td><strong>Total Amount to pay</strong></td>
            <td className="text-primary">Rs. 12800</td>
            </tr>
          </tbody>
        </table>
        <hr/>
      </div>
      <div><h5>Click Below for Payment</h5></div>
      <GooglePayButton
        environment="TEST"
        paymentRequest={{
          apiVersion: 2,
          apiVersionMinor: 0,
          allowedPaymentMethods: [
            {
              type: "CARD",
              parameters: {
                allowedAuthMethods: ["PAN_ONLY", "CRYPTOGRAM_3DS"],
                allowedCardNetworks: ["MASTERCARD", "VISA",],
              },
              tokenizationSpecification: {
                type: "PAYMENT_GATEWAY",
                parameters: {
                  gateway: "example",
                  gatewayMerchantId: "exampleGatewayMerchantId",
                },
              },
            },
          ],
          merchantInfo: {
            merchantId: "12345678901234567890",
            merchantName: "Demo Merchant",
          },
          transactionInfo: {
            totalPriceStatus: "FINAL",
            totalPriceLabel: "Total",
            totalPrice: "100.00",
            currencyCode: "USD",
            countryCode: "US",
          },
        }}
        onLoadPaymentData={(paymentData) => {
          console.log('TODO: send order to server',paymentData.paymentMethodData);
         // history.push('/confirm');
        //  console.log(this.props.state);
        const data = new FormData();
        data.append("modelName",modelName);
        data.append("color",color);
        data.append("custId",custId);
        axios
          .post(`http://localhost:8080/customer/bookVehicle`,data,
              {
                  headers: {
                      'Authorization': 'Bearer ' + localStorage.getItem('JWTtoken')
                  }
              },
          )
          .then((response) => {
               console.log(response); 
               console.log(response.status);
            if(response.status === 204){
                console.log(response.status,"Vehicle Booked Successfully.....");
                navigate("/customer/availVehicleList/payment/invoice");
                // setSubmitData("Vehicle Booked Successfully");
            }
            else{
                setSubmitData("Vehicle Out of Stock please try after some days");
                console.log("in else");
            }
        })
        .catch((error) => {
            console.log(error)
            console.log("in atch")
        })
       
        }}
      />
     
    </div>
   
  );
 
}

export default Payment