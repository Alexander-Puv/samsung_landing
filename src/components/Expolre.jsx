import React from 'react'
import phones from '../assets/phones.jpg'
import tablets from '../assets/tablets.jpg'
import wearables from '../assets/wearables.jpg'
import virtualReality from '../assets/virtualReality.jpg'

const Category = ({image, title}) => {
  return (
    <div className="category">
      <img src={image} alt={title} />
      <h4>{title}</h4>
    </div>
  )
}

const Expolre = () => {
  return (
    <section className='explore'>
      <h3 className='explore__title'>Explore other Galaxy devices</h3>
      <div className="explore__categories">
        <Category image={phones} title='Phones' />
        <Category image={tablets} title='Tablets' />
        <Category image={wearables} title='Wearables' />
        <Category image={virtualReality} title='Virtual Reality' />
      </div>
    </section>
  )
}

export default Expolre