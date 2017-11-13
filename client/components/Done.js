import React, {Component} from 'react';
import {render} from 'react-dom';



const Done = React.createClass({

  render: function() {
    return (
      <div className="container">
      <div className="main-title">
        <img src={require('../img/title.png')} />
      </div>
      <div className="done-des">Thank you for taking your time to help us understand you better.</div>
      </div>
    );
  }
});

export default Done;
