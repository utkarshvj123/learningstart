import React, { Component } from "react";
import cookie from "react-cookies";

class SignIn extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: "",
      isSignedIn: ""
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(event) {
    // event.preventDefault();
    event.preventDefault();
    cookie.save("userId", "signedIn");
    this.props.history.push("/dash");
  }

  render() {
    return (
      <div>
        <div>
          <form onSubmit={this.handleSubmit}>
            <input
              type="text"
              name="email"
              value={this.state.email}
              placeholder="email"
            />
            <br />
            <input
              type="password"
              value="password"
              email="email"
              placeholder="password"
            />
            <br />
            <input type="submit" value="submit" />
          </form>
        </div>
      </div>
    );
  }
}

export default SignIn;
