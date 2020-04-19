import React, { Component } from "react";
import styled from "styled-components";

const Sides = styled.div`
  ${props=>props.cssValue}
`;

export default class Side extends Component {
  render() {
    console.log(this.props.cssValue["background-color"]);

    return <Sides cssValue={this.props.cssValue}>
        <div>
            <div>Profile Pic</div>
            <div>

            </div>
        </div>
    </Sides>;
  }
}
