import React, { Component } from "react";
import ReactDOM from "react-dom";

// scaleBand
// scaleLinear

class MutationalChart extends Component {
  constructor(props) {
    super(props);
    this.state = {
      jsonData: [
        {
          Country: "United States",
          Value: 0.8
        },
        {
          Country: "Russia",
          Value: -0.6
        },
        {
          Country: "Germany (FRG)",
          Value: 0.5
        },
        {
          Country: "France",
          Value: -0.2
        },
        {
          Country: "United Kingdom",
          Value: 0.1
        },
        {
          Country: "China",
          Value: -0.4
        },
        {
          Country: "Spain",
          Value: 0.6
        },
        {
          Country: "Netherlands",
          Value: -0.8
        },
        {
          Country: "Italy",
          Value: 0.9
        },
        {
          Country: "India",
          Value: -0.8
        },
        {
          Country: "Kenya",
          Value: 0.3
        },
        {
          Country: "Israel",
          Value: -0.9
        }
      ]
    };
  }

  componentDidMount() {
    let d3 = window.d3;
    var margin = { top: 10, right: 30, bottom: 90, left: 40 },
      width = 1200 - margin.left - margin.right,
      height = 500 - margin.top - margin.bottom;

    // append the svg object to the body of the page
    let svg = d3
      .select(ReactDOM.findDOMNode(this))
      .append("svg")
      .attr("width", width + margin.left + margin.right)
      .attr("height", height + margin.top + margin.bottom)
      .append("g")
      .attr("transform", "translate(" + margin.left + "," + margin.top + ")");
    //----Parse the Data
    let sortArray = this.state.jsonData.sort((a, b) =>
      a.Value > b.Value ? 1 : b.Value > a.Value ? -1 : 0
    );
    //-----Round off the negative/Positive values for creating the max/min line
    let minRoundOff = Math.round(sortArray[0].Value);
    let maxRoundOff = Math.round(sortArray[sortArray.length - 1].Value);
    d3.json(this.state.jsonData);
    var x = d3
      .scaleBand()
      .range([0, width])
      .domain(
        this.state.jsonData.map(function(d) {
          return d.Country;
        })
      )
      .padding(1);
    svg
      .append("g")
      //-----HERE HEIGHT IS GENERATING THE BOTTOM LINE
      .attr("transform", "translate(0," + height + ")")
      .call(d3.axisBottom(x))
      .selectAll("text")
      .attr("stroke", "rgba(0, 0, 0, 0.11999999731779099)")
      // .attr("transform", "translate(-10,0)rotate(-45)")
      .style("text-anchor", "center");
    d3.axisBottom(x);
    // Add Y axis
    let y = d3
      .scaleLinear()
      .domain([minRoundOff, maxRoundOff])
      .range([height, 0]);
    //---Creating the Straight line having 1,0.1 etc
    svg.append("g").call(d3.axisLeft(y));
    //--- Lines for lollipop
    svg
      .selectAll("myline")
      .data(this.state.jsonData)
      .enter()
      .append("line")
      .attr("x1", function(d) {
        return x(d.Country);
      })
      .attr("x2", function(d) {
        return x(d.Country);
      })
      .attr("y1", function(d) {
        return y(d.Value);
      })
      .attr("y2", y(0))
      .style("stroke-width", 3)
      .attr("stroke", "rgba(0, 0, 0, 0.11999999731779099)");

    // --Circles for lollipop
    svg
      .selectAll("mycircle")
      .data(this.state.jsonData)
      .enter()
      .append("circle")
      .attr("cx", function(d) {
        return x(d.Country);
      })
      .attr("cx2", function(d) {
        return x(d.Country);
      })
      .attr("cy", function(d) {
        return y(d.Value);
      })
      .attr("r", "15")
      .style("fill", function(d) {
        if (d.Value < 0) {
          return "#FC4F0A";
        }
        return "#009DE6";
      });
    //-----Text inside the circles
    svg
      .selectAll("mycircle")
      .data(this.state.jsonData)
      .enter()
      .append("text")

      .attr("x", function(d) {
        return x(d.Country);
      })
      .attr("y", function(d) {
        return y(d.Value);
      })
      .attr("dx", function(d) {
        if (d.Value < 0) {
          return -9;
        }
        return -6;
      })
      .attr("dy", function(d) {
        return 2;
      })
      .attr("font-size", "8px")
      .style("fill", "white")
      .attr("font-weight", "bold")
      .text(function(d) {
        return d.Value;
      });
  }
  render() {
    return <div id="my_dataviz"></div>;
  }
}

export default MutationalChart;
