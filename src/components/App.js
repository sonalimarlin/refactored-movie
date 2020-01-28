import React, { Component } from 'react';
import { Link, BrowserRouter as Router, Route } from 'react-router-dom';
import './app.scss';
import MovieDetail from '../views/MovieDetail';

class App extends Component {
  render() {
    return (
      <Router>
        <div className="app">
          <header>
            <Link to="/" className="noDecoration" alt="The Movie List"><h1 className="title">My Movie DB</h1></Link>
          </header>
          {this.props.children}
          <Route path="/movie/:imdbId" component={MovieDetail} />
        </div>
      </Router>
    );
  }
}

export default App;
