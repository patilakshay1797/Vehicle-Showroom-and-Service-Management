package com.app.service;

import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.mockito.Mockito.when;

import java.time.LocalDate;
import java.util.HashSet;
import java.util.Optional;
import java.util.Set;

import org.junit.jupiter.api.Test;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.springframework.boot.test.context.SpringBootTest;

import com.app.dao.ServiceRepository;
import com.app.pojos.BookService;
import com.app.pojos.ServiceType;

@SpringBootTest(classes = BookServiceImplTest.class)
public class BookServiceImplTest {

	@Mock
	ServiceRepository serviceRepo;

	@InjectMocks
	BookServiceImpl bookServiceImpl;

	@Test
	public void test_getServiceDetails() {
		Set<ServiceType> setsertype = new HashSet<ServiceType>();
		setsertype.add(new ServiceType(20.00, 5.00, "oil", "oilchange"));
		Optional<BookService> bser = Optional.ofNullable(new BookService("12", "cust1", 1, "bmw", 20.50,
				LocalDate.parse("2022-04-14"), LocalDate.parse("2022-04-14"), 14, setsertype));

		when(serviceRepo.findById(12)).thenReturn(bser);
		Optional<BookService> dummybser = serviceRepo.findById(12);
		assertEquals("cust1", dummybser.get().getCustomerName());
	}

}
