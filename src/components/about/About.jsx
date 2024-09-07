import React from 'react'
import './about.css'
import myImage from '../../assets/miliikody.png'
import { FaPaintBrush, FaMedal, FaLightbulb } from 'react-icons/fa'

const About = () => {
  return (
    <section id='about'>
      
      <h5>Cari tahu</h5>
      <h2>Tentang Kami</h2>

      <div className="container about__container">

          <div className="about__me">
            <div className="about__me-image">
                <img src={myImage} alt="Me" />
            </div>
          </div>

          <div className="about__content">
            <div className="about__cards">

              <article className='about__card'>
                  <FaPaintBrush className='about__icon'/>
                  <h5>Kreativitas</h5>
                  <small></small>
              </article>

              <article className='about__card'>
                  <FaMedal className='about__icon'/>
                  <h5>Dedikasi</h5>
                  <small></small>
              </article>
              
              <article className='about__card'>
                  <FaLightbulb className='about__icon'/>
                  <h5>Inovasi</h5>
                  <small></small>
              </article>

            </div>
            <p style={{ textAlign: 'justify' }}>
              <b>Miliikody</b> berawal dari kecintaan membuat produk homemade sejak kecil, 
              yang kemudian menginspirasi saya untuk membangun bisnis aksesoris berbahan manik-manik. 
              Berawal dari hobi dan keinginan menambah penghasilan, saya mulai mengembangkan produk secara serius. 
              Didirikan pada Mei 2023, Miliikody terus berinovasi dalam menciptakan produk trend beads seperti kalung, gelang, cincin, 
              dan charm bag, dengan harapan dapat melengkapi kecantikan perempuan Indonesia melalui produk-produk yang estetis dan berkualitas.   
            </p>

          </div>
      </div>
    </section>
  )
}

export default About