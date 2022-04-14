package com.app.dto;

import java.time.LocalDate;
import java.util.Set;

import org.springframework.format.annotation.DateTimeFormat;

import com.app.pojos.Address;

import lombok.Data;
@Data
public class CustomerDto {
	private String userName,email, password,contactNumber;
	private Address address;
	@DateTimeFormat(pattern = "yyyy-MM-dd")
	private LocalDate dateOfRegistration;
	private boolean actice;
	private Set<String> roles;
}
