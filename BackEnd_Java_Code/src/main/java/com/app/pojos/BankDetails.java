package com.app.pojos;

import javax.persistence.Column;
import javax.persistence.Embeddable;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@AllArgsConstructor
@NoArgsConstructor
@Data
@Embeddable
public class BankDetails {

	@Column(name = "bank_name", length = 30)
	private String name;
	@Column(name = "account_no", length = 30)
	private String accountNo;
	@Column(name = "ifsc_code", length = 30)
	private String ifscCode;
	@Column(length = 30)
	private String location;
}
