import React from 'react';
import ReactDOM from 'react-dom';
import AltImageContainer from './components/altImageContainer.jsx';
import MainImageContainer from './components/mainImageContainer.jsx';
import ModalContainer from './components/modalContainer.jsx';



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
      selected:{},
      hovering: false,
      x:0,
      y:0,
      sX:0,
      sY:0
    }
    this.onHoverAlt = this.onHoverAlt.bind(this);
    this.onHoverMain = this.onHoverMain.bind(this);
    this.onLeaveMain = this.onLeaveMain.bind(this);


  }
  onHoverMain(e){
    var modal = document.getElementById('modal-image');
    var valueX = -Math.abs(e.clientX)+350;
    var valueY = -Math.abs(e.clientY)+150;

      this.setState({
        x:valueX,
        y:valueY,
        sX: Math.abs(e.clientX),
        sY: Math.abs(e.clientY)
      });
      console.log('hello');
  }

onLeaveMain(e){
  this.setState({
    hovering: false
  });
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
        <MainImageContainer image={this.state.image} onHover={this.onHoverMain} onLeave={this.onLeaveMain}x={this.state.sX} y={this.state.sY}/>
        <ModalContainer image={this.state.image} x={this.state.x} y={this.state.y}/>
      </div>
    )
  }
}

ReactDOM.render(<SingleItemPage/>,document.getElementById('singleItemPage'));