import {React, useEffect, useState} from 'react'
import Navbar from "../components/Navbar"
import Search from '../components/Search'
import Trending from '../components/Trending'
import Recommended from '../components/Recommended'


const Home = ({movies}) => {
   
  console.log(movies)
  

  return (
    <div className='App'>
      <Navbar />
      <div className='main'>
        <Search />
        <Trending movies={movies}/>
        <Recommended />
      </div>
    </div>
  )
}

export default Home
