import React, { Component } from "react";

import styled from "styled-components";

// const Area = styled.`
//   background-color: ${props => props.color};
//   height: 98%;
//   padding: 0;
//   border-left: none;
// `;

class TabDesc extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selected: "",
      jsonObj: {}
    };
  }

  componentDidMount() {
    let objValue = this.props.data.find(obj => {
      return obj.tabName === this.props.selected;
    });
    this.setState({
      selected: this.props.selected,
      jsonObj: objValue
    });
  }
  componentDidUpdate(prevProps, prevState) {
    if (prevProps.selected !== this.props.selected) {
      console.log(prevProps.selected, ".....previos prop", this.props.selected);
      let objValue = this.props.data.find(obj => {
        return obj.tabName === this.props.selected;
      });
      this.setState({ selected: this.props.selected, jsonObj: objValue });
    }
  }

  render() {
    if (this.state.selected !== "") {
      return (
        <div>
          <this.state.jsonObj.descHtml.type>
            {this.state.jsonObj.description}
          </this.state.jsonObj.descHtml.type>
        </div>
      );
    } else {
      return "";
    }
  }
}

export default TabDesc;
