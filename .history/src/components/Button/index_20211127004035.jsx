import React from 'react'

export const PrimaryButton = ({name}) =>{
  return (
    <button className="bg-green-400 h-10 w-32 ring-2 ring-green-400 text-white text-xs font-semibold shadow-2xl rounded-xl mr-2">
      {name}
    </button>
  )
}

export const SecondaryButton = ({name}) =>{
  return (
    <button className="bg-white h-8 w-24 ring-2 ring-green-400 text-gray-600 text-xs font-semibold rounded-xl mr-2">
      {name}
    </button>
  )
} 