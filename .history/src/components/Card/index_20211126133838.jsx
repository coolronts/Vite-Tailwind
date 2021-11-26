import React from 'react'

export const PrimaryCard =({children, color="purple"}) => {
  return (
    <div className={`bg-${purple}-50 py-3 px-6 rounded-xl shadow-xl`}>
      {children}
    </div>
  )
}
