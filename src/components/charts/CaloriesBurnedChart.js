import React, { PureComponent } from 'react';
import { RadialBarChart, RadialBar, Legend, ResponsiveContainer,Tooltip } from 'recharts';

const data = [
  {
    name: '30-34', uv: 15.69, pv: 1398, fill: '#7b9cce',
  },
];

const style = {
  top: 0,
  left: 0,
  lineHeight: '24px',
};


export default class Example extends PureComponent {

  render() {
    return (
        <ResponsiveContainer height='90%' width='100%'>
            <RadialBarChart 
                innerRadius="90%" 
                data={data} 
                startAngle={-50} 
                endAngle={120}
                innerRadius="140%" 
                barSize={10}
                >
                <RadialBar minAngle={15} background clockWise={false} background='#ccc' dataKey='uv' />
                <Tooltip />
            </RadialBarChart>
        </ResponsiveContainer>
    );
  }
}
