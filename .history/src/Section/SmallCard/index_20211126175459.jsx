import React from 'react'

export default function SmallCard({icon:Icon}) {
  return (
    <div className="py-1 px-4 w-full">
      <Icon  className="text-6xl text-purple-900 mb-2 rounded-full bg-white p-2"/>
      <p className="text-3xl font-semibold text-purple-900">24</p>
      <p className="text-md font-semibold text-gray-600">Courses</p>
    </div>
  )
}
