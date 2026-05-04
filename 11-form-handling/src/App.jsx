import React from 'react'

const App = () => {

  const submitting=(e)=>{
    e.preventDefault()
    console.log("file submitted")
  }

  return (
    <div>
      <form onSubmit={(e)=>{
        submitting(e)
      }}>
      <input type="text" placeholder='Name' />
      <button>submit</button>
      </form>
    </div>
  )
}

export default App
