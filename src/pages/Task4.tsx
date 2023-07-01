import React, { Component } from "react";
// import Sidebar2 from "../components/Sidebar2";
// import Sidebar from "../components/Sidebar";
// import Sidebar3 from '../components/Sidebar3';
import "./Task4.css";
import Sidebar5 from "../components/Sidebar5";

interface TaskState {
  formName: string;
  NodeName: string;
}

export default class Task4 extends Component<{}, TaskState> {
  constructor(props: {}) {
    super(props);
    this.state = {
      formName: "Click on a Form",
      NodeName: "Select a Directory/File",
    };
    this.setFormName=this.setFormName.bind(this);
  }

  setFormName(i:string) {
    this.setState({formName:i})
  }

  render() {
    return (
      <div className="d-flex">
        <div className="col-2">
          <Sidebar5 setFormName={this.setFormName}/>
        </div>

        {/* pasted the code of Login Page  */}
        <div className="form-page container-fluid mt-2 mx-2 justify-content-center rounded">
          <div className="col-12 mt-5">
            <div className="card bg-primary rounded shadow">
              <div className="card-header border-0 text-white fw-bolder login-header">
                {this.state.formName}
              </div>
              <div className="card-body">
                <div className="custom-form">
                  <form>
                    {/* <!-- username input --> */}
                    <div className="row">
                      <div className="col-12 mb-3">
                        <label
                          htmlFor="username"
                          className="form-label text-white label-text "
                        >
                          Username*
                        </label>
                        <input
                          name="username"
                          id="username_input"
                          type="text"
                          className="form-control"
                          placeholder="Enter Name"
                          
                        />
                      </div>
                    </div>

                    {/* <!-- password input --> */}
                    <div className="row">
                      <div className="col-l2">
                        <div className="mb-3">
                          <label
                            htmlFor="password"
                            className="form-label text-white label-text"
                          >
                            Password*
                          </label>
                          <input
                            type="password"
                            className="form-control"
                            name="password"
                            id="password"
                            placeholder="Password"
                            
                          />
                        </div>
                      </div>
                    </div>

                    {/* Submit Button */}
                    <div className="mt-3 text-end">
                    
                        <button
                          className="btn btn-danger rounded-pill login-button"
                        >
                          Submit
                        </button>
                   
                    </div>

                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>

      </div>
    );
  }
}
