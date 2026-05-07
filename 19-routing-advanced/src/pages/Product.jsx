import React from 'react'
import {Link} from 'react-router-dom'
import {Outlet} from 'react-router-dom'
const Product = () => {
  return (
    <div className='flex justify-center gap-10 py-4'>
        <Link className='text-lg font-medium' to='/product/men'>Men</Link>
        <Link className='text-lg font-medium' to='/product/women'>Women</Link>
        <Link className='text-lg font-medium' to='/product/kids'>Kids</Link>
        <Outlet/>
    </div>
   
  )
}

export default Product
