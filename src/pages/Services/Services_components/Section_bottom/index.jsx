import React from 'react'
import './Section_bottom.css'
import { BsArrowRight } from 'react-icons/bs'
function Portfolio() {
  return (
    <section>
      <div className="portfolio_text">
        <div className="portfolio_text_left">
          <h5>Portfolio</h5>
          <h2>Amazing project we’ve done before</h2>
        </div>
        <div className="portfolio_text_right">
          <p>
            Pellentesque etiam blandit in tincidunt at donec. Eget ipsum
            dignissim placerat nisi, adipiscing mauris non.
          </p>
          <h5>View Portofolio</h5>
        </div>
      </div>
      <div className="portfolio_images">
        <div className="portfolio_images_left">
          <div className="portfolio_images_text">
            <h3>Siska Kohl’s Bedroom</h3>
            <p>We start renovating her bedroom with minimalist</p>
            <span id='portfolioBtn'>See Detail</span>
          </div>
        </div>
        <div className="portfolio_images_right">
          <div className="portfolio_images_top">
            <div className="portfolio_images_text">
              <h3>Jeruk Veldevana Living Room Design</h3>
              <p>We start renovating her bedroom with minimalist</p>
              <span id='portfolioBtn'>See Detail</span>
            </div>
          </div>
          <div className="portfolio_images_bottom">
            <div className="portfolio_images_text">
              <h3>Cozy Co-working space</h3>
              <p>We start renovating her bedroom with minimalist</p>
              <span id='portfolioBtn'>See Detail</span>
            </div>
          </div>
        </div>
      </div>
      <div className="portfolio__text_bottom">
        <h2>Are you interested work with us?</h2>
        <button>
          Let's Talk
          <BsArrowRight className='portfolio_arrow_icon' />
        </button>
      </div>
    </section>
  )
}

export default Portfolio
