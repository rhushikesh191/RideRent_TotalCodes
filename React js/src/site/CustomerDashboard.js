import { Component } from "react";

import axios from 'axios';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import Header from './Header';

const apiUrl = 'http://localhost:8080/api/v1/';

export default class CustomerDashboard extends Component {
	constructor(props) {
		super(props);
		this.state = { bookingitem: [],custitem:'' };
        var data1 = JSON.parse(localStorage.getItem('CUSTDATA'));
        this.state.custitem=data1 ; 
	
	}
	componentDidMount() {

		axios.get(apiUrl + 'bookings/'+this.state.custitem.id)
			.then(response => {
				console.log(response.data);
				this.setState({ bookingitem: response.data });
			})
			.catch(function (error) {
				console.log(error);
			})
	}

	

	render() {
		return (
<div>
			

 
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
        <h1>Your Dahsboard</h1>
        <p>Manage Your Bookings</p>
    </div>
    </div>
</div>
</div>
</div>

<div className="site-section bg-light" id="contact-section">
<div className="container">
<div className="row justify-content-center text-center">
<div className="col-7 text-center mb-5">
    <h2>Manage your Booking</h2>
    <p></p>
</div>
</div>
<div className="row">
<div className="col-lg-3 ml-auto">
     <div className="bg-white p-3 p-md-5">
        <h3 className="text-black mb-4">Dashboard</h3>
        <ul className="list-unstyled footer-link">
        {/* <li className="d-block mb-3">
            <Link className="nav-link" to="addCar">Add Vehicle</Link>
            </li>*/}
        <li className="d-block mb-3">
            <Link className="nav-link" to="logout">Logout</Link>
        </li> 
        
        </ul>
    </div>
    </div>
    <div className="col-lg-9 mb-5" >
        <div className="bg-white p-3 p-md-5">
          <h3 className="text-black mb-4">Your Booking</h3>
          <div>
               <table className="table table-stripped">
                   <tr>
                       <th>Sr. No</th>
                       <th>Car Name</th>
                       <th>Car No</th>
                       <th>Owner Name</th>
                       <th>Owner Contact No</th>
                       <th>Booking From</th>
                       <th>Booking To</th>
                       <th>Booking Amount</th>
                       <th>Booking Status</th>
                   </tr>
                   {
                       this.state.bookingitem.map((item, idx) => {
                          return <tr>
                                    <td>{idx+1}</td>
                                    <td>{item.cardetail.car_name}</td>
                                    <td>{item.cardetail.car_no}</td>
                                    <td>{item.cardetail.user.username}</td>
                                    <td>{item.cardetail.user.contact_no}</td>
                                    <td>{item.from_date}</td>
                                    <td>{item.to_date}</td>
                                    <td>{item.total_amt}</td>
                                    <td>{item.booking_status}</td>
                                </tr>
                       })
                   }
                   
               </table>
          </div>
        </div>
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
}