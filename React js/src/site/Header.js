import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom'

export default class Header extends Component {

	constructor(props) {
		super(props);

		this.state = {
             userLogged:false,
			 custLogged:false,
          };	

	}
	componentDidMount(){
		var data1 = JSON.parse(localStorage.getItem('CUSTDATA'));
		if(data1!==null){
			console.log(data1);
			
			if(data1.id!=='')
			{
				this.setState({custLogged:true})
			}
		}      
        

		var userdata = JSON.parse(localStorage.getItem('USERDATA'));
		if(userdata!==null){
			console.log(userdata);

			if(userdata.id!=='')
			{
				this.setState({userLogged:true})
			}
		}      
	}

	render() {
        console.log(this.state.custLogged)
		console.log(this.state.userLogged)
		 var button;
		if(this.state.custLogged)
		{
			button=<li><Link to="custDashboard" className="nav-link">My Account</Link></li>

		}else if(this.state.userLogged){
			button=<li><Link to="userDashboard" className="nav-link">My Account</Link></li>

		}else {
			button=<li><a href="#" className="nav-link">Contact</a></li>
		}
	
		return (
			<div>
                
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
					 
					     {button}

					  
					</ul>
				</nav>
				</div>

				
			</div>
			</div>

			</header>

            </div>

		)
	}
}




