import './App.css'

import { PrimaryButton, SecondaryButton } from './components/Button'

import {PrimaryCard} from './components/Card'
import SplitScreen from './components/SplitScreen'
import { useState } from 'react'

function App() {

  return (
    <div className="App bg-white my-12 mx-24 rounded-3xl px-6 py-12 font-sans">
      <SplitScreen>
        <div id="left">
          <div>
            <h3 className="text-5xl font-sans font-bold mb-4">Hello, <span className="font-light">Ronty!</span> </h3>
            <h5 className="font-semibold tracking-wide text-gray-500">Nice to have you Back, what an exciting day!</h5>
            <h5 className="font-semibold tracking-wide text-gray-500">Get Ready and enjoy your lesson today</h5>
          </div>

          <div>
            <p className="text-2xl font-bold">Today's Course</p>
          </div>
          
        </div>
        
        <div id="right">
          <SecondaryButton name="Ronty"/>
        </div>
        
      
      </SplitScreen>
    </div>
  )
}

export default App
