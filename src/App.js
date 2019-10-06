import React from 'react';
import logo from './logo.svg';
import './App.css';
import List from './List';

export class App extends React.Component {
  constructor(props){
    super(props)
    this.state = {
        todo: ""
    }
  }
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
            <p>
              To Do List
          </p>
          <div>
            <List />
          </div>
        </header>
      </div>
    );
  }
}

export default App;