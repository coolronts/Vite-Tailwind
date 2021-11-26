import './App.css'

import {PrimaryButton, SecondaryButton} from './components/Button'

import { useState } from 'react'

function App() {

  return (
    <div className="App">
      <PrimaryButton name="Hello" />
        <SecondaryButton name="Hello" />
    </div>
  )
}

export default App
