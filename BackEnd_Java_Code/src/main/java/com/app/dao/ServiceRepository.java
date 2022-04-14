package com.app.dao;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.app.pojos.BookService;

@Repository
public interface ServiceRepository extends JpaRepository<BookService, Integer> {

}
