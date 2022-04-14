package com.app.pojos;

import javax.persistence.Entity;
import javax.persistence.Table;

import lombok.Data;

@Entity
@Table(name = "forgot_password_tb")
@Data
public class ForgotPassword extends BaseEntity {

	private String email;
	private double otp;
}
