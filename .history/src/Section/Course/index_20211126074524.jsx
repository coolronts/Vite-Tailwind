import {BiTimeFive} from 'react-icons/bi'
import {FiUsers} from 'react-icons/fi'
import { GiWhiteBook } from 'react-icons/gi'
import React from 'react'
import { RiPagesLine } from 'react-icons/ri'
import SplitScreen from '../../components/SplitScreen'

export default function Course() {
  return (
    <SplitScreen leftWeight = 'w-1/5' rightWeight = 'w-full'>
      <div id="left">
        Graph
      </div>
      <div id="right">
        <h4 className="font-bold text-lg mb-2">Biology Molecular</h4>
        <div className="flex flex-col w-5/6">
          <div className="flex  text-gray-500 font-semibold ">
            <p className="flex items-center"> <GiWhiteBook className="mr-2"/>  21 lessons</p>
            <p className="flex items-center text-left"> <BiTimeFive className="mr-2"/>  50 min</p>
          </div>
          <div className="flex justify-between text-gray-500 font-semibold text-left">
            <p className="flex items-center"> <RiPagesLine className="mr-2"/>  5 assignments</p>
            <p className="flex items-center"> <FiUsers className="mr-2"/>  312 students</p>
          </div>
        </div>
      </div>
    </SplitScreen>
  )
}
