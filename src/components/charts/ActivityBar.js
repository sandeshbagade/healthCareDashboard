import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import {
  BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid, ResponsiveContainer
} from 'recharts';

const colors = ['#4f73bc', '#72b4ea', '#014fa3', '#2468af', '#2468af', '#3869a5', '#2764dd']
const convertValueY = value =>  `${value}%`;

const data = [
  {
    week: 'Mon',  activity: 50
  },
  {
    week: 'Tue',  activity: 25
  },
  {
    week: 'Wed',  activity: 90
  },
  {
    week: 'Thu',  activity: 50
  },
  {
    week: 'Fri',  activity: 50
  },
  {
    week: 'Sat',  activity: 70
  },
  {
    week: 'Sun',  activity: 40
  },
];

export default class Activity extends PureComponent {

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
        <YAxis tickFormatter={convertValueY} />
        <Bar dataKey="activity" fill="#8884d8" barSize={10} radius={[10, 10, 10, 10]} label={{ position: 'top' }}>
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
