import React from 'react'
import styles from './Section_6.module.css'
import {BsArrowRight} from 'react-icons/bs'
function SectionSixth() {
  return (<>
    <section className={styles.parent}>
      <div className={styles.top}>
        <h5>Articles</h5>
        <h2>The best furniture comes from Lalasia</h2>
        <p>Pellentesque etiam blandit in tincidunt at donec. </p>
        <div className={styles.imgText}>
          <div className={styles.text}>
            <h5>Tips and Trick</h5>
            <h3>Create Cozy Dinning Room Vibes</h3>
            <h5>
              Decorating with neutrals brings balance to the dining room...
            </h5>
            <button className={styles.textBtn}>Read More</button>
          </div>
        </div>
      </div>
      <div className={styles.right}>
        <div className={styles.item}>
          <img
            src="https://i.postimg.cc/NjZsW9dx/Rectangle-20.png"
            alt="item-photo"
          />
          <div className={styles.texts}>
            <p className={styles.itemCategory}>Tips and Trick</p>
            <h3>6 ways to give your home minimalistic vibes</h3>
            <p className={styles.description}>Pellentesque etiam blandit in</p>
            <div className={styles.user}>
              <img src="https://i.postimg.cc/YCYvpBhg/Ellipse-25.png" alt="user-photo" />
              <h6>By Jerremy Jean</h6>
              <p className={styles.data}>Friday, 1 April 2022</p>
            </div>
          </div>
        </div>
        <div className={styles.item}>
          <img
            src="https://i.postimg.cc/NjZsW9dx/Rectangle-20.png"
            alt="item-photo"
          />
          <div className={styles.texts}>
            <p className={styles.itemCategory}>Tips and Trick</p>
            <h3>6 ways to give your home minimalistic vibes</h3>
            <p className={styles.description}>Pellentesque etiam blandit in</p>
            <div className={styles.user}>
              <img src="https://i.postimg.cc/YCYvpBhg/Ellipse-25.png" alt="user-photo" />
              <h6>By Jerremy Jean</h6>
              <p className={styles.data}>Friday, 1 April 2022</p>
            </div>
          </div>
        </div>
        <div className={styles.item}>
          <img
            src="https://i.postimg.cc/NjZsW9dx/Rectangle-20.png"
            alt="item-photo"
          />
          <div className={styles.texts}>
            <p className={styles.itemCategory}>Tips and Trick</p>
            <h3>6 ways to give your home minimalistic vibes</h3>
            <p className={styles.description}>Pellentesque etiam blandit in</p>
            <div className={styles.user}>
              <img src="https://i.postimg.cc/YCYvpBhg/Ellipse-25.png" alt="user-photo" />
              <h6>By Jerremy Jean</h6>
              <p className={styles.data}>Friday, 1 April 2022</p>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section className={styles.bottom}>
    
        <h1>Join with me to get special discount</h1>
        <button>Learn More 
        <BsArrowRight className={styles.arrow} />
        </button>
      
    </section>


    </>
  )
}
export default SectionSixth
