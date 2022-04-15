
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Home from './site/Home';
import RegisterUser from './site/RegisterUser';
import Logout from './site/Logout';
import LoginUser from './site/LoginUser';
import UserDashboard from './site/UserDashboard';
import AddCar from './site/AddCar';
import Vehicle from './site/Vehicle';
import LoginCustomer from './site/LoginCustomer';
import CustomerRegister from './site/CustomerRegister';
import CustomerDashboard from './site/CustomerDashboard';
import Booking from './site/Booking';
import App from './App';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  
    <Router>
            
                <Switch>
                    <Route path='/' exact component={Home} />
                    <Route path='/home' exact component={Home} />
                    <Route path='/registerUser' exact component={RegisterUser} />
                    <Route path='/loginUser' exact component={LoginUser} />

                    <Route path='/userDashboard' exact component={UserDashboard} />
                    <Route path='/addCar' exact component={AddCar} />
                    <Route path='/vehicle' exact component={Vehicle} />

                    <Route path='/custLogin' exact component={LoginCustomer} />
                    <Route path='/custRegister' exact component={CustomerRegister} />
                    <Route path='/custDashboard' exact component={CustomerDashboard} />
                    <Route path='/booking' exact component={Booking} />
                    <Route path='/logout' exact component={Logout} /> 
                </Switch>
                 
        </Router>
  ,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
