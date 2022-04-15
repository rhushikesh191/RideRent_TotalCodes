import { Component } from "react";

import axios from 'axios';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import Header from './Header';

const apiUrl = 'http://localhost:8080/api/v1/';

export default class Vehicle extends Component {
	constructor(props) {
		super(props);
		this.state = { caritems: [] };

	//	this.carDetails = this.carDetails.bind(this);
	}
	componentDidMount() {

		axios.get(apiUrl + 'cars')
			.then(response => {
				console.log(response.data);
				this.setState({ caritems: response.data });
			})
			.catch(function (error) {
				console.log(error);
			})
	}

	carDetails(item) {
		localStorage.setItem("CARDATA", JSON.stringify(item));
		this.props.history.push('/booking')
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
              <h1>Get Vechicle on rent</h1>
              <p></p>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div className="site-section bg-light">
      <div className="container">
        <div className="row">
        {

         this.state.caritems.map((item, idx) => {

        return <div className="col-lg-4 col-md-6 mb-4" key={item.id}>
            <div className="item-1">
                <a href="#"><img src={item.car_poster} alt="Image" className="img-fluid"/></a>
                <div className="item-1-contents">
                  <div className="text-center">
                  <h3><a href="#">{item.car_name}</a></h3>
                  <div className="rating">
                    <span className="icon-star text-warning"></span>
                    <span className="icon-star text-warning"></span>
                    <span className="icon-star text-warning"></span>
                    <span className="icon-star text-warning"></span>
                    <span className="icon-star text-warning"></span>
                  </div>
                  <div className="rent-price"><span>INR {item.per_day_price}/</span>day</div>
                  </div>
                  {/* <ul className="specs">
                    <li>
                      <span>Doors</span>
                      <span className="spec">4</span>
                    </li>
                    <li>
                      <span>Seats</span>
                      <span className="spec">5</span>
                    </li>
                    <li>
                      <span>Transmission</span>
                      <span className="spec">Automatic</span>
                    </li>
                    <li>
                      <span>Minium age</span>
                      <span className="spec">18 years</span>
                    </li>
                  </ul> */}
                  <div className="d-flex action">
                    <button  className="btn btn-primary" onClick={this.carDetails.bind(this,item)}>Book Now</button>
                  </div>
                </div>
              </div>
          </div>
         })
         
         }

         


          {/* <div className="col-12">
            <span className="p-3">1</span>
            <a href="#" className="p-3">2</a>
            <a href="#" className="p-3">3</a>
            <a href="#" className="p-3">4</a>
          </div> */}
        </div>
      </div>
    </div>

    <div className="container site-section mb-5">
      <div className="row justify-content-center text-center">
        <div className="col-7 text-center mb-5">
          <h2>How it works</h2>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nemo assumenda, dolorum necessitatibus eius earum voluptates sed!</p>
        </div>
      </div>
      <div className="how-it-works d-flex">
        <div className="step">
          <span className="number"><span>01</span></span>
          <span className="caption">Time &amp; Place</span>
        </div>
        <div className="step">
          <span className="number"><span>02</span></span>
          <span className="caption">Car</span>
        </div>
        <div className="step">
          <span className="number"><span>03</span></span>
          <span className="caption">Details</span>
        </div>
        <div className="step">
          <span className="number"><span>04</span></span>
          <span className="caption">Checkout</span>
        </div>
        <div className="step">
          <span className="number"><span>05</span></span>
          <span className="caption">Done</span>
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
              Copyright &copy; All Right Reserved
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