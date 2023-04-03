import React from "react";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

function LineChartDay({ weatherData }) {
    const renderCustomizedLabel = ({ x, y, value }) => {

        return (
            <g transform={`translate(${x},${y})`}>
                <text x={0} y={0} dy={16} textAnchor="end" fill="#666">
                    {`${value}°C`}
                </text>
            </g>
        );
    };

    return (
        <ResponsiveContainer width="100%" height={300}>
            <LineChart width={600} height={300} data={weatherData} margin={{ top: 5, right: 20, bottom: 5, left: 0 }}>
                <Line type="monotone" dataKey="date" stroke="#8884d8" label={renderCustomizedLabel} />
                <CartesianGrid stroke="#ccc" strokeDasharray="5 5" />
                <XAxis dataKey="name" />
                <YAxis />
            </LineChart>
        </ResponsiveContainer>
    );
}

export default LineChartDay;
