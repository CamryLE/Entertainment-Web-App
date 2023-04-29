import React from 'react'
import Card from './Card'
import Slider from "react-slick";
import RecommendedCard from './RecommendedCard';

const Recommended = ({movies}) => {
  
  return (
    
    <section className='recommended'
    
    style={{
      display:'flex',
      flexDirection:'column',
      height:'auto',
      width:'95%',
      color:'#fff',
      margin:'none',
      padding:'10px'
    }
    }
    >
      <h1>Recommended:</h1>
      <section className='recommended-cards' style={{
        width:'100%', height:'100%', display:'flex', flexWrap:'wrap', gap:'20px' 
      }}
        >

           {movies.map((movie) => (
            <RecommendedCard  key={movie.title} movie={movie}/>
          ))} 
      </section>

    </section>
  )
}



export default Recommended
