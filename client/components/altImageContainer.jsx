import React from 'react';
import style from '../css/style.css';




const AltImageContainer = (props) => {
  return(
    <div className={style.altImageContainer}>
      {props.images.map((image,counter) => {
        if(counter === 5){
          return (
            <span className={style.altImageLast}>
              <img className={style.altImage}  value={counter} onMouseEnter={props.onHoverAlt} src ={image} alt="img" />
           </span>
          )
        } else {
          return (
            <span>
              <img className={style.altImage} value={counter} onMouseEnter={props.onHoverAlt} src ={image} alt="img" />
            </span>
          )
        }
      })}
    </div>
  )
}


export default AltImageContainer;