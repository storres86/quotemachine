
const newItem = (state = Math.floor(Math.random()*1643)+1, action) => {
    switch(action.type){
    case "NEWQUOTE":
        return Math.floor(Math.random()*1643)+1;
        default:
        console.log("poop")
        return state
        
    }
  }

  export default newItem;