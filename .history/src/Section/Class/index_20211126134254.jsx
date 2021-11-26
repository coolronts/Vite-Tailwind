import React from 'react'
import SplitScreen from '../../components/SplitScreen'

export default function Class() {
  return (
    <SplitScreen leftWeight = 'w-1/5' rightWeight = 'w-full'>
      <div id="left">
        <img src="https://via.placeholder.com/150" alt=""/>
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
