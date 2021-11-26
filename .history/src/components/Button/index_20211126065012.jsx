import React from 'react'

export const PrimaryButton = ({name}) =>{
  return (
    <button className="bg-green-500 px-6 py-1 text-white text-lg font-semibold shadow-2xl rounded-lg mt-3">
      {name}
    </button>
  )
} 