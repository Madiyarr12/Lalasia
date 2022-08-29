import React from 'react'
import './Section_2.css'
function SecondArticle() {
  return (
    <section>
      <div className="article_header">
        <h5>Daily News</h5>
        <h2>Today top headlines</h2>
      </div>
      <div className="article_cards">
        <div className="card-article">
          <img
            className="card-article_img"
            src="https://i.postimg.cc/PJhQSgb9/Rectangle-44.png"
            alt="article_photo"
          />
          <p>Design Inspiration</p>
          <h3>Bedroom Design is the Most Personal...</h3>
          <p>
            Is it true that the bedroom design is the most personal reflection
            of the owner? Many people believe that to be able to judge a
            person's
          </p>
          <div className="user-data">
            <img
              src="https://i.postimg.cc/nLGzvNzC/Ellipse-25-2.png"
              alt="user-photo"
            />
            <h6>By Jenny Agnes</h6>
            <p>Tuesday, 17 May 2022</p>
          </div>
        </div>
        <div className="card-article">
          <img
            className="card-article_img"
            src="https://i.postimg.cc/PrHSyRd1/Rectangle-41.png"
            alt="article_photo"
          />
          <p>Tips and Trick</p>
          <h3>Create a non-monotonous and dynamic...</h3>
          <p className='card-article_text'>
            Quoted from The Healthy Home Economist, a study in 1932 stated that
            color doesn't really have to be visible to have an effect
          </p>
          <div className="user-data">
            <img
              src="https://i.postimg.cc/2SbLZCgG/Ellipse-25-3.png"
              alt="user-photo"
            />
            <h6>By Juliana Athorn</h6>
            <p>Tuesday, 17 May 2022</p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default SecondArticle
