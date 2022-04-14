package com.app.service;

import static org.junit.jupiter.api.Assertions.*;
import static org.mockito.ArgumentMatchers.anyString;
import static org.mockito.Mockito.when;

import java.time.LocalDate;

import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.MockitoAnnotations;
import org.springframework.boot.test.context.SpringBootTest;

import com.app.pojos.Address;
import com.app.pojos.Customer;

import com.app.dao.AdminRepository;
import com.app.dao.CustomerAdmRepository;

@SpringBootTest(classes = CustomerServiceTest.class)
class CustomerServiceTest {

	@InjectMocks
	CustomerServiceImpl customerService;

	@Mock
	CustomerAdmRepository customerRepo;

	@BeforeEach
	void setUp() throws Exception {
		MockitoAnnotations.openMocks(this);
	}

	@Test
	void testAddCustomerDetails() {
		Customer cust = new Customer();

		Address addr = new Address("bhandara", "MH", "India", "441904");
		Customer cust1 = new Customer("chetan", addr, "9922887574", "cust1@gmail.com", LocalDate.parse("2022-04-01"),
				true);
		cust1.setId(1);
		// "chetan",addr,"9922887574","cust1@gmail.com","abc123","2022-04-01"

		when(customerRepo.existsById(2)).thenReturn(true);
		when(customerRepo.save(cust1)).thenReturn(cust1);
		Customer custdummy = customerService.addCustomerDetails(cust1);
		assertEquals("chetan", custdummy.getName());
	}

}
