import { ArcElement, Chart as ChartJS, Legend, Tooltip } from 'chart.js';
import React, {useEffect} from 'react'

import { Doughnut } from 'react-chartjs-2';

ChartJS.register(ArcElement, Tooltip, Legend);

export const data = {
  labels: [],
  datasets: [
    {
      label: '',
      data: [12],
      backgroundColor: [
        'rgba(27, 163, 156,1)',
        
      ],
      borderColor: [
        'rgba(27, 163, 156,1)'     
      ],
      borderWidth: 10,
    },
  ],
  
};

const options = {
   cutoutPercentage: 90,
};


export default function Chart() {
 return (
      <Doughnut data={data} options={options} />
 )
}