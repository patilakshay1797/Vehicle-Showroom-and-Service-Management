package com.app.service;

import java.util.List;

import com.app.pojos.Admin;

public interface IAdminService {
	// List<Admin> getAllEmployee();

	Admin loginAdmin(String email, String password);

	List<Admin> listAdmin();

//	Admin insertEmpDet(Admin transientEmp);
//
//	String deleteEmpDet(int empId);
//
//	Admin getEmpDett(int empId);
//
//	Admin updateEmpDetails(Admin detachedEmp);
//	
//	List<Admin> getEmployeeWithSalaryGreaterThan(double salary);
//	
//	int updateEmployeeSalaryByDepartment(double incr, String dept);
}
