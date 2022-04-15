
import { Component, useState, useEffect } from "react";
import { useForm } from 'react-hook-form';
import axios from 'axios';
import { BrowserRouter as Router, Switch, Route, Link, useHistory } from 'react-router-dom';
import Header from './Header';

const apiUrl = 'http://localhost:8080/api/v1/';
export function LoginCustomer() {

	const { register, handleSubmit, errors } = useForm();
	const history = useHistory();

	const loginUser = (data) => {

		axios.post(apiUrl + 'customerlogin', data).then(result => {
			if (result.data === 'SUCCESS') {
				axios.get(apiUrl + 'customer/' + data.email).then(response => {

						localStorage.setItem("CUSTDATA", JSON.stringify(response.data));
						alert("Login Successfully");
                        history.push("/custDashboard");

					})
					.catch(function (error) {
						console.log(error);
					})

			}
			else {
				alert("Invalid Email and Password");
			}

		});

	};

	return (<div>

<div className="site-wrap" id="home-section">

<div className="site-mobile-menu site-navbar-target">
<div className="site-mobile-menu-header">
    <div className="site-mobile-menu-close mt-3">
    <span className="icon-close2 js-menu-toggle"></span>
    </div>
</div>
<div className="site-mobile-menu-body"></div>
</div>

<Header/>


<div className="ftco-blocks-cover-1">
<div className="ftco-cover-1 overlay innerpage" style={{'backgroundImage': 'url("assets/images/hero_2.jpg")'}}>
<div className="container">
    <div className="row align-items-center justify-content-center">
    <div className="col-lg-6 text-center">
        <h1>Customer Login</h1>
        <p>Login now</p>
    </div>
    </div>
</div>
</div>
</div>

<div className="site-section bg-light" id="contact-section">
<div className="container">
<div className="row justify-content-center text-center">
<div className="col-7 text-center mb-5">
    <h2>To access  your account you need to login</h2>
    <p></p>
</div>
</div>
<div className="row">
    <div className="col-lg-8 mb-5" >
    <form method="post" onSubmit={handleSubmit(loginUser)}>
        

        <div className="form-group row">
        <div className="col-md-12">
            <input type="text" className="form-control" placeholder="Email address" name="email" ref={register({ required: true })} />
        </div>
        </div>

        <div className="form-group row">
        <div className="col-md-12">
            <input type="password" className="form-control" placeholder="Password" name="password" ref={register({ required: true })} />
        </div>
        </div>     

     
                
       
        <div className="form-group row">
        <div className="col-md-6 mr-auto">
            <button className="btn btn-block btn-primary text-white py-3 px-5">Login</button>
        </div>
        </div>
    </form>
    </div>
    <div className="col-lg-4 ml-auto">
    {/* <div className="bg-white p-3 p-md-5">
        <h3 className="text-black mb-4">Contact Info</h3>
        <ul className="list-unstyled footer-link">
        <li className="d-block mb-3">
            <span className="d-block text-black">Address:</span>
            <span>34 Street Name, City Name Here, United States</span></li>
        <li className="d-block mb-3"><span className="d-block text-black">Phone:</span><span>+1 242 4942 290</span></li>
        <li className="d-block mb-3"><span className="d-block text-black">Email:</span><span>info@yourdomain.com</span></li>
        </ul>
    </div> */}
    </div>
</div>
</div>
</div>




<footer className="site-footer">
<div className="container">
<div className="row">
    <div className="col-lg-3">
    <h2 className="footer-heading mb-4">About Us</h2>
        <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. </p>
    </div>
    <div className="col-lg-8 ml-auto">
    <div className="row">
        <div className="col-lg-3">
        <h2 className="footer-heading mb-4">Quick Links</h2>
        <ul className="list-unstyled">
            <li><a href="#">About Us</a></li>
            <li><a href="#">Testimonials</a></li>
            <li><a href="#">Terms of Service</a></li>
            <li><a href="#">Privacy</a></li>
            <li><a href="#">Contact Us</a></li>
        </ul>
        </div>
        <div className="col-lg-3">
        <h2 className="footer-heading mb-4">Quick Links</h2>
        <ul className="list-unstyled">
            <li><a href="#">About Us</a></li>
            <li><a href="#">Testimonials</a></li>
            <li><a href="#">Terms of Service</a></li>
            <li><a href="#">Privacy</a></li>
            <li><a href="#">Contact Us</a></li>
        </ul>
        </div>
        <div className="col-lg-3">
        <h2 className="footer-heading mb-4">Quick Links</h2>
        <ul className="list-unstyled">
            <li><a href="#">About Us</a></li>
            <li><a href="#">Testimonials</a></li>
            <li><a href="#">Terms of Service</a></li>
            <li><a href="#">Privacy</a></li>
            <li><a href="#">Contact Us</a></li>
        </ul>
        </div>
        <div className="col-lg-3">
        <h2 className="footer-heading mb-4">Quick Links</h2>
        <ul className="list-unstyled">
            <li><a href="#">About Us</a></li>
            <li><a href="#">Testimonials</a></li>
            <li><a href="#">Terms of Service</a></li>
            <li><a href="#">Privacy</a></li>
            <li><a href="#">Contact Us</a></li>
        </ul>
        </div>
    </div>
    </div>
</div>
<div className="row pt-5 mt-5 text-center">
    <div className="col-md-12">
    <div className="border-top pt-5">
        <p>
    
    Copyright &copy; All rights reserved 
   
    </p>
    </div>
    </div>

</div>
</div>
</footer>

</div>


    </div>
    
	
	)
}
export default LoginCustomer