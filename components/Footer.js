import React from 'react'
import { AiFillInstagram, AiOutlineTwitter, AiFillLinkedin, AiFillFacebook } from 'react-icons/ai'

const Footer = () => {
  return (
    <div className='footer-container'>
      <p>2023 E Mart Headphones and Wearables all right reserved</p>
      <p className='icons'>
        <AiFillInstagram style={{cursor: 'pointer'}}/>
        <AiOutlineTwitter style={{cursor: 'pointer'}}/>
        <AiFillLinkedin style={{cursor: 'pointer'}}/>
        <AiFillFacebook style={{cursor: 'pointer'}}/>
      </p>
    </div>
  )
}

export default Footer