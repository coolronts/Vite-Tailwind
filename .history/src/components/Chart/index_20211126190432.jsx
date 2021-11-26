import React, {useEffect} from 'react'

import { Doughnut } from 'react-chartjs-2';
import PropTypes from 'prop-types'

export default function Chart({ dataX=12, labels=dataX ,  maintainAspectRatio=true, aspectRatio=4, borderWidth=1, yGrid=false, xGrid=false, tooltipEnable=false }) {
  let radius = 0
  if(tooltipEnable){
    radius = 2
  }else{radius =0}
  useEffect(() => {
  },
  [dataX])
  const data = {
    labels: [
      'Red',
      'Blue',
      'Yellow'
    ],
    datasets: [{
      label: 'My First Dataset',
      data: [300, 50, 100],
      backgroundColor: [
        'rgb(255, 99, 132)',
        'rgb(54, 162, 235)',
        'rgb(255, 205, 86)'
      ],
      hoverOffset: 4
    }]
};

  const config = {
    type: 'doughnut',
    data: data,
  };
 return (
     <Doughnut data={data} options={config} />
 )
}

Chart.propTypes = {
  dataX: PropTypes.array.isRequired,
  borderWidth: PropTypes.number,
  yGrid: PropTypes.bool,
  xGrid: PropTypes.bool,
  tooltipEnable: PropTypes.bool,
  aspectRatio: PropTypes.number,
  maintainAspectRatio: PropTypes.bool,
  labels: PropTypes.array
}