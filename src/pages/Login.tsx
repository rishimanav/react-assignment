import React,{ ChangeEvent } from 'react';
import './Login.css';
import { Link } from 'react-router-dom';

interface LoginProps{
  //callback function that changes the username in CRouter
  submitUsername:(i:string|null)=>void
}

//created a state to make a POST 
interface LoginState{
  username:string,
  password:string
}

export default class Login extends React.Component<LoginProps,LoginState> {
  constructor(props:LoginProps){
    super(props);
    this.state={
      username:"Test",
      password:"XYZ"
    }
  }
  //for handling changes in the username field
  changeUNameHandler(event:ChangeEvent<HTMLInputElement>){
    this.setState({username:event.target.value})
  }

  //for handling changes in the password field
  changePassHandler(event:ChangeEvent<HTMLInputElement>){
    this.setState({password:event.target.value})
  }

  pushNameChanges(){
    //HTMLElement does not have a property called value
    //The abpve error is raised as in TypeScript HTMLElement does not have a property called value
    //For input fields it has HTMLInputElement, which has value property
    // const usernameEntry=(document.getElementById('username_input') as HTMLInputElement); //Older Code
    const usernameEntry=this.state.username;
    //stored the item on local storage
    // localStorage.setItem('username',usernameEntry.value); //Older Code
    localStorage.setItem('username',usernameEntry);
    // this.props.submitUsername(usernameEntry.value); //Older Code
    this.props.submitUsername(usernameEntry);

    //POST API using fetch()
    fetch("react-assignment/testurl.com/login",{
      method:'POST',
      headers:{
        'Accept':'application/json',
        'Content-Type':'application/json'
      },
      //sending the username and pasword details via API as an object
      body:JSON.stringify(this.state)
    })
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
                      onChange={(e)=>this.changeUNameHandler(e)}
              
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
                        placeholder="Password"
                        onChange={(e)=>this.changePassHandler(e)}
                        />
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
