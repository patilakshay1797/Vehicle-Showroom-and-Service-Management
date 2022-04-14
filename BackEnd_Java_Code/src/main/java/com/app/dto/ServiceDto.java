package com.app.dto;

import java.time.LocalDate;
import java.util.List;
//import java.util.Set;

//import javax.persistence.Column;

import org.springframework.format.annotation.DateTimeFormat;

import lombok.Data;
@Data
public class ServiceDto {

	private int id;
	
	private String vehicleNo;
	
	private String customerName;
	
	private int customerId;
	
	private String modelName;
	
	private double kmsDriven;
	
	@DateTimeFormat(pattern = "yyyy-MM-dd")
	private LocalDate serviceBookingDate;
	
	@DateTimeFormat(pattern = "yyyy-MM-dd")
	private LocalDate servicingDate;
	
	private List<Integer> serviceTypes;
}
