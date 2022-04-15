package com.car.rent.repositories;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.car.rent.models.City;

@Repository
public interface CityRepository extends JpaRepository<City, Long> {	

}