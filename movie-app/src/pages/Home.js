import {React, useEffect, useState} from 'react'
import Navbar from "../components/Navbar"
import Search from '../components/Search'
import Trending from '../components/Trending'
import Recommended from '../components/Recommended'
import Preview from '../components/Preview'


const Home = ({movies}) => {

  const [previewMovie, setPreviewMovie] = useState({
    "title": "Beyond Earth",
    "thumbnail": {
      "trending": {
        "small": "./assets/thumbnails/beyond-earth/trending/small.jpg",
        "large": "./assets/thumbnails/beyond-earth/trending/large.jpg"
      },
      "regular": {
        "small": "./assets/thumbnails/beyond-earth/regular/small.jpg",
        "medium": "./assets/thumbnails/beyond-earth/regular/medium.jpg",
        "large": "./assets/thumbnails/beyond-earth/regular/large.jpg"
      }
    },
    "year": 2019,
    "category": "Movie",
    "rating": "PG",
    "isBookmarked": false,
    "isTrending": true
  },)
  let selectedMovie = 1
  
  const changePreview = (movie) => {
    console.log('deez')
    
  }
  
  const setPreview = (movie) => {
    console.log(selectedMovie)
    // setPreviewMovie()
    
  }
  

  return (
    
    <div className='App'>
      
      <Navbar />
      <div className='main'>
        <Preview previewMovie={previewMovie} 
        // selectedMovie={selectedMovie} 
        />
        <Search />
        <Trending movies={movies} previewMovie={previewMovie} changePreview={changePreview} setPreviewMovie={setPreviewMovie} selectedMovie={selectedMovie}
        />
        <Recommended movies={movies}/>
        
      </div>
    </div>
  )
}

export default Home
