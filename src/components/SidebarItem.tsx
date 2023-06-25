import React, { Component } from "react";
import "./SidebarItem.css";

interface itemState{
  pressed:boolean
}

interface itemProps{
  itemTitle:string; // item name goes
  itemChildren:any; // item children(if any) goes here
}

export default class SidebarItem extends Component<itemProps,itemState> {
  constructor(props:itemProps){
    super(props);
    this.state={
      pressed:true,
    }
  }


  invertpressed(){
    this.setState({
      pressed:!this.state.pressed
    })
  }


  render() {
      
    // if the item has children
      if(this.props.itemChildren){
        return(
          <div className="sidebar-item">
            <div className="sidebar-item-title rounded p-2 d-flex gap-2" onClick={()=>this.invertpressed()}>
              <i className="bi-house-fill"></i>
              <span className="">{this.props.itemTitle}</span>
              
            </div>
            
            <div className={this.state.pressed?"sidebar-item-content-open":"sidebar-item-content-closed"}>
              {this.props.itemChildren.map(
                (value:{current:string,children:[]}, index:number)=><SidebarItem key={index} itemTitle={value.current} itemChildren={value.children}/>)}
            </div>
          </div>
        );
      }

      //if the item has no children (terminates the recursion)
      else{
          return(
            <div className="sidebar-item">
              <div className="sidebar-item-title rounded p-2 d-flex gap-2">
                <i className="bi-house-fill"></i>
                <span className="">{this.props.itemTitle}</span>
              </div>
            </div>
          );          
      }

    
    
        
  }
}

