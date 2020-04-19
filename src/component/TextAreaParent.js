import React, { Component } from "react";
import Styled from "styled-components";
import TextArea from "./TextArea";
import VerticalBar from "./VerticalBar";
import Tab from "./Tab";

const TextDiv = Styled.div`
  font-size: 1.5em;
  text-align: center;
  color: palevioletred;
  display: flex;
`;
class TextAreaParent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [
        { solution: "jhjgsdhjfgshdgfj", child: <div></div> },
        { option: "", child: <TextArea></TextArea> },
        {
          competency: "askjdgasjhgdf ajsdjhagsd jsaghdjhg",
          child: <div></div>
        }
      ],
      key: ["solution", "option", "competency"],
      valueFromSelected: "",
      index: -1
    };
    // this.renderData = this.renderData.bind(this);
    this.gettingTheButtonCalled = this.gettingTheButtonCalled.bind(this);
  }

  componentDidMount() {
    this.setState({
      valueFromSelected: Object.values(this.state.data[0])[0],
      index: 0
    });
  }

  gettingTheButtonCalled(value, index) {
    console.log("value......", value, "....indexx", index);
    const onClickedValue = Object.values(this.state.data[index])[0];
    console.log(onClickedValue, "......value...");
    this.setState({ valueFromSelected: onClickedValue, index });
  }

  updateonchange = (value, index) => {
    var data = this.state.data;
    console.log("indexx", index);
    data[index][this.state.key[index]] = value;
    console.log("indexx", data);
    this.setState({ data: data });
  };
  render() {
    console.log(this.state);
    return (
      <div>
        <TextDiv>
          <VerticalBar
            data={this.state.key}
            buttonSelected={this.gettingTheButtonCalled}
          />
          <TextArea
            descHtml={this.state.data.child}
            selectedValue={this.state.valueFromSelected}
            index={this.state.index}
            updateonchange={this.updateonchange}
          />
        </TextDiv>
        <Tab></Tab>
      </div>
    );
  }
}

export default TextAreaParent;

// import React, { Component } from "react";
// import Styled from "styled-components";
// import TextArea from "./TextArea";
// import VerticalBar from "./VerticalBar";
// import JsonServer from "./JsonServer";
// import TextAreaParent from './TextAreaParent';
// import test from './test';
// const TextDiv = Styled.div`
// // //   font-size: 1.5em;
// // //   text-align: center;
// // //   color: palevioletred;
// // //   display: flex;
// // // `;
// class TextAreaParent extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       data: {
//         solution: "",
//         option: "askjdhasjfgsdgh",
//         competecy: ""
//       },
//       pressed: "option"
//     };
//     this.renderData = this.renderData.bind(this);
//   }

//   gettingTheButtonCalled(val) {
//     console.log("value......", val);
//   }

//   renderData() {
//     console.log(this.state.data);
//     if (this.state.data.solution !== "") {
//       console.log("In solurtion");

//       return (
//         <TextArea
//           keyPressed={this.state.pressed}
//           inputText={this.state.solution}
//         ></TextArea>
//       );
//     } else if (this.state.data.option !== "") {
//       console.log("In 2nd");

//       return (
//         <TextArea
//           inputText={this.state.option}
//           keyPressed={this.state.pressed}
//         ></TextArea>
//       );
//     } else if (this.state.data.competecy !== "") {
//       console.log("3rd");

//       return (
//         <TextArea
//           inputText={this.state.data.competecy}
//           keyPressed={this.state.pressed}
//         ></TextArea>
//       );
//     }
//     console.log("In else");
//     return <TextArea keyPressed={this.state.pressed}></TextArea>;
//   }
//   render() {
//     return (
//       <TextDiv>
//         <VerticalBar buttonSelected={this.gettingTheButtonCalled}></VerticalBar>
//         {this.renderData()}
//       </TextDiv>
//     );
//   }
// }

// export default TextAreaParent;
