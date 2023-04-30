import React from 'react'
import Card from './Card'
import Slider from "react-slick";


const Trending = ({movies, setPreview, previewMovie, selectedMovie, setPreviewMovie, changePreview, openPreview}) => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: false,
    autoplay: true,
    autoplaySpeed: 2000,
  };

  

  return (
    
    <section className='trending'
    
    style={{
      display:'flex',
      flexDirection:'column',
      height:'430px',
      width:'2600px',
      overflow:'hidden'
    }
    }
    >
      
        <h1>Trending:</h1>
        <Slider {...settings} movies={movies} className='Movies' style={{width:'75%', }}
        >

           {movies.map((movie) => (
            <Card openPreview={openPreview} previewMovie={previewMovie} setPreview={setPreview} key={movie.title} movie={movie} selectedMovie={selectedMovie} setPreviewMovie={setPreviewMovie} changePreview={changePreview} />
          ))} 
        </Slider>
      </section>
  )
}

export default Trending
