import {AiOutlineSchedule, AiOutlineSetting} from 'react-icons/ai'

import { AiOutlineAppstore } from 'react-icons/ai'
import {BsChatLeftText} from 'react-icons/bs'
import { GiOpenBook } from 'react-icons/gi'
import { GrSchedulePlay } from 'react-icons/gr'
import React from 'react'

export default function Menu() {
  return (
    <div className="flex flex-col justify-around text-white text-3xl items-center">
      <AiOutlineAppstore />
      <GiOpenBook />
      <AiOutlineSchedule />
      <BsChatLeftText />
      <AiOutlineSetting />
    </div>
  )
}
