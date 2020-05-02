import React from 'react';




const AltImageContainer = (props) => {
  return(
    <div className='alt-image_container'>
      {props.images.map((image,counter) => {
        if(counter === 5){
          return (
            <span className='alt-image_last'>
              <img className="alt-image"  value={counter} onMouseEnter={props.onHoverAlt} src ={image}/>
           </span>
          )
        } else {
          return (
            <span className='alt-image_first'>
              <img className="alt-image" value={counter} onMouseEnter={props.onHoverAlt} src ={image}/>
            </span>
          )
        }
      })}
    </div>
  )
}


export default AltImageContainer;