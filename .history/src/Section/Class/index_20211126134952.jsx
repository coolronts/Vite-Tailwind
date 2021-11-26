import {PrimaryButton, SecondaryButton} from '../../components/Button'

import { BiTimeFive } from 'react-icons/bi'
import {FiUsers} from 'react-icons/fi'
import { GiWhiteBook } from 'react-icons/gi'
import React from 'react'
import { RiPagesLine } from 'react-icons/ri'
import SplitScreen from '../../components/SplitScreen'

export default function Class({
  course = "Molecular Biology",
  lessons = "21",
  assignments = "5",
  time = "50",
  students = "312"
}) {
  return (
    <SplitScreen leftWeight = 'w-1/3 mr-4 bg-red-400' rightWeight = 'w-full'>
      <div id="left" className="flex items-center">
        <img className="h-1/2 object-fill" src="data:image/jpeg;base64,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" alt=""/>
      </div>
      <div id="right">
        <h4 className="font-bold text-xl mb-4">{course}</h4>
        <div className="flex flex-col w-5/6">
          <div className="flex  text-gray-500 font-semibold mb-2">
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
