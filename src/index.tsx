import React from 'react';
import ReactDOM from 'react-dom/client';
import {createBrowserRouter,RouterProvider,} from "react-router-dom";
import './index.css';

import Home from './pages/Home';
import Game from './pages/Game';
import Contact from './pages/Contact';
import Login from './pages/Login';
import About from './pages/About';
import Navbar from './components/Navbar';


//created a router object
const router = createBrowserRouter([
  {
    path: "/",
    element: <><Navbar/><Home /></>,
  },
  {
    path: "/game",
    element: <><Navbar/><Game /></>,
  },
  {
    path: "/about",
    element: <><Navbar/><About /></>,
  },
  {
    path:"/login",
    element:<Login/>
  },
  {
    path:"/contact",
    element: <><Navbar/><Contact /></>
  }
]);


const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <RouterProvider router={router} />
);