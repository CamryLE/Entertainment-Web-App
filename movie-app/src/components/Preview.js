import React from 'react'


const Preview = ({previewMovie }) => {

 

  return (
    <div style={{
        // display: `${show}`
        position:'fixed',
        opacity:'.99',
        width:'80%',
        height:'70%',
        backgroundColor:'#161D2F',
        zIndex:'100',
        display: 'flex',
        alignItems:'center',
        justifyContent:'center',
    }}>
      <div className='preview-left'>
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
                >{previewMovie.year}</li>
                <li className='attr' style={{ display: 'flex', gap:'10px', alignItems:'center'}} >
                    {previewMovie.category}
                </li>
                <li className='attr'>{previewMovie.rating}</li>
            </ul>
            <h1 className='title'>{previewMovie.title}</h1>
        </div>
      </div>
      <div className='preview-right'></div>
    </div>
  )
}

export default Preview
