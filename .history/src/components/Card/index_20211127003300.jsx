import React from 'react'

export const PrimaryCard =({children, color="purple"}) => {
  return (
    <div className={`bg-${color}-100 bg-${color}  py-3 px-3 mb-4 rounded-xl shadow-xl opacity-90`}>
      {children}
    </div>
  )
}

export const SecondaryCard =({children, color="purple"}) => {
  return (
    <div className={`bg-${color}-300 bg-${color} mx-2 py-3 px-3 mb-4 rounded-xl shadow-xl opacity-90`}>
      {children}
    </div>
  )
}
