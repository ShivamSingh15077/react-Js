import React, { useState } from 'react'

const App = () => {

   const [num, setNUm] = useState({user:'shivam', age:24})

   const btnClicked=()=>{
    setNUm(newNum=>({...newNum,age:50}))
   }
  return (
    <div>
      <h1>{num.user},{num.age}</h1>
      <button onClick={btnClicked}>Click</button>
    </div>
  )
}
export default App
