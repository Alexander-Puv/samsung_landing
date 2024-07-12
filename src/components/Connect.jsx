import React from 'react'
import bgImage from '../assets/bg2.png'
import connectWatches from '../assets/connectWatches.jpg'
import connectWallet from '../assets/connectWallet.jpg'

const ConnectItem = ({image, title, text}) => {
  return (
    <div className="connect__item">
      <img src={image} alt={title} />
      <h4>{title}</h4>
      <p>{text}</p>
    </div>
  )
}

const Connect = () => {
  return (
    <section className='connect'>
      <img className='connect__image' src={bgImage} alt="Connect to everything important to you" />
      <div className="connect__content">
        <h3>Connect to everything important to you</h3>
        <div className="connect__items">
          <ConnectItem image={connectWatches} title='An untethered watch for an untethered life.' text='The new Galaxy Watch connects via Bluetooth and LTE, so you can text, call, and run your day while leaving your phone at home.' />
          <ConnectItem image={connectWallet} title='Turn your phone into your wallet.' text="Forgot your cash and cards at home? No problem—with Samsung Pay right on your phone, you're always ready to pick up the check." />
        </div>
      </div>
    </section>
  )
}

export default Connect