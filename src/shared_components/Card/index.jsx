import React from 'react'
import { useNavigate } from 'react-router-dom'
import styles from './Card.module.css'
function Card({ card }) {
  let navigate = useNavigate()
  function readMore() {
    navigate(`/productDetail/${card.id}`)
    window.location.reload()
  }
  return (
    
    <div key={card.id} onClick={readMore} className={styles.parent}>
      <div className={styles.card}>
        <img src={card.imageUrl} alt="card-photo" />
        <h5>{card.category}</h5>
        <h3>{card.title}</h3>
        <p>{card.description}</p>
        <h3 className={styles.price}>${card.price}</h3>
      </div>
    </div>
  
  )
}

export default Card
