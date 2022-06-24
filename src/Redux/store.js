import reducer from "./reducer";
import {createStore} from "redux"
// import { incrementCounter,decrementCounter } from "./action";
// import { INCREMENT_COUNTER } from "./actionTypes";
// const createStore =(reducer , initialState) =>{

//     const store = {}

//     store.state = initialState

//     store.getState = () => store.state

//     store.dispatch = (action) => {
//   store.state = reducer(store.state, action)
//     }
//     return store
    
// }
const store = createStore(reducer, {counter :0})
console.log(store)

export {store}

