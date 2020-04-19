import React, { Component } from "react";
import TabDesc from "../TabDesc";
import TabSwitch from "../TabSwitch";

import Styled from "styled-components";

const TextDiv = Styled.div`
  font-size: 1.5em;
  text-align: center;
  color: palevioletred;
  display: flex;
`;

class Tab extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [
        {
          tabName: "Solution",
          description: "hellooooo..",
          descHtml: <div></div>,
          active: true
        },
        {
          tabName: "Option",
          description: "",
          descHtml: <textArea></textArea>,
          active: false
        },
        {
          tabName: "Competency",
          description: "898989899988",
          descHtml: <div></div>,
          active: false
        }
      ],
      selected: "",
      valueSelected: ""
    };
    this.gettingSelectedValue = this.gettingSelectedValue.bind(this);
  }

  componentWillMount() {
    this.setState({
      selected: this.state.data[0].tabName,
      valueSelected: this.state.data[0].tabName
    });
  }

  gettingSelectedValue(value) {
    this.setState({ selected: value });
  }
  render() {
    return (
      <TextDiv>
        <div>
          <TabSwitch
            data={this.state.data}
            onClickedFunction={this.gettingSelectedValue}
            selected={this.state.selected}
          />
        </div>
        <TabDesc
          data={this.state.data}
          selected={this.state.selected}
        ></TabDesc>
      </TextDiv>
    );
  }
}

export default Tab;
