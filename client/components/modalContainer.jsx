import React from 'react';


const ModelContainer = (props) => {
  return(
    <div className='modal none' id='modal-container'>
     <img id='modal-image'src={props.image} style={{top:props.y,left:props.x}}/>
    </div>
  )
}


export default ModelContainer;