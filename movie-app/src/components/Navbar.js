import React from 'react'
import { Link } from 'react-router-dom'
import Profile from '../assets/image-avatar.png'


const Navbar = () => {
  return (
    <div className='navbar'>
      <div className='refresh'> </div>
      <div className='categories'>
        <ul className='category-list'>
          <li className='category-icon'>
          <Link to={`movies`}>
            <img src='icons/' className='icon'>
            </img>
          </Link>
          </li>
        
        </ul>
      </div>
      
      <div className='profile'>
        <Link to={`profile`}>
          <img src={Profile}/>
        </Link>
      </div>
      
    </div>
  )
}

export default Navbar
