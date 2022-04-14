package com.app.service;

import static org.junit.jupiter.api.Assertions.*;
import static org.mockito.Mockito.when;

import java.util.Optional;

import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.springframework.boot.test.context.SpringBootTest;

import com.app.dao.CustomerAdmRepository;
import com.app.dao.VehicleModelRepository;
import com.app.dao.VehicleRepository;
import com.app.pojos.Vehicle;

@SpringBootTest(classes = VehicleServiceImplTest.class)
class VehicleServiceImplTest {

	@InjectMocks
	VehicleServiceImpl vehicleServiceImpl;

	@Mock
	private VehicleRepository vehicleRepo;

	@Mock
	private CustomerAdmRepository customerRepo;

	@Mock
	private VehicleModelRepository vehicleModelRepo;

	@BeforeEach
	void setUp() throws Exception {
	}

	@Test
	void testGetVehicleDetailsbyChassisNo() {
		Optional<Vehicle> veh1 = Optional.ofNullable(new Vehicle("C45E", "A1234", "audi", "MH368409", "petrol", "blue",
				50.00, true, true, null, null, null));
		when(vehicleRepo.findById("C45E")).thenReturn(veh1);

		assertEquals("A1234", vehicleServiceImpl.getVehicleDetailsbyChassisNo("C45E").getEngineNo());
	}

//	@Test
//	void testListOfVehicles() {
//		fail("Not yet implemented");
//	}
//
//	@Test
//	void testUpdateVehicleDetails() {
//		fail("Not yet implemented");
//	}
//
//	@Test
//	void testDeleteVehicleDetails() {
//		fail("Not yet implemented");
//	}
//
//	@Test
//	void testGetAvailableVehicle() {
//		fail("Not yet implemented");
//	}
//
//	@Test
//	void testAddVehiclesList() {
//		fail("Not yet implemented");
//	}
//
//	@Test
//	void testBookVehicle() {
//		fail("Not yet implemented");
//	}
//
//	@Test
//	void testAddVehicle() {
//		fail("Not yet implemented");
//	}
//
//	@Test
//	void testListOfBookedVehicles() {
//		fail("Not yet implemented");
//	}
//
//	@Test
//	void testPurchaseVehicle() {
//		fail("Not yet implemented");
//	}

}
