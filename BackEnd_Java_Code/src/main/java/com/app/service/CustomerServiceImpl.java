package com.app.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.mail.SimpleMailMessage;
import org.springframework.mail.javamail.JavaMailSender;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.app.custome_exception.ResourseNotFountException;
import com.app.dao.CustomerAdmRepository;
import com.app.pojos.Customer;
import com.app.pojos.Vehicle;

@Service
@Transactional
public class CustomerServiceImpl implements ICustomerService {

	@Autowired
	private JavaMailSender mailSender;

	@Autowired
	private CustomerAdmRepository customerRepo;

//	@Override
//	public Customer customerLogin(String email, String password) {
//
//		Customer login = customerRepo.findByEmailIdAndPassword(email, password);
//		if (login != null) {
//			sendEmail(email, "Login to the VS&SM Website", "did you logged into the website VS&SM");
//			return login;
//		}
//		return login;
//	}

//	private void sendEmail(String toEmail, String Subject, String body) {
//		SimpleMailMessage msg = new SimpleMailMessage();
//		msg.setFrom("nsbhosale007@gmail.com");
//		msg.setTo(toEmail);
//		msg.setText(body);
//		msg.setSubject(Subject);
//
//		mailSender.send(msg);
//
//		System.out.println(msg + "This msg send successfully to " + toEmail);
//	}

	@Override
	public Customer getCustomerDetailsById(int custId) {
		return customerRepo.findById(custId)
				.orElseThrow(() -> new ResourseNotFountException("Customer with id " + custId + " not found!!!!!!!!!"));
	}

	@Override
	public List<Customer> listOfCustomers() {
		return customerRepo.findAll();
	}

	@Override
	public Customer addCustomerDetails(Customer transientCust) {
		if (customerRepo.existsById(transientCust.getId())) {
			return null;
		}
		return customerRepo.save(transientCust);

	}

	@Override
	public Customer updateCustomerDetails(Customer detachedCust) {
		return customerRepo.save(detachedCust);
	}

	@Override
	public String DeleteCustomerDetails(int custId) {
		if (customerRepo.existsById(custId)) {
			customerRepo.deleteById(custId);
			return "Customer Details deleted with" + custId;
		}
		return null;
	}

	@Override
	public Customer getCustomerDetailsByEmail(String email) {
		return customerRepo.findByEmailId(email);
	}

}
