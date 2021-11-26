import './App.css'

import { PrimaryButton, SecondaryButton } from './components/Button'

import {PrimaryCard} from './components/Card'
import { useState } from 'react'

function App() {

  return (
    <div className="App bg-white my-4 mx-16">
      <PrimaryButton name="Hello" />
      <SecondaryButton name="Hello" />
      <PrimaryCard title="Hello" />
    </div>
  )
}

export default App
