import { useState, useEffect, useRef } from 'react';
import * as d3 from 'd3';

const PieChart = () => {
  const [data] = useState([
    { label: 'A', value: 30 },
    { label: 'B', value: 20 },
    { label: 'C', value: 50 },
    { label: 'D', value: 40 },
    { label: 'E', value: 10 },
  ]);

  const svgRef = useRef();

  useEffect(() => {
    // Clear any existing SVG content
    d3.select(svgRef.current).selectAll("*").remove();

    // Set up dimensions
    const width = 400;
    const height = 400;
    const radius = Math.min(width, height) / 2;

    // Create SVG
    const svg = d3.select(svgRef.current)
      .attr('width', width)
      .attr('height', height)
      .append('g')
      .attr('transform', `translate(${width / 2},${height / 2})`);

    // Set up colors
    const color = d3.scaleOrdinal(d3.schemeCategory10);

    // Create pie layout
    const pie = d3.pie()
      .value(d => d.value)
      .sort(null);

    // Create arc generator
    const arc = d3.arc()
      .innerRadius(0)
      .outerRadius(radius);

    // Generate the pie chart
    const arcs = svg.selectAll('arc')
      .data(pie(data))
      .enter()
      .append('g')
      .attr('class', 'arc');

    arcs.append('path')
      .attr('d', arc)
      .attr('fill', (d, i) => color(i));

    // Add labels
    arcs.append('text')
      .attr('transform', d => `translate(${arc.centroid(d)})`)
      .attr('text-anchor', 'middle')
      .text(d => d.data.label);

  }, [data]);

  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold mb-4">Pie Chart</h2>
      <div className="border p-4 rounded">
        <svg ref={svgRef}></svg>
      </div>
    </div>
  );
};

export default PieChart;