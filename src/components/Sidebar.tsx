import React, { Component } from 'react'
import './Sidebar.css'
import SidebarItem from './SidebarItem'
import items from '../sidebar.json'

export default class Sidebar extends Component {
  render() {
    return (
      <div className="sidebar bg-dark text-white mt-2 ms-1 rounded">
        
        <SidebarItem/>
      </div>
    )
  }
}
