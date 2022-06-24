import React, { useState } from "react"
import { store } from "../Redux/store"
import { incrementCounter } from "../Redux/action"


 const Counter = ()=>{
  
  const [local,setLocal]= useState('0')
  const {counter} = store.getState()
  const {dispatch} = store;
console.log(counter)
  const handleIncrement =()=>{
    dispatch(incrementCounter(10))
    setLocal((prev)=>prev+1)
  }

  
    return (
        <>
        <h1>count = {counter}</h1>
      <button onClick={handleIncrement}>ADD</button>
      <button>Substract</button>
      </>
    )
 }
 export default Counter