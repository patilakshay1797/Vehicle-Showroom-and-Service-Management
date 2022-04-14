package com.app.dto;

import lombok.Data;

@Data
public class ChangePasswordDto {
	private String email;
	private String password;
	private double otp;
}
