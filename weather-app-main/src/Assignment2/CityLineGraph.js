import React, { useState } from 'react';
import * as d3 from 'd3';
import { LineChart, Line, XAxis, YAxis, Tooltip, Legend } from 'recharts';
import { PieChart, Pie, Cell } from 'recharts';
import { BarChart, Bar, CartesianGrid } from 'recharts';
import { ResponsiveContainer } from 'recharts';
 import {  AreaChart, Area } from 'recharts';


  const CityLineGraph = ({ cities }) => {
    const topCities = cities.sort((a, b) => b.population - a.population).slice(0, 5);
  
    const data = topCities.map((city) => ({
      name: city.city,
      value: city.population,
    }));
  
    return (
      <ResponsiveContainer width="100%" height={200}>
        <LineChart data={data} margin={{ right: 20 }}>
          <CartesianGrid />
          <XAxis dataKey="name" interval="preserveStartEnd" />
          <YAxis />
          <Legend />
          <Tooltip />
          <Line dataKey="value" stroke="black" activeDot={{ r: 8 }} />
        </LineChart>
      </ResponsiveContainer>
    );
  };
  
  export default CityLineGraph
