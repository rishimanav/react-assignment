import { BrowserRouter, Route, Link } from 'react-router-dom';
import React, { Component } from 'react'

import Home from "./pages/Home";
import Game from "./Game";
import Login from "./pages/Login";
import About from "./pages/About";
import Contact from './pages/Contact';


// wrapper component made for client-side routing
export default class Wrapper extends Component {
  render() {
    return (
    <div>
        <BrowserRouter>

              <Route path='/' element={<Home/>} />
              <Route path='/contact' element={<Contact/>} />
              <Route path='/about' element={<About/>} />

        </BrowserRouter>
      </div>
    )
  }
}
