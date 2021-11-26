import DonutChart from 'donut-chart-js';
import React from 'react'

export default function Chart() {
  new DonutChart(document.getElementById('myChart'), {
  data: [
    { label: 'red', value: 120, color: '#F15F5F' },
    { label: 'green', value: 250, color: '#BCE55C' },
    { label: 'blue', value: 180, color: '#B2CCFF' },
    { label: 'yellow', value: 70, color: '#FFE08C' },
  ],
  holeSize: 0.6,
  animationSpeed: 0.5,
});

  return (
    <canvas id="myChart" width="500px" height="500px"></canvas>
  )
}
