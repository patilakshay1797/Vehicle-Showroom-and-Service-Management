package com.app.dao;

import org.springframework.data.jpa.repository.JpaRepository;

import org.springframework.stereotype.Repository;

import com.app.pojos.ForgotPassword;

@Repository
public interface forgotPasswordRepository extends JpaRepository<ForgotPassword, Integer> {

	ForgotPassword findByEmail(String email);

}
