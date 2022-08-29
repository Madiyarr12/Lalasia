import React from 'react'
import './Section_2.css'
import CountUp from 'react-countup'
function SecondAbout() {
  return (
    <section className="secondAbout_parent">
      <div className="about_team">
        <div className="about_team_left animate__animated animate__fadeInLeft">
          <h5 className="header-five sc-color-1">Our Mission</h5>
          <h2 className="header-two tt-color-1 mt-[10px] mb-[50px]">
            Our team dedicated to help find smart home product
          </h2>
          <div className="countUp">
            <div className="countUp_item">
              <h2 className="header-two tt-color-1">
                <CountUp
                  end={20}
                  duration={2.75}
                  enableScrollSpy={true}
                  useEasing={true}
                />
                +
              </h2>
              <p className="pg-3 pg-color-1">Years Experience</p>
            </div>
            <div className="countUp_item">
              <h2 className="header-two tt-color-1">
                <CountUp
                  end={483}
                  duration={2.75}
                  enableScrollSpy={true}
                  useEasing={true}
                />
              </h2>
              <p className="pg-3 pg-color-1">Happy Client</p>
            </div>
            <div className="countUp_item">
              <h2 className="header-two tt-color-1">
                <CountUp
                  end={150}
                  duration={2.75}
                  enableScrollSpy={true}
                  useEasing={true}
                  scrollSpyOnce={false}
                />
                +
              </h2>
              <p className="pg-3 pg-color-1">Project Finished</p>
            </div>
          </div>
        </div>
        <div className="about_team_right animate__animated animate__fadeInRight">
          <div className="right_items">
            <img
              height={62}
              width={62}
              src="https://i.postimg.cc/m2Yx3SHX/image-2022-08-24-09-30-02.png"
              alt="phone-photo"
            />
            <div>
              <h3 className="header-three tt-color-1">24/7 Supports</h3>
              <p className="pg-3 pg-color-3 mt-[16px]">
                24/7 support means a support service that is provided 24 hours a
                day and 7 days a week.{' '}
              </p>
            </div>
          </div>

          <div className="right_items">
            <img
              height={62}
              width={62}
              src="https://i.postimg.cc/fTqwSCnG/image-2022-08-24-09-30-46.png"
              alt="phone-photo"
            />
            <div>
              <h3 className="header-three tt-color-1">24/7 Supports</h3>
              <p className="pg-3 pg-color-3 mt-[16px]">
                24/7 support means a support service that is provided 24 hours a
                day and 7 days a week.{' '}
              </p>
            </div>
          </div>

          <div className="right_items">
            <img
              height={62}
              width={62}
              src="https://i.postimg.cc/TwtsNk9G/image-2022-08-24-09-31-13.png"
              alt="phone-photo"
            />
            <div>
              <h3 className="header-three tt-color-1">24/7 Supports</h3>
              <p className="pg-3 pg-color-3 mt-[16px]">
                24/7 support means a support service that is provided 24 hours a
                day and 7 days a week.{' '}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default SecondAbout
