import newItem from "./newItem";
import tracker from "./tracker"
import {combineReducers} from "redux"

const allReducers = combineReducers({
counter: newItem,
tracker
})


export default allReducers