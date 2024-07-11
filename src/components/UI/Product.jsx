import React from 'react'
import Button from './Button'

const Product = ({image, title, text, btnText, bgColor, imageSide = 'right'}) => {
  return (
    <section className={`product product-${bgColor} product-${imageSide}`}>
      <div className="product__text">
        <h2>{title}</h2>
        <p>{text}</p>
        <Button text={btnText} />
      </div>
      <div className="product__image">
        <img src={image} alt={title} />
      </div>
    </section>
  )
}

export default Product