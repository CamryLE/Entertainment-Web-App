import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import asset from './assets/thumbnails/112/regular/large.jpg'
import MovieIcon from '../assets/icon-nav-movies.svg'
import Bookmark from './Bookmark'

const RecommendedCard = ({movie}) => {
   

   
    
  return (
    <div> 
    
      <div className='trending-card'
    style={{ 
        width: '280px', height: '174px',
        color:'#fff',
        backgroundImage: `url(${movie.thumbnail.regular.medium})`,
        backgroundRepeat:'no-repeat',
        borderRadius:'10px',
        padding:'30px',
        display: 'flex',
        flexDirection:'column',
        justifyContent:'space-between',
        alignItems:'baseline',
        boxShadow: 'rgba(0, 0, 0, 0.07) 0px 1px 2px, rgba(0, 0, 0, 0.07) 0px 2px 4px, rgba(0, 0, 0, 0.07) 0px 4px 8px, rgba(0, 0, 0, 0.07) 0px 8px 16px, rgba(0, 0, 0, 0.07) 0px 16px 32px, rgba(0, 0, 0, 0.07) 0px 32px 64px'   
    }}>
      <Bookmark />
    </div>
    <div className='info' style={{ }}>
        <ul className='movie-attr' style={{
            width:'157', height:'44',
            display:'flex',
            gap:'30px',
            opacity: '0.75', fontWeight: '300',
            fontSize: "15px",
            lineHeight: "19px",
            marginTop:'8px'
            
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

export default RecommendedCard
