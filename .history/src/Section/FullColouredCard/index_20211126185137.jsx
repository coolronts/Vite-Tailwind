import { PrimaryCard } from '../../components/Card'
import React from 'react'

export default function FullColouredCard() {
  return (
    <div className="text-white">
      <div className="flex h-12 w-full justify-between">
        <div className="relative">
          <div className="absolute bg-white opacity-50 rounded w-full h-full"/>
          <img className="w-6"
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTDvh0099lNVsKbUJAygnN5Ql_LvdiUgS0A2Q&usqp=CAU" alt="" />
        </div>
        
      </div>
      <p className="text-white text-lg mt-6">Consultation</p>
      <p>Get your mentor to help your learning process</p>
    </div>
  )
}
