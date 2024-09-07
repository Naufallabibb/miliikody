import React from 'react'
import './contacts.css'
import { MdOutlineEmail } from 'react-icons/md'
import { FaShoppingBag } from 'react-icons/fa'

const Contacts = () => {
  return (
    <section id='contacts'>
      <h5>Butuh bantuan?</h5>
      <h2>Hubungi saya</h2>

      <div className="container contact__container">
        <div className="contact__options">

          <article className='contact__option'>
            <FaShoppingBag className='contact__option-icon'/>
            <h4>Shopee</h4>
            <h5>Miliikody</h5>
            <a href="http://shopee.co.id/milikody">Chat on shopee</a>
          </article>

          <article className='contact__option'>
            <MdOutlineEmail className='contact__option-icon'/>
            <h4>Email</h4>
            <h5>miliikody@gmail.com</h5>
            <a href="mailto:miliikody@gmail.com">Send a email</a>
          </article>

        </div>
      </div>    
    </section>
  )
}

export default Contacts
