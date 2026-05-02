import React from 'react'
import Section1 from './components/section1/section1'
import Section2 from './components/section2/section2'
const App = () => {
  const users=[
    {
      img:'https://images.unsplash.com/photo-1613980790147-f4f449df0dd9?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      intro:'',
      color:'royalblue',
      tag:'Satisfied'
    },
    {
      img:'https://images.unsplash.com/photo-1588410338542-63c826c2024a?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      intro:'',
      color:'lightseagreen',
      tag:'Underserved'
    },
    {
      img:'https://plus.unsplash.com/premium_photo-1661630621969-6d9faac03f9f?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      intro:'',
      color:'skyblue',
      tag:'Underbanked'
    },
    {
      img:'https://plus.unsplash.com/premium_photo-1678453147351-71c3af9e81e3?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      intro:'',
      color:'pink',
      tag:'Underwear'
    },
    {
      img:'https://images.unsplash.com/photo-1762341104634-998bbee0ccba?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      intro:'',
      color:'black',
      tag:'Success'
    }
    
  ]
  return (
  <div>
    <Section1 users={users}/>
    <Section2/>
  </div>
  )
}

export default App
