import React, { Component } from "react";
import ThemeContext from "./themecontext";

export default class Bubbling extends Component {
  constructor(props) {
    super(props);

    console.log(props, "...props on bubbling");
  }
  componentWillMount(){
      console.log("will mount")
  }
  componentDidMount(){
      console.log("in did mount")
  }

  render() {
    return (
      <div>
        <input></input>
        <ThemeContext.Consumer>
          {(value) => (
              console.log(value),
            <button
            value="hello"
              onClick={value.clickedFunction}
              style={{ color: value.color,width:value.width }}
            >
              Press me!
            </button>
          )}
        </ThemeContext.Consumer>
      </div>
    );
  }
}
