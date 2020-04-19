import React, { Component } from "react";

import styled from "styled-components";

const Button = styled.button`
  background: none;
  color: #c1c1c1;
  padding: 10px 24px;
  cursor: pointer;
  width: 130px;
  display: block;
  border: none;
`;

class TabSwitch extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selected: "",
      index: ""
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentDidMount() {
    this.setState({ selected: this.props.data[0].tabName });
    this.props.onClickedFunction(this.props.data[0].tabName);
  }

  handleSubmit(e, index) {
    this.props.onClickedFunction(e.target.value);
    this.setState({ selected: e.target.value });
  }

  render() {
    return (
      <div>
        {this.props.data.map((res, index) => (
          <Button
            value={res.tabName}
            className={res.tabName == this.state.selected ? "active" : ""}
            onClick={e => this.handleSubmit(e, index)}
          >
            {res.tabName}
          </Button>
        ))}{" "}
      </div>
    );
  }
}

export default TabSwitch;
