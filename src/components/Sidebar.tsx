import React, { Component } from 'react'
import './Sidebar.css'
import SidebarItem from './SidebarItem'
import items from '../sidebar.json'

interface sidebarState{
  stateItems:any
}

export default class Sidebar extends Component<{},sidebarState> {
  constructor(props:{}){
    super(props);
    this.state={
      stateItems:items
    }
  }
  render() {
    return (
      <div className="sidebar bg-dark text-white mt-2 ms-1 rounded">
        {this.state.stateItems.map((value:any)=><SidebarItem itemTitle={value.current} itemChildren={value.children}/>)}
      </div>
    )
  }
}
