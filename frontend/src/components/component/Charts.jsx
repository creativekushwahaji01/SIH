import React from 'react';
import { CardHeader, CardTitle, CardDescription, CardContent } from '../ui/Card';
import { Card } from '../ui/Card';
import './Charts.css';
import PieChart from '../../charts/Piechart';
import LineChart from '../../charts/Linechart';

function Charts() {
  return (
    <div className="component-container">
      <main className="main-content">
        <div className="card-grid">
          <Card>
            <CardHeader>
              <CardTitle>Total Emissions</CardTitle>
              <CardDescription>Metric tons of CO2 equivalent</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="chart-container">
                <LineChart className="chart" />
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle>Emissions by Source</CardTitle>
              <CardDescription>Breakdown of emissions by source</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="chart-container">
                <PieChart className="chart" />
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle>Emissions Intensity</CardTitle>
              <CardDescription>Emissions per unit of production</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="chart-container">
                <LineChart className="chart" />
              </div>
            </CardContent>
          </Card>
        </div>
      </main>
    </div>
  );
}

export default Charts;
