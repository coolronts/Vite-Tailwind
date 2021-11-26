import './App.css'

import {Course, Intro} from './Section'
import { PrimaryButton, SecondaryButton } from './components/Button'

import Chart from './components/Chart'
import {PrimaryCard} from './components/Card'
import SplitScreen from './components/SplitScreen'

function App() {

  return (
    <div className="App bg-white my-12 mx-24 rounded-3xl px-6 py-12">
      <SplitScreen leftWeight = 'w-1/3'>
        <div id="left">
          <Intro/>    
          <div id="course">
            <p className="text-3xl font-bold  font-sans mb-8">Today's Course</p>
            <PrimaryCard>
              <Course/>
            </PrimaryCard>
            <PrimaryCard color="yellow">
              <Course/>
            </PrimaryCard>
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
