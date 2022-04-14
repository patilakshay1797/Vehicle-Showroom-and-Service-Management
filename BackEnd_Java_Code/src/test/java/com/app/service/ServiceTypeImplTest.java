package com.app.service;

import static org.junit.jupiter.api.Assertions.*;
import static org.mockito.Mockito.when;

import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.springframework.boot.test.context.SpringBootTest;

import com.app.dao.ServiceTypeRepository;
import com.app.pojos.ServiceType;

@SpringBootTest(classes = ServiceTypeImplTest.class)
class ServiceTypeImplTest {

	@InjectMocks
	ServiceTypeImpl serviceTypeImpl;

	@Mock
	ServiceTypeRepository serviceTypeRepo;

	@Mock
	ServiceType serviceType;

	@BeforeEach
	void setUp() throws Exception {
	}

	@Test
	public void testAddServiceType() {

		ServiceType servtyp1 = new ServiceType(25.00, 5.00, "oil", "oilchange");
		when(serviceTypeRepo.save(servtyp1)).thenReturn(servtyp1);

		assertEquals("oil", serviceTypeImpl.addServiceType(servtyp1).getServiceName());
	}

//	@Test
//	void testGetServiceTypeList() {
//		fail("Not yet implemented");
//	}
//
//	@Test
//	void testDeleteServiceTypeDetails() {
//		fail("Not yet implemented");
//	}
//
//	@Test
//	void testUpdateServiceTypeDetails() {
//		fail("Not yet implemented");
//	}

}
