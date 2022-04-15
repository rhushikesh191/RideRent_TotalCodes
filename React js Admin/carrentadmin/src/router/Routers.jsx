import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import LoginPage  from '../admin/LoginPage'
import SideBar  from '../admin/SideBar'

import Dashboard  from '../admin/Dashboard'

import CustomerList  from '../admin/CustomerList'


import CityList from '../admin/CityList'
import UserList from '../admin/UserList'
import BookingList from '../admin/BookingList'
import CarList from '../admin/CarList'


function Routers() {
    return (
    
      <Router>
      <Switch>
      <Route path='/' exact component={LoginPage}/>
      <Route path='/loginpage' exact component={LoginPage}/>
      <Route path='/admin/:path?' exact>
          <SideBar>
            <Switch>
              <Route path='/' exact component={Dashboard} />
              <Route path='/admin/home' exact component={Dashboard} />
              <Route path='/admin/citylist' exact component={CityList} />
              <Route path='/admin/customers' exact component={CustomerList} />
            

              <Route path='/admin/carlist' exact component={CarList} />
              <Route path='/admin/userlist' exact component={UserList} />
              <Route path='/admin/bookinglist' exact component={BookingList} />
             
            </Switch>
          </SideBar>
        </Route>
        
      </Switch>
    </Router>
  
    )
  
  }
  
  export default Routers;