package com.app.service;

import static org.junit.jupiter.api.Assertions.*;

import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.security.crypto.password.PasswordEncoder;

import com.app.dao.CustomerAdmRepository;
import com.app.dao.RoleRepository;
import com.app.dao.UserRepository;
import com.app.dto.SignUpRequest;

@SpringBootTest(classes = UserServiceImplTest.class)
class UserServiceImplTest {

	@InjectMocks
	UserServiceImpl userServiceImpl;

	@Mock
	private UserRepository userRepo;
	@Mock
	private RoleRepository roleRepo;
	@Mock
	private PasswordEncoder encoder;
	@Mock
	private CustomerAdmRepository customerRepo;
	@Mock
	SignUpRequest signRequestObject;

	@Test
	void testRegisterUser() {

		SignUpRequest signReqObj = new SignUpRequest();
		signReqObj.setUserName("shahid");
		signReqObj.setEmail("ak@abc.com");
		signReqObj.setPassword("abc123");
		signReqObj.setContactNumber("9825565996");
		signReqObj.setAddress(null);
		signReqObj.setDateOfRegistration(null);
		signReqObj.setRoles(null);

		//

		userServiceImpl.registerUser(signReqObj);
	}

}
