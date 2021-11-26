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
    <SplitScreen leftWeight = 'w-1/5' rightWeight = 'w-full'>
      <div id="left" className="flex flex-col justify-center items-center">
        <Chart/>
      </div>
      <div id="right" className="ml-24 w-full">
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
