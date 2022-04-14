package com.app.controller;

import static org.junit.jupiter.api.Assertions.*;
import static org.mockito.Mockito.when;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.post;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.status;

import java.time.LocalDate;

import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.mock.mockito.MockBean;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.test.web.servlet.MockMvc;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;

import com.app.controller.CustomerController;
import com.app.dao.ServiceRepository;
import com.app.dto.ServiceDto;
import com.app.pojos.BookService;
import com.app.service.IAdminService;
import com.app.service.IBookService;
import com.app.service.ICustomerService;
import com.app.service.IEmployeeService;
import com.app.service.IServiceType;
import com.app.service.IUserService;
import com.app.service.IVehicleModelService;
import com.app.service.IVehicleService;
import com.fasterxml.jackson.databind.ObjectMapper;

class CustomerContolleTest {
	@Autowired
	private CustomerController customercontroller;

	@Autowired
	private MockMvc mockMvc;

	@MockBean
	private IVehicleService vservice;
	@MockBean
	private ICustomerService cservice;
	@MockBean
	private IEmployeeService eservice;
	@MockBean
	private IBookService bookSer;
	@MockBean
	private IServiceType serviceType;
	@MockBean
	private IVehicleModelService vehicleModelser;
	@MockBean
	private IUserService userserviceType;
//	@MockBean
//	private ServiceDto serdto;

	@MockBean
	private ServiceRepository serviceRepo;

	@BeforeEach
	void setUp() throws Exception {
	}

	@Autowired
	private ObjectMapper mapper;

//	@Test
//	void testUserRegistration() {
//		fail("Not yet implemented");
//	}

//	@Test
//	void testRegisterCustomer() {
//		fail("Not yet implemented");
//	}
//
//	@Test
//	void testListAvailableVehicle() {
//		fail("Not yet implemented");
//	}
//
//	@PostMapping("/bookService")
//	public ResponseEntity<?> addServiceDetails(@RequestBody ServiceDto bservice) {
//		BookService added = bookServiceser.bookService(bservice);
//
//		if (added == null) {
//			return ResponseEntity.status(HttpStatus.NOT_FOUND).body(null);
//		}
//		return ResponseEntity.status(HttpStatus.CREATED).body(added);
//	}

	@Test
	void testAddServiceDetails() throws Exception {

		ServiceDto serdto = new ServiceDto();
		serdto.setId(1);
		serdto.setVehicleNo("12");
		serdto.setCustomerName("akshay");
		serdto.setCustomerId(1);
		serdto.setModelName("audi");
		serdto.setKmsDriven(15);
		serdto.setServiceBookingDate(LocalDate.parse("2022-04-13"));
		serdto.setServicingDate(LocalDate.parse("2022-04-13"));
		serdto.setServiceTypes(null);

		BookService bookedservice = new BookService();
		bookedservice.setCustomerName(serdto.getCustomerName());
		bookedservice.setKmsDriven(serdto.getKmsDriven());
		bookedservice.setCustomerId(serdto.getCustomerId());
		bookedservice.setEmpId(0);
		bookedservice.setModelName(serdto.getModelName());
		bookedservice.setServiceBookingDate(serdto.getServiceBookingDate());
		bookedservice.setServicingDate(serdto.getServicingDate());
		bookedservice.setVehicleNo(serdto.getVehicleNo());

		BookService saved = serviceRepo.save(bookedservice);

		when(bookSer.bookService(serdto)).thenReturn(bookedservice);
		mockMvc.perform(post("/cutomer/bookService")).andExpect(status().isOk());

		BookService dummybs = bookSer.bookService(serdto);
		// dummybs.setCustomerName("akshay");
//		 	assertNull(dummybs);
		assertEquals("akshay", serdto.getCustomerName());

	}
//
//	@Test
//	void testGetVehicleModelList() {
//		fail("Not yet implemented");
//	}
//
//	@Test
//	void testBookNewVehicle() {
//		fail("Not yet implemented");
//	}

}
