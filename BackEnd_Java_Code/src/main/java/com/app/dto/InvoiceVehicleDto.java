package com.app.dto;

import java.time.LocalDate;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
@Data
@AllArgsConstructor
@NoArgsConstructor
public class InvoiceVehicleDto {
	

	private int invoiceId;
	
	private String customerName;
	
	private String city;
	
	private String state;
	
	private String country;
	
	private String zipCode;
	
	private String emailId;
	
	private String contactNumber;
	
	private String chassisNo;
	
	private String engineNo;
	
	private String modelName;
	
	private String color;
	
	private String vehicleNo;
	
	private LocalDate dateOfBooking;
	
	private LocalDate dateOfPurchase;
	
	private double price;
	
	private double totalAmount;
}
