import React from 'react';
import ReactDOM from 'react-dom';
import AltImageContainer from './components/altImageContainer.jsx';
import MainImageContainer from './components/mainImageContainer.jsx';



class SingleItemPage extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      image:'https://images-na.ssl-images-amazon.com/images/I/71fRayAebNL._AC_UY675_.jpg',
      mainImages: ['https://images-na.ssl-images-amazon.com/images/I/71fRayAebNL._AC_UY675_.jpg',
             'https://images-na.ssl-images-amazon.com/images/I/81m6GvqPiVL._AC_UY695_.jpg',
             'https://images-na.ssl-images-amazon.com/images/I/716Htx4xkDL._AC_UY695_.jpg',
             'https://images-na.ssl-images-amazon.com/images/I/819qaiUyqjL._AC_UX675_.jpg',
             'https://images-na.ssl-images-amazon.com/images/I/81Mv8DR-9iL._AC_UX675_.jpg'
            ],
      alt:[
        'https://images-na.ssl-images-amazon.com/images/I/41Z-gNS4B2L._AC_US40_.jpg',
        'https://images-na.ssl-images-amazon.com/images/I/41akNdA9C7L._AC_US40_.jpg',
        'https://images-na.ssl-images-amazon.com/images/I/418qx9runSL._AC_US40_.jpg',
        'https://images-na.ssl-images-amazon.com/images/I/41LRFWMEXqL._AC_US40_.jpg',
        'https://images-na.ssl-images-amazon.com/images/I/41qpQi0l-UL._AC_US40_.jpg',
      ],
      selected:{}
    }
    this.onHoverAlt = this.onHoverAlt.bind(this);
  }

  onHoverAlt(e){
    var index = e.target.getAttribute('value');
    if(this.state.selected.classList){
      this.state.selected.classList.remove('selected');
    }
    e.target.classList.add('selected');
    this.setState({
      image: this.state.mainImages[index],
      selected:e.target
    });
  }
  render(){
    return(
      <div className='single-item_container'>
        <AltImageContainer images = {this.state.alt} onHoverAlt = {this.onHoverAlt}/>
        <MainImageContainer image={this.state.image}/>
      </div>
    )
  }
}

ReactDOM.render(<SingleItemPage/>,document.getElementById('singleItemPage'));