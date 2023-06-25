//this attempt to solve the search problem worked

import React, { ChangeEvent, Component } from "react";
import "./Sidebar.css";
import SidebarItem5 from "./SidebarItem5";
import items from "../sidebar.json";

interface SidebarState {
  stateItems: any;
  search: string;
}

export default class Sidebar5 extends Component<{}, SidebarState> {
constructor(props:{}){
    super(props);
    this.state = {
        stateItems:items,
        search: "",
      };
}

  handleSearch(event: ChangeEvent<HTMLInputElement>) {
    this.setState({search: event.target.value})
    console.log("search in state",this.state.search);
    const resultedData = this.searchTree(JSON.parse(JSON.stringify(items)), event.target.value)
    console.log("AFter filter Resulted data<<<<>>>>", resultedData);
    this.setState({ stateItems: resultedData });//the stateItems is  now set to the filtered items
  }

  //searches the tree for the searchString
  searchTree(toBefiltered:any, search: string){
    console.log("Search is now",search)
    if (search == "") {
      console.log("search is null now")
      return toBefiltered;
    }
    return toBefiltered.filter((item: any) => {
        if (item.current.includes(search) && item.children === undefined) {
          return true;
        } else if (item.current.includes(search) && item.children !== undefined) {
          item.children = this.searchTree(item.children, search);
          return true;
        } else if (item.children) {
          item.children = this.searchTree(item.children, search);
          return item.children.length > 0;
        }
        return false;
      }
    );
  
  };

  render() {

    return (
      <div className="sidebar bg-dark text-white mt-2 ms-1 rounded">
        <div className="d-flex flex-column gap-2 mb-2">
          <input
            id="search_input"
            className="rounded"
            type="text"
            placeholder="Search"
            value={this.state.search}
            onChange={(e) => this.handleSearch(e)}
          />
        </div>
        {this.state.stateItems.map((value: any, index: number) => (
          <SidebarItem5
            key={index}
            itemTitle={value.current}
            itemChildren={value.children}
            
            isBranchActive={true}
          />
        ))}
      </div>
    );
  }
}
