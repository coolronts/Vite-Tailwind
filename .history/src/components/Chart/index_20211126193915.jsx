import { ArcElement, Chart as ChartJS, Legend, Tooltip } from 'chart.js';
import React, {useEffect} from 'react'

import { Doughnut } from 'react-chartjs-2';

ChartJS.register(ArcElement, Tooltip, Legend);

const Options = {
  plugins: {
    tooltip: {
      enabled: false,
    }
  },
  cutout: '90%',
  responsive: false,
  maintainAspectRatio: true,
  innerRadius: "10%",

}

export const data = {
  labels: [],
  datasets: [
    {
      label: '',
      data: [80,30],
      backgroundColor: [
        'rgba(21, 163, 156,1)',
        'rgba(255, 255, 255, 0.2)',
        
      ],
      borderColor: [
        
      ],
      borderWidth: 3,
    },
  ],
};

export default function Chart() {
  useEffect(() => { }, [data,Options])
 return (
      <Doughnut data={data} options={Options} />
 )
}