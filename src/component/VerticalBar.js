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

const TextDiv = styled.div`
  border: 1px solid #000;
`;

class VerticalBar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      valueGet: "",
      data: this.props.data
    };
    // this.handleOnClick = this.handleOnClick.bind(this);
  }

  componentDidMount() {
    console.log(this.props.data);

    this.setState({ valueGet: this.state.data[0] });
  }

  handleOnClick(index, value) {
    this.props.buttonSelected(value, index);
    // console.log("clicked", e.target.value);
    this.setState({ valueGet: value });
    // console.log(e, "......", value);
  }
  render() {
    return (
      <TextDiv>
        {this.state.data.map((value, index) => (
          <Button
            value={value}
            onClick={this.handleOnClick.bind(this, index, value)}
            className={value === this.state.valueGet ? "active" : ""}
          >
            {value}
          </Button>
        ))}
      </TextDiv>
    );
  }
}

export default VerticalBar;

// import React, { Component } from "react";
// import styled from "styled-components";
// const Button = styled.button`
//   background: none;
//   color: #c1c1c1;
//   padding: 10px 24px;
//   cursor: pointer;
//   width: 130px;
//   display: block;
//   border: none;
// `;

// const TextDiv = styled.div`
//   border: 1px solid #000;
// `;

// class VerticalBar extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       valueGet: "",
//       data: ["solution", "option-hint", "competency"]
//     };
//     // this.handleOnClick = this.handleOnClick.bind(this);
//   }

//   componentDidMount() {
//     this.setState({ valueGet: this.state.data[0] });
//   }

//   handleOnClick(e) {
//     this.props.buttonSelected(e.target.value);
//     console.log("clicked", e.target.value);
//     this.setState({ valueGet: e.target.value });
//   }
//   render() {
//     return (
//       <TextDiv>
//         {this.state.data.map(value => (
//           <Button
//             value={value}
//             onClick={e => this.handleOnClick(e)}
//             className={value == this.state.valueGet ? "active" : ""}
//           >
//             {value}
//           </Button>
//         ))}
//       </TextDiv>
//     );
//   }
// }

// export default VerticalBar;
