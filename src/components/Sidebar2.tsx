import React, { ChangeEvent, Component } from "react";
import "./Sidebar.css";
import SidebarItem from "./SidebarItem";
import items from "../sidebar.json";
import testItems from "../test.json";

interface sidebarState {
  stateItems: any;
  search: string | null;
  toSearch: boolean;
}

export default class Sidebar2 extends Component<{}, sidebarState> {
  constructor(props: {}) {
    super(props);
    this.state = {
      stateItems: items,
      search: "",
      toSearch: false,
    };
  }

  //updates the this.state.search on onChange
  updateSearch(event: ChangeEvent<HTMLInputElement>) {
    this.setState({search: event.target.value,});
  }



  render() {
    // if the button gets clicked i.e. we show whats searched
    return (
      <div className="sidebar bg-dark text-white mt-2 ms-1 rounded">
        <div className="d-flex flex-column gap-2 mb-2">
          <input
            className="rounded"
            type="text"
            placeholder="Search"
            onChange={(e) => this.updateSearch(e)}
          />
          <button className="search-button btn btn-success rounded fw-bolder text-center">
            <i className="bi-search me-2"></i>
            Search
          </button>
        </div>
        {this.state.stateItems.map((value: any, index: number) =>
          <SidebarItem
            key={index}
            itemTitle={value.current}
            itemChildren={value.children}
          
          />
        )}
      </div>
    );
  }
}
