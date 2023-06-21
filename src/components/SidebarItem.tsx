import React, { Component } from "react";
import "./SidebarItem.css";

export default class SidebarItem extends Component {
  render() {
    return (
      <div className="sidebar-item rounded p-2 d-flex gap-2">
        <div className="sidebar-title">
          <i className="bi-house-fill"></i>
        </div>
        <div>
          <span className="">Home</span>
        </div>
      </div>
    );
  }
}
