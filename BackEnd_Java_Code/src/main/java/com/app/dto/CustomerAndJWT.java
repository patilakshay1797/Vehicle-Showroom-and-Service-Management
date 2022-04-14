package com.app.dto;

import com.app.pojos.Customer;

import lombok.Data;

@Data
public class CustomerAndJWT {
	
	private Customer customer;
	private String jwt;
}
