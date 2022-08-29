import React from 'react'
import CompanyLogo from '../Company-logo'
import Container from '../Container'
import styles from './Footer.module.css'
function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.left}>
        <CompanyLogo />
        <p>
          Lalasia is digital agency that help you make better experience iaculis
          cras in.
        </p>
      </div>
      <div className={styles.right}>
        <ul>
          <li>Product</li>
          <li>New Arrivals</li>
          <li>Best Selling</li>
          <li>Home Decor</li>
          <li>Kitchen set</li>
        </ul>
        <ul>
          <li>Services</li>
          <li>Catalog</li>
          <li>Blog</li>
          <li>FaQ</li>
          <li>Pricing</li>
        </ul>
        <ul>
          <li>Follow Us</li>
          <li>Facebook</li>
          <li>Instagram</li>
          <li>Twitter</li>
        </ul>
      </div>
    </footer>
  )
}

export default Footer
