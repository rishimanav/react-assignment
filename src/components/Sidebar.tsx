import React, { ChangeEvent, Component } from "react";
import "./Sidebar.css";
import SidebarItem from "./SidebarItem";
import items from "../sidebar.json";

//sidebarState holds stateItems
interface sidebarState {
  stateItems: any,
  search: string
}

export default class Sidebar extends Component<{}, sidebarState> {

  //filled the json data object inside the jsonData variable
  jsonData=items;


  state = {
      stateItems: items,
      search:""
    };
  

  //resets the state after search
  // resetSearch(){
  //   this.setState({stateItems:items,search:"",toSearch:false});
  // }
  
  //on clicking the search button it calls the searchTree function
  
  //onChange in the search field- the search results should be displayed immediately
  
  handleSearch(event: ChangeEvent<HTMLInputElement>){
    //onChange the search property of the state is updated
    this.setState({search:event.target.value});
    const searchResults = this.searchTree(this.jsonData, this.state.search);
    this.setState({ stateItems: searchResults});
  };


  //searches the tree for the given search string
  searchTree = (items:any, search:string):any => {

    return items.filter((item:any) => {
      //if the item does not have any children and matches the search
      if (item.current.includes(search) && (item.children==undefined)) {
        console.log("Condition-1 is true");
        return true;
      }

      //if the item matches the search and has children
      else if (item.current.includes(search) && (item.children!=undefined)) {
        console.log("Required condition")
        item.children = this.searchTree(item.children, search);
        return true;
      }
      //if the item does not match the search but has children 
      else if (item.children){
        console.log("the item does not match, checking the children")
        item.children = this.searchTree(item.children,search);
      }

      //terminates if the leaf node does not match the search
      else{
        console.log("leaf node does not match");
        return false;
      }
      
    });
  };


  render() {
    const {stateItems} = this.state;
  
    return (
      <div className="sidebar bg-dark text-white mt-2 ms-1 rounded">
        <div className="d-flex flex-column gap-2 mb-2">
          <input
            className="rounded"
            type="text"
            placeholder="Search"
            //onChange the handlesearch updates the stateitems and search state properties
            onChange={e => this.handleSearch(e)}
          />

          {/* <button
            className="search-button btn btn-success rounded fw-bolder text-center"
            onClick={()=>this.handleSearch()}
          >
            <i className="bi-search me-2"></i>
            Search
          </button> */}

        </div>
        {stateItems.map((value: any, index: number) => 
            <SidebarItem key={index} itemTitle={value.current} itemChildren={value.children}/>
          )}
      </div>
    );
  }
  
}
