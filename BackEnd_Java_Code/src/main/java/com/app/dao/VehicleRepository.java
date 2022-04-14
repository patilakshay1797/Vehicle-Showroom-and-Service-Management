package com.app.dao;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import com.app.pojos.Customer;
import com.app.pojos.Vehicle;

@Repository
public interface VehicleRepository extends JpaRepository<Vehicle, String> {

	@Query(value = "select v from Vehicle v where v.bookedStatus = false and v.purchasedStatus = false")
	List<Vehicle> getListOfAvailableVehicle();

	@Query(value = "select distinct v from Vehicle v where v.modelName = :name and v.color = :color and v.bookedStatus = false and v.purchasedStatus = false")
	List<Vehicle> bookingVehicle(String name, String color);

	@Query(value = "select v from Vehicle v where v.bookedStatus = true and v.purchasedStatus = false")
	List<Vehicle> getListOfBookedVehicle();

	Vehicle findByCustomer(Customer customer);

	Vehicle findByChassisNo(String chassisNo);

}
