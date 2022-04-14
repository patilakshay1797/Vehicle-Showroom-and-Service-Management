package com.app.pojos;

import java.time.LocalDate;
import java.util.ArrayList;
import java.util.HashSet;
import java.util.List;
import java.util.Set;

import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.JoinColumn;
import javax.persistence.JoinTable;
import javax.persistence.ManyToMany;
import javax.persistence.OneToMany;
import javax.persistence.Table;

import org.springframework.format.annotation.DateTimeFormat;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@AllArgsConstructor
@NoArgsConstructor
@Data
@Entity
@Table(name = "service_tb")
public class BookService extends BaseEntity {

	@Column(name = "vehicle_no", length = 30, nullable = false)
	private String vehicleNo;
	@Column(name = "customer_name", length = 30, nullable = false)
	private String customerName;
	@Column(name = "customer_id", length = 30)
	private int customerId;
	@Column(name = "model_name", length = 30)
	private String modelName;
	@Column(name = "kms_driven", length = 30)
	private double kmsDriven;
	@Column(name = "booking_date", nullable = false)
	@DateTimeFormat(pattern = "yyyy-MM-dd")
	private LocalDate serviceBookingDate;
	@Column(name = "service_date")
	@DateTimeFormat(pattern = "yyyy-MM-dd")
	private LocalDate servicingDate;
	@Column(name = "emp_id")
	private int empId;

	@ManyToMany(fetch = FetchType.EAGER)
	@JoinTable(name = "service_serviceType", joinColumns = @JoinColumn(name = "service_id"), inverseJoinColumns = @JoinColumn(name = "service_type_id"))
	private Set<ServiceType> types = new HashSet<>();

}
