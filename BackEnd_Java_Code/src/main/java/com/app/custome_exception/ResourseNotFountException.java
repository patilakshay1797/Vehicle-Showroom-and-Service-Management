package com.app.custome_exception;

@SuppressWarnings("serial")
public class ResourseNotFountException extends RuntimeException {

	public ResourseNotFountException(String mesg) {
		super(mesg);
	}
}
