import React from 'react'
import Card from './Card'
import Slider from "react-slick";


const Trending = ({movies}) => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3
  };
  return (
    
    <section className='trending'
    
    style={{
      display:'flex',
      flexDirection:'column',
      height:'430px',
      width:'2300px',
      overflow:'hidden'
    }
    }
    >
      
        <h1>Trending:</h1>
        <Slider {...settings} className='Movies' style={{width:'1800px', marginLeft:'30px'}}
        >
          {/* <div style={{width:'200px', height:'150px', padding:'20px', backgroundColor:'#fff',}}> Deez </div>
          <div style={{width:'200px', height:'150px', padding:'20px', backgroundColor:'#fff',}}> Deez </div>
          <div style={{width:'200px', height:'150px', padding:'20px', backgroundColor:'#fff',}}> Deez </div>
          <div style={{width:'200px', height:'150px', padding:'20px', backgroundColor:'#fff',}}> Deez </div>
          <div style={{width:'200px', height:'150px', padding:'20px', backgroundColor:'#fff', color:'#fff'}}> Deez </div>
 */}

           {movies.map((movie) => (
            <Card  key={movie.title} movie={movie}/>
          ))} 
        </Slider>
      </section>
  )
}

export default Trending
