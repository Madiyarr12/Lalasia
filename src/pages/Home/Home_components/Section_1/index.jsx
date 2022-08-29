import React from 'react'
import Container from '../../../../shared_components/Container'
import styles from './Section_1.module.css'
function SectionOne() {
  return (
    <Container>
      <section>
        <div className={styles.parent}>
          <div className={styles.searchDiv}>
            <img  src="https://i.postimg.cc/Kj8ykRjB/search-normal.png" alt="search-icon" />
            <input type="text" placeholder='Search property' />
            <button>Search</button>
          </div>
          <img className={styles.image} src="https://i.postimg.cc/PxpyVyBx/Rectangle-2.png" alt="photo" />
        </div>
      </section>
    </Container>
  )
}

export default SectionOne
