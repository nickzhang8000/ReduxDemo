import React from 'react';
import { Table, tr , td } from 'reactstrap';
import { Link } from 'react-router';
import Rating from 'react-rating';
import store from '../store';

const Rate = React.createClass({
getInitialState(){
  return{
    ArrayList: store.getState().data.ImproveStatus
  }
},
elementClick(e){
  var comment = e.target.textContent;
  store.dispatch({
  type: 'CHANGE_COMMENT',
  comment
});
this.setState({
  ArrayList:store.getState().data.ImproveStatus
})
},
  render() {
    var that = this
    var ImproveStatus = store.getState().data.ImproveStatus;
    return (
      <div className="container">
      <div className="main-title">
      <img src={require('../img/title.png')} />
      </div>
      <div className="rating">
      <Rating
      initialRate={store.getState().data.rate}
      stop={5}
      readonly={true}
      empty={<img src={require('../img/empty.png')} />}
      full={<img src={require('../img/full.png')} />}
      />
      </div>
      <div className="main-desContent rate">What could have been improved?</div>
      <div className="rate-subtitle">Select one or more</div>
      <div className="rating-li">
      {
      store.getState().data.AllImprove.map((element,i) =>
      <li key={i} onClick={that.elementClick} className={this.state.ArrayList[i]?"li active":"li inactive"}>{element}</li>
    )
      }
      </div>
      <Link to={`/comment`}>
      <div className="rate-done">
      <img src={require('../img/done.png')}/>
      <span className="rate-done-text">Done</span>
      </div>
      </Link>

      </div>
    )
  }
});

export default Rate;
