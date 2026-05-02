import React from 'react'
import LeftContent from './LeftContent'
import RightContent from './RightContent'

const Page1 = (props) => {
  return (
    <div className='pb-20 pt-6 px-10 flex items-center gap-10 justify-between h-screen bg-white'>
      <LeftContent />
      <RightContent users={props.users}/>
    </div>
  )
}

export default Page1