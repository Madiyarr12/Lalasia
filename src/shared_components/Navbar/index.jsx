import React, { useContext, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import CompanyLogo from '../Company-logo'
import styles from './Navbar.module.css'
import bag from './right-bar-icons/bag-2.svg'
import user from './right-bar-icons/user.svg'
import { HiOutlineMenu } from 'react-icons/hi'
import { HiOutlineX } from 'react-icons/hi'
import { FiLogOut } from 'react-icons/fi'
import 'animate.css'
import { Fade } from 'react-reveal'
import { AuthContext } from '../utilities/AuthProvider'
import { ProductContext } from '../utilities/productContext'
function Navbar() {
  let navigate = useNavigate()
  const { currentUser, logOut } = useContext(AuthContext)
  const { productCart } = useContext(ProductContext)
  const [open, setOpen] = useState(false)
  function openMenu() {
    open ? setOpen(false) : setOpen(true)
  }
  function loGout() {
    logOut()
    navigate('/login')
  }
  return (
    <>
      <nav id="navbar" className={styles.nav}>
        <Link to="/">
          <CompanyLogo />
        </Link>
        <div className={styles.links}>
          <Link to="/product">Product</Link>
          <Link to="/services">Services</Link>
          <Link to="/article">Article</Link>
          <Link to="/about">About Us</Link>
        </div>
        <div className={styles.right}>
          <Link to={'/cart'}>
            <img src={bag} alt="bag-icon" />
            {productCart.length > 0 ? <span>{productCart.length}</span> : null}
          </Link>
          {currentUser != null ? (
            <FiLogOut onClick={loGout} className="font-medium" />
          ) : (
            <Link to={'/login'}>
              <img src={user} alt="user-icon" />
            </Link>
          )}
        </div>
      </nav>

      <nav className={styles.mobileNav}>
        <div className={styles.mobileTop}>
          <Link to="/">
            <CompanyLogo />
          </Link>
          <HiOutlineMenu
            style={{ display: open ? 'none' : 'block' }}
            onClick={openMenu}
            className={styles.burger}
          />
          <HiOutlineX
            style={{ display: open ? 'block' : 'none' }}
            onClick={openMenu}
            className={styles.eks}
          />
        </div>
        <Fade top>
          <div
            style={{ display: open ? 'block' : 'none' }}
            className={styles.mobileBottom}
          >
            <div className={styles.mobileLinks}>
              <Link to="/product">Product</Link>
              <Link to="/services">Services</Link>
              <Link to="/article">Article</Link>
              <Link to="/about">About Us</Link>
            </div>
            {/* <div className="flex items-start">
              <Link to={'/cart'}>
                <img src={bag} alt="bag-icon" />
                {productCart.length > 0 ? <span>{productCart.length}</span> : null}
              </Link>
              {currentUser != null ? (
                <FiLogOut className="font-medium" />
              ) : (
                <Link to={'/login'}>
                  <img src={user} alt="user-icon" />
                </Link>
              )}
            </div> */}
          </div>
        </Fade>
      </nav>
    </>
  )
}

export default Navbar
