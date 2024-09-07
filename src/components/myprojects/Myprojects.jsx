import React from 'react'
import './myprojects.css'
import IMG1 from '../../assets/cincin.png'
import IMG2 from '../../assets/bros.png'
import IMG3 from '../../assets/gantunganhp.png'
import IMG4 from '../../assets/gantungantas.png'
import IMG5 from '../../assets/gelang.png'
import IMG6 from '../../assets/kalung.png'


const Myprojects = () => {
return (
    <section id='myprojects'>

    <h5>Koleksi kreativitas manik-manik</h5>
    <h2>Produk Kami</h2>

    <div className="container portfolio__container">

        <article className='portfolio__item'>
            <div className="portfolio__item-image">
                <img src={IMG1} alt="" />
            </div>
            <h3>Cincin Manik</h3>
            <small className='text-light'>Artistic | Unique | Handmade</small>
            <div className="portfolio__item-cta">
            <a href="http://shopee.co.id/milikody" target="_blank" rel='noreferrer' className='btn'>Shopee</a>
            </div>
        
        </article>
        <article className='portfolio__item'>
            <div className="portfolio__item-image">
                <img src={IMG2} alt="" />
            </div>
            <h3>Bros</h3>
            <small className='text-light'>Classic | Bold | Timeless</small>
            <div className="portfolio__item-cta">
            <a href="http://shopee.co.id/milikody" target="_blank" rel='noreferrer' className='btn'>Shopee</a>
            </div>
            
        </article>
        <article className='portfolio__item'>
            <div className="portfolio__item-image">
                <img src={IMG3} alt="" />
            </div>
            <h3>Strapphone</h3>
            <small className='text-light'>Practical | Decorative | Durable</small>
            <div className="portfolio__item-cta">
            <a href="http://shopee.co.id/milikody" target="_blank" rel='noreferrer' className='btn'>Shopee</a>
            </div>
            
        </article>
        <article className='portfolio__item'>
            <div className="portfolio__item-image">
                <img src={IMG4} alt="" />
            </div>
            <h3>Charm Bag</h3>
            <small className='text-light'>Cute | Versatile | Personalized</small>
            <div className="portfolio__item-cta">
            <a href="http://shopee.co.id/milikody" target="_blank" rel='noreferrer' className='btn'>Shopee</a>
            </div>
            
        </article>
        <article className='portfolio__item'>
            <div className="portfolio__item-image">
                <img src={IMG5} alt="" />
            </div>
            <h3>Gelang Manik</h3>
            <small className='text-light'>Stylish | Trendy | Customizable</small>
            <div className="portfolio__item-cta">
            <a href="http://shopee.co.id/milikody" target="_blank" rel='noreferrer' className='btn'>Shopee</a>
            </div>
            
        </article>
        <article className='portfolio__item'>
            <div className="portfolio__item-image">
                <img src={IMG6} alt="" />
            </div>
            <h3>Kalung Manik</h3>
            <small className='text-light'>Elegant | Chic | Statement</small>
            <div className="portfolio__item-cta">
            <a href="http://shopee.co.id/milikody" target="_blank" rel='noreferrer' className='btn'>Shopee</a>
            </div>
            
        </article>
        </div>
        </section>
    )
}

export default Myprojects
