import { Component } from "react";
import { BrowserRouter as Router, Switch, Route, Link,Redirect } from 'react-router-dom';

export default class Logout extends Component{
    constructor(props)
    {
        super(props)      

             
    }
    componentDidMount(){
        var data1 = JSON.parse(localStorage.getItem('CUSTDATA'));
		if(data1!==null){            
            data1.id='';
            data1.username='';
            localStorage.setItem("CUSTDATA",JSON.stringify(data1));
		}      
        

		var userdata = JSON.parse(localStorage.getItem('USERDATA'));
		if(userdata!==null){
			userdata.id='';
            userdata.username='';
              
            localStorage.setItem("USERDATA",JSON.stringify(userdata));

		}      

        this.props.history.push('/home'); 
        alert("Logout Successfully");
        window.location.reload();
    }

    render(){
        return (
			<div></div>)                    
    }

   
}