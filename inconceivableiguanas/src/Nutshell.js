import React, { Component } from "react";
import NavBar from "./components/nav/NavBar";
import ApplicationViews from "./ApplicationViews";
import Home from "./Home";

export default class Nutshell extends Component {
  render() {
    return (
      <React.Fragment>
        <NavBar />
        {/* <Home /> */}
        <ApplicationViews />
      </React.Fragment>
    );
  }
}
