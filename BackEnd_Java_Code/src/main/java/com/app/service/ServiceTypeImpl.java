package com.app.service;

import java.util.List;

import javax.transaction.Transactional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.app.dao.ServiceTypeRepository;
import com.app.pojos.ServiceType;

@Service
@Transactional
public class ServiceTypeImpl implements IServiceType {

	@Autowired
	private ServiceTypeRepository serviceTypeRepo;

	@Override
	public ServiceType addServiceType(ServiceType serviceType) {
		return serviceTypeRepo.save(serviceType);
	}

	@Override
	public List<ServiceType> getServiceTypeList() {
		return serviceTypeRepo.findAll();
	}

}
