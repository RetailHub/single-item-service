import React from 'react';




const MainImageContainer = (props) => {
  return(
    <div className='main-image_container' onMouseLeave={props.exit}>
      <span>
        <img className='main-image' onMouseMove={props.onHover} onMouseLeave={props.onLeave} src={props.image}/>
        <div id='mags' style={{top:props.y,left:props.x}}>

        </div>
      </span>
    </div>
  )
}


export default MainImageContainer;