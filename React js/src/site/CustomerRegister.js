import { Component, useState, useEffect } from "react";
import { useForm } from 'react-hook-form';
import axios from 'axios';
import { BrowserRouter as Router, Switch, Route, Link, useHistory } from 'react-router-dom';
import Header from './Header';

const apiUrl = 'http://localhost:8080/api/v1/';
function CustomerRegister() {

	const { register, handleSubmit, errors } = useForm();
	const history = useHistory();

	var today = new Date();
   
   // var cityitems=[];
    const [cityitems, setCityitems] = useState([])
    var selectValue=null;

	var date = today.getFullYear() + '-' + (today.getMonth() + 1) + '-' + today.getDate();

	const registerUser = (data) => {
        console.log(data);

		axios.post(apiUrl + 'registercustomer', data).then(result => {
			if (result.data === 'SUCCESS') {
				alert("Registration Successfully done!");
				history.push("/custLogin");
			}
			else {
				alert("Error");
			}

		});

	};
    useEffect(()=>{

        axios.get(apiUrl + 'cities')
        .then(response => {            
            setCityitems(response.data) ;            
        })
        .catch(function (error) {
            console.log(error);
        })
        
    },[cityitems]);

     const  handleChange=(e)=>{
    //     console.log(e)
    //     selectValue=e;
       }

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
            
          {/* <Header/> */}
          <header className="site-navbar site-navbar-target" role="banner">

			<div className="container">
			<div className="row align-items-center position-relative">

				<div className="col-3 ">
				<div className="site-logo">
					<Link to="/home">Ride Rent</Link>
				</div>
				</div>

				<div className="col-9  text-right">
				

				<span className="d-inline-block d-lg-none"><a href="#" className="text-white site-menu-toggle js-menu-toggle py-5 text-white"><span className="icon-menu h3 text-white"></span></a></span>

				

				<nav className="site-navigation text-right ml-auto d-none d-lg-block" role="navigation">
					<ul className="site-menu main-menu js-clone-nav ml-auto ">
					
					<li className="active">
						<Link className="nav-link" to="/">Home</Link>
						
					</li>
				
					<li><Link className="nav-link" to="vehicle">Vehicles</Link></li>
                    
						 
						 

						
						 <li> <Link className="nav-link" to="registerUser">Post Your Car</Link></li>
				 	     <li><Link className="nav-link" to="loginUser">Car Owner Login</Link></li>
					     <li><Link to="custRegister" className="nav-link">Customer Register</Link></li>
					     <li><Link to="custLogin" className="nav-link">Customer Login</Link></li>
					 
					    

					  
					</ul>
				</nav>
				</div>

				
			</div>
			</div>

			</header>



            <div className="ftco-blocks-cover-1">
            <div className="ftco-cover-1 overlay innerpage" style={{'backgroundImage': 'url("assets/images/hero_2.jpg")'}}>
            <div className="container">
                <div className="row align-items-center justify-content-center">
                <div className="col-lg-6 text-center">
                    <h1>Customer Registration</h1>
                    <p>Custoemr registration</p>
                </div>
                </div>
            </div>
            </div>
            </div>

            <div className="site-section bg-light" id="contact-section">
            <div className="container">
            <div className="row justify-content-center text-center">
            <div className="col-7 text-center mb-5">
                <h2>To Book Vehicle you need to register</h2>
                <p></p>
            </div>
            </div>
            <div className="row">
                <div className="col-lg-8 mb-5" >
                   
                <form method="post" onSubmit={handleSubmit(registerUser)}>
                    <div className="form-group row">
                    <div className="col-md-12">
                        <input type="text" className="form-control" placeholder="Name" name="username"  ref={register({ required: true })} />
                        <label class="error danger" style={{color:'red'}}>{errors.username && 'Name is required.'}</label>
                    </div>
                   {errors.useForm}
                    </div>

                    <div className="form-group row">
                    <div className="col-md-12">
                        <input type="text" className="form-control" placeholder="Email address" name="email" ref={register({ required: true })} />
                        <label class="error danger" style={{color:'red'}}>{errors.email && 'Email is required.'}</label>
                    </div>
                    </div>

                    <div className="form-group row">
                    <div className="col-md-12">
                        <input type="password" className="form-control" placeholder="Password" name="password" ref={register({ required: true })} />
                        <label class="error danger" style={{color:'red'}}>{errors.password && 'Name is required.'}</label>
                    </div>
                    </div>

                    <div className="form-group row">
                    <div className="col-md-12">
                        <input type="text" className="form-control" placeholder="Mobile No" name="contact_no" ref={register({ required: true })} />
                        <label class="error danger" style={{color:'red'}}>{errors.contact_no && 'Contact No is required.'}</label>
                    </div>
                    </div>
                   
                    <div className="form-group row">
                    <div className="col-md-12">
                        <select className="form-control" name="city_id" value={selectValue} onChange={handleChange()} ref={register({ required: true })} readOnly>
                        {
                            
                            cityitems.map((item, idx) => {
                             return <option value={item.city_id} key={item.city_id}>{item.city_name}</option>
                            })
                        }
                        </select>
                    </div>
                    </div>

                 
                     <input type="hidden" name="added_date" value={date} ref={register({ required: true })} />
					<input type="hidden" name="ustatus" value="1" ref={register({ required: true })} />

                   
                    <div className="form-group row">
                    <div className="col-md-6 mr-auto">
                        <button className="btn btn-block btn-primary text-white py-3 px-5">Register</button>
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


    
           </div>)    

};
export default CustomerRegister