package com.app.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.app.custome_exception.ResourseNotFountException;
import com.app.dao.EmployeeRepositiry;
import com.app.pojos.Employee;

@Service
@Transactional
public class EmployeeServiceImpl implements IEmployeeService {

	@Autowired
	private EmployeeRepositiry employeeRepo;

	@Override
	public Employee getEmployeeDetailsById(int empId) {
		return employeeRepo.findById(empId)
				.orElseThrow(() -> new ResourseNotFountException("Employee with id " + empId + " not found!!!!!!!!!"));
	}

	@Override
	public List<Employee> listOfEmployee() {
		return employeeRepo.findAll();
	}

	@Override
	public Employee addEmployeeDetails(Employee transientEmp) {
		if (employeeRepo.existsById(transientEmp.getId())) {
			return null;
		}
		return employeeRepo.save(transientEmp);
	}

	@Override
	public Employee updateEmployeeDetails(Employee detachedEmp) {
		return employeeRepo.save(detachedEmp);
	}

	@Override
	public String DeleteEmployeeDetails(int empId) {
		if (employeeRepo.existsById(empId)) {
			employeeRepo.deleteById(empId);
			return "Employee Details deleted with" + empId;
		}
		return null;
	}

}
