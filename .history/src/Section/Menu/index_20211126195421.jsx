import {App, Courses, Message, Schedule, Setting} from '../../components/Icons'

import React from 'react'

export default function Menu() {
  return (
    <div className="flex flex-col justify-between text-gray-400 text-2xl items-center h-96 py-8">
      <App  className="cursor-pointer hover:text-purple-900"/>
      <Courses />
      <Schedule />
      <Message />
      <Setting />
    </div>
  )
}
