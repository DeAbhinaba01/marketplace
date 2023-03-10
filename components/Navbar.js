import React from 'react'
import Link from 'next/link'

import { AiOutlineShopping } from 'react-icons/ai'

const navbar = () => {
  return (
    <div className='navbar-container'>
      <p className='logo'>
        <Link href='/'>E Mart</Link>
      </p>
      <button className='cart-icon'>
        <AiOutlineShopping />
        <span className='cart-item-qty'>1</span>
      </button>
    </div>
  )
}

export default navbar