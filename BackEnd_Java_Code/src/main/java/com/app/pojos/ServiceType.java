package com.app.pojos;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Table;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@AllArgsConstructor
@NoArgsConstructor
@Data
@Entity
@Table(name = "serviceType_tb")
public class ServiceType extends BaseEntity {

	@Column
	private double amount;
	@Column(nullable = true)
	private double discount;
	@Column(name = "service_name", nullable = false)
	private String serviceName;
	@Column(name = "service_description")
	private String serviceDesciption;

}
