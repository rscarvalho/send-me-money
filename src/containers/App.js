import React, { Component } from 'react';
import { Link, IndexLink } from 'react-router';
import './App.css';

function Navigation() {
  return (
    <nav>
      <ul>
        <li><IndexLink to="/">Home</IndexLink></li>
        <li><Link to="/about">About</Link></li>
        <li><IndexLink to="/form">Send Money</IndexLink></li>
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
          <h1>Send Me Money!</h1>
          <Navigation />
        </div>
        {children}
      </div>
    );
  }
}

export default App;
