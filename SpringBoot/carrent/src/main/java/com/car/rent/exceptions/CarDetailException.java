package com.car.rent.exceptions;


import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.ResponseStatus;



@ResponseStatus(value = HttpStatus.NOT_FOUND)
public class CarDetailException extends Exception {
	 
	  public CarDetailException(String message) {
	    super(message);
	  }

}