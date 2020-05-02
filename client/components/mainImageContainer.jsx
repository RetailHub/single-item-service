import React from 'react';




const MainImageContainer = (props) => {
  return(
    <div className='main-image_container'>
      <span>
        <img className='main-image'src={props.image}/>
      </span>
    </div>
  )
}


export default MainImageContainer;