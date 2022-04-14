package com.app.pojos;

import javax.persistence.Embeddable;

import lombok.Data;

@Data
@Embeddable

public class VehicleSpecification {

	private String segment;
	private String engineCC;
	private String engineCylinderinfo;
	private String transmission;
	private int seatingCapacity;
	private double mileage;
	private double fuelTankCapacity;

}
