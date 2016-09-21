import React, { Component } from 'react';
import { Link, IndexLink } from 'react-router';
import logo from '../logo.svg';
import './App.css';

function Navigation() {
  return (
    <nav>
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/about">About</Link></li>
        <li><IndexLink to="/form">Form</IndexLink></li>
      </ul>
    </nav>
  );
}

class App extends Component {
  static get propTypes() {
    return {
      children: React.PropTypes.node,
    };
  }

  render() {
    const { children } = this.props;

    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
          <Navigation />
        </div>
        {children}
      </div>
    );
  }
}

export default App;
