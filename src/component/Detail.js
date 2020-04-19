import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import cookie from "react-cookies";

class Detail extends Component {
  constructor(props) {
    super(props);
    this.detailOfSelectedStudent = this.detailOfSelectedStudent.bind(this);
  }
  componentDidMount() {
    if (cookie.load("userId") === "signedIn") {
    } else {
      return this.props.history.push("/");
    }
  }
  detailOfSelectedStudent = data => {
    this.props.history.push(`/dash/${data.rollNo}`);
  };
  render() {
    return (
      <div>
        <div
          className="content"
          key={this.props.detail.rollNo.toString()}
          onClick={() => this.detailOfSelectedStudent(this.props.detail)}
        >
          <div>
            Name :
            <span>
              <b> {this.props.detail.name.toString()}</b>
            </span>
          </div>
          <div>
            Roll no. :
            <span>
              <b> {this.props.detail.rollNo.toString()}</b>
            </span>
          </div>
          <div>
            Class :
            <span>
              <b> {this.props.detail.class.toString()}</b>
            </span>
          </div>
          <div>
            Marks :
            <span>
              <b> {this.props.detail.sum}</b>
            </span>
          </div>
          {/* <Link
            to={`/dash/${this.props.detail.rollNo}`}
            className="btn btn-primary"
          >
            View Detail
          </Link> */}
        </div>
      </div>
    );
  }
}

export default withRouter(Detail);
