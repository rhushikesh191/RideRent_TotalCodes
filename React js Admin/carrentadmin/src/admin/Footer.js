import { Component } from "react";

export default class Footer extends Component
{
    render(){
        return(<footer class="main-footer">
        <strong>Copyright &copy; 2022 <a href="#">Vehicle On Rent</a>.</strong>
        All rights reserved.
        <div class="float-right d-none d-sm-inline-block">
          <b>Version</b> 1.1
        </div>
      </footer>)
    }
}