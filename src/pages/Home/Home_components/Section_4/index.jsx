import React from 'react'
import styles from './Section_4.module.css'
import CountUp from 'react-countup'
function SectionFourth() {
  return (
    <>
      <section id={styles.desktop}>
        <div className={styles.parent}>
          <div className={styles.left}>
            <h5 className="animate__swing">Our Product</h5>
            <h2>Crafted by talented and high quality material</h2>
            <p>
              Pellentesque etiam blandit in tincidunt at donec. Eget ipsum
              dignissim placerat nisi, adipiscing mauris non purus parturient.
              morbi fermentum, vivamus et accumsan dui tincidunt pulvinar
            </p>
            <button>Learn More</button>
            <img
              src="https://i.postimg.cc/x8Sb4qcF/unsplash-mp-N7xj-KQ-Ns.png"
              alt="photo"
            />
          </div>
          <div className={styles.right}>
            <div className={styles.top}>
              <div className={styles.item}>
                <h2 className="header-two tt-color-1">
                  <CountUp
                    end={20}
                    duration={2.75}
                    enableScrollSpy={true}
                    useEasing={true}
                  />
                  +
                </h2>
                <p>Years Experience</p>
              </div>
              <div className={styles.item}>
                <h2>
                  <CountUp
                    end={483}
                    duration={2.75}
                    enableScrollSpy={true}
                    useEasing={true}
                  />
                </h2>
                <p>Happy Client</p>
              </div>
              <div className={styles.item}>
                <h2>
                  <CountUp
                    end={150}
                    duration={2.75}
                    enableScrollSpy={true}
                    useEasing={true}
                    scrollSpyOnce={false}
                  />
                  +
                </h2>
                <p>Project Finished</p>
              </div>
            </div>
            <img
              src="https://i.postimg.cc/sgC04Jjp/unsplash-376-KN-ISpl-E.png"
              alt="photo"
            />
          </div>
        </div>
      </section>
      <section id={styles.mobile}>
        <div className={styles.parent}>
          <h5>Our Product</h5>
          <h2>Crafted by talented and high quality material</h2>
          <p>
            Pellentesque etiam blandit in tincidunt at donec. Eget ipsum
            dignissim placerat nisi, adipiscing mauris non purus parturient.
            morbi fermentum, vivamus et accumsan dui tincidunt pulvinar
          </p>
          <button>Learn More</button>
          <div className={styles.top}>
            <div className={styles.item}>
              <CountUp
                end={20}
                duration={2.75}
                enableScrollSpy={true}
                useEasing={true}
                className="count-up header-two"
              />
              <span className="header-two">+</span>
              <p>Years Experience</p>
            </div>
            <div className={styles.item}>
              <CountUp
                end={483}
                duration={2.75}
                enableScrollSpy={true}
                useEasing={true}
                className="count-up header-two"
              />

              <p>Happy Client</p>
            </div>
            <div className={styles.item}>
              <CountUp
                end={150}
                duration={2.75}
                enableScrollSpy={true}
                useEasing={true}
                scrollSpyOnce={false}
                className="count-up header-two"
              />
              <span className="header-two">+</span>
              <p>Project Finished</p>
            </div>
          </div>
          <div className={styles.imgOne}>
            <img
              src="https://i.postimg.cc/x8Sb4qcF/unsplash-mp-N7xj-KQ-Ns.png"
              alt="photo"
            />
          </div>
          <div className={styles.imgOne}>
            <img
              src="https://i.postimg.cc/sgC04Jjp/unsplash-376-KN-ISpl-E.png"
              alt="photo"
            />
          </div>
        </div>
      </section>
    </>
  )
}

export default SectionFourth
