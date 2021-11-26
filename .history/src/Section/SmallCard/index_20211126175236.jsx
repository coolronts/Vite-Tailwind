import React from 'react'

export default function SmallCard({icon:Icon}) {
  return (
    <div className="p-2 w-full">
      <Icon  className="text-2xl text-purple-900 mb-2"/>
      <p className="text-3xl font-semibold text-purple-900">24</p>
      <p className="text-md font-semibold text-gray-600">Courses</p>
    </div>
  )
}
