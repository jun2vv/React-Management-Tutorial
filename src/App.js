import logo from './logo.svg';
import './App.css';
import { Component } from 'react';

class App extends Component {
  render() {
    return (
      <div className="grey-background">
        <img src={logo} lat="logo" />
        <h2>Let's develop management system! test</h2>
      </div>
    );
  }
}

export default App;
