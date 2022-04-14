package com.app.service;

import java.io.IOException;
import java.util.List;

import org.springframework.web.multipart.MultipartFile;

import com.app.pojos.Vehicle;

public interface IVehicleService {

	Vehicle getVehicleDetailsbyChassisNo(String ChassisNo);

	List<Vehicle> listOfVehicles();

	// Vehicle addVehicleDetails(Vehicle veh, MultipartFile image) throws
	// IOException;

	Vehicle updateVehicleDetails(Vehicle veh);

	String DeleteVehicleDetails(String chassisNo);

	// customer flow
	List<Vehicle> getAvailableVehicle();

	String addVehiclesList(MultipartFile vehicleList) throws IOException;

	Vehicle bookVehicle(String model, String color, int custId);

	String checkAvailabilityForBooking(String model, String color);

	Vehicle addVehicle(Vehicle veh);

	// Employee

	List<Vehicle> listOfBookedVehicles();

	Vehicle purchaseVehicle(String vehId);
}
