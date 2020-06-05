import React from 'react';
import style from '../css/style.css';


const ModelContainer = (props) => {
  return(
    <div className={`${style.modal} ${style.none}`} id='modal-container'>
     <img id='modal-image'src={props.image} style={{top:props.y,left:props.x}} alt="model"/>
    </div>
  )
}


export default ModelContainer;