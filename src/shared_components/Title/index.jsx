import React from 'react'
import styles from './Title.module.css'
function Title(props) {
  return (
    <div className={styles.parent}>
    <div className='animate__animated animate__fadeInLeft'><h1 className={styles.title}>{props.title}</h1></div>
    <div  className='animate__animated animate__fadeInRight'><p className={styles.text}>{props.text}</p></div>
    </div>
  )
}
export default Title