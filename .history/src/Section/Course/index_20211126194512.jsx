import {Assignment, Lesson, Student, Time} from '../../components/Icons'
import { PrimaryButton, SecondaryButton } from '../../components/Button'

import Chart from '../../components/Chart'
import SplitScreen from '../../components/SplitScreen'

export default function Course({
  course = "Molecular Biology",
  lessons = "21",
  assignments = "5",
  time = "50",
  students = "312"
}) {
  return (
    <div className="w-full">
    <SplitScreen leftWeight = 'w-1/4' rightWeight = 'w-full'>
      <div id="left" className="  flex justify-center items-center h-full w-full">
          <Chart />
          <img className="w-16 z-24 absolute opacity-100"
            src="data:image/jpeg;base64,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"
            alt="" />
      </div>
      <div id="right" className="ml-2 w-full">
        <h4 className="font-bold  mb-4 text-lg">{course}</h4>
        <div className="flex flex-col w-5/6 text-sm">
          <div className="flex  text-gray-500 font-semibold mb-2 ">
            <p className="flex items-center mr-16"> <Lesson className="mr-2"/>  {lessons} lessons</p>
            <p className="flex items-center"> <Time className="mr-2"/>  {time} min</p>
          </div>
          <div className="flex  text-gray-500 font-semibold text-left">
            <p className="flex items-center mr-8"> <Assignment className="mr-2"/>  {assignments} assignments</p>
            <p className="flex items-center"> <Student className="mr-2"/>  {students} students</p>
          </div>
        </div>
        <div className="mt-3">
          <PrimaryButton name="Continue" />
          <SecondaryButton name="Skip" />
        </div>
      </div>
      </SplitScreen>
      </div>
  )
}
