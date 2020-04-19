import React, { Component } from "react";
import Bubbling from "./bubbling";
import ThemeContext from "./themecontext";

export default class Events extends Component {
  onChangeBubbling(e) {
    console.log(e.target.value, "on change occured.......");
  }
  onButtonClick = e => {
    console.log(e.target.value, "...button clicked");
  };

  static getDerivedStateFromProps(props, state) {
    console.log(props,"getDerivedStateFromProps called here",state);
    return null;
  }
  //----context implementation
  sendingContext = () => (
    <ThemeContext.Provider value={this.objFOrContext}>
      <Bubbling />
    </ThemeContext.Provider>
  );

  objFOrContext = {
    color: "red",
    width:"300px",
    clickedFunction:this.onButtonClick
  };
  render() {
    const ThemeContext = React.createContext(null);
    return (
      <div onChange={e => this.onChangeBubbling(e)}>
        {this.sendingContext()}
      </div>
    );
  }
}
