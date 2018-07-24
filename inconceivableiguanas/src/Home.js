import React, { Component } from "react";

export default class Home extends Component {
  state = { clicked: "", email: "", password: "" };

  // Update state whenever an input field is edited
  handleFieldChange = evt => {
    const stateToChange = {};
    stateToChange[evt.target.id] = evt.target.value;
    this.setState(stateToChange);
  };

  // Simplistic handler for login submit
  addNewUser = event => {
    event.preventDefault();
    const username = event.target.Username.value;
    const email = event.target.Email.value;

    fetch("http://localhost:5002/users", {
      method: "POST",
      headers: {
        "Content-Type": "application/json; charset=utf-8"
      },
      body: JSON.stringify({
        name: username,
        email: email
      })
    })
      // When DELETE is finished, retrieve the new list of animals
      .then(a => a.json())
      .then(() => {
        // Remember you HAVE TO return this fetch to the subsequenet `then()`
        return fetch("http://localhost:5002/users");
      })
      // Once the new array of animals is retrieved, set the state
      .then(a => a.json())
      // .then(this.props.setTheState)
      .then(this.setState({ clicked: "" }));
  };

  formLauncher = () => {
    if (this.state.clicked === "") {
      this.setState({
        clicked: (
          <form onSubmit={this.addNewUser}>
            <h1>Please sign in</h1>
            <label htmlFor="inputEmail" name="Email">
              Email address
            </label>
            <input
              onChange={this.handleFieldChange}
              type="email"
              id="email"
              placeholder="Email address"
              required=""
              autoFocus=""
              name="Email"
            />
            <label htmlFor="username" name="Username">
              Username
            </label>
            <input
              onChange={this.handleFieldChange}
              type="username"
              id="username"
              placeholder="Username"
              required=""
              name="Username"
            />
            <label>Remember Me</label>
            <button type="submit">Register</button>
          </form>
        )
      });
    } else {
      this.setState({ clicked: "" });
    }
  };

  render() {
    return (
      <React.Fragment>
        <h1>Welcome, friends!!</h1>
        <button id="register" onClick={this.formLauncher}>
          Register New User
        </button>
        {this.state.clicked}
      </React.Fragment>
    );
  }
}
