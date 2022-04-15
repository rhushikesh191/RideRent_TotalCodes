package com.car.rent.models;

import java.util.List;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.OneToMany;
import javax.persistence.OneToOne;
import javax.persistence.Table;



@Entity
@Table(name = "booking")
public class Booking {
	
	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	@Column(name = "booking_id ")
	Long booking_id;

	@Column(name = "car_id")
	String car_id;
	
	@Column(name = "cust_id")
	String cust_id;
	
	@Column(name = "total_amt")
	String total_amt;
	
	@Column(name = "booking_date")
	String booking_date;
	
	@Column(name = "payment_status")
	String payment_status;
	
	@Column(name = "booking_status")
	String booking_status;
	
	@Column(name = "from_date")
	String from_date;
	
	@Column(name = "to_date")
	String to_date;
	
	@OneToOne
	@JoinColumn(name = "cust_id", insertable = false, updatable = false)
	private Customer customer;
	
	@OneToOne
	@JoinColumn(name = "car_id", insertable = false, updatable = false)
	private CarDetail cardetail;


	public Customer getCustomer() {
		return customer;
	}




	public void setCustomer(Customer customer) {
		this.customer = customer;
	}




	public CarDetail getCardetail() {
		return cardetail;
	}




	public void setCardetail(CarDetail cardetail) {
		this.cardetail = cardetail;
	}




	public Booking() {
		super();
		// TODO Auto-generated constructor stub
	}
	public Booking(Long booking_id, String cust_id, String total_amt, String booking_date, String payment_status,
			String booking_status,String car_id) {
		super();
		this.booking_id = booking_id;
		this.cust_id = cust_id;
		this.total_amt = total_amt;
		this.booking_date = booking_date;
		this.payment_status = payment_status;
		this.booking_status = booking_status;
		this.car_id=car_id;
	}
	


	public Long getBooking_id() {
		return booking_id;
	}


	public String getCar_id() {
		return car_id;
	}


	public String getCust_id() {
		return cust_id;
	}


	public String getTotal_amt() {
		return total_amt;
	}


	public String getBooking_date() {
		return booking_date;
	}


	public String getPayment_status() {
		return payment_status;
	}


	public String getBooking_status() {
		return booking_status;
	}


	public String getFrom_date() {
		return from_date;
	}


	public String getTo_date() {
		return to_date;
	}


	public void setBooking_id(Long booking_id) {
		this.booking_id = booking_id;
	}


	public void setCar_id(String car_id) {
		this.car_id = car_id;
	}


	public void setCust_id(String cust_id) {
		this.cust_id = cust_id;
	}


	public void setTotal_amt(String total_amt) {
		this.total_amt = total_amt;
	}


	public void setBooking_date(String booking_date) {
		this.booking_date = booking_date;
	}


	public void setPayment_status(String payment_status) {
		this.payment_status = payment_status;
	}


	public void setBooking_status(String booking_status) {
		this.booking_status = booking_status;
	}


	public void setFrom_date(String from_date) {
		this.from_date = from_date;
	}


	public void setTo_date(String to_date) {
		this.to_date = to_date;
	}

	
	
	
}
