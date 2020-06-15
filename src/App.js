import React, { Component } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Header from "./components/header";
import './app.scss'

class App extends Component {

  state = { isLoaded: false }
  componentDidMount() {
    this.time()
  }
  time(params) {
    setTimeout(() => {
      this.setState({ isLoaded: true })
    }, 5000);
  }
  render() {
    return (
      <div>
        <Header />
      </div>
    );
  }
}

export default App;
