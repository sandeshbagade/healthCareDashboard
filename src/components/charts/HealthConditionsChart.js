
import React, {useEffect, useState} from 'react';
import {Line, ComposedChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer} from 'recharts'

const convertValueY = value =>  `${value}%`;
const convertValueX = value =>  `${value} week`;


export default function Chart (){
  const [ data, setData] = useState([
    {percentile:0, weeks: 1},
    {percentile:20, weeks: 2},
    {percentile:50, weeks: 3},
    {percentile:80, weeks: 4},
    {percentile:95, weeks: 5},
    {percentile:100, weeks: 6},

  ])
    
    return (
      <ResponsiveContainer height='90%' width='100%'>
      <ComposedChart  data={data}>
        <defs>
          <linearGradient id="health" x1="0" y1="0" x2="0" y2="1">
            <stop offset="5%" stopColor="#7b9cce" stopOpacity={0.1}/>
            <stop offset="95%" stopColor="#FFFFFF" stopOpacity={0.1}/>
          </linearGradient>
        </defs>
        <XAxis dataKey="weeks" tickFormatter={convertValueX} />
        <YAxis tickFormatter={convertValueY}/>
        <Tooltip />
        <CartesianGrid vertical={false} horizontal={false} stroke="#7b9cce" />
        
        <Line type="monotone" unit="%" strokeLinecap="round" strokeWidth={2} 
          dataKey="percentile"
          stroke="#7b9cce"
          dot={false}
          legendType="none"
        />
        <Area type="monotone" dataKey="percentile" stroke={false} strokeWidth={2} fillOpacity={1} fill="url(#health)" />
      </ComposedChart>
      </ResponsiveContainer>
    );
};


