import React from 'react';
import ReactDOM from 'react-dom/client';
import {createBrowserRouter,RouterProvider,} from "react-router-dom";
import './index.css';

import Home from './pages/Home';
import Game from './Game';
import Contact from './pages/Contact';
import Login from './pages/Login';
import About from './pages/About';
import Wrapper from './Wrapper';
import Navbar from './components/Navbar';


//created a router object
const router = createBrowserRouter([
  {
    path: "react-assignment/home",
    element: <><Navbar/><Home /></>,
  },
  {
    path: "react-assignment/game",
    element: <><Navbar/><Game /></>,
  },
  {
    path: "react-assignment/about",
    element: <><Navbar/><About /></>,
  },
  {
    path:"react-assignment/",
    element:<Login/>
  }
]);


const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <RouterProvider router={router} />
);