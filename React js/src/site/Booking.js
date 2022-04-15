
import { Component, useState, useEffect } from "react";
import { useForm } from 'react-hook-form';
import { format , differenceInDays, parseISO } from 'date-fns';
import axios from 'axios';
import { BrowserRouter as Router, Switch, Route, Link, useHistory } from 'react-router-dom';
import { CancelScheduleSendOutlined } from "@material-ui/icons";
import Header from './Header';

const apiUrl = 'http://localhost:8080/api/v1/';
export default class Booking extends Component {

	constructor(props) {
		super(props);
		this.state = { caritem: '', 
             custitem:'',
             amount:0,

          };		

        var data = JSON.parse(localStorage.getItem('CARDATA'));
        this.state.caritem=data ;  
        
        var data1 = JSON.parse(localStorage.getItem('CUSTDATA'));
        this.state.custitem=data1 ; 
        console.log(data1);
        console.log(data);
        console.log(format(new Date(), 'yyyy-MM-dd'))
         
        this.handleSubmit = this.handleSubmit.bind(this);
    } 


    onBlur = (event) => {
        event.preventDefault();
        console.log(event);

        var fromdate=parseISO(format(new Date(event.target.form[0].value), 'yyyy-MM-dd'));
        var todate=parseISO(format(new Date(event.target.form[1].value), 'yyyy-MM-dd'));
        console.log(fromdate);
        console.log(todate);
        var days=differenceInDays(todate,fromdate);
        console.log(days);
        var tempamt=days*this.state.caritem.per_day_price;
        this.setState({ amount: tempamt });
      }
    
    handleSubmit= (event)=>{

        event.preventDefault();

        var fromdate=format(new Date(event.target.fromdate.value), 'yyyy-MM-dd');
        var todate=format(new Date(event.target.todate.value), 'yyyy-MM-dd');
        var totalamt=event.target.totalamt.value;


       
        var booking={       
            "cust_id": this.state.custitem.id,
            "car_id":  this.state.caritem.id,
            "total_amt":totalamt,
            "from_date":fromdate,
            "to_date":todate,
            "booking_date":format(new Date(), 'yyyy-MM-dd'),
            "payment_status": "Paid",
            "booking_status": "Success",       
        }

        if(this.state.custitem.id===null || this.state.custitem.id==="")
        {
           alert('Please Login or Register before proceeding');
           this.props.history.push('/custLogin');
        }else{    
          
       
           axios.post(apiUrl + 'booking',booking).then(result => {  
       
               console.log(result);
           }).catch(function (error) {
            console.log(error);
           });  
            alert("Booking Successfully");
            localStorage.removeItem("CARDATA");
           this.props.history.push('/custDashboard');
        } 
        var data3=JSON.parse(localStorage.getItem('CUSTDATA'));
        axios.post(apiUrl + 'email/'+data3.email).then(result => {
        
        })  .catch(function(error){
            console.log(error);
       }) 
       
       // history.push("/custDashboard");
    };  

    
	render() { return (<div>

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
        <h1>Booking</h1>
        <p>Book your favorite vehicle</p>
    </div>
    </div>
</div>
</div>
</div>

<div className="site-section bg-light" id="contact-section">
<div className="container">
<div className="row justify-content-center text-center">
<div className="col-7 text-center mb-5">
    <h2>Book your favorite vehicle</h2>
    <p></p>
</div>
</div>
<div className="row">
    <div className="col-lg-8 mb-5" >
    <form method="post" onSubmit={this.handleSubmit}>
        

        <div className="form-group row">
        <div className="col-md-12">
            <input type="text" className="form-control datepicker" placeholder="From Date" name="fromdate"  />
        </div>
        </div>

        <div className="form-group row">
        <div className="col-md-12">
            <input type="text" className="form-control datepicker" placeholder="To Date" name="todate"/>
        </div>
        </div>

        <div className="form-group row">
        <div className="col-md-12">
            <input type="text" className="form-control" placeholder="Total Amount" name="totalamt" onFocus={this.onBlur} value={this.state.amount} readOnly/>
        </div>
        </div>     
                
       
        <div className="form-group row">
        <div className="col-md-6 mr-auto">
            <button className="btn btn-block btn-primary text-white py-3 px-5">Book Now</button>
        </div>
        </div>
    </form>
    </div>
    <div className="col-lg-4 ml-auto">
     <div className="bg-white p-3 p-md-5">
        <h3 className="text-black mb-4">Vehicle Details</h3>
       
        <div className="col-lg-12">
            <div className="item-1">
                <a href="#"><img src={this.state.caritem.car_poster} alt="Image" className="img-fluid"/></a>
                <div className="item-1-contents">
                  <div className="text-center">
                  <h3><a href="#">{this.state.caritem.car_name}</a></h3>
                  <div className="rating">
                    <span className="icon-star text-warning"></span>
                    <span className="icon-star text-warning"></span>
                    <span className="icon-star text-warning"></span>
                    <span className="icon-star text-warning"></span>
                    <span className="icon-star text-warning"></span>
                  </div>
                  <div className="rent-price"><span>INR {this.state.caritem.per_day_price}/</span>day</div>
                  </div>                 
                 
                </div>
              </div>
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
