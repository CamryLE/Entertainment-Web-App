import React from 'react'


const Preview = ({previewMovie }) => {

 

  return (
    <div
     style={{
        // display: `${show}`
        position:'absolute',
        overflowY: 'visible',
        overflowX: 'visible',
        color:'#fff',
        top:'15%',
        left:'20%',
        width:'1200px',
        height:'70%',
        backgroundColor:'#161D2F',
        zIndex:'100',
        display: 'flex',
        flexDirection:'column',
        gap: '20px',
        padding:'40px',
        alignItems:'flex-end',
        justifyContent:'center',
        flexWrap:'nowrap'
    }}>
      <button className='close'
      
      > X </button>
      <div classname='preview-content' style={{
        width:'1200px',
        height:'70%',
        
        zIndex:'100',
        display: 'flex',
        
        gap: '20px',
        padding:'40px',
        alignItems:'center',
        justifyContent:'center',
        flexWrap:'nowrap'
      }}>
      <div className='preview-left'  
      style={{
        width:'500px',
        height:'600px',
        display:'flex',
        gap:'20px',
        justifyContent:'center',
        flexDirection:'column'
      }}>
        <img src={previewMovie.thumbnail.regular.large} style={{ height:'347px',}}></img>
        <div className='info' style={{backgroundColor:'#2d3c61',
                padding:'10px',
                borderRadius:'20px', }}>
            <ul className='movie-attr' style={{
                display:'flex',
                gap:'30px',
                opacity: '0.75', fontWeight: '300',
                fontSize: "15px",
                lineHeight: "19px",
                
                }}>
                <li className='attr1'
                style={{listStyle:'none'}}
                >{previewMovie.year}</li>
                <li className='attr' style={{ display: 'flex', gap:'10px', alignItems:'center'}} >
                    {previewMovie.category}
                </li>
                <li className='attr'>{previewMovie.rating}</li>
            </ul>
            <h1 className='title'>{previewMovie.title}</h1>
        </div>
      </div>
      <div className='preview-right' style={{ overflowY: 'visible',
       width:'500px',
       height:'600px',
       display:'flex',
       alignItems:'center',
       justifyContent:'center',
      }}>
        <div className='desc' style={{
          backgroundColor:'#2d3c61',
          width: '80%',
          minHeight:'347px',
          padding:'10px',
          borderRadius:'20px',
        }}>
          <p style={{
            padding:'30px'
          }}>deez deez deez deez deez deez deezv deez deez deedeez deez deez deez deez deez deezv deez deez deezdeez deez deez deez deez deez deezv deez deez deezdeez deez deez deez deez deez deezv deez deez deezdeez deez deez deez deez deez deezv deez deez deezdeez deez deez deez deez deez deezv deez deez deezdeez deez deez deez deez deez deezv deez deez deezdeez deez deez deez deez deez deezv deez deez deezdeez deez deez deez deez deez deezv deez deez deezdeez deez deez deez deez deez deezv deez deez deezdeez deez deez deez deez deez deezv deez deez deezz</p>
        </div>
      </div>
      </div>
      
    </div>
  )
}

export default Preview
