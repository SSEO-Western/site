import React, {Component} from 'react';
import {BrowserRouter as Router, Route, Link} from "react-router-dom"
import "bootstrap/dist/css/bootstrap.min.css";

import CreateTodo from "./components/create-job.component";
import EditTodo from "./components/edit-job.component";
import TodosList from "./components/jobs-list.component";

import logo from "./logo.svg";

class App extends Component {
  render(){
    return (
      <Router>
      <div className="container">
        
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <a class="navbar-brand" href="" target="_blank">
              <img src={logo} width="100" height="100" alt="CodingTheSmartWay.com" />
            </a>
            <Link to="/" className="navbar-brand">Software Engineering Society</Link>
            <div className="collpase navbar-collapse">
              <ul className="navbar-nav mr-auto">
                <li className="navbar-item">
                  <Link to="/" className="nav-link">Job List</Link>
                </li>
                <li className="navbar-item">
                  <Link to="/create" className="nav-link">Create Job</Link>
                </li>
              </ul>
            </div>
          </nav>
          <br/>
          <Route path="/" exact component={TodosList} />
          <Route path="/edit/:id" component={EditTodo} />
          <Route path="/create" component={CreateTodo} />
        </div>
      </Router>
    );
  }
}

export default App;
