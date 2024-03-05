import { useState } from 'react'
import Youtube from './Youtube'
import './App.css'

function App() {


  const[count,setcount]=useState(10)
    
  const addvalue=()=> {
    setcount(count+1)
  }
  const removeval=()=>{
    setcount(count-1)
  }
  return (
    <>
      <h1>This is second react site {count}</h1>
      <button onClick={addvalue}>add value{" "}</button>
      <button onClick={removeval}>remove value</button>
      <p>footer: {count}</p>
      <Youtube/>
          </>
  )
}

export default App
