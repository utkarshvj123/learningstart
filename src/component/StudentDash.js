import React, { Component } from "react";
import { connect } from "react-redux";
import { getData, filterDataWithId } from "../actions/StudentActions";
import Chart from "./Chart";
import cookie from "react-cookies";

class StudentDash extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
      singleStudentDetail: [],
      visible: true,
      chart: [],
      width: {}
    };
  }

  componentDidMount() {
    console.log(this.props.match.params.id);
    if (cookie.load("userId") === "signedIn") {
      this.props.filterDataWithId(this.props.match.params.id).then(res => {
        let newObj = this.props.singleStudentDetail;
        let result = Object.keys(newObj.marks).map(function(key) {
          return newObj.marks[key];
        });
        let keyResult = Object.keys(newObj.marks);
        console.log(keyResult, ".................", result);
        let keyValuearr = [];
        for (let i = 0; i < result.length; i++) {
          let obj = {};
          obj["label"] = keyResult[i];
          obj["value"] = result[i];
          keyValuearr.push(obj);
        }
        console.log(newObj);
        this.setState({ data: newObj, chart: keyValuearr });
      });
    } else {
      return this.props.history.push("/");
    }
  }

  render() {
    return (
      <div ref="root">
        <Chart data={this.state.data} chart={this.state.chart} />
      </div>
    );
  }
}

const mapStateToProps = ({ detail, singleStudentData }) => {
  return { studentDetail: detail, singleStudentDetail: singleStudentData };
};

export default connect(
  mapStateToProps,
  { getData, filterDataWithId }
)(StudentDash);
