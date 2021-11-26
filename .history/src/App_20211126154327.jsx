import './App.css'

import {Course, Intro} from './Section'
import { PrimaryButton, SecondaryButton } from './components/Button'

import Class from './Section/Class'
import LeftDrawer from './Section/LeftDrawer'
import List from './components/List'
import {PrimaryCard} from './components/Card'
import SplitScreen from './components/SplitScreen'

function App() {
  const classMenu = ["All", "Design", "Science", "Coding"]
  return (
    
    <div className="App ">
      <div className="p-6  bg-purple-800 m-8 rounded-3xl flex">
        <LeftDrawer className="flex-shrink" />
      <div className="bg-white rounded-3xl px-6 py-12 flex-grow">
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
          <div id="Class">
              <p className="text-2xl font-bold font-sans mb-8">Your Class</p>
              <List
                  items={classMenu}
                  itemComponent={<p className="text-xs text-gray-500">{item}</p>}
                  resourceName="item"
              />
              
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
