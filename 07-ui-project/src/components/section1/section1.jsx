import React from 'react'
import Navbar from './Navbar'
import LeftContent from './LeftContent'
import RightContent from './RightContent'
import Page1 from './page1'

const section1 = (props) => {
  return (
    <div className='h-screen w-full'>
      <Navbar/>
      <Page1 users={props.users}/>
    </div>
  )
}

export default section1
