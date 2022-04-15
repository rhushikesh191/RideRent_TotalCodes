import { Component } from "react";
import Footer from './Footer';
import Sidebar from './SideBar';
import axios from 'axios';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';


const apiUrl = 'http://localhost:8080/api/v1/';

export default class BookingList extends Component{

  constructor(props) {  
    super(props);  
    this.state = {bookings: []};  

   
  //  this.deleteCity = this.deleteCity.bind(this);
  
  }  
  componentDidMount(){  
      
    axios.get(apiUrl+'bookings')  
      .then(response => {  
        console.log(response.data);
        this.setState({ bookings: response.data });  
      })  
      .catch(function (error) {  
        console.log(error);  
      })  
  }  

  deleteBooking(bid) {

    axios.delete(apiUrl + 'booking/' + bid)
      .then(response => {
        this.setState({ bookings: this.state.bookings.filter(item => item.booking_id !== bid) });
          this.props.history.push('/admin/bookinglist');

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
                <h3 class="card-title">All Bookings</h3>
              </div>
            
              <div class="card-body">
              <table id="example1" class="table table-bordered table-striped">
                <thead>
                <tr>
                  <th>ID</th>
                  <th>Customer Name</th>
                  <th>Car Name</th>
                  <th>Amount</th>
                  <th>Date</th>
                  
                  <th>Payment Status</th>
                  <th>Booking Status</th>
                  <th>Action</th>
                </tr>
                </thead>
                <tbody>
                {  

                      this.state.bookings.map((item, idx) => {  

                      return <tr key={item.booking_id}>  

                        <td>{item.booking_id}</td>  

                        <td>{item.customer.username}</td>  
                        <td>{item.cardetail.car_name}</td>
                        <td>{item.total_amt}</td> 
                        <td>{item.booking_date}</td> 

                        <td>{item.payment_status}</td> 
                        <td>{item.booking_status}</td> 

                        <td>

                        <div class="btn-group">

                          <button className="btn btn-danger" onClick={() => this.deleteBooking(item.booking_id)}>Delete</button>

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