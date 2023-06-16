import React from 'react';
import { Link } from 'react-router-dom';


interface NavbarProps{
  username:string|null;
}

export default class Navbar extends React.Component<NavbarProps>{
  render() {
    return (
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
          <div className="container-fluid">
            <span className="navbar-brand">React-Assignment</span>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
              <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <li className="nav-item">
                    <Link className="nav-link" to="/home">Home</Link>
                </li>
                <li className="nav-item">
                    <Link className="nav-link" to="/about">About Me</Link>
                </li>
                <li className="nav-item">
                    <Link className="nav-link" to="/contact">Contact Me</Link>
                </li>
                <li className="nav-item">
                    <Link className="nav-link" to="/game">Game</Link>
                </li>
              </ul>   
            </div>
            <div className="ms-auto d-flex justify-content-around">
                <div className='text-white my-2 me-4'>{this.props.username}</div>
                <Link className="nav-link" to="/">
                  <button className="btn btn-outline-danger">Logout</button>
                </Link>
            </div>
          </div>
      </nav>
    )
  }
}
