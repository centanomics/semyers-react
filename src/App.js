import React from 'react'

import Product from './components/Product'
import products from './components/vschoolProducts'

function App() {

  const productList = products.map(product => {
    return (
      <Product key={product.id} title={product.name} cost={product.price} desc={product.description}/>
    )
  })

  return (
    <div>
      <h1>The products we offer:</h1>
      {productList}
    </div>
  )
}

export default App