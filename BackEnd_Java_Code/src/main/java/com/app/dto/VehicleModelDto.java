package com.app.dto;

import lombok.Data;

@Data
public class VehicleModelDto {
	private String modelName;
	private int quantity;
	private String segment;
	private String engineCC;
	private String engineCylinderinfo;
	private String transmission;
	private int seatingCapacity;
	private double mileage;
	private double basePrice;
	private double fuelTankCapacity;
}
