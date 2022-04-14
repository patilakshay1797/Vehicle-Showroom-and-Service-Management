package com.app.dao;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import com.app.pojos.Customer;
import com.app.pojos.Vehicle;

@Repository
public interface CustomerAdmRepository extends JpaRepository<Customer, Integer> {

	// Customer findByEmailIdAndPassword(String emailId, String password);

//	@Query(value = "select v from Vehicle v where v.bookedStatus = false and v.purchasedStatus = false")
//	List<Vehicle> getListOfAvailableVehicle();

	Customer findByEmailId(String email);

}
