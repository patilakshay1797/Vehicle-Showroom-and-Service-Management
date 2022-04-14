package com.app.service;

import java.util.List;

import com.app.dto.ServiceDto;
import com.app.pojos.BookService;
import com.app.pojos.Vehicle;

public interface IBookService {

	BookService getServiceDetails(int id);

	List<BookService> listOfBookingServices();

	BookService bookService(ServiceDto s1);

	BookService updateService(ServiceDto s);

	String removeServiceDetails(int id);

	// ########################################
	// Employee Service Methods

	List<BookService> getBookedServices();
}
