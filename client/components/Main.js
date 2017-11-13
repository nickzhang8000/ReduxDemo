import React from 'react';
import { Link } from 'react-router';
import Rating from 'react-rating';

const Ratingdes = function(props){

    switch(props.rate) {
      case 1 :
      return <div>Very Unsatisfactory</div>
      case 2 :
      return <div>Unsatisfactory</div>
      case 3 :
      return <div>Average</div>
      case 4 :
      return <div>Satisfactory</div>
      case 5 :
      return <div>Very Satisfactory</div>
    }

};

const Main = React.createClass({
getInitialState(){
  return{
    rate: 0,
  }
},
rateChanging(rate){
  this.setState({
      rate: rate
    });
},

  render() {
    var that = this;
    return (
      <div className="container">
      <h1>Todos</h1>
      <div className="main-title">
        <img src={require('../img/title.png')} />
      </div>
      <div className="main-desTitle">RATE YOUR EXPERIENCE</div>
      <div className="main-desContent">Please rate your recent experience with us.</div>
      <div className="main-rating">
        { this.state.rate
          ?<div className="main-rating-des">
            <Ratingdes rate={this.state.rate}/>
          </div>
          :null
        }
        <Link to={`/rating/`}>
          <Rating
          onRate={this.rateChanging}
          onClick={function(rate){that.props.rateChanged(rate)}}
          stop={5}
          empty={<img src={require('../img/empty.png')} />}
          full={<img src={require('../img/full.png')} />}

          />
        </Link>

      </div>



      </div>
    )
  }
});

export default Main;
