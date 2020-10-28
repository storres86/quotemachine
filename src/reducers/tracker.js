
const tracker = (state = 0, action) => {
    switch(action.type){
    case "NEWQUOTE":
        return state + 1;
        default:
        return state
        
    }
  }

  export default tracker;