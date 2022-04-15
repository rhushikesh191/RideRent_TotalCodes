package com.car.rent.repositories;

import org.springframework.data.jpa.repository.JpaRepository;

import com.car.rent.models.Customer;
import com.car.rent.models.User;

public interface CustomerRepository extends JpaRepository<Customer, Long>{
	Customer findByEmail(String email);
}
