import React from 'react'
import './experience.css'
import ex1 from '../../assets/pengalaman1.png';
import ex2 from '../../assets/pengalaman2.png';
import ex3 from '../../assets/pengalaman3.png';

const Experience = () => {
  // Contoh data pengalaman yang pernah diikuti
  const experiences = [
    {
      id: 1,
      image: ex1,   // Ganti dengan path gambar sesuai
      title: 'Bagi Kopi Kaliurang',
      description: 'Creative Market',
      date: '25 Agustus 2024',
    },
    {
      id: 2,
      image: ex2,  // Ganti dengan path gambar sesuai
      title: 'Dahlan Muda Expo #3',
      description: 'Pameran produk inovasi kewirausahaan',
      date: '11 - 13 Januari 2024',
    },
    {
      id: 3,
      image: ex3,   // Ganti dengan path gambar sesuai
      title: 'Yamas Sky Cafe',
      description: 'Girls Day Out',
      date: '24 - 25 Juni 2023',
    },
    // Tambahkan pengalaman lainnya sesuai kebutuhan
  ];

  return (
    <section id='experience'>
      <h5>Pengalaman yang Pernah Saya Ikuti</h5>
      <h2>My Experience</h2>

      <div className="container experience__container">
        {experiences.map(({ id, image, title, description, date }) => (
          <div key={id} className="experience__card">
            <img src={image} alt={title} className="experience__image" />
            <div className="experience__details">
              <h3>{title}</h3>
              <p>{description}</p>
              <small>{date}</small>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Experience
