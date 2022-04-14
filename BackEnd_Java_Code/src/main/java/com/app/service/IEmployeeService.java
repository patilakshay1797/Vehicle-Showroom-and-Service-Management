package com.app.service;

import java.util.List;

import com.app.pojos.Employee;
import com.app.pojos.Vehicle;

public interface IEmployeeService {

	// Admin methods

	Employee getEmployeeDetailsById(int empId);

	List<Employee> listOfEmployee();

	Employee addEmployeeDetails(Employee emp);

	Employee updateEmployeeDetails(Employee emp);

	String DeleteEmployeeDetails(int empId);

}
