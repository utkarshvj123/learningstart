import React, { Component } from "react";
import { user_api } from "../../actions/StudentActions";
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";
import axios from "axios";
import cookie from "react-cookies";

import styled from "styled-components";
import SideBar from "./SideBar";
import FullContent from "./FullContent";
import ProgressBar from "./ProgressBar";

const MainDiv = styled.div`
//   display: flex;
  height: 100vh;
  width: 100%;
`;

const Half = styled.div`
  display: flex;
  height: calc(100% - 141px);
  width: 100%;
`;


class MyProfile extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedValue:"Analyse"
    };
    // this.props.user_api().then(res => {console.log(res)})
  }

  componentDidMount() {
    console.log(this.props);
    axios
      .get("https://api.embibe.com/user_ms/1/profile/me", {
        headers: {
          uid: cookie.load("uid"),
          "embibe-token":
            "eyJhbGciOiJIUzUxMiJ9.eyJpZCI6MTIzMTgyNTE1MiwiZW1haWwiOiJkc2xfdGVzdGluZzhkZW1vQGVtYmliZS5jb20iLCJpc19ndWVzdCI6ZmFsc2UsInJvbGUiOiJzdHVkZW50IiwidGltZV9zdGFtcCI6IjIwMTktMTItMjdUMDg6NDk6MjUuOTIwWiJ9.tiun71YtWGPtMMcyGOFFgVBO9UhqbhOGFj9i-jahC3i1dx_pDPTMgMMr1Ob6kJK4Qhk8V_MRuFsT5Uc6zb1QFw"
        }
      })
      .then(res => console.log(res.data));
  }


  clickedFunction = value => {
    console.log(value);
    this.setState({selectedValue:value})
  };

  render() {
    return (
      <MainDiv>
        <ProgressBar></ProgressBar>
        <Half>
          <SideBar clickMe={this.clickedFunction}/>
          <FullContent selected={this.state.selectedValue}/>
        </Half>
      </MainDiv>
    );
  }
}

const mapStateToProps = ({ state }) => {
  return {
    detailsStudent: state
  };
};

export default withRouter(connect(mapStateToProps, { user_api })(MyProfile));
