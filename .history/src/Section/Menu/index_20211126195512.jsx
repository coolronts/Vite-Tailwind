import {App, Courses, Message, Schedule, Setting} from '../../components/Icons'

import React from 'react'

export default function Menu() {
  return (
    <div className="flex flex-col justify-between text-gray-400 text-2xl items-center h-96 py-8">
      <App  className="cursor-pointer hover:text-red-500"/>
      <Courses className="cursor-pointer hover:text-red-500"/>
      <Schedule className="cursor-pointer hover:text-red-500" />
      <Message className="cursor-pointer hover:text-red-500"/>
      <Setting className="cursor-pointer hover:text-red-500"/>
    </div>
  )
}
