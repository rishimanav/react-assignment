import React, { ChangeEvent } from 'react'
import './Contact.css'


interface ContactState{
  yourname:string,
  email:string
}


export default class Contact extends React.Component<{},ContactState> {
  constructor(props:{}){
    super(props);
    this.state={
      yourname:'',
      email:''
    }
  }

  //updates the state with any changes in the username (yourname)
  changeUNameHandler(event: ChangeEvent<HTMLInputElement>){
    this.setState({yourname:event.target.value})
  }

  //upadates the state with any changes in the email
  changeEmailHandler(event: ChangeEvent<HTMLInputElement>){
    this.setState({email:event.target.value})
  }

  //on submission of form
  submitHandler(event:React.MouseEvent<HTMLButtonElement>){
    event.preventDefault();
    console.log("submitHandler is called");
    console.log(this.state);

    //POST API using fetch()
    fetch("testurl.com/contactme",{
      method:'POST',
      headers:{
        'Accept':'application/json',
        'Content-Type':'application/json'
      },
      //passsing contact form details via API as an object
      body:JSON.stringify(this.state)
    })
  }


  render() {
    return (
      <div className="contact-page row justify-content-center">
      {/* <!-- fixed the size of the form to 9 columns --> */}
      <div className="col-7">
        <div className="card bg-primary rounded shadow">
          <div className="card-header border-0 text-white fw-bolder contact-header">
            Contact Me
          </div>
          <div className="card-body">
            <div className="custom-form">
              <form>

                {/* <!-- username input --> */}
                <div className="row">
                  <div className="col-12 mb-3">
                    <label htmlFor="yourname" className="form-label text-white contact-text ">Your Name</label>
                    <input
                      name="yourname"
                      id="yourname"
                      type="text"
                      className="form-control"
                      placeholder="Enter Name"
                      // value={this.state.yourname}
                      onChange={(e)=>this.changeUNameHandler(e)}
                      />
                  </div>
                </div>

                {/* <!-- password input --> */}
                <div className="row">
                  <div className="col-l2">
                    <div className="mb-3">
                      <label htmlFor="email" className="form-label text-white contact-text">Email*</label>
                      <input
                        type="email"
                        className="form-control"
                        name="email"
                        id="email"
                        placeholder="Email"
                        // value={this.state.email}
                        onChange={(e)=>this.changeEmailHandler(e)}
                        />
                    </div>
                  </div>
                </div>

                {/* Submit Button */}
                <div className="mt-3 text-end">
                    <button className="btn btn-success rounded-pill contact-button" 
                    type="submit" onClick={(e)=>this.submitHandler(e)}>Submit</button>
                    {/* onClick={()=>this.display_info()} */}
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
