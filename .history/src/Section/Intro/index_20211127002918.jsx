import React from 'react'

export default function Intro({name}) {
  return (
    <div>
      <h3 className="text-3xl font-sans font-bold mb-4">Hello, <span className="font-light">Ronty!</span> </h3>
      <div className="font-medium tracking-wide text-gray-500 text-sm">
        <h5>Nice to have you Back, what an exciting day!</h5>
        <h5>Get Ready and enjoy your lesson today</h5>
      </div>
    </div>
  )
}
