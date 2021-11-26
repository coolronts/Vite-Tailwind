import { ArcElement, Chart as ChartJS, Legend, Tooltip } from 'chart.js';
import React, {useEffect} from 'react'

import { Doughnut } from 'react-chartjs-2';

ChartJS.register(ArcElement, Tooltip, Legend);

export const data = {
  labels: [],
  cutout:10,
  datasets: [
    {
      label: '',
      data: [12],
      backgroundColor: [
        'rgba(255, 99, 132, 0.2)',
        
      ],
      borderColor: [
        'rgba(255, 99, 132, 1)',
      
      ],
      borderWidth: 1,
    },
  ],
};


export default function Chart() {
 return (
      <Doughnut data={data} />
 )
}