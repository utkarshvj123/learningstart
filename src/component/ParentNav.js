import React, { Component } from "react";
import Parent from "./Parent.js/Parent";

class ParentNav extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <Parent>
          <div style={{ dispay: "grid" }}>
            <a>About</a>
            <a>Services</a>
            <a>Clients</a>
            <a>Contact</a>
          </div>
        </Parent>
      </div>
    );
  }
}

export default ParentNav;
