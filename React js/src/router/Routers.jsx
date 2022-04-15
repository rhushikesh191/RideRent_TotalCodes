import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Home from '../site/Home'
import Header from '../site/Header'
import RegisterUser from '../site/RegisterUser'
import LoginUser from '../site/LoginUser'

import Logout from '../site/Logout'


function Routers() {
    return (
        <Router>
            <Header>
                <Switch>
                    <Route path='/' exact component={Home} />
                    <Route path='/home' exact component={Home} />
                    {/* <Route path='/registerUser' exact component={RegisterUser} />
                    <Route path='/loginUser' exact component={LoginUser} />
                  
                    <Route path='/logout' exact component={Logout} /> */}
                </Switch>
            </Header>
        </Router>

    )
}

export default Routers;