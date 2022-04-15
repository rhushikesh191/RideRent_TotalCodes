import { Component } from "react";
import Footer from './Footer';
import Sidebar from './SideBar';
import axios from 'axios';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';


const apiUrl = 'http://localhost:8080/api/v1/';

export default class CityList extends Component {

  constructor(props) {
    super(props);
    this.state = { cities: [] };

  }
  componentDidMount() {

    axios.get(apiUrl + 'cities')
      .then(response => {
        console.log(response.data);
        this.setState({ cities: response.data });
      })
      .catch(function (error) {
        console.log(error);
      })
  }

  

  deleteCity(cid) {

    axios.delete(apiUrl + 'city/' + cid)
      .then(response => {
        this.setState({ cities: this.state.cities.filter(item => item.city_id !== cid) });
          this.props.history.push('/admin/citylist');

      })
      .catch(function (error) {
        console.log(error);
      })

  }

  render() {
    return (<div class="wrapper">
      {/* <Sidebar/> */}
      <div class="content-wrapper">


        <section class="content">
          <div class="container-fluid">

            <div class="row">
              <div class="col-md-12">
                <br />
                <div>
                  {/* <Link to={'/admin/AddCity'} className="btn btn-primary">Add City</Link> */}

                </div>
                <br />
                <div class="card card-primary">
                  <div class="card-header">
                    <h3 class="card-title">All City</h3>
                  </div>

                  <div class="card-body">
                    <table id="example1" class="table table-bordered table-striped">
                      <thead>
                        <tr>
                          <th>ID</th>
                          <th>CIty Name</th>
                          {/* <th>Action</th> */}

                        </tr>
                      </thead>
                      <tbody>
                        {

                          this.state.cities.map((item, idx) => {

                            return <tr key={item.city_id}>

                              <td>{item.city_id}</td>

                              <td>{item.city_name}</td>



                              <td>

                                <div class="btn-group">


                                

                                  <button className="btn btn-danger" onClick={() => this.deleteCity(item.city_id)}>Delete</button>

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
    </div>)
  }
}