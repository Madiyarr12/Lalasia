import React, { useEffect } from 'react'
import './Section_3.css'
import { BsFilter } from 'react-icons/bs'
import { BsArrowRight } from 'react-icons/bs'
function ThirdArticle() {
  return (
    <section className="third_parent">
      <div>
        <h5 className="header-five sc-color-1">Trending Topics</h5>
        <h2 className="header-two tt-color-1">Popular last week</h2>
      </div>
      <div className="article_navbar">
        <div className="article_list">
          <p className="active">All</p>
          <p>Tips and Trick</p>
          <p>Interior Design</p>
          <p>Design Inspiration</p>
          <p>Color Guide</p>
        </div>
        <div className="article_navbar_right">
          <BsFilter className="sort_icon" />
          <p>Filter</p>
        </div>
      </div>
      <div className="article_products">
        <div className="article_product__product">
          <img
            src="https://i.postimg.cc/Wbvh4QvF/Rectangle-45.png"
            alt="article-product-photo"
          />
          <div className="article_product__product__text">
            <p className="pg-1 pg-color-1">Tips and Trick</p>
            <h3 className="header-three tt-color-1 mt-[10px]">
              Beautiful and Functional Home Terrace Decoration
            </h3>
            <p className="pg-3 pg-color-1 mt-[14px] mb-[21px] product-text-info">
              Home terrace decorations are part of every decoration or overall
              home design. Interiordesign.id – If by chance your house has
              enough space or space.
            </p>
            <div className="user-data">
              <img
                src="https://i.postimg.cc/fLnC1tjV/Ellipse-25-1.png"
                alt="user-photo"
              />
              <h6 className="header-six tt-color-1">By Morgan Goldberg</h6>
              <p className="pg-1 pg-color-1">Friday, 1 April 2022</p>
            </div>
          </div>
        </div>

        <div className="article_product__product">
          <img
            src="https://i.postimg.cc/Wbvh4QvF/Rectangle-45.png"
            alt="article-product-photo"
          />
          <div className="article_product__product__text">
            <p className="pg-1 pg-color-1">Tips and Trick</p>
            <h3 className="header-three tt-color-1 mt-[10px]">
              Beautiful and Functional Home Terrace Decoration
            </h3>
            <p className="pg-3 pg-color-1 mt-[14px] mb-[21px] product-text-info">
              Home terrace decorations are part of every decoration or overall
              home design. Interiordesign.id – If by chance your house has
              enough space or space.
            </p>
            <div className="user-data">
              <img
                src="https://i.postimg.cc/fLnC1tjV/Ellipse-25-1.png"
                alt="user-photo"
              />
              <h6 className="header-six tt-color-1">By Morgan Goldberg</h6>
              <p className="pg-1 pg-color-1">Friday, 1 April 2022</p>
            </div>
          </div>
        </div>

        <div className="article_product__product">
          <img
            src="https://i.postimg.cc/Wbvh4QvF/Rectangle-45.png"
            alt="article-product-photo"
          />
          <div className="article_product__product__text">
            <p className="pg-1 pg-color-1">Tips and Trick</p>
            <h3 className="header-three tt-color-1 mt-[10px]">
              Beautiful and Functional Home Terrace Decoration
            </h3>
            <p className="pg-3 pg-color-1 mt-[14px] mb-[21px] product-text-info">
              Home terrace decorations are part of every decoration or overall
              home design. Interiordesign.id – If by chance your house has
              enough space or space.
            </p>
            <div className="user-data">
              <img
                src="https://i.postimg.cc/fLnC1tjV/Ellipse-25-1.png"
                alt="user-photo"
              />
              <h6 className="header-six tt-color-1">By Morgan Goldberg</h6>
              <p className="pg-1 pg-color-1">Friday, 1 April 2022</p>
            </div>
          </div>
        </div>
      </div>
      <button className="header-five tt-color-1 load-more">Load More</button>

      <div className="portfolio__text_bottom">
        <h2>Subscribe our newsletter</h2>
        <button>
          Let's Talk
          <BsArrowRight className="portfolio_arrow_icon" />
        </button>
      </div>
    </section>
  )
}

export default ThirdArticle
