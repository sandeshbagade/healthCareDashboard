
import React, { useState} from 'react';
import {Line, ComposedChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer} from 'recharts'

const convertValueY = value =>  {
    if(value==0) return `Deep`
    if(value==50) return 'Light'
    if(value==100) return 'Awake'
    return ''
};
const convertValueX = value =>  `${value} weeks`;


export default function SleepPatternChart (){
  const [ data, setData] = useState([
    {percentile:0, x: 1},
    {percentile:50, x: 3},
    {percentile:95, x: 5},
    {percentile:100, x: 6},

  ])
    
    return (
      <ResponsiveContainer height='90%' width='100%'>
      <ComposedChart  data={data}>
        <defs>
          <linearGradient id="sleep" x1="0" y1="0" x2="0" y2="1">
            <stop offset="5%" stopColor="#129a74" stopOpacity={0.1}/>
            <stop offset="95%" stopColor="#FFFFFF" stopOpacity={0.1}/>
          </linearGradient>
        </defs>
        <XAxis dataKey="x" tickFormatter={convertValueX} />
        <YAxis tickFormatter={convertValueY}/>
        <Tooltip/>
        <CartesianGrid vertical={false} horizontal={false} stroke="#DDD" />

        
        <Line type="monotone" unit="%" strokeLinecap="round" strokeWidth={2}
          
          dataKey="percentile"
          stroke="#1d9b52"
          dot={false}
          legendType="none"
        />
        <Area type="monotone" dataKey="percentile" stroke={false} strokeWidth={2} fillOpacity={1} fill="url(#sleep)" />
      </ComposedChart>
      </ResponsiveContainer>
    );
};


