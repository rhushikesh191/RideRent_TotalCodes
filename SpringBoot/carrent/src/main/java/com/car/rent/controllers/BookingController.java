package com.car.rent.controllers;

import java.util.Arrays;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.mail.SimpleMailMessage;
import org.springframework.mail.javamail.JavaMailSender;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.car.rent.exceptions.BookingException;
import com.car.rent.models.Booking;
import com.car.rent.repositories.BookingRepository;


@CrossOrigin(origins = "http://localhost:3000")
@RestController
@RequestMapping("/api/v1")
public class BookingController {
	@Autowired
	private BookingRepository bookingRepository;
@Autowired
  private JavaMailSender sender;
	@GetMapping("/bookings")
	public List<Booking> getAllBookings() {
		return bookingRepository.findAll();
	}
	
	@GetMapping("/bookings/{id}")
	public List<Booking> getAllBookingsByCustomer(@PathVariable(value = "id") Long userID) {
		return bookingRepository.getAllBookingByCustomer(userID);
	}

	@GetMapping("/booking/{id}")
	public ResponseEntity<Booking> getBookingById(@PathVariable(value = "id") Long bookingId) throws BookingException {
		Booking booking = bookingRepository.findById(bookingId)
				.orElseThrow(() -> new BookingException("City not found on :: " + bookingId));
		return ResponseEntity.ok().body(booking);
	}

	@PostMapping("/booking")
	public Booking createBooking(@RequestBody Booking booking) {
		return bookingRepository.save(booking);
	}
	
	@PostMapping("/email/{emailId}")
	public Map<String,Boolean> sendEmail(@PathVariable(value="emailId") String email){
		System.out.println(("Inside mail controller"));
		SimpleMailMessage mesg = new SimpleMailMessage();
		mesg.setTo(email);
		mesg.setSubject("Your vehicle has been booked");
		mesg.setText("Thanks For Booking our vehicle");
		sender.send(mesg);
		
		Map<String,Boolean> response = new HashMap<>();
		response.put("message Send", Boolean.TRUE);
		return response;
	}
	
	@PostMapping("/booking/{id}")
	public ResponseEntity<Booking> cancelBooking(@PathVariable(value = "id") Long bookingId)
			throws BookingException {

		Booking booking = bookingRepository.findById(bookingId)
				.orElseThrow(() -> new BookingException("City not found on :: " + bookingId));
		booking.setBooking_id(bookingId);
		booking.setBooking_status("Cancel");
		final Booking updatebooking = bookingRepository.save(booking);	
		
		
		return ResponseEntity.ok(updatebooking);
	}
	
	@GetMapping("/bookingsbycar/{id}")
	public List<Booking> getAllBookingsByUser(@PathVariable(value = "id") Long[] carIds) {
		System.out.println(""+carIds);
		return bookingRepository.findAllByCar(Arrays.asList(carIds));
	}
	
	
	@DeleteMapping("/booking/{id}")
	public Map<String, Boolean> deleteBooking(@PathVariable(value = "id") Long Id) throws Exception {
		Booking booking = bookingRepository.findById(Id)
				.orElseThrow(() -> new BookingException("Booking not found on :: " + Id));

		bookingRepository.delete(booking);
		Map<String, Boolean> response = new HashMap<>();
		response.put("deleted", Boolean.TRUE);
		return response;
	}
}
