import React from 'react'

export default function SmallCard({icon:Icon}) {
  return (
    <div>
      <Icon />
      <p className="text-3xl font-semibold text-purple-900">24</p>
      <p className="text-md font-semibold text-gray-600">Courses</p>
    </div>
  )
}
