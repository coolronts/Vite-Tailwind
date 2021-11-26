import {ImBooks} from 'react-icons/all'
import Menu from '../Menu'
import React from 'react'

export default function LeftDrawer() {
  return (
    <div className="mr-8  text-white mt-6">
      <ImBooks className="text-5xl mb-0" />
      <Menu />
    </div>
  )
}
