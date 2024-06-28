import React from 'react'
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import data from '../../data/data';

const currentTime = new Date().toLocaleTimeString()
const currentDate = new Date().toDateString()

const Graph = () => {
  return (
     <ResponsiveContainer width="100%" height={380}>
          <div className={`px-[2rem] py-5`}>
               <div className={``}>
                    <h2 className={`font-bold text-xl`}>Today's trends</h2>
                    <p className={`text-sm text-gray-400`}>As of {currentDate}, {currentTime}</p>
               </div>
          </div>
          <LineChart data={data} margin={{ top: 20, right: 30, left: 20, bottom: 5 }}>
               <CartesianGrid strokeDasharray="3 3" />
               <XAxis dataKey="Days" padding={{ left: 10, right: 10 }} />
               <YAxis />
               <Tooltip />
               <Legend />
               <Line type="monotone" dataKey="Clients" stroke="#8884d8" />
          </LineChart>
     </ResponsiveContainer>
  )
}

export default Graph