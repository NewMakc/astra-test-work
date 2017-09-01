import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import BooksList from './components/books/List';
import BooksSingle from './components/books/SingleItem';
import 'reset-css'
import './App.css';

class App extends Component {
  render() {
    return (
      <Router>
        <div className="wrapper">
          <Route exact path="/" component={BooksList} />
          <Route path="/book/:id" component={BooksSingle} />
        </div>
      </Router>
    );
  }
}

export default App;
