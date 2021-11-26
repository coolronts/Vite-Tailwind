import './App.css'

import { PrimaryButton, SecondaryButton } from './components/Button'

import Intro from './Section'
import {PrimaryCard} from './components/Card'
import SplitScreen from './components/SplitScreen'
import { useState } from 'react'

function App() {

  return (
    <div className="App bg-white my-12 mx-24 rounded-3xl px-6 py-12">
      <SplitScreen>
        <div id="left">
          <Intro/>    

          <div>
            <p className="text-3xl font-bold  font-sans">Today's Course</p>
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
