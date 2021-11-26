import './App.css'

import { PrimaryButton, SecondaryButton } from './components/Button'

import {PrimaryCard} from './components/Card'
import SplitScreen from './components/SplitScreen'
import { useState } from 'react'

function App() {

  return (
    <div className="App bg-white my-12 mx-24 rounded-3xl px-6 py-12">
      <SplitScreen>
        <div id="left">
          <div>
            <h3 className="text-5xl font-sans font-bold">Hello, <span className="font-light">Ronty!</span> </h3>
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
