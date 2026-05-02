import React from 'react'
// function inputchanging(val){
//   console.log(val);
// }
const App = () => {
  const pageScroll=(elem)=>{
    if(elem>0){
    console.log('Sidha Scrolling....',elem);
    }else{
      console.log('ulta scrolling..');
      
    }
  }
  return (
    // <div>
    //   <input onChange={function(elem){
    //     inputchanging(elem.target.value)
    //   }} type="text" placeholder='Enter' className='h-30px w-20px mb-10 '></input>
    // </div>
    // <div>
    //   <div onMouseMove={(elem)=>{
    //     console.log(elem.clientY);
        
    //   }} className='h-[200px] w-[200px] bg-red-500'></div>
    // </div>
    <div onWheel={(elem)=>{
        pageScroll(elem.deltaY);
        
    }}>
      <div className='h-screen w-screen bg-red-500'></div>
      <div className='h-screen w-screen bg-pink-600'></div>
      <div className='h-screen w-screen bg-orange-500'></div>
    </div>
  )
}

export default App
