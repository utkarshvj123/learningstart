import React, { Component } from "react";
import FusionCharts from "fusioncharts";
import Charts from "fusioncharts/fusioncharts.charts";
import FusionTheme from "fusioncharts/themes/fusioncharts.theme.fusion";
import ReactFC from "react-fusioncharts";
import cookie from "react-cookies";
import { withRouter } from "react-router-dom";

class Chart extends Component {
  constructor(props) {
    super(props);
    ReactFC.fcRoot(FusionCharts, Charts, FusionTheme);
    this.reactTable = this.reactTable.bind(this);
  }
  componentDidMount() {
    if (cookie.load("userId") === "signedIn") {
    } else {
      return this.props.history.push("/");
    }
  }

  reactTable() {
    this.props.history.push("/table");
  }

  render() {
    const dataSource = {
      chart: {
        caption: `Data of ${this.props.data.name}.`,
        subCaption: `Roll number ${this.props.data.rollNo}`,
        xAxisName: "Number",
        yAxisName: this.props.data.name,
        theme: "fusion"
      },
      data: this.props.chart
    };

    const chartConfigs = {
      type: "column2d",
      width: 600,
      height: 400,
      dataFormat: "json",
      dataSource: dataSource
    };
    return (
      <div>
        {" "}
        <button onClick={this.reactTable}>Table</button>
        <ReactFC {...chartConfigs} />
      </div>
    );
  }
}

export default withRouter(Chart);

// ////
//   componentDidMount() {
//     let d3 = window.d3;
//     var margin = { top: 10, right: 30, bottom: 90, left: 40 },
//       width = 1200 - margin.left - margin.right,
//       height = 500 - margin.top - margin.bottom;
//     console.log(
//       margin.left,
//       "asbfjasdfjhgsd",
//       margin.right,
//       "....Height",
//       height
//     );
//     // append the svg object to the body of the page
//     var svg = d3
//       .select(ReactDOM.findDOMNode(this))
//       .append("svg")
//       .attr("width", width + margin.left + margin.right)
//       .attr("height", height + margin.top + margin.bottom)
//       .append("g")
//       .attr("transform", "translate(" + margin.left + "," + margin.top + ")");
//     console.log(d3.axisBottom, "band");
//     // Parse the Data
//     let sortArray = this.state.jsonData.sort((a, b) =>
//       a.Value > b.Value ? 1 : b.Value > a.Value ? -1 : 0
//     );
//     // console.log(Math.max.apply(null, this.state.jsonData));

//     // console.log(sortArray[sortArray.length - 1].Value, "......Sort array");

//     // let firstIndexValue = sortArray[0];
//     //-----Round off the negative values for creating the max line
//     let minRoundOff = Math.round(sortArray[0].Value);
//     // console.log(
//     //   Math.round(sortArray[0].Value),
//     //   "....firts index value with round offf"
//     // );
//     let maxRoundOff = Math.round(sortArray[sortArray.length - 1].Value);

//     //-----Round off the positive values
//     console.log(
//       minRoundOff,
//       "....firts index value with round offf",
//       maxRoundOff
//     );

//     d3.json(this.state.jsonData);

//     var x = d3
//       .scaleBand()
//       .range([0, width])
//       .domain(
//         this.state.jsonData.map(function(d) {
//           return d.Country;
//         })
//       )
//       .padding(1);
//     svg
//       .append("g")
//       //-----HERE HEIGHT IS GENERATING THE BOTTOM LINE
//       .attr("transform", "translate(0," + height + ")")
//       .call(d3.axisBottom(x))
//       .selectAll("text")
//       .attr("transform", "translate(-10,0)rotate(-45)")
//       .style("text-anchor", "end");
//     console.log(d3.axisBottom(x));
//     // Add Y axis
//     var y = d3
//       .scaleLinear()
//       .domain([minRoundOff, maxRoundOff])
//       .range([height, 0]);
//     svg.append("g").call(d3.axisLeft(y));

//     // Lines
//     svg
//       .selectAll("myline")
//       .data(this.state.jsonData)
//       .enter()
//       .append("line")
//       .attr("x1", function(d) {
//         return x(d.Country);
//       })
//       .attr("x2", function(d) {
//         console.log(d.Country);

//         return x(d.Country);
//       })
//       .attr("y1", function(d) {
//         console.log(d.Value);
//         return y(d.Value);
//       })
//       .attr("y2", y(0))
//       .style("stroke-width", 5)
//       .attr("stroke", "grey");

//     // Circles
//     svg
//       .selectAll("mycircle")
//       .data(this.state.jsonData)
//       .enter()
//       .append("circle")
//       .attr("cx", function(d) {
//         return x(d.Country);
//       })
//       .attr("cx2", function(d) {
//         return x(d.Country);
//       })
//       .attr("cy", function(d, r) {
//         return y(d.Value, 14);
//       })
//       .attr("r", "30")
//       .style("fill", function(d) {
//         console.log(d.Value);
//         if (d.Value < 0) {
//           return "#FC4F0A";
//         }
//         return "#009DE6";
//       })
//       .attr("stroke", "red");
//     //   .text("Hello World");

//     svg
//       .selectAll("mycircle")
//       .data(this.state.jsonData)
//       .enter()
//       .append("g")
//       .attr("transform", function(d) {
//         return "translate(" + d.x + ",80)";
//       })
//       .append("text")
//       .attr("dx", function(d) {
//         return -20;
//       })
//       .text(function(d) {
//         console.log(d);
//         return d.Value;
//       });
//   }
