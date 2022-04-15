package com.car.rent.repositories;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import com.car.rent.models.Booking;

public interface BookingRepository extends JpaRepository<Booking, Long>{
	
	public static final String FIND_CUST = "SELECT * FROM booking WHERE cust_id=? ";
	public static final String FIND_BY_CAR = "SELECT * FROM booking WHERE car_id IN(:carids) ";

	 @Query(value = FIND_CUST, nativeQuery = true)
     List<Booking> getAllBookingByCustomer(Long custid);
	 
	 @Query(value = FIND_BY_CAR, nativeQuery = true)
     List<Booking> findAllByCar(@Param("carids")List<Long> car_ids);  
	 
     
}
