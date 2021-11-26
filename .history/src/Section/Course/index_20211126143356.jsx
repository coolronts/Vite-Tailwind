import {PrimaryButton, SecondaryButton} from '../../components/Button'

import {BiTimeFive} from 'react-icons/bi'
import {FiUsers} from 'react-icons/fi'
import { GiWhiteBook } from 'react-icons/gi'
import React from 'react'
import { RiPagesLine } from 'react-icons/ri'
import SplitScreen from '../../components/SplitScreen'

export default function Course({
  course = "Molecular Biology",
  lessons = "21",
  assignments = "5",
  time = "50",
  students = "312"
}) {
  return (
    <SplitScreen leftWeight = 'w-1/5' rightWeight = 'w-full'>
      <div id="left">
        Graph
      </div>
      <div id="right" className="ml-4">
        <h4 className="font-bold text-xl mb-4 text-lg">{course}</h4>
        <div className="flex flex-col w-5/6 text-sm">
          <div className="flex  text-gray-500 font-semibold mb-2 ">
            <p className="flex items-center mr-16"> <GiWhiteBook className="mr-2"/>  {lessons} lessons</p>
            <p className="flex items-center"> <BiTimeFive className="mr-2"/>  {time} min</p>
          </div>
          <div className="flex  text-gray-500 font-semibold text-left">
            <p className="flex items-center mr-8"> <RiPagesLine className="mr-2"/>  {assignments} assignments</p>
            <p className="flex items-center"> <FiUsers className="mr-2"/>  {students} students</p>
          </div>
        </div>
        <div className="flex justify-around mt-6">
          <PrimaryButton name="Continue" />
          <SecondaryButton name="Skip" />
        </div>
      </div>
    </SplitScreen>
  )
}
