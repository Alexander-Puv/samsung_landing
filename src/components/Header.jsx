import React from 'react'
import HeaderImage from '../assets/headerImage.png'
import HeaderPhone from '../assets/headerPhone.png'
import Button from './UI/Button'

const Advantage = ({header, text, color}) => {
  return (
    <div className={`advantage advantage-${color}`}>
      <div>
        <h3>{header}</h3>
        <p>{text}</p>
        <span>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32"><path d="M32 15H3.41l8.29-8.29-1.41-1.42-10 10a1 1 0 0 0 0 1.41l10 10 1.41-1.41L3.41 17H32z" data-name="4-Arrow Left"/></svg>
        </span>
      </div>
    </div>
  )
}

const Header = () => {
  return (
    <section className='header'>
      <img src={HeaderImage} alt="Galaxy S9 | S9+" />
      <div className="header__content">
        <div className="header__content-text">
          <h1>Discover a world without limits</h1>
          <p>It doesn't take a genius to see why switching to the Galaxy S9 | S9+ is a good idea.</p>
          <Button text='learn more' />
        </div>

        <img src={HeaderPhone} alt='Galaxy S9 | S9+' />

        <div className="header__content-advantages">
          <Advantage
            header='Water Tested'
            text='Lorem ipsum dolor sit amet, consectetur adipiscing elit nullam nunc justo sagittis suscipit ultrices.'
            color='1'
          />
          <Advantage
            header='Carved Frame'
            text='Lorem ipsum dolor sit amet, consectetur adipiscing elit nullam nunc justo sagittis suscipit ultrices.'
            color='2'
          />
          <Advantage
            header='Curved Glass'
            text='Lorem ipsum dolor sit amet, consectetur adipiscing elit nullam nunc justo sagittis suscipit ultrices.'
            color='3'
          />
        </div>
      </div>
    </section>
  )
}

export default Header