package com.app.service;

import static org.junit.jupiter.api.Assertions.*;

import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import com.app.pojos.Vehicle;

//@SpringBootTest
class GetVehicleDetailsTest {

	@Autowired
	private IVehicleService vehicleService;

	@Test
	void testGetVehicleDetailsbyChassisNo() {

		Vehicle v = vehicleService.getVehicleDetailsbyChassisNo("WET7822");
		assertEquals(500000, v.getPrice());
	}

}
