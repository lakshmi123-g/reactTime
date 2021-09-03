//import logo from './logo.svg';
import './App.css';
import React from "react"
import Clock from "./time";
class App extends React.Component {
  styles = {
    fontstyle: "bold",
    color: "green"
  };
  render() {
    return (
      <div className="App">
        <h1 style={this.styles}>Welcome</h1>
        <Clock />
      </div>
    );
  }
}


export default App;
