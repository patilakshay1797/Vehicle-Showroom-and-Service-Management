package com.app.service;

import java.time.LocalDate;
import java.util.List;

import javax.transaction.Transactional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.app.dao.InvoiceRepository;
import com.app.dao.VehicleRepository;
import com.app.dto.InvoiceVehicleDto;
import com.app.pojos.Address;
import com.app.pojos.Customer;
import com.app.pojos.Invoice;
import com.app.pojos.Vehicle;

@Service
@Transactional
public class InvoiceServiceImpl implements IInvoiceService {

	@Autowired
	private InvoiceRepository invoiceRepo;

	@Autowired
	private VehicleRepository vehicleRepo;

	@Override
	public InvoiceVehicleDto bookVehicleInvoice(int custId) {
		InvoiceVehicleDto booked = new InvoiceVehicleDto();
		Customer customer = new Customer(custId);
		Vehicle v1 = vehicleRepo.findByCustomer(customer);
		Customer c1 = v1.getCustomer();
		booked.setChassisNo(v1.getChassisNo());
		booked.setEngineNo(v1.getEngineNo());
		booked.setColor(v1.getColor());
		booked.setPrice(v1.getPrice());
		booked.setModelName(v1.getModelName());
		booked.setVehicleNo(v1.getVehicleNo());

		booked.setCustomerName(c1.getName());
		booked.setEmailId(c1.getEmailId());
		booked.setContactNumber(c1.getContactNumber());
		Address address = c1.getAddress();
		booked.setCity(address.getCity());
		booked.setCountry(address.getCountry());
		booked.setZipCode(address.getZipCode());
		booked.setState(address.getState());
		booked.setPrice(10000);
		double total = 10000 * 0.18 + 10000;
		booked.setTotalAmount(total);

		Invoice vehicleInvoice = new Invoice();
		// Customer customer1=new Customer(custId);
		vehicleInvoice.setCustomer(customer);
		;
		vehicleInvoice.setTotalCost(total);
		vehicleInvoice.setTypeofInvoice("VEHICLE BOOKING");
		vehicleInvoice.setVehicle(v1);
		vehicleInvoice.setDateOfInvoice(LocalDate.now());
		Invoice i1 = invoiceRepo.save(vehicleInvoice);
		booked.setInvoiceId(i1.getId());

		return booked;
	}

	@Override
	public InvoiceVehicleDto purchaseVehcleInvoice(String chassisNo, int custId) {
		InvoiceVehicleDto booked = new InvoiceVehicleDto();
		// Customer customer=new Customer(custId);

		Vehicle v1 = vehicleRepo.findByChassisNo(chassisNo);
		Customer c1 = v1.getCustomer();
		booked.setChassisNo(v1.getChassisNo());
		booked.setEngineNo(v1.getEngineNo());
		booked.setColor(v1.getColor());
		booked.setPrice(v1.getPrice());
		booked.setModelName(v1.getModelName());
		booked.setVehicleNo(v1.getVehicleNo());

		booked.setCustomerName(c1.getName());
		booked.setEmailId(c1.getEmailId());
		booked.setContactNumber(c1.getContactNumber());
		Address address = c1.getAddress();
		booked.setCity(address.getCity());
		booked.setCountry(address.getCountry());
		booked.setZipCode(address.getZipCode());
		booked.setState(address.getState());
		booked.setPrice(v1.getPrice());
		double price = v1.getPrice();
		double total = price + (price * 0.05) + (price * 0.05) + (price * 0.04) + (price * 0.18);
		booked.setTotalAmount(total);

		Invoice vehicleInvoice = new Invoice();
//		vehicleInvoice=invoiceRepo.findByVehicleId(chassisNo);
		vehicleInvoice.setTypeofInvoice("VEHICLE PURCHASING");
		vehicleInvoice.setCustomer(c1);
		vehicleInvoice.setBookservice(null);
		// vehicleInvoice.setId(null);
		vehicleInvoice.setTotalCost(total);
		vehicleInvoice.setVehicle(v1);
		vehicleInvoice.setDateOfInvoice(LocalDate.now());
		Invoice i1 = invoiceRepo.save(vehicleInvoice);
		booked.setInvoiceId(i1.getId());

		return booked;
	}

	@Override
	public List<Invoice> listofInvoices() {
		return invoiceRepo.findAll();
	}
}
