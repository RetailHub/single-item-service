import React from 'react';
import ReactDOM from 'react-dom';
import AltImageContainer from './components/altImageContainer.jsx';
import MainImageContainer from './components/mainImageContainer.jsx';



class SingleItemPage extends React.Component{
  constructor(props){
    super(props);

  }

  render(){
    return(
      <div className='single-item_container'>
        <AltImageContainer/>
        <MainImageContainer/>
      </div>
    )
  }
}

ReactDOM.render(<SingleItemPage/>,document.getElementById('singleItemPage'));