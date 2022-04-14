package com.app.service;

import static org.junit.jupiter.api.Assertions.*;
import static org.mockito.Mockito.when;

import java.util.Optional;

import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.springframework.boot.test.context.SpringBootTest;

import com.app.dao.EmployeeRepositiry;
import com.app.pojos.Employee;

@SpringBootTest(classes = EmployeeServiceImplTest.class)
class EmployeeServiceImplTest {

	@InjectMocks
	EmployeeServiceImpl employeeServiceImpl;

	@Mock
	EmployeeRepositiry employeeRepo;

	@BeforeEach
	void setUp() throws Exception {
	}

	@Test
	void testGetEmployeeDetailsById() {
		Optional<Employee> emp1 = Optional.ofNullable(new Employee("employee1", "male", "sales", 2000.00, "e1@xyz.com",
				"abc1", null, null, null, null, null));
		emp1.get().setId(1);
		when(employeeRepo.findById(1)).thenReturn(emp1);

		assertEquals("male", employeeServiceImpl.getEmployeeDetailsById(1).getGender());
	}

//	@Test
//	void testListOfEmployee() {
//		fail("Not yet implemented");
//	}
//
//	@Test
//	void testAddEmployeeDetails() {
//		fail("Not yet implemented");
//	}
//
//	@Test
//	void testUpdateEmployeeDetails() {
//		fail("Not yet implemented");
//	}
//
//	@Test
//	void testDeleteEmployeeDetails() {
//		fail("Not yet implemented");
//	}

}
