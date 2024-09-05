import React from 'react';
import { ResponsiveBar } from '@nivo/bar';

const StudentQuantityBarChart = () => {
    const data = [
        { class: "Class 1", students: 30 },
        { class: "Class 2", students: 25 },
        { class: "Class 3", students: 28 },
        { class: "Class 4", students: 32 },
        { class: "Class 5", students: 29 },
    ];

    return (
        <div style={{ height: 400 }}>
            <ResponsiveBar
                data={data}
                keys={['students']}
                indexBy="class"
                margin={{ top: 50, right: 50, bottom: 50, left: 60 }}
                padding={0.3}
                valueScale={{ type: 'linear' }}
                indexScale={{ type: 'band', round: true }}
                colors={{ scheme: 'nivo' }}
                borderColor={{ from: 'color', modifiers: [['darker', 1.6]] }}
                axisTop={null}
                axisRight={null}
                axisBottom={{
                    tickSize: 5,
                    tickPadding: 5,
                    tickRotation: 0,
                    legend: 'Class',
                    legendPosition: 'middle',
                    legendOffset: 32,
                }}
                axisLeft={{
                    tickSize: 5,
                    tickPadding: 5,
                    tickRotation: 0,
                    legend: 'Number of Students',
                    legendPosition: 'middle',
                    legendOffset: -40,
                }}
                labelSkipWidth={12}
                labelSkipHeight={12}
                labelTextColor={{ from: 'color', modifiers: [['darker', 1.6]] }}
                role="application"
                ariaLabel="Student Quantity per Class Bar Chart"
                barAriaLabel={e => `${e.indexValue}: ${e.value} students`}
            />
        </div>
    );
};

export default StudentQuantityBarChart
