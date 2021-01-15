
import React, {useEffect, useState} from 'react';
import {Line, ComposedChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer} from 'recharts'

const convertValueY = value =>  `${value}bpm`;
const convertValueX = value =>  `${value} week`;


export default function Chart (){
  const [ data, setData] = useState([
    {bpm:50, x: 1},
    {bpm:20, x: 2},
    {bpm:50, x: 3},
    {bpm:80, x: 4},
    {bpm:95, x: 5},
    {bpm:100, x: 6},

  ])
    
    return (
        <ResponsiveContainer height='90%' width='100%'>
      <ComposedChart  data={data}>
        <defs>
          <linearGradient id="colorUv" x1="0" y1="0" x2="0" y2="1">
            <stop offset="5%" stopColor="red" stopOpacity={0.1}/>
            <stop offset="95%" stopColor="#FFFFFF" stopOpacity={0.1}/>
          </linearGradient>
        </defs>
        <XAxis dataKey="x" tickFormatter={convertValueX} />
        <YAxis tickFormatter={convertValueY}/>
        <Tooltip/>
        <CartesianGrid vertical={false} horizontal={false} stroke="red" />
        
        <Line type="monotone" unit="%" strokeLinecap="round" strokeWidth={2}
          activeDot={{ r: 8 }} 
          dot={true}
          dataKey="bpm"
          stroke="red"
          legendType="none"
        />
      </ComposedChart>
      </ResponsiveContainer>
    );
};


