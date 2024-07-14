import React from 'react'

const Button = ({text, color = 'white'}) => {
  return (
    <button className={`button button-${color}`}>
      {text}
    </button>
  )
}

export default Button