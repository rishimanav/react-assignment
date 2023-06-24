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

  constructor(props: {}) {
    super(props);
    this.state = {
      stateItems: items,
      search:""
    };
  }

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
  searchTree = (items:any, search:string) => {
    return items.filter((item:any) => {
      if (item.current.includes(search)) {
        return true;
      } 
      else if (item.children) {
        item.children = this.searchTree(item.children, search);
      }
      return false;
    });
  };

  updateSearch(event: ChangeEvent<HTMLInputElement>) {
    this.setState({
      search: event.target.value,
    });
  }

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
