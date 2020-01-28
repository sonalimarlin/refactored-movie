import React, { Component } from 'react';
import { Link, Redirect } from 'react-router-dom';
import './app.scss';

class App extends Component {

  state = {
    searchTerm: "",
    redirect: false
  };

  handleChange = (e) => {
    this.setState({searchTerm: e.target.value});
  }

  keyPress = (e) => {
    if(e.keyCode === 13){
      this.setState({ redirect: true});
    }
 }

 renderRedirect = () => {
  if (this.state.redirect) {
    return <Redirect
    to={{
      pathname: "/",
      search: `?q=${this.state.searchTerm}`,
      state: { referrer: this.state.searchTerm }
    }}
  />
  }
}

  render() {
    return (
        <div className="app">
          <header>
            <div>
              <Link to="/" className="noDecoration" alt="The Movie List"><h1 className="title">My Movie DB</h1></Link>
              <input 
                value={this.state.searchTerm}
                onChange={this.handleChange}
                onKeyDown={this.keyPress}
                type="text"
                className="searchField"
                placeholder="Search movies by title" />
            </div>
          </header>
          {this.renderRedirect()}
          {this.props.children}
        </div>
    );
  }
}

export default App;
