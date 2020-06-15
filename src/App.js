import React, { Component } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
// import Navbar from "./components/layouts/Navbar";
// import Home from "./components/home/Home";
// import Footer from "./components/layouts/Footer";
import Login from "./components/auth/Login";
import Register from "./components/auth/Register";
import TourGuideRegister from "./components/auth/TourGuideRegister";
// import Header from "./components/layouts/Header";
import Cart from "./components/carts/Cart";
import { Home } from "./components/home/Home";
import Checkout from "./components/checkout/Checkout";
import LoadingOverlay from 'react-loading-overlay';

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
      <LoadingOverlay
        active={false}
        spinner
        text='Loading your content...'
      >
        <BrowserRouter>
          <div className="app">
            {/* <Navbar /> */}
            <Switch>
              <Route exact path="/" component={Home} />
              <Route exact path="/login" component={Login} />
              <Route exact path="/register" component={Register} />
              <Route exact path="/register/tour-guide" component={TourGuideRegister} />
              <Route exact path="/cart" component={Cart} />
              <Route exact path="/checkout" component={Checkout} />

            </Switch>
          </div>
        </BrowserRouter>
      </LoadingOverlay>

    );
  }
}

export default App;
