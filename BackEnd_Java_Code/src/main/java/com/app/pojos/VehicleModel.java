package com.app.pojos;

import javax.persistence.Column;
import javax.persistence.Embedded;
import javax.persistence.Entity;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@Entity
@AllArgsConstructor
@NoArgsConstructor
public class VehicleModel extends BaseEntity {

	@Column(name = "model_name")
	private String modelName;
	@Embedded
	@Column(name = "vehicle_specs")
	private VehicleSpecification vehicleSpecification;
	@Column(name = "image_name")
	private String imageName;
	@Column(name = "quantity")
	private int quantity;
	@Column(name = "base_price")
	private double basePrice;

}
