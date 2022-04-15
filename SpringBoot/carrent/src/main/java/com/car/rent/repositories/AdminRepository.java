package com.car.rent.repositories;

import org.springframework.data.jpa.repository.JpaRepository;

import com.car.rent.models.Admin;

public interface AdminRepository extends JpaRepository<Admin, Long>{

}
