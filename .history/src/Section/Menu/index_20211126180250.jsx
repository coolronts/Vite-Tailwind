import {App, Courses, Message, Schedule, Setting} from '../../components/Icons'

import React from 'react'

export default function Menu() {
  return (
    <div className="flex flex-col justify-around text-gray-400 text-2xl items-center h-96 py-8">
      <App />
      <Courses />
      <Schedule />
      <Message />
      <Setting />
    </div>
  )
}
