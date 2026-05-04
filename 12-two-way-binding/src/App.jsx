import React from 'react'
import { useState } from 'react'
const App = () => {
  const [title, setTitle] = useState('')
  const submitting=(e)=>{
    e.preventDefault()
    
    console.log("file submiited by",title);
    setTitle('')
  }
  return (
    <div>
      <form onSubmit={(e)=>{
        
        submitting(e)
      }}>
        <input type={"text"} placeholder='Name' value={title} onChange={(e)=>{setTitle(e.target.value)}} />
        <button>Submit</button>
      </form>
    </div>
  )
}

export default App
