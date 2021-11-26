import {LogOut, Logo} from '../../components/Icons'

import Menu from '../Menu'
import React from 'react'

export default function LeftDrawer() {
  return (
    <div className="mr-8 text-white mt-6 flex flex-col justify-around items-center mb-6">
      <Logo className="text-5xl" />
      <Menu />
      <LogOut className="text-2xl mt-24" />
    </div>
  )
}
