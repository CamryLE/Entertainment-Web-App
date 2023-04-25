import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import asset from './assets/thumbnails/112/regular/large.jpg'
import MovieIcon from '../assets/icon-nav-movies.svg'
import BookmarkTrue from '../assets/icon-bookmark-full.svg'
import BookmarkFalse from '../assets/icon-bookmark-empty.svg'

const Card = ({movie}) => {
    const [bookmarked, setBookmarked] = useState(false)
    
    const Bookmark = () => {
        setBookmarked(!bookmarked)
    }

    console.log(bookmarked)

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
        flexDirection:'column',
        justifyContent:'space-between',
        alignItems:'baseline',
        boxShadow: 'rgba(0, 0, 0, 0.07) 0px 1px 2px, rgba(0, 0, 0, 0.07) 0px 2px 4px, rgba(0, 0, 0, 0.07) 0px 4px 8px, rgba(0, 0, 0, 0.07) 0px 8px 16px, rgba(0, 0, 0, 0.07) 0px 16px 32px, rgba(0, 0, 0, 0.07) 0px 32px 64px'
        
    }}>
        
      <button style={{
       
        display:'flex',
        justifyContent:'center',
        alignItems:'center',
        width: '32px',
        height: '32px',
        padding:'20px',
        borderRadius:'50%',
        border:'none',
        backgroundColor: 'rgba(0,0,0,.5)',
    
        }}>
            <img style={{width:'22px', height:'22px', padding:'10px', opacity:'1'}}  src= {bookmarked ? BookmarkTrue : BookmarkFalse} onClick={Bookmark}
            ></img>
        </button>


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
