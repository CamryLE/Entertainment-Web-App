import React from 'react'
import { Link } from 'react-router-dom'
import asset from './assets/thumbnails/112/regular/large.jpg'

const Card = ({movie}) => {
    console.log(movie.thumbnail.regular.large)
  return (
    
    <div className='trending-card'
    style={{
        width: '470px', height: '230px',
        color:'#fff',
        backgroundImage: `url(${movie.thumbnail.regular.large})`
    }}>
       <img src={`${movie.thumbnail.regular.large}`}></img>
      <div className='info'>
        <div className='movie-attr' style={{display:'flex'}}>
            <div className='attr'>{movie.year}</div>
            <div className='attr'>{movie.category}</div>
            <div className='attr'>{movie.rating}</div>
        </div>
        <h1 className='title'>{movie.title}</h1>
      </div>

    </div>
    
  )
}

export default Card
