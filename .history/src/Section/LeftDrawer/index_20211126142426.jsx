import {ImBooks} from 'react-icons/all'
import Menu from '../Menu'
import React from 'react'

export default function LeftDrawer() {
  return (
    <div className="mr-8  text-white">
      <ImBooks className="text-4xl mb-12" />
      <Menu />
    </div>
  )
}
