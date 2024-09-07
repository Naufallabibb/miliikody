import React from 'react'
import './contacts.css'
import { MdOutlineEmail } from 'react-icons/md'
import { FaWhatsapp } from 'react-icons/fa'  // Import the WhatsApp icon

const Contacts = () => {
  return (
    <section id='contacts'>
      <h5>Butuh bantuan?</h5>
      <h2>Hubungi saya</h2>

      <div className="container contact__container">
        <div className="contact__options">

          <article className='contact__option'>
            <FaWhatsapp className='contact__option-icon'/>
            <h4>Whatsapp</h4>
            <h5>0858-0034-7898</h5>
            <a href="https://wa.me/6285800347898">Send a message</a>
          </article>

          <article className='contact__option'>
            <MdOutlineEmail className='contact__option-icon'/>
            <h4>Email</h4>
            <h5>salsabilanadiaak413@gmail.com</h5>
            <a href="mailto:salsabilanadiaak413@gmail.com">Send a message</a>
          </article>

        </div>
      </div>    
    </section>
  )
}

export default Contacts
