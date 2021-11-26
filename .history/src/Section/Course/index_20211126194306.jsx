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
          <img className="w-4"
            src="data:image/jpeg;base64,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" alt="" />
          
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
