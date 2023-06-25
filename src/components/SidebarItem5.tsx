import React, { Component } from "react";
import "./SidebarItem.css";

interface SidebarItemProps {
  itemTitle: string;
  itemChildren: any;
  isBranchActive: boolean;
}

interface SidebarItemState {
  pressed: boolean;
}

export default class SidebarItem5 extends Component<SidebarItemProps, SidebarItemState> {
  constructor(props: SidebarItemProps) {
    super(props);
    this.state = {
      pressed: false
    };
  }

  togglePressed = () => {
    this.setState(prevState => ({
      pressed: !prevState.pressed
    }));
  };

  render() {
    const { itemTitle, itemChildren, isBranchActive } = this.props;
    const { pressed } = this.state;

    if (itemChildren) {
      return (
        <div className="sidebar-item">
          <div
            className={`sidebar-item-title rounded p-2 d-flex gap-2 ${isBranchActive && pressed ? "active" : ""}`}
            onClick={this.togglePressed}
          >
            <i className="bi-diagram-3-fill"></i>
            <span className="">{itemTitle}</span>
            <i className="bi-chevron-down ms-auto"></i>
          </div>

          <div className={pressed ? "sidebar-item-content-open" : "sidebar-item-content-closed"}>
            {itemChildren.map((value: any, index: number) => (
              <SidebarItem5
                key={index}
                itemTitle={value.current}
                itemChildren={value.children}
                isBranchActive={isBranchActive}
              />
            ))}
          </div>
        </div>
      );
    } else {
      return (
        <div className="sidebar-item">
          <div
            className={`sidebar-item-title rounded p-2 d-flex gap-2 ${
              isBranchActive ? "active" : ""
            }`}
          >
            <i className="bi-info-circle-fill"></i>
            <span className="">{itemTitle}</span>
            
          </div>
        </div>
      );
    }
  }
}
