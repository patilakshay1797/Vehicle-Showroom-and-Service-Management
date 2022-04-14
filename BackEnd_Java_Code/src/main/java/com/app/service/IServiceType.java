package com.app.service;

import java.util.List;

import com.app.pojos.ServiceType;

public interface IServiceType {

	ServiceType addServiceType(ServiceType serviceType);

	List<ServiceType> getServiceTypeList();
}
