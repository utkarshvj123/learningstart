import React, { Component } from "react";
import { connect } from "react-redux";
import {
  getData,
  getFilteredGraphData,
  ascDescending
} from "../actions/StudentActions";
import { withRouter } from "react-router-dom";
import _ from "lodash";
import Detail from "./Detail";
import cookie from "react-cookies";

class StudentDetail extends Component {
  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.state = {
      studentObject: [],
      sortDirection: "Ascending",
      data: [],
      totalMarks: "Decreasing"
    };
    this.descending = this.descending.bind(this);
    this.totalMarksSort = this.totalMarksSort.bind(this);
  }
  componentDidMount() {
    if (cookie.load("userId") === "signedIn") {
      // console.log(this.props.getFilteredGraphData());
      this.props.getFilteredGraphData().then(res => {
        let studentDataArr = this.props.detailsStudent;
        console.log(studentDataArr);
        let totalMarks = [];
        _.each(studentDataArr, obj => {
          let marks = _.get(obj, "marks");
          let name = _.get(obj, "name");
          let rollNo = _.get(obj, "rollNo");
          let newClass = _.get(obj, "class");
          let sum = _.sum(_.values(marks));
          let newFIlteredObj = {
            name: name,
            rollNo: rollNo,
            class: newClass,
            sum: sum
          };
          totalMarks.push(newFIlteredObj);
        });
        this.setState({ data: totalMarks, studentObject: totalMarks });
      });
    } else {
      console.log("not going to cookies");
      return this.props.history.push("/");
    }
  }

  descending() {
    this.ascDescending(this.state.sortDirection);
    this.props.ascDescending(this.state.sortDirection);
    if (this.state.sortDirection === "Ascending") {
      // console.log(
      //   this.state.studentObject.filter(res => {
      //     return res.name.sort();
      //   })
      // );

      let response = this.state.studentObject.sort(function(a, b) {
        let nameA = a.name.toLowerCase();
        let nameB = b.name.toLowerCase();
        if (nameA < nameB)
          //sort string ascending
          return -1;
        if (nameA > nameB) return +1;
        return 0; //default return value (no sorting)
      });

      console.log(response, ".......response");
      this.setState({ data: response, sortDirection: "Descending" });
    } else if (this.state.sortDirection === "Descending") {
      let response = this.state.studentObject.sort(function(a, b) {
        let nameA = a.name.toLowerCase();
        let nameB = b.name.toLowerCase();
        if (nameA < nameB)
          //sort string ascending
          return 1;
        if (nameA > nameB) return -1;
        return 0; //default return value (no sorting)
      });
      this.setState({ data: response, sortDirection: "Ascending" });
      console.log(response, ".......hello");
    }
    //---as lodash
    // if (this.state.sortDirection === "Descending") {
    //   let sortedData = _.orderBy(this.state.studentObject, ["name"], ["desc"]);
    //   this.setState({ data: sortedData, sortDirection: "Ascending" });
    // } else if (this.state.sortDirection === "Ascending") {
    //   let sortedData = _.orderBy(this.state.studentObject, ["name"], ["asc"]);
    //   this.setState({ data: sortedData, sortDirection: "Descending" });
    // }
  }
  handleSubmit(e) {
    let newArray = [];
    let searched = e.target.value;
    if (e.target.value) {
      const newHello = searched.toLowerCase();
      newArray = this.state.studentObject.filter(response => {
        return response.name.toLowerCase().indexOf(newHello) !== -1;
      });
      this.setState({ data: newArray });
    } else {
      this.setState({ data: this.state.studentObject });
    }
    return newArray;
  }

  totalMarksSort() {
    ///------working with single all data actions
    // if (this.state.totalMarks === "Increasing") {
    //   let sortedData = _.orderBy(this.state.studentObject, ["sum"], ["desc"]);
    //   this.setState({ data: sortedData, totalMarks: "Decreasing" });
    // } else if (this.state.totalMarks === "Decreasing") {
    //   let sortedData = _.orderBy(this.state.studentObject, ["sum"], ["asc"]);
    //   this.setState({ data: sortedData, totalMarks: "Increasing" });
    // }
  }

  render() {
    return (
      <div>
        <div>
          <input type="text" name="username" onChange={this.handleSubmit} />
          <button onClick={this.descending}>{this.state.sortDirection}</button>
          <button onClick={this.totalMarksSort}>{this.state.totalMarks}</button>
        </div>
        <div className="cards">
          {this.state.data.map(detail => (
            <Detail detail={detail} key={detail.rollNo} />
          ))}
        </div>
      </div>
    );
  }
}

const mapStateToProps = ({ detail }) => {
  return {
    detailsStudent: detail
  };
};

export default withRouter(
  connect(mapStateToProps, { getData, getFilteredGraphData, ascDescending })(
    StudentDetail
  )
);

//   componentWillReceiveProps(nextProps) {
//     this.setState({
//       data: nextProps.detailsStudent
//     });
//   }

// searched = "";
// newArray = "";

// gettingData = () => {
//   console.log(this.searched);
//   let studentDataArr = _.values(this.props.detailsStudent[0]);
//   if (this.props.detailsStudent) {
//     console.log("student arra", studentDataArr);
//     this.newArray = studentDataArr;
//   }
//   if (this.searched) {
//     const newHello =
//       this.searched.charAt(0).toUpperCase() + this.searched.slice(1);
//     console.log(newHello);
//     let studentDataArr = _.values(this.props.detailsStudent[0]);
//     this.newArray = studentDataArr.filter(response => {
//       return response.name.startsWith(newHello) === true;
//     });
//   }
//   console.log(this.newArray);
//   return this.newArray;
// };

// handleSubmit = e => {
//   this.searched = e.target.value;
//   console.log(this.searched);
//   if (this.searched) {
//     const newHello =
//       this.searched.charAt(0).toUpperCase() + this.searched.slice(1);
//     console.log(newHello);
//     let studentDataArr = _.values(this.props.detailsStudent[0]);
//     this.newArray = studentDataArr.filter(response => {
//       return response.name.startsWith(newHello) === true;
//     });
//   }
//   return this.props.getData(this.newArray);
// };
// sortData() {
//   console.log(
//     "In sort data",
//     this.newArray,
//     "sort desc or asec",
//     this.state.sortDirection
//   );
//   // console.log(this.newArray, "printing on sort");
//   if (this.state.sortDirection === "descending") {
//     this.newArray = _.sortBy(this.newArray, ["name"]);
//     console.log(this.newArray, "sort data....");
//     this.setState({ data: this.newArray });
//     this.props.getData(this.newArray);
//     this.setState({
//       sortDirection: "ascending"
//     });
//     //   console.log(this.newArray, "sorted", this.state, "........see state");
//   }
//   if (this.state.sortDirection === "ascending") {
//     this.newArray = _.sortBy(this.newArray, ["name"]);
//     this.setState({
//       sortDirection: "descending"
//     });
//   }
// }
// render() {
//   console.log(this.gettingData());
//   return (
//     <div>
//       <div>
//         <input type="text" name="username" onChange={this.handleSubmit} />
//         <button onClick={this.sortData}>sort by name</button>
//         <button>Sort by number</button>
//       </div>
//       <div>
//         <div className="cards">
//           {this.gettingData().map(detail => (
//             <Detail detail={detail} key={detail.rollNo} />
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// }
