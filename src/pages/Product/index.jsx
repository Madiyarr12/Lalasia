import React, { useEffect, useState } from 'react'
import Title from '../../shared_components/Title'
import Layout from './../../shared_components/Layout/index'
import Card from './../../shared_components/Card/index'
import './product.css'
import Carousel from './Product_components/Carousel'
import { HiOutlineFilter } from 'react-icons/hi'
import axios from 'axios'
import { BsFilter } from 'react-icons/bs'
import { useNavigate } from 'react-router-dom'
import { SpinnerCircular } from 'spinners-react'
function Product() {
  let navigate = useNavigate()
  const [allproduct, setAllProduct] = useState([])
  useEffect(() => {
    axios
      .get('http://localhost:3000/productCard')
      .then(function (response) {
        // handle success
        setAllProduct(response.data)
      })
      .catch(function (error) {
        // handle error
        console.log(error)
      })
      .then(function () {
        // always executed
      })
  }, [])
  function readMore(cardId) {
    navigate(`/productDetail/${cardId}`)
    window.location.reload()
  }

  return (
    <>
      <Layout>
        <section className="hidden" id="productDesktop">
          <Title
            title="Products"
            text="We display products based on the latest products we have, if you want
to see our old products please enter the name of the item"
          />

          <Carousel />
          {/* Search product */}
          <div className="search_product">
            <div className="find_container">
              <img
                src="https://i.postimg.cc/Kj8ykRjB/search-normal.png"
                alt="search-icon"
              />
              <input type="text" placeholder="Search property" />
              <button type="submit">FindNow</button>
            </div>
            <div className="filter_box">
              <HiOutlineFilter className="filter_icon" />
              <span type="submit" className="filter">
                Filter
              </span>
            </div>
          </div>
          {/* Search product */}
          {/* All product */}
          <div className="all_product">
            <div className="total_product">
              <h2>Total product</h2>
              <h6>184</h6>
            </div>
            <div className="sort_product">
              <BsFilter className="sort_icon" />
              <p>Sort By</p>
            </div>
          </div>
          {/* All product */}

          <div className="grid_container animate__animated animate__fadeInLeft ">
            {allproduct != null ? (
              allproduct.map((card) => <Card card={card} />)
            ) : (
              <div className="flex justify-center my-44">
                <SpinnerCircular
                  size={150}
                  thickness={100}
                  speed={98}
                  color="rgba(57, 150, 172, 1)"
                  secondaryColor="rgba(0, 0, 0, 0)"
                />
              </div>
            )}
          </div>
        </section>

        <section id="productMobile">
          <Title
            title="Products"
            text="We display products based on the latest products we have, if you want
to see our old products please enter the name of the item"
          />

          <Carousel />
          {/* Search product */}
          <div className="product_searchDiv">
            <img
              src="https://i.postimg.cc/Kj8ykRjB/search-normal.png"
              alt="search-icon"
            />
            <input type="text" placeholder="Search property" />
            <button>Search</button>
          </div>
          {/* Search product */}
          {/* All product */}
          <div className="all_product">
            <div className="total_product">
              <h2>Total product</h2>
              <h6>184</h6>
            </div>
          </div>
          {/* All product */}
          <div className="grid_container animate__animated animate__fadeInLeft ">
            {
              (allproduct != null,
              allproduct.map((card) => (
                <div
                  key={card.id}
                  onClick={() => readMore(card.id)}
                  className="mobil-card"
                >
                  <img src={card.imageUrl} alt="card-photo" />
                  <h5 className="pg-1 pg-color-1 line-clamp ">
                    {card.category}
                  </h5>
                  <h3 className="header-three line-clamp">{card.title}</h3>
                  <p className="pg-3 pg-color-1 line-clamp">
                    {card.description}
                  </p>
                  <h6 className="header-six line-clamp">${card.price}</h6>
                </div>
              )))
            }
          </div>
        </section>
      </Layout>
    </>
  )
}
export default Product
