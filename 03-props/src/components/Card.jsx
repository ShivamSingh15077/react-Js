import React from 'react'

const Card = (props) => {
  return (
    <div className='card'>
      <img 
        src={props.img} 
        alt="profile" 
      />
      <h1>{props.user}</h1>
      <p>{props.animal}</p>
      <button>View profile</button>
    </div>
  )
}

export default Card