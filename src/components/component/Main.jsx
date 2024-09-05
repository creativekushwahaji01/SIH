import React from "react";
import LineChart from "../../charts/Linechart";
import PieChart from "../../charts/Piechart";
import './Main.css'
import { Line } from "@nivo/line";

const Main = () => {
  return (
    <div className="main">
      <div className="main-content">
        <div className="card-grid">
            <div className="cardheader">
                <h1>Total Emissions</h1>
                <p>Metric tons of CO2 equivalent</p>
            </div>
            <div className="cardcontent">
                <LineChart />
            </div>
        </div>
        <div className="card-grid">
            <div className="cardheader">
                <h1>Emissions by Source</h1>
                <p>Breakdown of emissions by source</p>
            </div>
            <div className="cardcontent">
                <PieChart />
            </div>
        </div>
        <div className="card-grid">
            <div className="cardheader">
                <h1>Emissions Intensity</h1>
                <p>Emissions per unit of production</p>
            </div>
            <div className="cardcontent">
                <LineChart/>
            </div>
        </div>
      </div>
    </div>
  )
}

export default Main;
