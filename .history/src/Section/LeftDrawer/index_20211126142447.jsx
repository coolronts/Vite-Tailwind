import {ImBooks} from 'react-icons/all'
import Menu from '../Menu'
import React from 'react'

export default function LeftDrawer() {
  return (
    <div className="mr-8  text-white mt-4">
      <ImBooks className="text-5xl mb-12" />
      <Menu />
    </div>
  )
}
