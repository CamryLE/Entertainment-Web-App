import React from 'react'
import { Link } from 'react-router-dom'
import asset from './assets/thumbnails/112/regular/large.jpg'
import MovieIcon from '../assets/icon-nav-movies.svg'

const Card = ({movie}) => {
    console.log(movie.thumbnail.regular.large)
  return (
    
    <div className='trending-card'
    style={{
        width: '470px', height: '230px',
        color:'#fff',
        backgroundImage: `url(${movie.thumbnail.regular.large})`,
        backgroundRepeat:'no-repeat',
        borderRadius:'30px',
        padding:'30px',
        marginTop:'30px',
        display: 'flex',
        alignItems:'flex-end'
    }}>
       {/* <img className='trending-thumbnail' src={`${movie.thumbnail.regular.large}`}
       style={{
        width: '470px', height: '230px',
        objectFit:'cover',
        borderRadius:'30px',
       }}
       ></img> */}
      <div className='info' style={{ }}>
        <ul className='movie-attr' style={{
            display:'flex',
            gap:'30px',
            opacity: '0.75', fontWeight: '300',
            fontSize: "15px",
            lineHeight: "19px",
            
            }}>
            <li className='attr1'
            style={{listStyle:'none'}}
            >{movie.year}</li>
            <li className='attr' style={{ display: 'flex', gap:'10px', alignItems:'center'}} >
                <img src={MovieIcon} style={{opacity:'1',}} ></img>
                {movie.category}
            </li>
            <li className='attr'>{movie.rating}</li>
        </ul>
        <h1 className='title'>{movie.title}</h1>
      </div>

    </div>
    
  )
}

export default Card
