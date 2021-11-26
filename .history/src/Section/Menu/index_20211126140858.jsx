import { AiOutlineAppstore } from 'react-icons/ai'
import {GiOpenBook} from 'react-icons/gi'
import React from 'react'

export default function Menu() {
  return (
    <div className="flex flex-col justify-around text-white text-3xl items-center">
      <AiOutlineAppstore />
      <GiOpenBook />
    </div>
  )
}
