import React from 'react'
import styles from './Section_2.module.css'
function SectionTwo() {
  return (
 
     <section>
      <div className={styles.parent}>
        <div className={styles.top}>
          <div className={styles.left}>
            <p>Benefits</p>
            <h2>Benefits when using our services</h2>
          </div>
          <div className={styles.right}>
            <p>Pellentesque etiam blandit in tincidunt at donec. Eget ipsum dignissim placerat nisi, adipiscing mauris non purus parturient.</p>
          </div>
        </div>
        <div className={styles.bottom}>
            <div className={styles.item}>
                <img src="https://i.postimg.cc/SKw6xvQp/image-2022-08-18-15-40-09.png" alt="photo" />
                <h3>Many Choices</h3>
                <p>Pellentesque etiam blandit in tincidunt at donec. Eget ipsum dignissim placerat nisi, adipiscing mauris non. </p>
            </div>
            <div className={styles.item}>
                <img src="https://i.postimg.cc/pXMMNWD2/image-2022-08-18-15-52-29.png" alt="photo" />
                <h3>Fast and On Time</h3>
                <p>Pellentesque etiam blandit in tincidunt at donec. Eget ipsum dignissim placerat nisi, adipiscing mauris non. </p>
            </div>
            <div className={styles.item}>
                <img src="https://i.postimg.cc/Vk1SNccw/image-2022-08-18-15-54-16.png" alt="photo" />
                <h3>Affordable Price</h3>
                <p>Pellentesque etiam blandit in tincidunt at donec. Eget ipsum dignissim placerat nisi, adipiscing mauris non. </p>
            </div>
        </div>
      </div>
    </section>
   
  )
}

export default SectionTwo
