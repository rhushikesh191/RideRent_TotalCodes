import logo from './logo.svg';
import './App.css';

import Routers  from './router/Routers'
import Home from './site/Home'
import React, { Component } from 'react';


const guest={
  "id": "",
  "username": "",
  "email": "",
  "password": "",
  "contact_no": "",
  "city_id": "",
  "added_date": "",
  "ustatus": ""
}

function App() {
  if (localStorage.getItem("USERDATA") === null) {
    localStorage.setItem("USERDATA",JSON.stringify(guest));
    localStorage.setItem("CUSTDATA",JSON.stringify(guest));
 }
 
  return (
    <div className="App">
      <Home/>
    </div>
  );
}

export default App;
