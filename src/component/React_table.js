import React, { Component } from "react";
// import ReactTable from "react-table";
import "react-table/react-table.css";
import { connect } from "react-redux";
import {
  getData,
  getFilteredGraphData,
  ascDescending
} from "../actions/StudentActions";

class React_table extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: []
    };
    this.renderTableData = this.renderTableData.bind(this);
    this.renderTableHeader = this.renderTableHeader.bind(this);
  }

  componentDidMount() {
    this.props.getFilteredGraphData().then(res => {
      let studentDataArr = this.props.detailsStudent;
      //   console.log(this.props.detailsStudent);
      this.setState({ data: this.props.detailsStudent });
    });
  }
  renderTableHeader() {
    console.log(this.state.data.length);
    if (this.state.data.length !== 0) {
      let header = Object.keys(this.state.data[0]);
      console.log(this.state.data[0]);
      return header.map((key, index) => {
        return <th key={index}>{key.toUpperCase()}</th>;
      });
    } else {
      console.log("not data");
    }
  }

  renderTableData() {
    return this.state.data.map((student, index) => {
      const { name, rollNo } = student; //destructuring
      return (
        <tr key={rollNo}>
          {/* <td>{id}</td> */}
          <td>{name}</td>
          <td>{rollNo}</td>
          <td>{student.class}</td>

          {/* <td>{marks}</td> */}
        </tr>
      );
    });
  }
  render() {
    return (
      <div>
        <table id="students">
          <tbody>
            <tr>{this.renderTableHeader()}</tr>
            {this.renderTableData()}
          </tbody>
        </table>
      </div>
    );
  }
}
const mapStateToProps = ({ detail }) => {
  return {
    detailsStudent: detail
  };
};

export default connect(mapStateToProps, {
  getData,
  getFilteredGraphData,
  ascDescending
})(React_table);
