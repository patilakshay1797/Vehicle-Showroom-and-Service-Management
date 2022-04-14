package com.app.service;

import java.io.IOException;
import java.util.List;

import org.springframework.web.multipart.MultipartFile;

import com.app.dto.VehicleModelDto;
import com.app.pojos.VehicleModel;

public interface IVehicleModelService {

	VehicleModel addVehicleModelDetails(VehicleModelDto v1, MultipartFile imageFile)
			throws IllegalStateException, IOException;

	VehicleModel getVehicleModelDetails(Integer modelId);

	List<VehicleModel> getListOfAvailableModel();

	String deleteVehicleModel(Integer id);

}
