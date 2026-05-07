import React from 'react'
import {useParams} from 'react-router-dom'
const UserDetails = () => {

    const params=useParams()
    console.log(params);
    
  return (
    <div>
      <h1>{params.id} User Details</h1>
    </div>
  )
}

export default UserDetails
