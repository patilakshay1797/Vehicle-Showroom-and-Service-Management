package com.app.service;

import java.util.HashSet;
import java.util.List;
import java.util.Set;

import org.springframework.transaction.annotation.Transactional;

import com.app.custome_exception.ResourseNotFountException;
import com.app.dao.ServiceRepository;
import com.app.dao.ServiceTypeRepository;
import com.app.dto.ServiceDto;
import com.app.pojos.BookService;
import com.app.pojos.ServiceType;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
@Transactional
public class BookServiceImpl implements IBookService {

	@Autowired
	private ServiceRepository serviceRepo;

	@Autowired
	private ServiceTypeRepository serviceTypeRepo;

	@Override
	public BookService getServiceDetails(int id) {
		return serviceRepo.findById(id).orElseThrow(
				() -> new ResourseNotFountException("Service details with id " + id + " not found!!!!!!!!!"));
	}

	@Override
	public List<BookService> listOfBookingServices() {
		return serviceRepo.findAll();
	}

	@Override
	public BookService bookService(ServiceDto s1) {
		BookService bookedservice = new BookService();
		bookedservice.setCustomerName(s1.getCustomerName());
		bookedservice.setKmsDriven(s1.getKmsDriven());
		bookedservice.setCustomerId(s1.getCustomerId());
		bookedservice.setEmpId(0);
		bookedservice.setModelName(s1.getModelName());
		bookedservice.setServiceBookingDate(s1.getServiceBookingDate());
		bookedservice.setServicingDate(s1.getServicingDate());
		bookedservice.setVehicleNo(s1.getVehicleNo());
		// bookedservice.setSevicesincluded(includeservices);
//		bookedservice.setTypes(null);
		BookService saved = serviceRepo.save(bookedservice);
//		saved.setSevicesincluded(includeservices);
//		BookService withtypes = serviceRepo.save(saved);
		return saved;
	}

	@Override
	public BookService updateService(ServiceDto serviceDetails) {
		BookService bookService = serviceRepo.findById(serviceDetails.getId()).orElseThrow();
		System.out.println(bookService);
		Set<ServiceType> setOfServices = new HashSet<ServiceType>();
		for (Integer i : serviceDetails.getServiceTypes()) {
			ServiceType serviceType = serviceTypeRepo.findById(i).orElseThrow();
			setOfServices.add(serviceType);
		}
		bookService.setTypes(setOfServices);
		System.out.println(bookService);
		return serviceRepo.save(bookService);
	}

	@Override
	public String removeServiceDetails(int id) {
		if (serviceRepo.existsById(id)) {
			serviceRepo.deleteById(id);
			return "Service Details deleted with" + id;
		}
		return null;
	}

	@Override
	public List<BookService> getBookedServices() {
		return serviceRepo.findAll();
	}

}
