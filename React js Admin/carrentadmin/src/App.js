import logo from './logo.svg';
import './App.css';
import React, { Component } from 'react';

import { BrowserRouter, Switch, Route } from 'react-router-dom';



import Routers  from './router/Routers'

function App() {
  return (<div> 
    
 <Routers/>

  </div>
  );
}

export default App;
