import React from 'react'

export const PrimaryButton = ({name}) =>{
  return (
    <button className="bg-green-500 w-32 py-2 ring-2 ring-green-500 text-white text-md font-semibold shadow-2xl rounded-2xl mt-3">
      {name}
    </button>
  )
}

export const SecondaryButton = ({name}) =>{
  return (
    <button className="bg-white w-32 py-2 ring-2 ring-green-500 text-gray-600 text-md font-semibold  rounded-2xl mt-3">
      {name}
    </button>
  )
} 