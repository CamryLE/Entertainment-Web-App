import React from 'react'
import Card from './Card'

const Trending = ({movies}) => {
  return (
    <section className='trending'
    
    style={{
      display:'flex', 
      height:'230px',
      width:'100%',
      flexDirection:'column'
    }
    }
    >
        <h1>Trending</h1>
        <section className='Movies'
        style={{
          display:'flex', 
          height:'230px',
          width:'100%',
          gap: '40px',
    
        }}
        >
          {movies.map((movie) => (
            <Card key={movie.title} movie={movie}/>
          ))}
        </section>
      </section>
  )
}

export default Trending
