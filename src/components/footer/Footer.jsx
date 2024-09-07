import React from 'react'
import './footer.css'
import { MdOutlineEmail } from 'react-icons/md'
import { FaWhatsapp, FaInstagram } from 'react-icons/fa'  // Import Instagram icon

const Footer = () => {
  return (
    <footer>
        <a href="#home" className='footer__logo'>Miliikody</a>
        <ul className="permalinks">
            <li><a href="#home">Home</a></li>
            <li><a href="#about">About</a></li>
            <li><a href="#experience">Experience</a></li>
            <li><a href="#myproduct">Product</a></li>
        </ul>

        <div className="footer__socials">
          <a href="https://wa.me/6285800347898"><FaWhatsapp/></a>
          <a href="mailto:salsabilanadiaak413@gmail.com"><MdOutlineEmail/></a>
          <a href="https://www.instagram.com/miliikody/"><FaInstagram/></a> 
        </div>

        <div className="footer__copyright">
            <small>&copy; Miliikody. All rights reserved.</small>
        </div>
    </footer>
  )
}

export default Footer
