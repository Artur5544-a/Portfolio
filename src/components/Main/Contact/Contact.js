import React, { useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import { ReactComponent as Personal } from "../../../img/Personal.svg";
import { BsGithub, BsLinkedin, BsFacebook, BsTelegram } from 'react-icons/bs';
import { FaTelegramPlane } from 'react-icons/fa';
import { SiGmail } from 'react-icons/si';
import emailjs from '@emailjs/browser';
import './Contact.css'
import { Modal } from './Modal/Modal';
export const Contact = () => {
  // const [modal, setModal] = useState('')
  const [active, setActive] = useState(false)
  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();
    emailjs
      .sendForm('arturcv',
        'arturcv_gmail',
        form.current,
        'XfdB9j2_GWBPEm7VW')
      .then((result) => {
        setActive(result.text)
        console.log(active, "active");
      }, (error) => {
        console.log(error.text);
      });
  };
  return (
    <div className='contact'>
      <Modal active={active} setActive={setActive} />
      <h1>Contact Us</h1>
      <h2>Have a question or want to work together?</h2>
      <form className='form' ref={form} onSubmit={sendEmail}>
        <div className='form_block'>
          <div className='form_item'>
            <div className='form_name'>
              <label >NAME</label>
              <input type={"text"} name='from_name' />
            </div>
            <div className='form_email'>
              <label>EMAIL</label>
              <input type={"email"} name="to_name" />
            </div>
          </div>
          <div className='form_message'>
            <label>MESSAGE</label>
            <textarea typeof={"text"} name="message" />
          </div>
        </div>
        <div className='form_btn'>
          <button type='submit' value={"send"} >Hit me up<FaTelegramPlane /></button>
        </div>
        <div className='form_mail'>
          <a href='mailto:arturbeyazyan99@gmail.com'>  <SiGmail />arturbeyazyan99@gmail.com</a>
        </div>
        <div className='personal_item'>
          <div className='Personal'>
            <h3>Contact me Hihello </h3>
            <Personal />
          </div>
        </div>
      </form>
      <nav className="menu">
        <input type="checkbox" href="#" className="menu-open" name="menu-open" id="menu-open" />
        <label className="menu-open-button" for="menu-open">
          <span className="lines line-1"></span>
          <span className="lines line-2"></span>
          <span className="lines line-3"></span>
        </label>
        <a href='https://github.com/Artur5544-a' target={"_blank"} className="menu-item blue"><BsGithub /> </a>
        <a href='https://www.linkedin.com/in/artur-art-317261217/' target={"_blank"} className="menu-item green"><BsLinkedin /> </a>
        <a href='https://www.facebook.com/artur.beazyan/' target={"_blank"} className="menu-item red"><BsFacebook /> </a>
        <a href='https://t.me/Artur5544' target={"_blank"} className="menu-item lightblue"><BsTelegram /> </a>
      </nav>
    </div>
  )
}
