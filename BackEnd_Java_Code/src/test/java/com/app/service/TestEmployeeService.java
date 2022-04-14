package com.app.service;

import static org.junit.jupiter.api.Assertions.*;

import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;

import com.app.service.IAdminService;

//@SpringBootTest //if you use @DataJpaTest(used only for jpa test so only dao layer beans will be available) in this then use @Rollback(false) on top of test method to reflect update in the database
class TestEmployeeService {

	@Autowired
	private IAdminService employeeService;

//	@Test
//	void testUpdateEmpSalByDept() {
//		int updateCount = empSer.updateEmployeeSalaryByDepartment(1000, "PRODUCTION");
//		assertEquals(2, updateCount);
//	}

}
