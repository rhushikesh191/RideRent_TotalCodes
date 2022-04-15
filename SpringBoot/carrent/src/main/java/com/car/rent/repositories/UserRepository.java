package com.car.rent.repositories;

import org.springframework.data.jpa.repository.JpaRepository;

import com.car.rent.models.User;

public interface UserRepository extends JpaRepository<User, Long>{
	User findByEmail(String email);
}
