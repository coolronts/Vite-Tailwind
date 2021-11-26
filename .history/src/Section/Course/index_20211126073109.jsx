import React from 'react'
import SplitScreen from '../../components/SplitScreen'

export default function Course() {
  return (
    <SplitScreen leftWeight = 'w-1/4'>
      <div id="left">
        Graph
      </div>
      <div id="right">
        <h4 className="font-bold text-lg">Biology Molecular</h4>
      </div>
    </SplitScreen>
  )
}
