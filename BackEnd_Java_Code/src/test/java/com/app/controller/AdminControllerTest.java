package com.app.controller;

import static org.hamcrest.CoreMatchers.is;
import static org.junit.jupiter.api.Assertions.*;
import static org.mockito.Mockito.when;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.get;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.post;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.put;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.content;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.jsonPath;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.status;

import java.time.LocalDate;
import java.util.ArrayList;
import java.util.List;

import org.hamcrest.Matchers;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.web.servlet.WebMvcTest;
import org.springframework.boot.test.mock.mockito.MockBean;
import org.springframework.security.config.annotation.method.configuration.EnableGlobalMethodSecurity;
import org.springframework.test.web.servlet.MockMvc;
import org.springframework.test.web.servlet.ResultActions;

import com.app.controller.AdminController;
import com.app.pojos.Address;
import com.app.pojos.Customer;
import com.app.pojos.Vehicle;
import com.app.service.IAdminService;
import com.app.service.IBookService;
import com.app.service.ICustomerService;
import com.app.service.IEmployeeService;
import com.app.service.IServiceType;
import com.app.service.IUserService;
import com.app.service.IVehicleModelService;
import com.app.service.IVehicleService;
import com.fasterxml.jackson.databind.ObjectMapper;


@WebMvcTest(controllers = AdminController.class) // Mainly for testing only Spring MVC components
//In this case , configures only ProductController class n no other beans
@EnableGlobalMethodSecurity
class AdminControllerTest {
	@Autowired
	private AdminController admincontroller;
	@Autowired
	private MockMvc mockMvc;// entry point to testing MVC : simulates HTTP requests.

	@MockBean // replaces ProductService by it's mock (method are not delegated to actual
				// implementation class)
	private IAdminService aservice;
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
	
	//ResultActions actions = mockMvc;
	
	@Autowired
	private ObjectMapper mapper;// Jackson supplied class for JSON processing.

	@Test
	void sanityTest() {
		assertNotNull(admincontroller);// To confirm if ProductController is autowired correctly.
	}
	
	
	

	//| WET7822| 0x00 |RED| NULL|NULL| A47895 | SWIFT_VDI  | 500000 | 0x00 | NULL| DIESEL 1
	
//	@Test
//	void testListVehicles() throws Exception {
////		Transact instance = new Transact();
//		Vehicle v1 = new Vehicle("A1225", "Engine1", "Swift_VDI", null, "diesel", "red", 500000.00, false, false, null, null, null);
//		Vehicle v2 = new Vehicle("A1226", "Engine2", "Fiat", null, "diesel", "black", 700000.00, false, false, null, null, null);
//	    Vehicle v3 = new Vehicle("A1227", "Engine3", "audi", null, "petrol", "blue", 800000.00, false, false, null, null, null);
//		
//	List<Vehicle> listveh= new ArrayList<Vehicle>();
//		listveh.add(v1);
//	    listveh.add(v2);
// 		listveh.add(v3);
//		
//		
//		when(vservice.listOfVehicles()).thenReturn(listveh);
//		 mockMvc.perform(get("/admin/vehicleList"))
//		.andExpect(status().isOk());
//		 
////		 List<Company> result = instance.retrieveData(factories);
//		 
//	}
//	
//
//	
//	
//	//actions.andExpect((jsonPath("$.data.roles", Matchers.containsInAnyOrder("role1", "role2", "role3"))));
//	
//	@Test
//	void testUpdateCutomer() throws Exception {
//		
//		Address addr = new Address("bhandara","MH","India","441904");
//		Customer cust1 = new Customer("chetan", addr, "9922887574", "cust1@gmail.com",  LocalDate.parse("2022-04-01"),true);
//		cust1.setId(1);
//		//cust1.setName("newcustomer");
//		
//		Address addr2 = new Address("pauni","MH","India","441904");
//		Customer cust2 = new Customer("aniket", addr, "9922887574", "cust2@gmail.com", LocalDate.parse("2022-04-01"),true);
//		cust2.setId(1);
//		
//		when(cservice.updateCustomerDetails(cust1)).thenReturn(cust1);
//		
//		this.mockMvc.perform(put("/admin/updateCustomer"))
//	    .andExpect(status().isCreated());
	
//		 Customer dummyc = cservice.updateCustomerDetails(cust1);
//		 dummyc.setName("newcustomer");
//		 assertEquals("chetan",dummyc.getName());
//		 
	}

//	@Test
//	void testDeleteEmployeeDetails() {
//
//		fail("Not yet implemented");
//	}
//	public String jsonString(Object obj) throws Exception {
//
//		return mapper.writeValueAsString(obj);
//
//	}



