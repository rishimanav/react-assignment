import React, { Component } from 'react';
import Sidebar2 from '../components/Sidebar2';
import Sidebar from '../components/Sidebar';
import Sidebar3 from '../components/Sidebar3';
import Sidebar5 from '../components/Sidebar5';

export default class Task4 extends Component {
  render() {
    return (
      <div className="d-flex">
        <div className="col-2">
        <Sidebar5/>
        </div>
        
        <div className="form-render-spacen container-fluid mt-2 mx-2 rounded text-center bg-primary">
          <span className="text-white ">Form will be rendered here</span>
        </div>
      </div>
    )
  }
}

