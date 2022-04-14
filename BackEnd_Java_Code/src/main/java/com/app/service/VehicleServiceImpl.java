package com.app.service;

import java.io.File;
import java.io.IOException;
import java.io.InputStream;
import java.time.LocalDate;
import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.web.multipart.MultipartFile;

//import com.app.custom_exceptions.ResourceNotFoundException;
import com.app.custome_exception.ResourseNotFountException;
import com.app.dao.CustomerAdmRepository;
import com.app.dao.VehicleModelRepository;
import com.app.dao.VehicleRepository;
import com.app.dto.VehicleDto;
import com.app.pojos.Customer;
import com.app.pojos.Vehicle;
import com.app.pojos.VehicleModel;
import com.univocity.parsers.common.record.Record;
import com.univocity.parsers.csv.CsvParser;
import com.univocity.parsers.csv.CsvParserSettings;

@Service
@Transactional
public class VehicleServiceImpl implements IVehicleService {

	@Autowired
	private VehicleRepository vehicleRepo;

	@Autowired
	private VehicleModelRepository vehicleModelRepo;

	@Autowired
	private CustomerAdmRepository customerRepo;

	@Value("${file.upload.location}")
	private String location;

	@Override
	public Vehicle getVehicleDetailsbyChassisNo(String ChassisNo) {
		return vehicleRepo.findById(ChassisNo).orElseThrow(
				() -> new ResourseNotFountException("Vehicle with ChassisNo " + ChassisNo + " not found!!!!!!!!!"));
	}

	@Override
	public List<Vehicle> listOfVehicles() {
		return vehicleRepo.findAll();
	}

//	@Override
//	public Vehicle addVehicleDetails(Vehicle transientVeh, MultipartFile imageFile) throws IOException {
//		System.out.println(location);
//		imageFile.transferTo(new File(location, imageFile.getOriginalFilename()));
//		if(vehicleRepo.existsById(transientVeh.getChassisNo()))	{
//			return null;}
//		transientVeh.setImageName(imageFile.getOriginalFilename());
//		return vehicleRepo.save(transientVeh);
//
//	}

	@Override
	public Vehicle updateVehicleDetails(Vehicle detachedVeh) {
		return vehicleRepo.save(detachedVeh);
	}

	@Override
	public String DeleteVehicleDetails(String chassisNo) {
		if (vehicleRepo.existsById(chassisNo)) {
			vehicleRepo.deleteById(chassisNo);
			return "Vehicle Details deleted with" + chassisNo;
		}
		return null;
	}

	@Override
	public List<Vehicle> getAvailableVehicle() {
		return vehicleRepo.getListOfAvailableVehicle();
	}

	@Override
	public String addVehiclesList(MultipartFile vehicleList) throws IOException {
		List<Vehicle> listOfVehicle = new ArrayList<>();
		InputStream inputStream = vehicleList.getInputStream();
		CsvParserSettings settings = new CsvParserSettings();
		settings.setHeaderExtractionEnabled(true);
		CsvParser parser = new CsvParser(settings);
		List<Record> parserAllRecords = parser.parseAllRecords(inputStream);
		parserAllRecords.forEach(record -> {
			Vehicle vehicle = new Vehicle();
			vehicle.setChassisNo(record.getString("chassis_no"));
			vehicle.setEngineNo(record.getString("engine_no"));
			vehicle.setColor(record.getString("color"));
			vehicle.setVehicleType(record.getString("Vehicle_type"));
			vehicle.setPrice(Double.parseDouble(record.getString("price")));
			vehicle.setModelName(record.getString("model_name"));
			listOfVehicle.add(vehicle);
		});
		vehicleRepo.saveAll(listOfVehicle);
		return "Data uploaded";
	}

	@Override
	public Vehicle bookVehicle(String model, String color, int custId) {
		Customer cust = customerRepo.findById(custId).orElseThrow();
		List<Vehicle> vList = vehicleRepo.bookingVehicle(model, color);
		if (!vList.isEmpty()) {
			Vehicle booked = vList.get(0);
			booked.setBookedStatus(true);
			booked.setCustomer(cust);
			booked.setDateOfBooking(LocalDate.now());
			VehicleModel vehModel = vehicleModelRepo.findByModelName(model);
			vehModel.setQuantity(vehModel.getQuantity() - 1);
			return vehicleRepo.save(booked);
		}
		return null;
	}

	@Override
	public Vehicle addVehicle(Vehicle veh) {
		return vehicleRepo.save(veh);
	}

	@Override
	public List<Vehicle> listOfBookedVehicles() {
		return vehicleRepo.getListOfBookedVehicle();
	}

	@Override
	public Vehicle purchaseVehicle(String vehId) {
		Vehicle toPurchase = vehicleRepo.findById(vehId).orElseThrow();
		if (toPurchase != null) {
			toPurchase.setPurchasedStatus(true);
			toPurchase.setDateOfPurchase(LocalDate.now());
			return vehicleRepo.save(toPurchase);
		}
		return null;
	}

	@Override
	public String checkAvailabilityForBooking(String model, String color) {
		List<Vehicle> vList = vehicleRepo.bookingVehicle(model, color);
		if (!vList.isEmpty()) {
			return "Vehicle Available for booking";
		}
		return null;
	}
}
