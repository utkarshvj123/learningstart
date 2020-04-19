import React, { Component } from "react";
import styled from "styled-components";
import Side from "./Side";
import PersonalInfo from "../PersonalInfo";

const MainContainer = styled.div`
  display: flex;
  margin-bottom: 40px;
  margin-top: 40px;
  margin-left:20px; 
}
`;

// const Side = styled.div`
//   background-color: #14005a;
//   border-radius: 4px 0 0 4px;
//   box-shadow: 0 5px 15px 0 rgba(0, 0, 0, 0.08);
//   width: 256px;
//   height: 548px;
// `;
// const Sides = styled.div`
// background-color: #14005A;
// border-radius: 4px 0 0 4px;
// box-shadow: 0 5px 15px 0 rgba(0, 0, 0, 0.08);
// opacity: 0.4;
// width: 256px;
// height: 313px;
// `;



export default class Form extends Component {
  constructor(props) {
    super(props);
    this.state = {
      sideBarCss: {
        "background-color": "#14005A",
        "border-radius": "4px 0 0 4px",
        "box-shadow": "0 5px 15px 0 rgba(0, 0, 0, 0.08)",
        "opacity": "0.4",
        "width": "256px",
        "height": "313px",
      },
      side:{
        backgroundColor: "#14005a",
        borderRadius: "4px 0 0 4px",
        boxShadow: "0 5px 15px 0 rgba(0, 0, 0, 0.08)",
        width: "256px",
        height: "548px"
      }
    };
  }

  render() {
    if (this.props.data === "Analyse") {
      console.log("in personal");

      return (
            <div>
          <MainContainer>
            <Side cssValue={this.state.side}></Side>
      <PersonalInfo></PersonalInfo>
          </MainContainer>
          <MainContainer>
            <Side cssValue={this.state.sideBarCss}></Side>
          </MainContainer>
        </div>
      );
    } else if (this.props.data === "My Profile") {
      return (        <div>
        <MainContainer>
          <Side cssValue={this.state.sideBarCss}></Side>
          <div></div>
        </MainContainer>
        <MainContainer>
          <Side cssValue={this.state.sideBarCss}></Side>
        </MainContainer>
        <MainContainer>
          <Side cssValue={this.state.sideBarCss}></Side>
        </MainContainer>
      </div>);
    } else if (this.props.data === "Pack History") {
      return (        <div>
        <MainContainer>
          <Side cssValue={this.state.sideBarCss}></Side>
          <div></div>
        </MainContainer>
        <MainContainer>
          <Side cssValue={this.state.sideBarCss}></Side>
        </MainContainer>
        <MainContainer>
          <Side cssValue={this.state.sideBarCss}></Side>
        </MainContainer>
      </div>);
    } else {
      console.log(this.props, "In form");
    }
  }
}
