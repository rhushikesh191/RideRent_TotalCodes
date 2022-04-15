import { Component } from "react";
import Footer from './Footer';
import Sidebar from './SideBar';
import axios from 'axios';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';


const apiUrl = 'http://localhost:8080/api/v1/';

export default class UserList extends Component{

  constructor(props) {  
    super(props);  
    this.state = {cars: []};  

    

  
  }  
  componentDidMount(){  
      
    axios.get(apiUrl+'cars')  
      .then(response => {  
        console.log(response.data);
        this.setState({ cars: response.data });  
      })  
      .catch(function (error) {  
        console.log(error);  
      })  
  } 
  
  deleteCar(cid) {

    axios.delete(apiUrl + 'car/' + cid)
      .then(response => {
        this.setState({ cars: this.state.cars.filter(item => item.id !== cid) });
          this.props.history.push('/admin/carlist');

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
          
           </div>
           <br/>
            <div class="card card-primary">
              <div class="card-header">
                <h3 class="card-title">All Vehicles</h3>
              </div>
            
              <div class="card-body">
              <table id="example1" class="table table-bordered table-striped">
                <thead>
                <tr>
                  
                       <th>Sr. No</th>
                       <th>Photo</th>
                       <th>Car Name</th>
                       <th>Car No</th>
                       <th>Brand</th>
                       <th>Color</th>
                       <th>Owner Name</th>
                       <th>Owner Contact No</th>
                       <th>Price Per Day</th>
                       <th>Action</th>
                  
                 
                </tr>
                </thead>
                <tbody>
                {  

                      this.state.cars.map((item, idx) => {  

                      return <tr key={item.idx}>  

                       
                                    <td>{idx+1}</td>
                                    <td><img src={item.car_poster} width="100" height="100"/></td>
                                    <td>{item.car_name}</td>
                                    <td>{item.car_no}</td>
                                    <td>{item.brand}</td>
                                    <td>{item.color}</td>
                                    <td>{item.user.username}</td>
                                    <td>{item.user.contact_no}</td>
                                    <td>{item.per_day_price}</td>
                                    
                                    <td>

                                    <div class="btn-group">

                                      <button className="btn btn-danger" onClick={() => this.deleteCar(item.id)}>Delete</button>

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