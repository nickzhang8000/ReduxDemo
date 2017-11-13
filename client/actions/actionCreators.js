

export function rateChanged(rate) {
  return {
    type: 'RATE_CHANGED',
    rate
  }
}
export function changeComment(comment){
  return{
    type:'CHANGE_COMMENT',
    comment
  }
}
