package com.car.rent.controllers;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.car.rent.exceptions.CarDetailException;
import com.car.rent.exceptions.CityException;
import com.car.rent.models.Booking;
import com.car.rent.models.CarDetail;
import com.car.rent.models.City;
import com.car.rent.repositories.CarDetailRepository;

@CrossOrigin(origins = "http://localhost:3000")
@RestController
@RequestMapping("/api/v1")
public class CarDetailController {
	@Autowired
	private CarDetailRepository carReDetailRepository;
	
	@GetMapping("/cars")
	public List<CarDetail> getAllCars() {
		return carReDetailRepository.findAll();
	}

	@PostMapping("/cars")
	public Status createCar(@RequestBody CarDetail cardetail) {
		carReDetailRepository.save(cardetail);
		return Status.SUCCESS;
	}
	
	
	@GetMapping("/cars/{id}")
	public List<CarDetail> getAllCarsByUser(@PathVariable(value = "id") Long userID) {
		return carReDetailRepository.getAllCarByUser(userID);
	}
	
	@DeleteMapping("/car/{id}")
	public Map<String, Boolean> deleteCar(@PathVariable(value = "id") Long carId) throws Exception {
		CarDetail car = carReDetailRepository.findById(carId)
				.orElseThrow(() -> new CarDetailException("Car not found on :: " + carId));

		carReDetailRepository.delete(car);
		Map<String, Boolean> response = new HashMap<>();
		response.put("deleted", Boolean.TRUE);
		return response;
	}
}
