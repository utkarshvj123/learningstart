import React, { Component } from "react";
import styled from "styled-components";

const Textarea = styled.div`
  background-color: ${props => props.color};
  height: 98%;
  padding: 0;
  border-left: none;
`;
class test extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return <Textarea>{this.props.selected}</Textarea>;
  }
}

export default test;
