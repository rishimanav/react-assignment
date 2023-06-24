import React, { Component } from 'react';
import Sidebar2 from '../components/Sidebar2';
import Sidebar from '../components/Sidebar';

export default class Task4 extends Component {
  render() {
    return (
      <div className="d-flex">
        <Sidebar/>
        <div className="form-render-spacen container-fluid mt-2 mx-2 rounded text-center bg-primary">
          <span className="text-white ">Form will be rendered here</span>
        </div>
      </div>
    )
  }
}

