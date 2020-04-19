import React, { Component } from "react";
import * as am4core from "@amcharts/amcharts4/core";
import * as am4charts from "@amcharts/amcharts4/charts";
import am4themes_animated from "@amcharts/amcharts4/themes/moonrisekingdom";

class D3chart extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
      names: [
        "Raina",
        "Demarcus",
        "Carlo",
        "Jacinda",
        "Richie",
        "Antony",
        "Amada",
        "Idalia",
        "Janella",
        "Marla",
        "Curtis",
        "Shellie",
        "Meggan",
        "Nathanael",
        "Jannette",
        "Tyrell",
        "Sheena",
        "Maranda",
        "Briana",
        "Rosa",
        "Rosanne",
        "Herman",
        "Wayne",
        "Shamika",
        "Suk",
        "Clair",
        "Olivia",
        "Hans",
        "Glennie"
      ],
      value: 120

      //   salesData: [
      //     {
      //       date: "2013-01-16",
      //       market1: 71,
      //       market2: 75,
      //       sales1: 5,
      //       sales2: 8
      //     },
      //     {
      //       date: "2013-01-17",
      //       market1: 74,
      //       market2: 78,
      //       sales1: 4,
      //       sales2: 6
      //     },
      //     {
      //       date: "2013-01-18",
      //       market1: 78,
      //       market2: 88,
      //       sales1: 5,
      //       sales2: 2
      //     },
      //     {
      //       date: "2013-01-19",
      //       market1: 85,
      //       market2: 89,
      //       sales1: 8,
      //       sales2: 9
      //     },
      //     {
      //       date: "2013-01-20",
      //       market1: 82,
      //       market2: 89,
      //       sales1: 9,
      //       sales2: 6
      //     },
      //     {
      //       date: "2013-01-21",
      //       market1: 83,
      //       market2: 85,
      //       sales1: 3,
      //       sales2: 5
      //     },
      //     {
      //       date: "2013-01-22",
      //       market1: 88,
      //       market2: 92,
      //       sales1: 5,
      //       sales2: 7
      //     },
      //     {
      //       date: "2013-01-23",
      //       market1: 85,
      //       market2: 90,
      //       sales1: 7,
      //       sales2: 6
      //     },
      //     {
      //       date: "2013-01-24",
      //       market1: 85,
      //       market2: 91,
      //       sales1: 9,
      //       sales2: 5
      //     },
      //     {
      //       date: "2013-01-25",
      //       market1: 80,
      //       market2: 84,
      //       sales1: 5,
      //       sales2: 8
      //     },
      //     {
      //       date: "2013-01-26",
      //       market1: 87,
      //       market2: 92,
      //       sales1: 4,
      //       sales2: 8
      //     },
      //     {
      //       date: "2013-01-27",
      //       market1: 84,
      //       market2: 87,
      //       sales1: 3,
      //       sales2: 4
      //     },
      //     {
      //       date: "2013-01-28",
      //       market1: 83,
      //       market2: 88,
      //       sales1: 5,
      //       sales2: 7
      //     },
      //     {
      //       date: "2013-01-29",
      //       market1: 84,
      //       market2: 87,
      //       sales1: 5,
      //       sales2: 8
      //     },
      //     {
      //       date: "2013-01-30",
      //       market1: 81,
      //       market2: 85,
      //       sales1: 4,
      //       sales2: 7
      //     }
      //   ]
    };
  }

  //   let value = 120;
  componentDidMount() {
    am4core.useTheme(am4themes_animated);
    let chart = am4core.create("SalesChart", am4charts.XYChart);
    var categoryAxis = chart.xAxes.push(new am4charts.CategoryAxis());
    console.log(
      categoryAxis.chart.colors.baseColor.alternative.alternative._value,
      "......Axis...."
    );
    categoryAxis.renderer.grid.template.location = 0;
    categoryAxis.dataFields.category = "category";
    categoryAxis.renderer.minGridDistance = 15;
    categoryAxis.renderer.grid.template.location = 0.5;
    categoryAxis.renderer.grid.template.strokeDasharray = "1,3";
    categoryAxis.renderer.labels.template.rotation = -90;
    categoryAxis.renderer.labels.template.horizontalCenter = "left";
    categoryAxis.renderer.labels.template.location = 0.5;
    console.log(categoryAxis, "....171");

    categoryAxis.renderer.labels.template.adapter.add("dx", function(
      dx,
      target
    ) {
      return -target.maxRight / 2;
    });

    var valueAxis = chart.yAxes.push(new am4charts.ValueAxis());
    valueAxis.tooltip.disabled = true;
    valueAxis.renderer.ticks.template.disabled = true;
    valueAxis.renderer.axisFills.template.disabled = true;

    var series = chart.series.push(new am4charts.ColumnSeries());
    // console.log((series.stroke = am4core.color("#ff0000")), ".....Seriues");
    series.dataFields.categoryX = "category";

    series.dataFields.valueY = "value";
    series.tooltipText = "{valueY.value}";
    series.sequencedInterpolation = true;
    series.fillOpacity = 0;
    series.strokeOpacity = 1;
    series.strokeDashArray = "1,3";
    series.columns.template.width = 0.01;
    series.tooltip.pointerOrientation = "horizontal";
    series.bullets.color = "#0080ff";

    var bullet = series.bullets.create(am4charts.CircleBullet);
    // console.log(bullet.circle, "....bullet");
    // console.log(am4core.ColorSet);

    chart.cursor = new am4charts.XYCursor();

    chart.scrollbarX = new am4core.Scrollbar();
    chart.scrollbarY = new am4core.Scrollbar();
    let positiveData = [];
    let negativeData = [];

    console.log(am4core.Color, "...core...");
    console.log(series.stroke);

    for (var i = 0; i < this.state.names.length; i++) {
      //   this.state.value += Math.round(
      //     (Math.random() < 0.5 ? 1 : -1) * Math.random() * 5
      //   );
      if (i % 2 === 0) {
        // this.setState({ value: -1 * (i + 1) });
        positiveData.push(
          this.state.data.push({
            category: this.state.names[i],
            value: -1 * (i + 1)
          })
        );
        console.log(positiveData, "........State");

        // series.stroke = am4core.color("#0080ff");
        // chart.colors = am4core.color("#845EC2");
      } else {
        // am4core.color("#845EC2");
        // am4core.color("red");
        // this.setState({ value: 1 * (i + 1) });
        negativeData.push(
          this.state.data.push({
            category: this.state.names[i],
            value: 1 * (i + 1)
          })
        );
        console.log(negativeData, "........State negative");

        // series.stroke = am4core.color("#ff0000");
      }

      if (this.state.data.value >= 1) {
        series.stroke = am4core.color("#0080ff");
      } else {
        series.stroke = am4core.color("#ff0000");
      }
    }

    // Add data
    chart.data = this.state.data;

    // Create axes
    // let dateAxis = chart.xAxes.push(new am4charts.DateAxis());
    // //dateAxis.renderer.grid.template.location = 0;
    // //dateAxis.renderer.minGridDistance = 30;

    // let valueAxis1 = chart.yAxes.push(new am4charts.ValueAxis());
    // valueAxis1.title.text = "Sales";

    // let valueAxis2 = chart.yAxes.push(new am4charts.ValueAxis());
    // valueAxis2.title.text = "Market Days";
    // valueAxis2.renderer.opposite = true;
    // valueAxis2.renderer.grid.template.disabled = true;

    // // Create series
    // let series1 = chart.series.push(new am4charts.ColumnSeries());
    // series1.dataFields.valueY = "sales1";
    // series1.dataFields.dateX = "date";
    // series1.yAxis = valueAxis1;
    // series1.name = "Target Sales";
    // // series1.tooltipText = "{name}\n[bold font-size: 20]${valueY}M[/]";
    // series1.fill = chart.colors.getIndex(0);
    // series1.strokeWidth = 0;
    // series1.clustered = false;
    // series1.columns.template.width = am4core.percent(40);

    // let series2 = chart.series.push(new am4charts.ColumnSeries());
    // series2.dataFields.valueY = "sales2";
    // series2.dataFields.dateX = "date";
    // series2.yAxis = valueAxis1;
    // series2.name = "Actual Sales";
    // // series2.tooltipText = "{name}\n[bold font-size: 20]${valueY}M[/]";
    // series2.fill = chart.colors.getIndex(0).lighten(0.5);
    // series2.strokeWidth = 0;
    // series2.clustered = false;
    // series2.toBack();

    // let series3 = chart.series.push(new am4charts.LineSeries());
    // series3.dataFields.valueY = "market1";
    // series3.dataFields.dateX = "date";
    // series3.name = "Market Days";
    // series3.strokeWidth = 2;
    // series3.tensionX = 0.7;
    // series3.yAxis = valueAxis2;
    // // series3.tooltipText = "{name}\n[bold font-size: 20]{valueY}[/]";

    // let bullet3 = series3.bullets.push(new am4charts.CircleBullet());
    // bullet3.circle.radius = 3;
    // bullet3.circle.strokeWidth = 2;
    // bullet3.circle.fill = am4core.color("#fff");

    // let series4 = chart.series.push(new am4charts.LineSeries());
    // series4.dataFields.valueY = "market2";
    // series4.dataFields.dateX = "date";
    // series4.name = "Market Days ALL";
    // series4.strokeWidth = 2;
    // series4.tensionX = 0.7;
    // series4.yAxis = valueAxis2;
    // // series4.tooltipText = "{name}\n[bold font-size: 20]{valueY}[/]";
    // series4.stroke = chart.colors.getIndex(0).lighten(0.5);
    // series4.strokeDasharray = "3,3";

    // let bullet4 = series4.bullets.push(new am4charts.CircleBullet());
    // bullet4.circle.radius = 3;
    // bullet4.circle.strokeWidth = 2;
    // bullet4.circle.fill = am4core.color("#fff");

    // // Add cursor
    // chart.cursor = new am4charts.XYCursor();

    // // Add legend
    // chart.legend = new am4charts.Legend();
    // chart.legend.position = "top";

    // // Add scrollbar
    // chart.scrollbarX = new am4charts.XYChartScrollbar();
    // chart.scrollbarX.series.push(series1);
    // chart.scrollbarX.series.push(series3);
    // chart.scrollbarX.parent = chart.bottomAxesContainer;

    // this.chart = chart;
  }

  componentWillUnmount() {
    if (this.chart) {
      this.chart.dispose();
    }
  }

  render() {
    return (
      <div>
        <div id="SalesChart" style={{ width: "100%", height: "500px" }} />
      </div>
    );
  }
}

export default D3chart;
