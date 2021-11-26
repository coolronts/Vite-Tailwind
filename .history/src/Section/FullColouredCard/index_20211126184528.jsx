import { PrimaryCard } from '../../components/Card'
import React from 'react'

export default function FullColouredCard() {
  return (
    <div className="text-white">
      <div className="flex h-12 w-full justify-between">
        <img className="p-1 bg-white opacity-50 rounded"
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTDvh0099lNVsKbUJAygnN5Ql_LvdiUgS0A2Q&usqp=CAU" alt="" />
        <img className="p-1 bg-white opacity-50 rounded"
          src="data:image/jpeg;base64,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" alt="" />
      </div>
      d
    </div>
  )
}
