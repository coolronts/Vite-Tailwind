import React from 'react'
import SplitScreen from '../../components/SplitScreen'

export default function Course() {
  return (
    <SplitScreen>
      <div id="left">
        Graph
      </div>
      <div id="right">
        <h4 className="font-bold">Biology Molecular</h4>
      </div>
    </SplitScreen>
  )
}
