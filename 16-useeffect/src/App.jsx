import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
const App = () => {
  const [a, setA] = useState(0)
  const [b,setB]=useState(0)

  function aChanging(){
    console.log('a is changing');
  }
  function bChanging(){
    console.log('b is changing');
  }
  useEffect(function(){
    aChanging()
  },[a])
  useEffect(function(){
    bChanging()
  },[b])
  return (
    <div>
      <button onClick={()=>{
        setA(a+1)
      }}>Change A</button>
      <button onClick={()=>{
        setB(b-1)
      }}>Change B</button>
    </div>
  )
}

export default App
