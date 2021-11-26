import {ImBooks} from 'react-icons/all'
import Menu from '../Menu'
import React from 'react'

export default function LeftDrawer() {
  return (
    <div className="mr-8text-white mt-6">
      <ImBooks className="text-5xl" />
      <Menu />
    </div>
  )
}
