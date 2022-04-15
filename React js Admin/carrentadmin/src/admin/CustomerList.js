import { Component } from "react";
import Footer from './Footer';
import Sidebar from './SideBar';
import axios from 'axios';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';


const apiUrl = 'http://localhost:8080/api/v1/';

export default class CustomerList extends Component{

  constructor(props) {  
    super(props);  
    this.state = {users: []};  

    
  //  this.deleteCity = this.deleteCity.bind(this);
  
  }  
  componentDidMount(){  
      
    axios.get(apiUrl+'customers')  
      .then(response => {  
        console.log(response.data);
        this.setState({ users: response.data });  
      })  
      .catch(function (error) {  
        console.log(error);  
      })  
  }  

 
  deleteCustomer(cid) {

    axios.delete(apiUrl + 'customer/' + cid)
      .then(response => {
        this.setState({ users: this.state.users.filter(item => item.id !== cid) });
          this.props.history.push('/admin/customers');

      })
      .catch(function (error) {
        console.log(error);
      })

  }

    render(){
        return(<div class="wrapper">          
        {/* <Sidebar/> */}
        <div class="content-wrapper">
      
        
        <section class="content">
  <div class="container-fluid">
  
    <div class="row">
    <div class="col-md-12">
    <br/>
           <div>
          { 
             //<Link to={'/admin/AddCity'} className="btn btn-primary">Add City</Link> 
          }
            
           </div>
           <br/>
            <div class="card card-primary">
              <div class="card-header">
                <h3 class="card-title">All Customers</h3>
              </div>
            
              <div class="card-body">
              <table id="example1" class="table table-bordered table-striped">
                <thead>
                <tr>
                  
                  <th>Customer Name</th>
                  <th>Email</th>
                  <th>Password</th>
                  <th>Contact NO</th>
                  <th>Action</th>
                 
                </tr>
                </thead>
                <tbody>
                {  

                      this.state.users.map((item, idx) => {  

                      return <tr key={item.user_id}>  

                       
                        <td>{item.username}</td>  

                        <td>{item.email}</td> 
                        <td>{item.password}</td> 

                        <td>{item.contact_no}</td> 
                        <td>

                        <div class="btn-group">

                          <button className="btn btn-danger" onClick={() => this.deleteCarOwner(item.id)}>Delete</button>

                        </div>

                        </td>

                      </tr>  

                    })}  
                </tbody>
                </table>
                </div>


            </div>
            </div>
     
    
    
    </div>
   </div>
        </section>
        </div>
        {/* <Footer/> */}
    </div>       )
    }
}