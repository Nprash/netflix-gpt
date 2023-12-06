import React from 'react'
import logo from "../assets/netflix-logo.png"

const Header = () => {
  return (
    <div className='absolute -left-6 -top-8 z-30'>
        <img src={logo} className='w-64 bg-cover' alt="netflix-logo"/>
    </div>
  )
}

export default Header
