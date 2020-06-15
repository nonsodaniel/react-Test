import React, { Component } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";

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
        <button className="btn btn-danger">hell</button>
      </div>
    );
  }
}

export default App;
