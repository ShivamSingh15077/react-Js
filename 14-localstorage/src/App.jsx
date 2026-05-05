import React from 'react'

const App = () => {
  const user={
    username:'shivam kumar',
    age:24,
    gender:'male'
  }
  localStorage.clear()
  // localStorage.setItem('user',JSON.stringify(user));
  // const getDetails=JSON.parse(localStorage.getItem('user'))
  // console.log(getDetails);
  
  

  return (
    <div>
      APP
    </div>
  )
}

export default App

