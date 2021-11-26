import React from 'react'

export const PrimaryCard =({children, color="purple"}) => {
  return (
    <div className={`bg-${color}-100 py-3 px-6 my-8 rounded-xl shadow-xl opacity-90`}>
      {children}
    </div>
  )
}
