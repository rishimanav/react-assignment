import React, { Component } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Login from "./pages/Login";
import Home from "./pages/Home";
import Contact from "./pages/Contact";
import About from "./pages/About";
import Game from "./pages/Game";
import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";
import Task4 from "./pages/Task4";


//inorder to change the parent state, we must pass the set state function
//of the parent to the child component as props. The child component
//should then call the function and change the state of the parent

//then we can pass on the modified state to other child components as well

interface AppState {
    username: string|null;
  }
  
export default class CRouter extends Component<{},AppState> {
    //constructor to initialise the usernanme to null
    constructor(props: {}) {
        super(props);
        this.state = {
            username: "",
        };
        this.submitUsername=this.submitUsername.bind(this);
    }
    
    //created a function to change the username property of the state
    submitUsername(usernameEntry:string|null){
        console.log("submitUsername called");
        this.setState({username:usernameEntry})
    }

    render() {
        return (
            <Router>
                <Routes>
                    {/* passed the function that alters the state of the parent element into Login as props*/}
                    <Route path="/" element={<Login submitUsername={this.submitUsername} />}></Route>

                    {/* passed the modified value to all the Navbar Components */}
                    <Route path="/home" element={<><Navbar username={this.state.username}/><Home /></>}></Route>
                    <Route path="/game" element={<><Navbar username={this.state.username}/><Game /></>}></Route>
                    <Route path="/about" element={<><Navbar username={this.state.username}/><About /></>}></Route>
                    <Route path="/contact" element={<><Navbar username={this.state.username}/><Contact /></>}></Route>
                    <Route path="/task4" element={<><Navbar username={this.state.username}/><Task4 /></>}></Route>
                </Routes>
            </Router>
        );
    }
}
