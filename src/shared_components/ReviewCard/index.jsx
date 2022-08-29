import React from 'react'
import styles from './Review.module.css'
function ReviewCard() {
  return (
    <div className={styles.parent}>
      <img
        src="https://i.postimg.cc/7ZdWPBNz/image-2022-08-20-15-07-07.png"
        alt="photo"
      />
      <p>
        Pellentesque etiam blandit in tincidunt at donec. Eget ipsum dignissim
        placerat nisi, adipiscing mauris non.
      </p>
      <div className={styles.user}>
        <div className={styles.left}>
          <img
            src="https://i.postimg.cc/rpgRCHY0/Ellipse-1.png"
            alt="user-photo"
          />

          <h4>Janne Cooper</h4>
        </div>
        <div className={styles.right}>
          <img src="https://i.postimg.cc/1tkmpcPV/Vector.png" alt="star-icon" />
          <h5>4.3</h5>
        </div>
      </div>
    </div>
  )
}

export default ReviewCard
