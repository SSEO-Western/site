import React, { useState, useEffect } from 'react';
import {Link} from "react-router-dom"
import axios from 'axios';
import "bootstrap/dist/css/bootstrap.min.css";



import logo from "./logo.png";


const Navbar = () => {
  return(
<nav className="navbar navbar-expand-lg navbar-light bg-light">
<a class="navbar-brand" href="" target="_blank">
  <img src={logo} width="100" height="100" alt="CodingTheSmartWay.com" />
</a>
<Link to="/" className="navbar-brand">Software Engineering Society</Link>
<div className="collpase navbar-collapse">
  <ul className="navbar-nav mr-auto">
    <li className="navbar-item">
      <Link to="/" className="nav-link">Postings</Link>
    </li>
    <li className="navbar-item">
      <Link to="/create" className="nav-link">Add a Posting</Link>
    </li>
  </ul>
</div>
</nav>

  );
}

export default Navbar;
