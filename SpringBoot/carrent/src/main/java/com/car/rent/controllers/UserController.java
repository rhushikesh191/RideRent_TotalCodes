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
import com.car.rent.exceptions.UserException;
import com.car.rent.models.CarDetail;
import com.car.rent.models.User;

import com.car.rent.repositories.UserRepository;

@CrossOrigin(origins = "http://localhost:3000")
@RestController
@RequestMapping("/api/v1")
public class UserController {
	@Autowired
	private UserRepository userRepository;
	 @PostMapping("/userlogin")
	    public Status loginUser(@RequestBody User user) {
	        List<User> users = userRepository.findAll();
	        for (User other : users) {
	            if (other.getEmail().equals(user.getEmail()) && other.getPassword().equals(user.getPassword())) {
	                
	                
	                return Status.SUCCESS;
	            }
	        }
	        return Status.FAILURE;
	    }
	    @PostMapping("/userlogout")
	    public Status logUserOut(@RequestBody User user) {
	        List<User> users = userRepository.findAll();
	        for (User other : users) {
	            if (other.equals(user)) {
	               
	               
	                return Status.SUCCESS;
	            }
	        }
	        return Status.FAILURE;
	    }
	    
	    @PostMapping("/registeruser")
	    public Status registerUser(@RequestBody User user) {
	    	
	    	
	    	userRepository.save(user);
	        return Status.SUCCESS;
	    }
	    
	    @GetMapping("/users")
		public List<User> getAllUsers() {
			return userRepository.findAll();
		}
	    
	    @GetMapping("/user/{email}")
		public User getUserDetails(@PathVariable(value = "email") String email) {
			return userRepository.findByEmail(email);
		}
	    
	    @DeleteMapping("/user/{id}")
		public Map<String, Boolean> deleteCar(@PathVariable(value = "id") Long userId) throws Exception {
	    	User user = userRepository.findById(userId)
					.orElseThrow(() -> new UserException("User not found on :: " + userId));

			userRepository.delete(user);
			Map<String, Boolean> response = new HashMap<>();
			response.put("deleted", Boolean.TRUE);
			return response;
		}
}
