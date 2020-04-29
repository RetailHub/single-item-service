import React from 'react';
import ReactDOM from 'react-dom';


class SingleItemPage extends React.Component{
  constructor(props){
    super(props);

  }

  render(){
    return(
      <div>
        Single Page App
      </div>
    )
  }
}

ReactDOM.render(<SingleItemPage/>,document.getElementById('singleItemPage'));