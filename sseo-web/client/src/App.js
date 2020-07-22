import React, {Component} from 'react';
import {BrowserRouter as Router, Route, Link} from "react-router-dom"


//Postings
import CreateTodo from "./components/postings/create-job.component";
import EditTodo from "./components/postings/edit-job.component";
import PostingsList from "./components/postings/postings-list.component";


class App extends Component {
  render(){
    return (
      <Router>
      <div className="container">
          <Route path="/" exact component={PostingsList} />
          <Route path="/edit/:id" component={EditTodo} />
          <Route path="/create" component={CreateTodo} />
        </div>
      </Router>
    );
  }
}

export default App;
