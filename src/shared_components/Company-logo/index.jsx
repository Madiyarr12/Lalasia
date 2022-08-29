import React from 'react'
import logo from './logo.png'
import brandName from './Lalasia.svg'
import styles from './Company-logo.module.css'
function CompanyLogo() {
  return (
    <div className={styles.parent}>
      <img className={styles.logo} src={logo} alt="Brand logo" />
      <img className={styles.brandName} src={brandName} alt="Brand Name" />
    </div>
  )
}

export default CompanyLogo
