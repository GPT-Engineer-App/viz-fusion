import { useState, useEffect, useRef } from 'react';
import * as d3 from 'd3';

const BarChart = () => {
  const [data] = useState([
    { label: 'A', value: 10 },
    { label: 'B', value: 20 },
    { label: 'C', value: 30 },
    { label: 'D', value: 40 },
    { label: 'E', value: 50 },
  ]);

  const svgRef = useRef();

  useEffect(() => {
    // Clear any existing SVG content
    d3.select(svgRef.current).selectAll("*").remove();

    // Set up dimensions
    const width = 400;
    const height = 300;
    const margin = { top: 20, right: 20, bottom: 30, left: 40 };
    const innerWidth = width - margin.left - margin.right;
    const innerHeight = height - margin.top - margin.bottom;

    // Create SVG
    const svg = d3.select(svgRef.current)
      .attr('width', width)
      .attr('height', height);

    // Create scales
    const xScale = d3.scaleBand()
      .domain(data.map(d => d.label))
      .range([0, innerWidth])
      .padding(0.1);

    const yScale = d3.scaleLinear()
      .domain([0, d3.max(data, d => d.value)])
      .range([innerHeight, 0]);

    // Create and position the bars
    const g = svg.append('g')
      .attr('transform', `translate(${margin.left},${margin.top})`);

    g.selectAll('rect')
      .data(data)
      .enter()
      .append('rect')
      .attr('x', d => xScale(d.label))
      .attr('y', d => yScale(d.value))
      .attr('width', xScale.bandwidth())
      .attr('height', d => innerHeight - yScale(d.value))
      .attr('fill', 'steelblue');

    // Add the x-axis
    g.append('g')
      .attr('transform', `translate(0,${innerHeight})`)
      .call(d3.axisBottom(xScale));

    // Add the y-axis
    g.append('g')
      .call(d3.axisLeft(yScale));

  }, [data]);

  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold mb-4">Bar Chart</h2>
      <div className="border p-4 rounded">
        <svg ref={svgRef}></svg>
      </div>
    </div>
  );
};

export default BarChart;