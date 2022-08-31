import React, { useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import styles from './Card.module.css'
import { ProductContext } from '../../shared_components/utilities/productContext'
function Card({ card }) {
  
  const { productCart, setProductCart } = useContext(ProductContext)
  let navigate = useNavigate()
  function readMore() {
    navigate(`/productDetail/${card.id}`)
  }
  function addToCart() {
    let cartList = [...productCart]
    cartList.push(card)
    setProductCart(cartList)
  }
  return (
    <div key={card.id} onClick={readMore} className={styles.parent}>
      <div className={styles.card}>
        <img src={card.imageUrl} alt="card-photo" />
        <h5>{card.category}</h5>
        <h3>{card.title}</h3>
        <p className={styles.lineClamp}>{card.description}</p>
        <h3 className={styles.price}>${card.price}</h3>
        <button
          className="bg-blue-500 text-white px-4 py-2 mt-3 rounded-lg active:scale-95"
          onClick={addToCart}
        >
          Add to chart
        </button>
      </div>
    </div>
  )
}

export default Card
