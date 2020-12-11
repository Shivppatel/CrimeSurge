import React from "react";
import Chart from "react-apexcharts";
import {
  StatisticsContainer,
  StatisticsTitle,
  StatisticsWrapper,
} from "./StatisticsElements";

class Stat extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      options: {
        chart: {
          id: "basic-bar",
          // Changes background of graph to white
          background: "white",
        },
        plotOptions: {
          bar: {
            horizontal: true,
          },
        },
        title: {
          text: "Crimes By Category",
          align: "center",
          style: {
            fontSize: "20px",
            fontWeight: "bold",
            fontFamily: undefined,
            color: "#263238",
          },
        },
        yaxis: {
          title: {
            text: undefined,
          },
        },
        xaxis: {
          categories: [
            "Accident",
            "Theft from Auto",
            "Accident with Impound",
            "Theft",
            "Auto, Stolen",
            "Vandalism",
            "Assault",
            "B & E, Residential",
            "Robbery, Other",
            "B & E, Commercial",
            "Sex Offense",
            "Assault, Weapon",
            "Auto, Stolen & Recovered",
            "Robbery, Commerial",
            "B & E, Other",
            "B & E, Vacant",
            "Assault, Shooting",
            "Robbery, Vehicle",
            "Homicide",
            "Robbery, Residential",
            "B & E, School",
            "B & E, Residential (Vacant)",
          ],
        },
      },
      series: [
        {
          name: "crime-frequency",
          data: [
            17743,
            17714,
            14167,
            12334,
            8744,
            4600,
            3277,
            3200,
            2033,
            1336,
            834,
            723,
            688,
            549,
            502,
            320,
            307,
            255,
            143,
            104,
            50,
            45,
          ],
        },
      ],
    };
  }

  render() {
    return (
      <StatisticsContainer id="statistics">
        <StatisticsTitle>Statistics</StatisticsTitle>
        <StatisticsWrapper>
          <div className="mixed-chart">
            <Chart
              options={this.state.options}
              series={this.state.series}
              type="bar"
              width="800"
            />
          </div>
        </StatisticsWrapper>
      </StatisticsContainer>
    );
  }
}

/*const Statistics = () => {
    return (
      <StatisticsContainer id="statistics">
        <StatisticsTitle>Statistics</StatisticsTitle>
        <StatisticsWrapper>
        </StatisticsWrapper>
      </StatisticsContainer>
    );
  };*/

export default Stat;
