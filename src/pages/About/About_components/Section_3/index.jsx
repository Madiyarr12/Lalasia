import React from 'react'
import './Section_3.css'
import {BsArrowRight} from 'react-icons/bs'
function ThirdAbout() {
  return (
    <section>
      <div className="ourTeam">
        <div className="ourTeam_left">
          <h5 className="header-five sc-color-1">Our Team</h5>
          <h2 className="header-two tt-color-1">
            Meet our leading and strong team
          </h2>
        </div>
        <div className="ourTeam_right">
          <p className="pg-3 pg-color-1">
            Pellentesque etiam blandit in tincidunt at donec. Eget ipsum
            dignissim placerat nisi, adipiscing mauris non purus parturient.
          </p>
        </div>
      </div>
      <div className="team">
        <div className="team_card">
          <img
            src="https://i.postimg.cc/QNWHpVJ4/Rectangle-23.png"
            alt="team_photo"
          />
          <h3 className="header-three tt-color-1  mt-[26px] mb-[6px]">
            Jesse Depp
          </h3>
          <p className="pg-3 pg-color-1">Founder & CEO</p>
        </div>

        <div className="team_card">
          <img
            src="https://i.postimg.cc/D0DNQBQZ/Rectangle-23-1.png"
            alt="team_photo"
          />
          <h3 className="header-three tt-color-1  mt-[26px] mb-[6px]">
            Margareth Carter
          </h3>
          <p className="pg-3 pg-color-1">COO</p>
        </div>

        <div className="team_card">
          <img
            src="https://i.postimg.cc/YCyxvh3r/Rectangle-23-2.png"
            alt="team_photo"
          />
          <h3 className="header-three tt-color-1  mt-[26px] mb-[6px]">
            Andrew Taggart
          </h3>
          <p className="pg-3 pg-color-1">Developer</p>
        </div>

        <div className="team_card">
          <img
            src="https://i.postimg.cc/YCfJTc1K/Rectangle-23-3.png"
            alt="team_photo"
          />
          <h3 className="header-three tt-color-1  mt-[26px] mb-[6px]">
            Grace Marie
          </h3>
          <p className="pg-3 pg-color-1">Manager</p>
        </div>

        <div className="team_card">
          <img
            src="https://i.postimg.cc/QtyLSpcF/Rectangle-23-4.png"
            alt="team_photo"
          />
          <h3 className="header-three tt-color-1  mt-[26px] mb-[6px]">
            Andrew Taggart
          </h3>
          <p className="pg-3 pg-color-1">Senior Designer</p>
        </div>

        <div className="team_card">
          <img
            src="https://i.postimg.cc/T3tpGs6F/Rectangle-23-5.png"
            alt="team_photo"
          />
          <h3 className="header-three tt-color-1  mt-[26px] mb-[6px]">
            Andrew Taggart
          </h3>
          <p className="pg-3 pg-color-1">Marketer</p>
        </div>
      </div>
      <div className="portfolio__text_bottom">
        <h2>Are you interested work with us?</h2>
        <button>
          Let's Talk
          <BsArrowRight className="portfolio_arrow_icon" />
        </button>
      </div>
    </section>
  )
}

export default ThirdAbout
