import React, { Component } from "react";
import "./SidebarItem.css";

interface SidebarItemProps {
  itemTitle: string;
  itemChildren: any;
  isSearch:boolean;
  setFormName:(i:string)=>void
}

interface SidebarItemState {
  pressed: boolean;
}

export default class SidebarItem5 extends Component<SidebarItemProps, SidebarItemState> {
  constructor(props: SidebarItemProps) {
    super(props);
    this.state = {
      pressed: true
    };
  }

  // setPressed(isSearch:boolean){
  //   this.setState({
  //     pressed:isSearch
  //   })
  // }

  OnFormClick(){
    this.props.setFormName(this.props.itemTitle)
  }

  togglePressed = () => {
    this.setState(prevState => ({
      pressed: !prevState.pressed
    }));
  };

  render() {
    // console.log("VALUE OF STATE PRESSED>>>",this.state.pressed);
    // this.setPressed(this.props.isSearch);
    const { itemTitle, itemChildren} = this.props;
    const { pressed } = this.state;

    if (itemChildren) {
      return (
        <div className="sidebar-item">
          <div
            className="sidebar-item-title rounded p-2 d-flex gap-2"
            onClick={this.togglePressed}
          >
            <i className="bi-diagram-3-fill"></i>
            <span className="">{itemTitle}</span>
            <i className="bi-chevron-right ms-auto"></i>
          </div>

          <div className={pressed ? "sidebar-item-content-open" : "sidebar-item-content-closed rounded"}>
            {itemChildren.map((value: any, index: number) => (
              <SidebarItem5
                key={index}
                itemTitle={value.current}
                itemChildren={value.children}
                isSearch={this.props.isSearch}
                setFormName={this.props.setFormName}
              />
            ))}
          </div>
        </div>
      );
    } else {
      return (
        <div className="sidebar-item">
          <div className="sidebar-item-title rounded p-2 d-flex gap-2" onClick={()=>this.OnFormClick()}>
            <i className="bi-info-circle-fill"></i>
            <span className="">{itemTitle}</span>
            
          </div>
        </div>
      );
    }
  }
}
