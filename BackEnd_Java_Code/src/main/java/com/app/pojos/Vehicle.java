package com.app.pojos;

import java.time.LocalDate;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.ManyToOne;
import javax.persistence.OneToOne;
import javax.persistence.Table;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@AllArgsConstructor
@NoArgsConstructor
@Data
@Entity
@Table(name = "vehicle_tb")
public class Vehicle {

	@Id
	@Column(name = "chassis_no")
	private String chassisNo;
	@Column(name = "engine_no", unique = true ,nullable = false)
	private String engineNo;
	@Column(name = "model_name", nullable = false)
	private String modelName;
	@Column(name = "vehicle_no", unique = true)
	private String vehicleNo;
	@Column(name = "vehicle_type", nullable = false)
	private String vehicleType;
	@Column
	private String color;
	@Column
	private double price;
	@Column(name = "booking_status")
	private boolean bookedStatus;
	@Column(name = "purchasing_status")
	private boolean purchasedStatus;
	@ManyToOne
	private Customer customer;
	@Column(name = "booking_date")
	private LocalDate dateOfBooking;
	@Column(name = "purchase_date")
	private LocalDate dateOfPurchase;
	
}
