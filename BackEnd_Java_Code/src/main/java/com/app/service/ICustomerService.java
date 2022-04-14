package com.app.service;

import java.util.List;

import com.app.pojos.Customer;
import com.app.pojos.Employee;
import com.app.pojos.Vehicle;

public interface ICustomerService {

//	Customer customerLogin(String email, String password);

	// Admin methods

	Customer getCustomerDetailsById(int custId);

	List<Customer> listOfCustomers();

	Customer addCustomerDetails(Customer cust);

	Customer updateCustomerDetails(Customer cust);

	String DeleteCustomerDetails(int custId);

	Customer getCustomerDetailsByEmail(String email);

}
