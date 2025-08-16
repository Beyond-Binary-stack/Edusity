import React from 'react'
import './Hero.css'
import dark_arrow from '../../assets/dark-arrow.png'

const Hero = () => {
  return (
    <div className='hero container'>
        <div className="hero-text">
            <h1>We Ensure Better Education For a Better World </h1>
            <p>We’re dedicated to providing inclusive and innovative education that empowers individuals, strengthens communities, and builds a brighter, more purposeful future for all.</p>
            <button className='btn'>Explore more <img src={dark_arrow} alt="" /></button>
        </div>
    </div>
  )
}

export default Hero