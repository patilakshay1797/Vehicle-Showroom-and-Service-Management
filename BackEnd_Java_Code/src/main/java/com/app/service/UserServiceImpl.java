package com.app.service;

import java.util.NoSuchElementException;
import java.util.Random;
import java.util.Set;
import java.util.stream.Collectors;

import javax.transaction.Transactional;

import org.springframework.beans.BeanUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.mail.SimpleMailMessage;
import org.springframework.mail.javamail.JavaMailSender;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import com.app.dao.CustomerAdmRepository;
import com.app.dao.RoleRepository;
import com.app.dao.UserRepository;
import com.app.dao.forgotPasswordRepository;
import com.app.dto.ChangePasswordDto;
import com.app.dto.SignUpRequest;
import com.app.dto.UserResponseDTO;
import com.app.pojos.Customer;
import com.app.pojos.ForgotPassword;
import com.app.pojos.Role;
import com.app.pojos.User;
import com.app.pojos.UserRoles;

@Service
@Transactional
public class UserServiceImpl implements IUserService {
	@Autowired
	private UserRepository userRepo;

	@Autowired
	private RoleRepository roleRepo;

	@Autowired
	private PasswordEncoder encoder;

	@Autowired
	private CustomerAdmRepository customerRepo;

	@Autowired
	private JavaMailSender mailSender;

	@Autowired
	private forgotPasswordRepository forgotRepo;

	@Override
	public UserResponseDTO registerUser(SignUpRequest request) {
		User user = new User();
		user.setUserName(request.getUserName());
		user.setEmail(request.getEmail());
		user.setPassword(encoder.encode(request.getPassword()));// set encoded pwd
		System.out.println(request.getRoles());
		Set<Role> roles = request.getRoles().stream()// convert Set<String> : role names ---> Stream<String>
				// mapping roleName --> Role (using RoleRepo)
				.map(roleName -> roleRepo.findByUserRole(UserRoles.valueOf(roleName)).get())
				// collect in a Set<Role>
				.collect(Collectors.toSet());
		user.setRoles(roles);
		user.setActive(true);
		User persistentUser = userRepo.save(user);// persisted user details in db
		UserResponseDTO dto = new UserResponseDTO();
		Customer customer = new Customer();
		customer.setName(request.getUserName());
		customer.setEmailId(request.getEmail());
		// customer.setPassword(encoder.encode(request.getPassword()));
		customer.setAddress(request.getAddress());
		customer.setActive(true);
		customer.setContactNumber(request.getContactNumber());
		customer.setDateOfRegistration(request.getDateOfRegistration());
//		customer.set
		Customer persistanceCustomer = customerRepo.save(customer);
		BeanUtils.copyProperties(persistentUser, dto);// for sending resp : copied User--->User resp DTO
		return dto;
	}

	@Override
	public User getUserDetailsForOTP(String email) {
		try {
			System.out.println("start");
			User user = userRepo.findByEmail(email).orElseThrow();
			System.out.println("after");
			if (user != null) {
				ForgotPassword forgotPassPresent = forgotRepo.findByEmail(email);
				if (forgotPassPresent != null) {
					forgotRepo.deleteById(forgotPassPresent.getId());
				}
				SimpleMailMessage msg = new SimpleMailMessage();
				msg.setFrom("patilaskhay17797@gmail.cosm");
				msg.setTo(email);
				Random random = new Random();
				int num = random.nextInt(100000);
				msg.setText("OTP : " + num);
				msg.setSubject("OTP from Vehicle Showrrom and Service Management");
				ForgotPassword newOtp = new ForgotPassword();
				newOtp.setEmail(email);
				newOtp.setOtp(num);
				forgotRepo.save(newOtp);
				mailSender.send(msg);
				return user;
			}
			return null;
		} catch (RuntimeException e) {
			System.out.println("in catch of otp");
			return null;
		}
	}

	@Override
	public String changePassword(ChangePasswordDto changePass) {
		try {
			ForgotPassword forgotPassPresent = forgotRepo.findByEmail(changePass.getEmail());
			double dbOtp = forgotPassPresent.getOtp();
			double customerOtp = changePass.getOtp();
			System.out.println(dbOtp);
			System.out.println(customerOtp);
			if (dbOtp == customerOtp) {
				User user = userRepo.findByEmail(changePass.getEmail()).orElseThrow();
				user.setPassword(encoder.encode(changePass.getPassword()));// set encoded pwd
				userRepo.save(user);
				if (forgotPassPresent != null) {
					forgotRepo.deleteById(forgotPassPresent.getId());
				}
				return "password changed";
			}
			return null;
		} catch (NoSuchElementException e) {
			return null;
		}
	}

	@Override
	public User getUserDetails(String email) {
		return userRepo.findByEmail(email).orElseThrow();
	}

}
