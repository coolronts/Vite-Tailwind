import './App.css'

import {Course, Intro} from './Section'
import { PrimaryButton, SecondaryButton } from './components/Button'

import Class from './Section/Class'
import Menu from './Section/Menu'
import {PrimaryCard} from './components/Card'
import SplitScreen from './components/SplitScreen'

function App() {

  return (
    
    <div className="App ">
      <div className="p-6 pl-24 bg-purple-800 m-24 rounded-3xl">
        <SplitScreen leftWeight="w-1/3"
      <div className="bg-white rounded-3xl px-6 py-12">
      <SplitScreen leftWeight = 'w-2/5'>
        <div id="left">
          <Intro/>    
          <div id="course">
            <p className="text-3xl font-bold  font-sans mb-8">Today's Course</p>
            <PrimaryCard>
              <Course/>
            </PrimaryCard>
            <PrimaryCard color="yellow">
              <Class/>
            </PrimaryCard>
          </div>
        </div>
        
        <div id="right">
          <SecondaryButton name="Ronty"/>
        </div>
        
      
        </SplitScreen>
        </div>
      </div>
      </div>
  )
}

export default App
