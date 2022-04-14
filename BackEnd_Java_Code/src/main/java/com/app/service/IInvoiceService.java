package com.app.service;

import java.util.List;

import com.app.dto.InvoiceVehicleDto;
import com.app.pojos.Invoice;

public interface IInvoiceService {

	InvoiceVehicleDto bookVehicleInvoice(int custId);

	InvoiceVehicleDto purchaseVehcleInvoice(String chassisNo, int custId);

	List<Invoice> listofInvoices();
}
