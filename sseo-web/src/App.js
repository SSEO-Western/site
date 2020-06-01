import React, { Component } from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

import CreateJob from "./components/create-job.component";
import EditJob from "./components/edit-job.component";
import JobsList from "./components/jobs-list.component";
import logo from "./logo.svg";

class App extends Component {
  render() {
    return (
      <Router>
        <div className="container">
          <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <div class="navbar-brand">
              {/* TODO: Replace div with anchor tag, href to main site once available */}
              <img
                src={logo}
                width="30"
                height="30"
                alt="Student Software Engineering Organization"
              />
            </div>
            <Link to="/" className="navbar-brand">
              Job Listing App
            </Link>
            <div className="collapse navbar-collapse">
              <ul className="navbar-nav mr-auto">
                <li className="navbar-item">
                  <Link to="/" className="nav-link">
                    Jobs
                  </Link>
                </li>
                <li className="navbar-item">
                  <Link to="/create" className="nav-link">
                    Create Job
                  </Link>
                </li>
              </ul>
            </div>
          </nav>
          <br />
          <Route path="/" exact component={JobsList} />
          <Route path="/edit/:id" component={EditJob} />
          <Route path="/create" component={CreateJob} />
        </div>
      </Router>
    );
  }
}

export default App;
