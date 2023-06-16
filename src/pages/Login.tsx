import React from 'react';
import './Login.css';
import { Link } from 'react-router-dom';

interface LoginProps{
  submitUsername:(i:string)=>void
}

export default class Login extends React.Component<LoginProps> {

  pushNameChanges(usernameEntry:string){
    this.props.submitUsername(usernameEntry);
  }

  render() {
    return (
      <div className="login-page row justify-content-center bg-primary">
      {/* <!-- fixed the size of the form to 9 columns --> */}
      <div className="col-8">
        <div className="custom-form">
          <form>

            {/* <!-- username input --> */}
            <div className="row">
              <div className="col-12 mb-3">
                <label htmlFor="name" className="form-label">Username* :</label>
                <input
                  name="name"
                  id="name"
                  type="text"
                  className="form-control"
                  placeholder="Enter Name"/>
              </div>
            </div>

            {/* <!-- password input --> */}
            <div className="row">
              <div className="col-l2">
                <div className="mb-3">
                  <label htmlFor="password" className="form-label">Password*:</label>
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
                <button className="btn btn-danger rounded-pill fw-bold" onClick={()=>this.pushNameChanges("Rishi")}>Submit</button>
              </Link>
            </div>

          </form>
          
        </div>
      </div>
      </div>
    )
  }
}
