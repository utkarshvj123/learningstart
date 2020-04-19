import React, { Component } from "react";
import styled from "styled-components";

// console.log("props.....",)
const Textarea = styled.textarea`
  background-color: ${props => props.color};
  height: 98%;
  padding: 0;
  border-left: none;
`;

class TextArea extends Component {
  constructor(props) {
    super(props);
    console.log("props.......", this.props);

    this.state = {
      value: "",
      index: -1
    };
  }

  componentDidUpdate(prevProps, prevState) {
    console.log(prevProps, prevState);
    if (prevState.index !== this.props.index) {
      console.log("up");
      this.setState({
        value: this.props.selectedValue,
        index: this.props.index
      });
    }
  }
  handleOnChange = e => {
    console.log(e.target.value, "comming");
    this.setState({ value: e.target.value });
    this.props.updateonchange(e.target.value, this.state.index);
  };
  componentDidMount() {
    this.setState({ value: this.props.selectedValue });
  }
  render() {
    console.log(this.props);
    return (
      <div>
        <Textarea
          color={this.props.color}
          rows="4"
          cols="50"
          value={this.state.value}
          onChange={this.handleOnChange}
        ></Textarea>
      </div>
    );
  }
}

export default TextArea;

// import React, { Component } from "react";
// import styled from "styled-components";

// const Textarea = styled.textarea`
//   background-color: ${props => props.color};
//   height: 98%;
//   padding: 0;
//   border-left: none;
// `;

// class TextArea extends Component {
//   constructor(props) {
//     super(props);
//   }

//   render() {
//     console.log(this.props);
//     // if()

//     return (
//       <div>
//         <Textarea color={this.props.color} rows="4" cols="50">
//           {this.props.inputText}
//         </Textarea>
//       </div>
//     );
//   }
// }

// export default TextArea;
