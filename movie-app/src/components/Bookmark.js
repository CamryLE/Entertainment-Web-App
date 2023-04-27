import {React, useState} from 'react'
import BookmarkTrue from '../assets/icon-bookmark-full.svg'
import BookmarkFalse from '../assets/icon-bookmark-empty.svg'


const Bookmark = () => {
  const [bookmarked, setBookmarked] = useState(false)
    
const bookmark = () => {
    setBookmarked(!bookmarked)
}
  return (
   
    <button className='bookmark' style={{
        
        display:'flex',
        justifyContent:'center',
        alignItems:'center',
        width: '40px',
        height: '40px',
        
        borderRadius:'50%',
        border:'none',
        backgroundColor: 'rgba(0,0,0,.5)',
        
        }}>
            <img style={{width:'22px', height:'22px', padding:'10px', opacity:'1'}}  src= {bookmarked ? BookmarkTrue : BookmarkFalse} onClick={bookmark}
            ></img>
        </button>
  )
}

export default Bookmark
