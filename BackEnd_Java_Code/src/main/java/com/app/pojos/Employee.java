package com.app.pojos;

import java.time.LocalDate;

import javax.persistence.Column;
import javax.persistence.Embedded;
import javax.persistence.Entity;
import javax.persistence.Table;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@NoArgsConstructor
@AllArgsConstructor
@Data
@Entity
@Table(name = "employee_tb")
public class Employee extends BaseEntity {

	@Column(name = "emp_name", length = 30, nullable = false)
	private String name;
	@Column(length = 30)
	private String gender;
	@Column(name = "dept_name", length = 30, nullable = false)
	private String departmentName;
	@Column(name = "basic_salary")
	private double basicSalary;
	@Column(name = "emp_id", length = 30, unique = true)
	private String emailId;
	@Column(length = 30, nullable = false)
	private String password;
	@Column(length = 30, nullable = false)
	private String designation;
	@Column(name = "joining_date", nullable = false)
	private LocalDate dateOfJoining;
	@Column(name = "leaving_date")
	private LocalDate dateOfLeaving;
	@Embedded
	@Column(nullable = false)
	private Address address;
	@Embedded
	@Column(name = "bank_details", nullable = false)
	private BankDetails bankDetail;

}
