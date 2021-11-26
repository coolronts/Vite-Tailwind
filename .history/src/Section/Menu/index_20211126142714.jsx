import {AiOutlineAppstore, AiOutlineSchedule, AiOutlineSetting} from 'react-icons/ai'

import {BsChatLeftText} from 'react-icons/bs'
import { GiOpenBook } from 'react-icons/gi'
import React from 'react'

export default function Menu() {
  return (
    <div className="flex flex-col justify-around text-white text-xl items-center h-full py-28">
      <AiOutlineAppstore />
      <GiOpenBook />
      <AiOutlineSchedule />
      <BsChatLeftText />
      <AiOutlineSetting />
    </div>
  )
}
