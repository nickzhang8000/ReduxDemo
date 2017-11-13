import React, {Component} from 'react';
import {render} from 'react-dom';
import { Link } from 'react-router';
import store from '../store';
import Rating from 'react-rating';

const ArrayList = [];

const Comment = React.createClass({
  getInitialState(){
    return{
      ArrayList: []
    }
  },
  render: function() {
    var that = this;
    return (
      <div className="container">
      <div className="main-title">
        <img src={require('../img/title.png')} />
      </div>
      <div className="rating comment">
      <Rating
      initialRate={store.getState().data.rate}
      stop={5}
      readonly={true}
      empty={<img src={require('../img/empty.png')} />}
      full={<img src={require('../img/full.png')} />}
      />
      </div>

      {
        store.getState().data.ImproveStatus.map((value,index) =>{
          value === true
          ?
          store.getState().data.AllImprove.map((value,i) =>{
            index === i
            ?that.state.ArrayList.push(value)
            :null

          })
          :null
        })
      }
      <div className="rating-li comment">
      {
        that.state.ArrayList != []
        ?that.state.ArrayList.map((value,index)=><li key={index} className="li active comment">{value}</li>)
        :null
      }
      </div>
      <div className="main-desContent rate comment">Can you tell us more about your experience?</div>
      <textarea name="body" className="comment-textinput" placeholder="Start typing your comments here..."/>
      <div className="commment-bottom">
      <Link to={`/Done/`}>
      <div className="rate-done">
      <span className="rate-done-text">No</span>
      <img src={require('../img/no.png')}/>
      </div>
      </Link>
      <Link to={`/Done/`}>
      <div className="rate-done">
      <img src={require('../img/done.png')}/>
      <span className="rate-done-text">Done</span>
      </div>
      </Link>
      </div>

      </div>

    );
  }
});

export default Comment;
