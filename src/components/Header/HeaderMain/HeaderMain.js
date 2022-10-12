import React from 'react'
import { HeaderType } from './Typewriter/HeaderTypewriter'
import './HeaderMain.css'
import user from '../../../img/users.png'
import cv from '../../../img/CV/Artur_Beyazyan.pdf'
export const HeaderMain = () => {
  return (
    <div className='HeaderMain'>
      <div className='headermain'>
        <div className='headermain-txt'>
          <h1>Hi, <br />I'm <span className='txt-color'>Artur</span>,<br />Web  Developer</h1>
          <HeaderType />
          <a href={cv} download ><button className='contact-btn'>Download CV</button></a>
        </div>
        <div className='headermain-img'>
          <img src={user} />
        </div>

      </div>

    </div>
  )
}
