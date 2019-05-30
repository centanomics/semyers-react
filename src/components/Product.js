import React from 'react'

function Product(props) {
  return (
    <div>
      <h2>{props.title}</h2>
      <p>{props.desc}</p>
      <p><small>{props.cost.toLocaleString('en-US', { style: 'currency', currency: 'USD' })}</small></p>
    </div>
  )
}

export default Product