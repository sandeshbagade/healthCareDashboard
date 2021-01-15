import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import {
  BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid, ResponsiveContainer
} from 'recharts';

const colors = ['#ffcb49','#fcaf35',  '#c68b23',   '#edab38', '#fcad25', '#db891e',   '#f9c62c']
const convertValueY = value =>  `${value}mmHg`;

const data = [
  {
    week: 'Mon',  bloodPressure: 50
  },
  {
    week: 'Tue',  bloodPressure: 70
  },
  {
    week: 'Wed',  bloodPressure: 150
  },
  {
    week: 'Thu',  bloodPressure: 100
  },
  {
    week: 'Fri',  bloodPressure: 80
  },
  {
    week: 'Sat',  bloodPressure: 120
  },
  {
    week: 'Sun',  bloodPressure: 60
  },
];

export default class BloodPressure extends PureComponent {

  render() {
    return (
    <ResponsiveContainer height='90%' width='100%'>
      <BarChart
        data={data}
        margin={{
          top: 20, right: 30, left: 20, bottom: 5,
        }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="week"/>
        <YAxis tickFormatter={convertValueY} domain={[50, 150]}/>
        <Bar dataKey="bloodPressure" fill="#8884d8" barSize={10} radius={[10, 10, 10, 10]} label={{ position: 'top' }}>
          {
            data.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={colors[index % 20]} />
            ))
          }
        </Bar>
      </BarChart>
    </ResponsiveContainer>
    );
  }
}
