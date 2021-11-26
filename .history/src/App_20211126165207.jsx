import './App.css'

import { Course, Intro } from './Section'

import Class from './Section/Class'
import LeftDrawer from './Section/LeftDrawer'
import Portfolio from './Section/Portfoilo'
import {PrimaryCard} from './components/Card'
import {RowList} from './components/List'
import SplitScreen from './components/SplitScreen'

function App() {
  const classMenu = ["All", "Design", "Science", "Coding"]
  const MenuComponent = ({ item }) => <p
    className="text-sm font-medium text-gray-500 cursor-pointer hover:border-purple-800 border-transparent border-b-4 hover:border-current2">
    {item}</p>
  return (
    
    <div className="App ">
      <div className="p-6  bg-purple-800 m-8 rounded-3xl flex">
        <LeftDrawer className="flex-shrink" />
      <div className="bg-white rounded-3xl px-6 py-12 flex-grow">
      <SplitScreen leftWeight = 'w-2/5' rightWeight="w-full">
        <div id="left">
          <Intro/>    
          <div id="course">
            <p className="text-3xl font-bold  font-sans mb-8">Today's Course</p>
            <div className="overflow-y-scroll overflow-x-hidden pr-8 h-96 scrollbar scrollbar-thin scrollbar-thumb-purple-200 scrollbar-track-transparent">
              <PrimaryCard>
                <Course/>
              </PrimaryCard>
              <PrimaryCard>
                <Course/>
              </PrimaryCard>
              <PrimaryCard>
                <Course/>
              </PrimaryCard>
            </div>
            <PrimaryCard color="yellow">
              <Class/>
            </PrimaryCard>
          </div>
          <div id="Class" className="">
                <p className="text-2xl font-bold font-sans">Your Class</p>
                <div className="pr-48">
                  <RowList 
                  items={classMenu}
                  itemComponent={MenuComponent}
                  resourceName="item"
                />
                </div>
              
              <PrimaryCard color="yellow">
                <Class/>
              </PrimaryCard>
          </div>
        </div>
        
        <div id="right" >
          <div>
            <SplitScreen leftWeight='w-2/3 mr-6' rightWeight='w-full'>
              <div id="left">
                <Portfolio/>
              </div>
              <div id="right">
                <Portfolio/>
              </div>
            </SplitScreen>
          </div>
              
          <Portfolio/>
        </div>
        
      
        </SplitScreen>
        </div>
      </div>
      </div>
  )
}

export default App
