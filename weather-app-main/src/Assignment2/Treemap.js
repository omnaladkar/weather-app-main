import React, { useState } from 'react';
import * as d3 from 'd3';

import { PieChart, Pie, Cell,Tooltip } from 'recharts';

 import CityLineGraph from './CityLineGraph';


const CityPieChart = ({ cities }) => {
  const topCities = cities.sort((a, b) => b.population - a.population).slice(0, 5);

  const data = topCities.map((city) => ({
    name: city.city,
    value: city.population, 
  }));

  const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042', '#AF19FF'];

  return (
    <PieChart width={300} height={200}>
      <Pie data={data} dataKey="value" nameKey="name" cx="50%" cy="50%" outerRadius={100} innerRadius={70} fill="#8884d8">
        {data.map((entry, index) => (
          <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
        ))}
      </Pie>
      <Tooltip />
    </PieChart>
  );
};



const TreemapChart = ({ data }) => {
  const width = 800;
  const height = 600;

  const colorScale = d3.scaleLinear().domain([0, d3.max(data, (d) => d.population)]).range(['lightblue', 'darkblue']);

  const treemap = d3.treemap().size([width, height]).padding(1);

  const root = d3.hierarchy({ children: data }).sum((d) => d.population);

  treemap(root);

  const [selectedState, setSelectedState] = useState(null);

  const handleStateClick = (state) => {
    setSelectedState(state);
  };

  return (
    <>
      <svg width="100%" height={height}>
        {root.leaves().map((leaf) => (
          <g key={leaf.data.id} transform={`translate(${leaf.x0},${leaf.y0})`}>
            <rect
              width={leaf.x1 - leaf.x0}
              height={leaf.y1 - leaf.y0}
              fill={colorScale(leaf.data.population)}
              onClick={() => {
                handleStateClick(leaf.data);
              }}
            >
              <title>{leaf.data.name}</title>
            </rect>
          </g>
        ))}
      </svg>

      {selectedState && (
        <div id="state-details">
          <h2>{selectedState.name}</h2>
          <div>
            <h3>Top 5 Most Populated Cities of {selectedState.name}</h3>
            <CityPieChart cities={selectedState.cities} />
          </div>
          <div>
            <h3>Top 5 Most Populated Cities of {selectedState.name}</h3>
            <CityLineGraph cities={selectedState.cities} />
          </div>
           
        </div>
      )}
    </>
  );
};

export default TreemapChart;
