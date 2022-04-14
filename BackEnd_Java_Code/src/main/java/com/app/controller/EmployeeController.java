package com.app.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.app.dto.InvoiceVehicleDto;
import com.app.dto.ServiceDto;
import com.app.pojos.BookService;
import com.app.pojos.ServiceType;
import com.app.pojos.Vehicle;
import com.app.service.IBookService;
import com.app.service.IInvoiceService;
import com.app.service.IServiceType;
import com.app.service.IVehicleModelService;
import com.app.service.IVehicleService;

@RestController
@RequestMapping("/employee")
@CrossOrigin(origins = "http://localhost:3000")
public class EmployeeController {

	@Autowired
	private IBookService bookService;

	@Autowired
	private IServiceType serviceTypeService;

	@Autowired
	private IVehicleService vehicleService;

	@Autowired
	private IInvoiceService invoiceService;

	@Autowired
	private IVehicleModelService vehicleModelService;

	@GetMapping("/bookedServices")
	public ResponseEntity<?> getBookedServiceList() {
		return ResponseEntity.ok().body(bookService.getBookedServices());
	}

	@GetMapping("/getAllServiceTypes")
	public ResponseEntity<List<ServiceType>> getAllServiceTypes() {
		return ResponseEntity.ok().body(serviceTypeService.getServiceTypeList());
	}

	@PostMapping("/addServicesToBookedService")
	public ResponseEntity<?> addServicesToBookedService(@RequestBody ServiceDto bookSer) {
		return ResponseEntity.status(HttpStatus.ACCEPTED).body(bookService.updateService(bookSer));
	}

	@GetMapping("/bookedServiceDetails/{id}")
	public ResponseEntity<?> getBookedServiceDetails(@PathVariable Integer id) {
		return ResponseEntity.ok().body(bookService.getServiceDetails(id));
	}

	@GetMapping("/getBookedVehicles")
	public ResponseEntity<?> getBookedVehiclesList() {
		return ResponseEntity.status(HttpStatus.OK).body(vehicleService.listOfBookedVehicles());
	}

	@PostMapping("/purchaseVehicle/{chassisNo}")
	public ResponseEntity<?> purchaseBookedVehicle(@PathVariable String chassisNo) {
		Vehicle purchased = vehicleService.purchaseVehicle(chassisNo);
		if (purchased == null) {
			return ResponseEntity.status(HttpStatus.NO_CONTENT).body("Vehicle not available to purchase");
		}
		return ResponseEntity.status(HttpStatus.CREATED).body("Vehicle purchased ");
	}

	@PostMapping("/purchaseVehicleInvoice")
	public ResponseEntity<?> purchaseBookedVehicleInvoice(@RequestParam String chassisNo,
			@RequestParam Integer custId) {
		System.out.println(chassisNo + custId);
		InvoiceVehicleDto purchased = invoiceService.purchaseVehcleInvoice(chassisNo, custId);
		if (purchased == null) {
			return ResponseEntity.status(HttpStatus.NO_CONTENT).body("Vehicle not available to purchase");
		}
		return ResponseEntity.status(HttpStatus.CREATED).body(purchased);
	}

	/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
	@GetMapping("/getModelList")
	public ResponseEntity<?> getVehicleModelList() {
		return ResponseEntity.status(HttpStatus.OK).body(vehicleModelService.getListOfAvailableModel());
	}

	@PostMapping("/bookVehicle")
	public ResponseEntity<?> bookNewVehicle(@RequestParam String modelName, @RequestParam String color,
			@RequestParam Integer custId) {
		System.out.println(modelName + color + custId);
		Vehicle booked = vehicleService.bookVehicle(modelName, color, custId);
		if (booked == null) {
			return ResponseEntity.status(HttpStatus.NO_CONTENT).body("Vehicle not available");
		}
		return ResponseEntity.status(HttpStatus.CREATED).body("Vehicle booked ");
	}

	@PostMapping("/checkAvailabilityForBooking")
	public ResponseEntity<?> checkAvailabilityForVehicleBooking(@RequestParam String modelName,
			@RequestParam String color, @RequestParam Integer custId) {
		System.out.println(modelName + color + custId);
		String available = vehicleService.checkAvailabilityForBooking(modelName, color);
		if (available == null) {
			return ResponseEntity.status(HttpStatus.NO_CONTENT).body("Vehicle not available");
		}
		return ResponseEntity.status(HttpStatus.OK).body(available);
	}

	@PostMapping("/bookVehicleInvoice")
	public ResponseEntity<?> bookVehicleInvoiceGeneration(@RequestParam Integer custId) {
		InvoiceVehicleDto booked = invoiceService.bookVehicleInvoice(custId);
		if (booked == null) {
			return ResponseEntity.status(HttpStatus.NO_CONTENT).body("Error in Payment");
		}
		return ResponseEntity.status(HttpStatus.CREATED).body(booked);
	}

}
