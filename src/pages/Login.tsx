import React from 'react';
import './Login.css';
import { Link } from 'react-router-dom';

interface LoginProps{
  submitUsername:(i:string|null)=>void
}

export default class Login extends React.Component<LoginProps> {

  //gets the username from the username input field
  // getUsername(val:string){

  // }

  pushNameChanges(){
    //HTMLElement does not have a property called value
    //The abpve error is raised as in TypeScript HTMLElement does not have a property called value
    //For input fields it has HTMLInputElement, which has value property
    const usernameEntry=(document.getElementById('username_input') as HTMLInputElement);
    this.props.submitUsername(usernameEntry.value);
  }

  render() {
    return (
      <div className="login-page row justify-content-center">
      {/* <!-- fixed the size of the form to 9 columns --> */}
      <div className="col-7">
        <div className="card bg-primary rounded shadow">
          <div className="card-header border-0 text-white fw-bolder login-header">
            Login
          </div>
          <div className="card-body">
            <div className="custom-form">
              <form>

                {/* <!-- username input --> */}
                <div className="row">
                  <div className="col-12 mb-3">
                    <label htmlFor="username" className="form-label text-white label-text ">Username*</label>
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
                      <label htmlFor="password" className="form-label text-white label-text">Password*</label>
                      <input
                        type="password"
                        className="form-control"
                        name="password"
                        id="password"
                        placeholder="Password"/>
                    </div>
                  </div>
                </div>

                {/* Submit Button */}
                <div className="mt-3 text-end">
                  <Link to="/home">
                    <button className="btn btn-danger rounded-pill login-button" 
                    onClick={()=>this.pushNameChanges()}>Submit</button>
                  </Link>
                </div>

              </form>
              
            </div>
          </div>
        </div>
      </div>
      </div>
    )
  }
}
