package com.car.rent.repositories;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import com.car.rent.models.Booking;
import com.car.rent.models.CarDetail;



@Repository
public interface CarDetailRepository extends JpaRepository<CarDetail, Long> {	

	 public static final String FIND_BYUSER = "SELECT * FROM cardetails WHERE user_id=?";	

	 @Query(value = FIND_BYUSER, nativeQuery = true)
     List<CarDetail> getAllCarByUser(Long userid);	
}