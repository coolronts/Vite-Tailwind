import React from 'react'

export const PrimaryButton = ({name}) =>{
  return (
    <button className="bg-green-500 px-12 py-2 text-white text-lg font-semibold shadow-2xl rounded-2xl mt-3">
      {name}
    </button>
  )
} 