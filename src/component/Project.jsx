import React, { PureComponent } from 'react';
import { BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';


const Project = () => {

  const data = [
    {name:"Facebook", value:100000},
    {name:"Instagram", value:90000},
    {name:"Twitter", value:50000},
    {name:"Whatsaap", value:30000},
    {name:"Telegram", value:60000},
  ]



  return (
       <div style={{padding:"40px 60px",width:"520px",margin:"50px auto", border:"1px solid tomato",justifyContent:"center"}}>
        <h1>
          Social Media Users
        </h1>
        <BarChart
          width={500}
          height={300}
          data={data}
          margin={{
            top: 5,
            right: 30,
            left: 20,
            bottom: 5,
          }}
          barSize={20}
        >
          <XAxis dataKey="name" scale="point" padding={{ left: 10, right: 10 }} />
          <YAxis />
          <Tooltip />
          <Legend />
          <CartesianGrid strokeDasharray="3 3" />
          <Bar dataKey="value" fill="#8884d8" background={{ fill: '#eee' }} />
        </BarChart>
       </div>
  )
}

export default Project;