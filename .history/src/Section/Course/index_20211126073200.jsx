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
        <div className="flex flex-col">
          <div className="flex flex-row">
            <p>21 lessons</p>
            <p>50 minutes</p>
      </div>
    </SplitScreen>
  )
}
