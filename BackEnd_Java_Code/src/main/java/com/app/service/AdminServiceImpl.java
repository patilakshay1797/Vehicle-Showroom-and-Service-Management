package com.app.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.mail.SimpleMailMessage;
import org.springframework.mail.javamail.JavaMailSender;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.app.custome_exception.ResourseNotFountException;
import com.app.dao.AdminRepository;
//import com.app.pojos.Admin;
import com.app.pojos.Admin;

@Service
@Transactional
public class AdminServiceImpl implements IAdminService {

	@Autowired
	private AdminRepository AdminRepo;

	@Autowired
	private JavaMailSender mailSender;

	@Override
	public Admin loginAdmin(String email, String password) {
		Admin log = AdminRepo.findByEmailAndPassword(email, password);
		if (log != null) {
			sendEmail(email, "Login to the VS&SM Website", "did you logged into the website VS&SM");
			return log;
		}
		return log;
	}

	@Override
	public List<Admin> listAdmin() {
		return AdminRepo.findAll();
	}

	private void sendEmail(String toEmail, String Subject, String body) {
		SimpleMailMessage msg = new SimpleMailMessage();
		msg.setFrom("patilaskhay17797@gmail.com");
		msg.setTo(toEmail);
		msg.setText(body);
		msg.setSubject(Subject);
		mailSender.send(msg);
		System.out.println(msg + "This msg send successfully to " + toEmail);
	}
}
//		
//		return empRepo.findAll() ;
//	}
//
//	@Override
//	public Admin insertEmpDet(Admin transientEmp) {
//		
//		return empRepo.save(transientEmp);
//	}// tx boundary reached --> success --> session flushed --> auto dirty checking --> insert query--> rets detached emp
//
//	@Override
//	public String deleteEmpDet(int empId) {
//		//check if empId is valid
//		if(empRepo.existsById(empId)) {
//			empRepo.deleteById(empId);
//			return "Emp Details Deleted with id " + empId;
//		}
//		throw new ResourseNotFountException("Emp with Id "+ empId + " Not Found" );
//		
//	}
//
//	@Override
//	public Admin getEmpDett(int empId) {
//		
//		return empRepo.findById(empId).orElseThrow(() -> new ResourseNotFountException("Emp with id " +empId + " not found"));
//	}
//
//	@Override
//	public Admin updateEmpDetails(Admin detachedEmp) {
//		
//		return empRepo.save(detachedEmp);
//	}
//
//	@Override
//	public List<Admin> getEmployeeWithSalaryGreaterThan(double salary) {
//		
//		return empRepo.findBySalaryGreaterThan(salary);
//	}
//
//	@Override
//	public int updateEmployeeSalaryByDepartment(double incr, String dept) {
//		// TODO Auto-generated method stub
//		return empRepo.updateSalary(incr, dept);
//	}
//	
//	
//	

//}
