import React from 'react'

export const PrimaryButton = ({name}) =>{
  return (
    <button className="bg-green-400 h-10 w-28 ring-2 ring-green-400 text-white text-sm font-semibold shadow-2xl rounded-xl mt-3 mr-4">
      {name}
    </button>
  )
}

export const SecondaryButton = ({name}) =>{
  return (
    <button className="bg-white h-10 w-28 ring-2 ring-green-400 text-gray-600 text-sm font-semibold  rounded-xl mt-3 mr-3">
      {name}
    </button>
  )
} 