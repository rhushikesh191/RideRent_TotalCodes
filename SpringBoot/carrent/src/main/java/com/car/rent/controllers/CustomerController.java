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

import com.car.rent.exceptions.CustomerException;
import com.car.rent.exceptions.UserException;
import com.car.rent.models.Customer;
import com.car.rent.models.User;
import com.car.rent.repositories.CustomerRepository;

@CrossOrigin(origins = "http://localhost:3000")
@RestController
@RequestMapping("/api/v1")
public class CustomerController {
	@Autowired
	private CustomerRepository customerRepository;
	 @PostMapping("/customerlogin")
	    public Status loginCustomerr(@RequestBody Customer customer) {
	        List<Customer> customers = customerRepository.findAll();
	        for (Customer other : customers) {
	            if (other.getEmail().equals(customer.getEmail()) && other.getPassword().equals(customer.getPassword())) {	                
	                
	                return Status.SUCCESS;
	            }
	        }
	        return Status.FAILURE;
	    }
	 
	    @PostMapping("/customerlogout")
	    public Status customerlogOut(@RequestBody Customer customer) {
	        List<Customer> customers = customerRepository.findAll();
	        for (Customer other : customers) {
	            if (other.equals(customer)) {	               
	               
	                return Status.SUCCESS;
	            }
	        }
	        return Status.FAILURE;
	    }
	    
	    @PostMapping("/registercustomer")
	    public Status registerCustomer(@RequestBody Customer user) {	    	
	    	
	    	customerRepository.save(user);
	        return Status.SUCCESS;
	    }
	    
	    @GetMapping("/customers")
		public List<Customer> getAllCustomer() {
			return customerRepository.findAll();
		}
	    
	    @GetMapping("/customer/{email}")
		public Customer getCustomerDetails(@PathVariable(value = "email") String email) {
			return customerRepository.findByEmail(email);
		}
	    
	    @DeleteMapping("/customer/{id}")
	 		public Map<String, Boolean> deleteCar(@PathVariable(value = "id") Long userId) throws Exception {
	    	Customer customer = customerRepository.findById(userId)
	 					.orElseThrow(() -> new CustomerException("Customer not found on :: " + userId));

	    	    customerRepository.delete(customer);
	 			Map<String, Boolean> response = new HashMap<>();
	 			response.put("deleted", Boolean.TRUE);
	 			return response;
	 		}
}
