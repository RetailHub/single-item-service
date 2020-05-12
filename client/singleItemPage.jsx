import React from 'react';
import ReactDOM from 'react-dom';
import AltImageContainer from './components/altImageContainer.jsx';
import MainImageContainer from './components/mainImageContainer.jsx';
import ModalContainer from './components/modalContainer.jsx';
import $ from 'jquery';


var get = function(id,success){
  $.ajax({
    url:`/api/items/${id}`,
    type:'GET',
    success:success,
    error:function(e){console.log(e)}
  });
}
class SingleItemPage extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      image:'',
      mainImages: [],
      selected:{},
      hovering: false,
      x:0,
      y:0,
      sX:0,
      sY:0,
      id:0
    }
    this.onHoverAlt = this.onHoverAlt.bind(this);
    this.onHoverMain = this.onHoverMain.bind(this);
    this.onLeaveMain = this.onLeaveMain.bind(this);


  }
  componentDidMount(){
    var id = window.location.href.slice(22, window.location.href.length);
    get(id, (data) => {
        this.setState({
          image:data.altImages[0],
          mainImages:data.altImages
        });
    })
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
        <AltImageContainer images = {this.state.mainImages} onHoverAlt = {this.onHoverAlt}/>
        <MainImageContainer image={this.state.image} onHover={this.onHoverMain} onLeave={this.onLeaveMain}x={this.state.sX} y={this.state.sY}/>
         <ModalContainer image={this.state.image} x={this.state.x} y={this.state.y}/>
      </div>
    )
  }
}

ReactDOM.render(<SingleItemPage/>,document.getElementById('singleItemPage'));