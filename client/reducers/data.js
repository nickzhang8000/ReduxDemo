import store from '../store';

function data(state = [], action) {
  switch(action.type) {
      case 'RATE_CHANGED' :
      console.log("RATE_CHANGED!!");
      return {...state,
        rate: action.rate
      }

      case 'CHANGE_COMMENT' :
      console.log("CHANGE_COMMENT!!");
      var number = store.getState().data.AllImprove.indexOf(action.comment);
      let newState = {...state};
      newState.ImproveStatus[number]=!newState.ImproveStatus[number]
      return newState;

    default:
      return state;
  }
}

export default data;
