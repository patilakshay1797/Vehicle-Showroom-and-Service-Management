package com.app.service;

import static org.junit.jupiter.api.Assertions.*;
import static org.mockito.ArgumentMatchers.anyString;
import static org.mockito.Mockito.when;

import java.util.ArrayList;
import java.util.List;

import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Order;
import org.junit.jupiter.api.Test;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.MockitoAnnotations;

import com.app.dao.AdminRepository;
import com.app.pojos.Admin;

public class AdminServiceImplTest {

	@InjectMocks
	AdminServiceImpl adminService;

	@Mock
	AdminRepository adminRepo;

	@BeforeEach
	void setUp() throws Exception {
		MockitoAnnotations.openMocks(this);
	}

	@Test
	public void testLoginAdmin() {
		Admin admin = new Admin();
		admin.setEmail("test1@gmail.com");
		admin.setFirstName("test1");
		admin.setId(1);
		admin.setLastName("lname1");
		admin.setPassword("abc123");
		// fail("Not yet implemented");
		when(adminRepo.findByEmailAndPassword(anyString(), anyString())).thenReturn(admin);
		Admin admin1 = adminService.loginAdmin("test1@gmail.com", "abc123");
		// assertNotNull(admin1);
		assertEquals("test1@gmail.com", admin1.getEmail());
		assertEquals("abc123", admin1.getPassword());
		assertEquals("test1", admin1.getFirstName());
		assertEquals("lname1", admin1.getLastName());
		// test will fail if line no 29 to 31 is not commented in adminserimpl
	}

	// **********another test unit*******************//

//	@Test
//	void testLoginAdmin1() {
//		Admin admin = new Admin();
//		admin.setEmail("test1@gmail.com");
//		admin.setFirstName("test1");
//		admin.setId(1);
//		admin.setLastName("lname1");
//		admin.setPassword("abc123");
//		//fail("Not yet implemented");
//		when(AdminRepo.findByEmailAndPassword(anyString(), anyString())).thenReturn(admin);
//	  Admin admin1 = adminService.loginAdmin("test1@gmail.com", "abc123");
//	  assertNotNull(admin1);
//	  assertEquals("test1@gmail.com",admin1.getEmail());
//	  //assertEquals("abc1234",admin1.getPassword());
//	  assertEquals("test",admin1.getFirstName());
//	}

	@Test
	@Order(1)
	public void testListAdmin() {

		List<Admin> adminlist = new ArrayList<Admin>();
		adminlist.add(new Admin("aniket", "koche", "anikoche@gmail.com", "ani123"));
		adminlist.add(new Admin("akshay", "bade", "abade@gmail.com", "ak123"));

		when(adminRepo.findAll()).thenReturn(adminlist);

		assertEquals(2, adminRepo.findAll().size());

	}

}
