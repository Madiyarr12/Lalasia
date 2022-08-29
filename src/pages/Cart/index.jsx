import React, { useContext } from 'react'
import Card from '../../shared_components/Card'
import Layout from '../../shared_components/Layout'
import { ProductContext } from '../../shared_components/utilities/productContext'

function Cart() {
  const { productCart } = useContext(ProductContext)
  console.log(productCart);
  return (
    <Layout>
      {( productCart.map((card) => <Card card={card} />))}
    </Layout>
  )
}

export default Cart
