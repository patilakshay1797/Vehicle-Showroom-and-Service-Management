package com.app.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.app.dto.InvoiceVehicleDto;
import com.app.dto.ServiceDto;
import com.app.dto.SignUpRequest;
import com.app.pojos.BookService;
import com.app.pojos.Customer;
import com.app.pojos.Vehicle;
import com.app.service.CustomerServiceImpl;
import com.app.service.IBookService;
import com.app.service.ICustomerService;
import com.app.service.IInvoiceService;
import com.app.service.IUserService;
import com.app.service.IVehicleModelService;
import com.app.service.IVehicleService;

@RestController
@RequestMapping("/customer")
@CrossOrigin(origins = "http://localhost:3000")
public class CustomerController {

	@Autowired
	private ICustomerService customerService;

	@Autowired
	private IVehicleService vehicleService;

	@Autowired
	private IUserService userService;

	@Autowired
	private IBookService bookServiceService;

	@Autowired
	private IVehicleModelService vehicleModelService;

	@Autowired
	private IInvoiceService invoiceService;

	@PostMapping("/signup")
	public ResponseEntity<?> userRegistration(@RequestBody SignUpRequest request) {
		System.out.println("in user reg " + request);
		return ResponseEntity.ok(userService.registerUser(request));
	}

	@PostMapping("/registerCustomer")
	public ResponseEntity<?> registerCustomer(@RequestBody Customer transCustomer) {
		Customer cust = customerService.addCustomerDetails(transCustomer);
		if (cust == null) {
//			@PostMapping("/signup")
//			public ResponseEntity<?> userRegistration(@RequestBody SignUpRequest request) {
//				System.out.println("in user reg " + request);
			// userService.registerUser(request);
			return ResponseEntity.status(HttpStatus.NOT_FOUND).body(null);
		}
		return ResponseEntity.status(HttpStatus.CREATED).body(transCustomer);
	}

//	@PostMapping("/loginCustomer")
//	public ResponseEntity<?> loginCustomer(@RequestBody Customer transCustomer) {
//		System.out.println(transCustomer.getEmailId());
//		System.out.println(customerServ.customerLogin(transCustomer.getEmailId(), transCustomer.getPassword()));
//		return ResponseEntity.status(HttpStatus.ACCEPTED)
//				.body(customerServ.customerLogin(transCustomer.getEmailId(), transCustomer.getPassword()));
//	}

	@GetMapping("/availableVehicles")
	public ResponseEntity<?> listAvailableVehicle() {
		return ResponseEntity.status(HttpStatus.OK).body(vehicleService.getAvailableVehicle());
	}

	@PostMapping("/addService")
	public ResponseEntity<?> addServiceDetails(@RequestBody ServiceDto bservice) {
		BookService added = bookServiceService.bookService(bservice);
		if (added == null) {
			return ResponseEntity.status(HttpStatus.NOT_FOUND).body(null);
		}
		return ResponseEntity.status(HttpStatus.CREATED).body(added);
	}

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
			@RequestParam String color) {
		System.out.println(modelName + color);
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
