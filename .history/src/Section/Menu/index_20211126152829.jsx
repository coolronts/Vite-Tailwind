import {App, Schedule, Setting} from '../../components/Icons'

import {BsChatLeftText} from 'react-icons/bs'
import { GiOpenBook } from 'react-icons/gi'
import React from 'react'

export default function Menu() {
  return (
    <div className="flex flex-col justify-around text-gray-400 text-2xl items-center h-full py-24">
      <App />
      <GiOpenBook />
      <Schedule />
      <BsChatLeftText />
      <Setting />
    </div>
  )
}
