import {App, Courses, Message, Schedule, Setting} from '../../components/Icons'

import React from 'react'

export default function Menu() {
  return (
    <div className="flex flex-col justify-around text-gray-500 text-2xl items-center h-full py-8">
      <App />
      <Courses />
      <Schedule />
      <Message />
      <Setting />
    </div>
  )
}
