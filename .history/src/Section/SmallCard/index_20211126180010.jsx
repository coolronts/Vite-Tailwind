import React from 'react'

export default function SmallCard({icon:Icon, name, number}) {
  return (
    <div className="py-1 pr-10 w-full">
      <Icon  className="text-3xl text-purple-900 mb-2 rounded-full bg-gray-50 p-2"/>
      <p className="text-3xl font-semibold text-purple-900">{number}</p>
      <p className="text-md font-semibold text-gray-600"> {name}  </p>
    </div>
  )
}
