import React, { Component } from "react";
import styled from "styled-components";
import Content from "./Content";

const SideBars = styled.div`
  background-color: #ffffff;
  box-shadow: 0 2px 8px 0 rgba(0, 0, 0, 0.16);
  width: 216px;
  height: 100%;
`;

export default class SideBar extends Component {
  
  render() {
    return (
      <SideBars>
        <Content name={"Analyse"} clickMe={this.props.clickMe}></Content>
        <Content name={"My Profile"} clickMe={this.props.clickMe}></Content>
        <Content name={"Pack History"} clickMe={this.props.clickMe}></Content>
      </SideBars>
    );
  }
}
