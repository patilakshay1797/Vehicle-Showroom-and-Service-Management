package com.app.service;

import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.mockito.Mockito.when;

import java.util.Optional;

import org.junit.jupiter.api.Test;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.springframework.boot.test.context.SpringBootTest;

import com.app.dao.VehicleModelRepository;
import com.app.pojos.VehicleModel;

@SpringBootTest(classes = VehicleModelServiceImplTest.class)
class VehicleModelServiceImplTest {

	@InjectMocks
	VehicleModelServiceImpl vehicleModelServiceImpl;

	@Mock
	private VehicleModelRepository vehicleModelRepo;

	@Mock
	VehicleModel vehmodObj1;

	@Test
	void testGetVehicleModelDetails() {

		Optional<VehicleModel> vehmodObj1 = Optional.ofNullable(new VehicleModel("bmw", null, "img1", 2, 120000));

		when(vehicleModelRepo.findById(1)).thenReturn(vehmodObj1);
		vehicleModelServiceImpl.getVehicleModelDetails(1);

		assertEquals("bmw", vehicleModelServiceImpl.getVehicleModelDetails(1).getModelName());

	}

//	@Test
//	void testAddVehicleModelDetails() {
//		fail("Not yet implemented");
//	}

//
//	@Test
//	void testGetListOfAvailableModel() {
//		fail("Not yet implemented");
//	}

}
