import React from 'react'
import {Link} from 'react-router-dom'
const Navbar = () => {
  return (
    <nav className='navbar'>
    <div> <h1> The Dojo Blog </h1> </div>
    <div className='links'>
      <Link to ="/">home</Link>
      <Link to ="/create"> New Blog</Link>
    </div>
    </nav>
  )
}

export default Navbar