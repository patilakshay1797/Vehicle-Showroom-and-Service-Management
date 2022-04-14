package com.app.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.app.dto.AuthenticationRequest;
import com.app.dto.AuthenticationResponse;
import com.app.dto.ChangePasswordDto;
import com.app.dto.CustomerAndJWT;
import com.app.dto.SignUpRequest;
import com.app.jwt_utils.JwtUtils;
import com.app.pojos.Customer;
import com.app.pojos.User;
import com.app.service.ICustomerService;
import com.app.service.IUserService;

@RestController
@RequestMapping("/api")
@CrossOrigin(origins = "http://localhost:3000")
public class UserSignupSignInController {

	// auto wire Authentication Manager for user authentication , created in
	// Security Config class
	// (currently based upon user details service)
	@Autowired
	private AuthenticationManager authManager;

	// auto wire JwtUtils for sending signed JWT back to the clnt
	@Autowired
	private JwtUtils jwtUtils;

	@Autowired
	private IUserService userService;

	@Autowired
	private ICustomerService customerService;

	// add end point for user registration
	@PostMapping("/signup")
	public ResponseEntity<?> userRegistration(@RequestBody SignUpRequest request) {
		System.out.println("in user reg " + request);
		return ResponseEntity.ok(userService.registerUser(request));
	}

	// add end point for user authentication
	@PostMapping("/signin")
	public ResponseEntity<?> authenticateUser(@RequestBody AuthenticationRequest request) {
		System.out.println("in auth " + request);
		try {
			// Tries to authenticate the passed Authentication object, returning a fully
			// populated Authentication object (including granted authorities)if successful.
			Authentication authenticate = authManager.authenticate
			// An o.s.s.c.Authentication i/f implementation used for simple presentation of
			// a username and password.
			// Actual dao based authentication takes place here internally(first email :
			// here replaced username by email for authentication
			// n then pwd n then authorities gets validated)
			(new UsernamePasswordAuthenticationToken(request.getEmail(), request.getPassword()));
			Customer customer = customerService.getCustomerDetailsByEmail(request.getEmail());
			AuthenticationResponse resp = new AuthenticationResponse(jwtUtils.generateJwtToken(authenticate));
			resp.getJwt();
			CustomerAndJWT customerJwtdto = new CustomerAndJWT();
			customerJwtdto.setCustomer(customer);
			customerJwtdto.setJwt(resp.getJwt());
			// => successful authentication : create JWT n send it to the clnt in the
			// response.
			System.out.println("auth success " + authenticate);
			return ResponseEntity.ok().body(customerJwtdto);
		} catch (Exception e) {
			e.printStackTrace();
			// throw new RuntimeException("User authentication Failed", e);
			return ResponseEntity.status(HttpStatus.UNAUTHORIZED).body("unauthorized");
		}
	}

	@GetMapping("/checkEmail/{emailId}")
	public ResponseEntity<Boolean> checkEMailId(@PathVariable String emailId) {
		User user = userService.getUserDetailsForOTP(emailId);
		if (user != null)
			return ResponseEntity.ok().body(true);
		else {
			System.out.println("in else of controller");
			return ResponseEntity.status(HttpStatus.NO_CONTENT).body(false);
		}
	}

	@PostMapping("/changePassword")
	public ResponseEntity<?> changePassword(@RequestBody ChangePasswordDto newPass1) {
		System.out.println(newPass1.getPassword());
		System.out.println(newPass1.getEmail());
		System.out.println(newPass1.getOtp());
		String str = userService.changePassword(newPass1);
		if (str != null) {
			return ResponseEntity.ok().body(str);
		} else {
			return ResponseEntity.status(HttpStatus.NO_CONTENT).body("password change failed");
		}
	}

}
