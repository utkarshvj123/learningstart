import React, { Component } from "react";
import { connect } from "react-redux";
import { jsonServerAction } from "../actions/StudentActions";
import axios from "axios";

class JsonServer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: []
    };
  }

  componentDidMount() {
    axios.get("https://jsonplaceholder.typicode.com/posts").then(res => {
      console.log(res.data);
      this.setState({ data: res.data });
    });
  }
  handleSubmit = event => {
    console.log(event.target.value);
    event.preventDefault();
  };
  render() {
    console.log(this.state.data);

    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <label>
            Name:
            <input
              type="text"
              value={this.state.value}
              onChange={this.handleSubmit}
            />
          </label>
          <label>
            Name:
            <input
              type="text"
              value={this.state.value}
              onChange={this.handleSubmit}
            />
          </label>
          <input type="submit" value="Submit" />
        </form>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    getData: state.jsonWebServer
  };
};

export default connect(mapStateToProps, { jsonServerAction })(JsonServer);
