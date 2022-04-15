package com.car.rent.models;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.OneToOne;
import javax.persistence.Table;

import com.car.rent.models.User;


@Entity
@Table(name = "cardetails")
public class CarDetail {

	/**
	 * 
	 */

	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	@Column(name = "id")
	Long id;

	@Column(name = "car_name")
	String car_name;
	
	@Column(name = "car_no")
	String car_no;
	
	@Column(name = "brand")
	String brand;
	
	@Column(name = "color")
	String color;
	

	@Column(name = "car_poster", nullable = true )
	String car_poster;

	
	@Column(name = "added_date", nullable = true)
	String added_date;
	

	@Column(name = "user_id", nullable = true)
	String user_id;
	
	@Column(name = "per_day_price", nullable = true)
	String per_day_price;
	
	
	@OneToOne
	@JoinColumn(name = "user_id", insertable = false, updatable = false)
	private User user;
	
	

	public User getUser() {
		return user;
	}


	public void setUser(User user) {
		this.user = user;
	}


	public Long getId() {
		return id;
	}


	public String getCar_name() {
		return car_name;
	}


	public String getCar_no() {
		return car_no;
	}


	public String getBrand() {
		return brand;
	}


	public String getColor() {
		return color;
	}


	public String getCar_poster() {
		return car_poster;
	}


	public String getAdded_date() {
		return added_date;
	}


	public String getUser_id() {
		return user_id;
	}


	public void setId(Long id) {
		this.id = id;
	}


	public void setCar_name(String car_name) {
		this.car_name = car_name;
	}


	public void setCar_no(String car_no) {
		this.car_no = car_no;
	}


	public void setBrand(String brand) {
		this.brand = brand;
	}


	public void setColor(String color) {
		this.color = color;
	}


	public void setCar_poster(String car_poster) {
		this.car_poster = car_poster;
	}


	public void setAdded_date(String added_date) {
		this.added_date = added_date;
	}


	public void setUser_id(String user_id) {
		this.user_id = user_id;
	}


	public String getPer_day_price() {
		return per_day_price;
	}


	public void setPer_day_price(String per_day_price) {
		this.per_day_price = per_day_price;
	}
	

	

	
}