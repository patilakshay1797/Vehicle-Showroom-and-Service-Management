package com.app.pojos;

import java.time.LocalDate;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.ManyToOne;

import org.springframework.format.annotation.DateTimeFormat;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor

@Entity
public class Invoice extends BaseEntity{
	/*
	 * transaction id vehicle no date and time amount customer id vehicle chassis no
	 * service no employee id
	 * 
	 */
	
	@ManyToOne
	private Customer customer;
	private String typeofInvoice;
	private double totalCost;
	
	@ManyToOne
	private BookService bookservice;
//	@Column(unique = true)
	
	@ManyToOne
	private Vehicle vehicle;
	@DateTimeFormat(pattern = "yyyy-MM-dd")
	@Column(name = "Invoice_date")
	private LocalDate dateOfInvoice;
}
