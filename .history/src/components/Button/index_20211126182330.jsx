import React from 'react'

export const PrimaryButton = ({name}) =>{
  return (
    <button className="bg-green-500 py-3 px-3 ring-2 ring-green-500 text-white text-sm font-semibold shadow-2xl rounded-xl mt-3 mx-2">
      {name}
    </button>
  )
}

export const SecondaryButton = ({name}) =>{
  return (
    <button className="bg-white w-24 py-1 ring-2 ring-green-500 text-gray-600 text-md font-semibold  rounded-xl mt-3 mx-2">
      {name}
    </button>
  )
} 