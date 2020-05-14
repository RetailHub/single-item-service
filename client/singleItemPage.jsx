import React from 'react';
import ReactDOM from 'react-dom';
import AltImageContainer from './components/altImageContainer.jsx';
import MainImageContainer from './components/mainImageContainer.jsx';
import ModalContainer from './components/modalContainer.jsx';
import $ from 'jquery';
import style from './css/style.css';


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
    this.exit = this.exit.bind(this);

  }
  componentDidMount(){
    const params = new URLSearchParams(document.location.search.substring(1));
    const id = params.get('id') || 1;

    get(id, (data) => {
        this.setState({
          image:data.altImages[0],
          mainImages:data.altImages
        });
    })
  }
  onHoverMain(e){
    var modal = document.getElementById('modal-image');
    var modalContainer = document.getElementById('modal-container');
    modalContainer.classList.remove(style.none);
    var mags = document.getElementById(style.mags);
    mags.classList.remove(style.none);
    var valueX = -Math.abs(e.clientX)+350;
    var valueY = -Math.abs(e.clientY)+150;
    e.persist(e.clientX);
    e.persist(e.clientY);

      requestAnimationFrame(() => {
        this.setState({
          x:valueX,
          y:valueY,
          sX: Math.abs(e.clientX),
          sY: Math.abs(e.clientY)
        });
      });

  }

onLeaveMain(e){
  this.setState({
    hovering: false
  });
}
exit(){
  var modalContainer = document.getElementById('modal-container');
  modalContainer.classList.add(style.none);
}
  onHoverAlt(e){
    var index = e.target.getAttribute('value');
    if(this.state.selected.classList){
      this.state.selected.classList.remove(style.selected);
    }
    e.target.classList.add(style.selected);
    this.setState({
      image: this.state.mainImages[index],
      selected:e.target
    });
  }
  render(){
    return(
      <div className={style.singleItemContainer}>
        <AltImageContainer images = {this.state.mainImages} onHoverAlt = {this.onHoverAlt}/>
        <MainImageContainer image={this.state.image} exit={this.exit}onHover={this.onHoverMain} onLeave={this.onLeaveMain}x={this.state.sX} y={this.state.sY}/>
         <ModalContainer image={this.state.image} x={this.state.x} y={this.state.y}/>
      </div>
    )
  }
}

ReactDOM.render(<SingleItemPage/>,document.getElementById('singleItemPage'));