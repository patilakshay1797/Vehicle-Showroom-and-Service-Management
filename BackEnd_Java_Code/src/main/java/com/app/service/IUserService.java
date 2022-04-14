package com.app.service;

import com.app.dto.ChangePasswordDto;
import com.app.dto.SignUpRequest;
import com.app.dto.UserResponseDTO;
import com.app.pojos.User;

//Nothing to do with spring security : it's job currently is user registration
public interface IUserService {

	UserResponseDTO registerUser(SignUpRequest request);

	User getUserDetailsForOTP(String email);

	User getUserDetails(String email);

	String changePassword(ChangePasswordDto changePass);
}
