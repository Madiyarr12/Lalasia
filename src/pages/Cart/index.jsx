import React, { useContext } from 'react'
import Card from '../../shared_components/Card'
import Layout from '../../shared_components/Layout'
import { ProductContext } from '../../shared_components/utilities/productContext'

function Cart() {
  const { productCart } = useContext(ProductContext)
  return (
    <Layout>
      <div className="grid grid-cols-3 gap-10 my-5">
        {(productCart != null, productCart.map((card) => <Card card={card} />))}
      </div>
    </Layout>
  )
}

export default Cart
