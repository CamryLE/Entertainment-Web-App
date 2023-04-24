import React from 'react'
import { Link } from 'react-router-dom'
import Profile from '../assets/image-avatar.png'
import MovieIcon from '../assets/icon-nav-movies.svg'
import TVIcon from '../assets/icon-nav-tv-series.svg'
import Gallery from '../assets/icon-nav-home.svg'
import BookMark from '../assets/icon-nav-bookmark.svg'
import Logo from '../assets/logo.svg'

const Navbar = () => {
  return (
    <div className='navbar'>
      <div className='refresh'>
        <Link to={`/`}>
        <img src={Logo} className='logo'>
              </img>
        </Link>
      </div>
      <div className='categories'>
        <ul style={{ listStyleType: "none" }} className='category-list'>
          <li className='category-icon'>
            <Link to={`/`}>
              <img src={Gallery} className='icon'>
              </img>
            </Link>
          </li>
          <li className='category-icon'>
            <Link to={`TV`}>
              <img src={MovieIcon} className='icon'>
              </img>
            </Link>
          </li>
          <li className='category-icon'>
            <Link to={`movies`}>
              <img src={TVIcon} className='icon'>
              </img>
            </Link>
          </li>
          <li className='category-icon'>
            <Link to={`bookmark`}>
              <img src={BookMark} className='icon'>
              </img>
            </Link>
          </li>
        
        </ul>
      </div>
      
      <div className='profile'>
        <Link to={`profile`}>
          <img id='pfp' src={Profile}/>
        </Link>
      </div>
      
    </div>
  )
}

export default Navbar
