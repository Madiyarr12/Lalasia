import React, { useContext, useEffect, useState } from 'react'
import Layout from '../../shared_components/Layout'
import { useNavigate, useParams } from 'react-router-dom'
import './Section_1.css'
import axios from 'axios'
import Card from './../../shared_components/Card/index'
import { AuthContext } from '../../shared_components/utilities/AuthProvider'
function ProductDetail() {
  let navigate = useNavigate()
  const { admin } = useContext(AuthContext)
  const [aboutProduct, setAboutProduct] = useState([])
  const [related, setRelated] = useState([])
  let params = useParams()
  useEffect(() => {
    axios
      .get(`http://localhost:3000/productCard/${params.id}`)
      .then(function (response) {
        // handle success
        setAboutProduct(response.data)
      })
      .catch(function (error) {
        // handle error
        console.log(error)
      })
      .then(function () {
        // always executed
      })
  }, [])

  useEffect(() => {
    axios
      .get('http://localhost:3000/productCard')
      .then(function (response) {
        // handle success
        setRelated(response.data)
      })
      .catch(function (error) {
        // handle error
        console.log(error)
      })
      .then(function () {
        // always executed
      })
  }, [])
  function productDelete(productId) {
    axios
      .delete(`http://localhost:3000/productCard/${productId}`)
      .then(function (response) {
        navigate('/product')
      })
      .catch(function (error) {
        // handle error
        console.log(error)
      })
      .then(function () {
        // always executed
      })
  }
  function Update() {
    navigate(`/productUpdate/${aboutProduct.id}`)
  }

  return (
    <Layout>
      <section className="product_deatil-one">
        <img src={aboutProduct.imageUrl} alt="product_photo" />
        <div className="aboutProductText">
          <h2 className="header-two tt-color-1 title">{aboutProduct.title}</h2>
          <p className="pg-3 pg-color-3 mb-[10px] description">
            {aboutProduct.description}
          </p>
          <h5 className="header-five tt-color-1 mb-[20px] ">Color</h5>
          <div className="colors mb-[20px]">
            <div className="colors_item-1 bg-black"></div>
            <div className="colors_item-2 bg-[#314443]"></div>
            <div className="colors_item-3 bg-[#C5A26E]"></div>
            <div className="colors_item-4 bg-[#D8DBE0]"></div>
          </div>
          <p className="pg-3 pg-color-3 mb-[30px]">
            Faucibus facilisi morbi pharetra quis sed. Vitae suspendisse
            facilisis facilisis ligula felis et a parturient aenean. Ac maecenas
            ultricies felis risus scelerisque duis posuere...
          </p>
          <h2 className="header-two tt-color-1">${aboutProduct.price}</h2>
          <div className="buttons">
            <button className="btn-buyNow header-five">Buy Now</button>
          </div>
          {admin ? (
            <div className="buttons">
              <button
                onClick={(e) => productDelete(aboutProduct.id)}
                className="deleteBtn header-five"
              >
                Delete
              </button>
              <button onClick={Update} className="updatebtn header-five">
                Update
              </button>
            </div>
          ) : null}
        </div>
      </section>
      <section className="related_products">
        <h3 className="header-three tt-color-1">Related Items</h3>
        <div className="grid grid-cols-3 gap-[30px]">
          {(related != null, related.map((card) => <Card card={card} />))}
        </div>
      </section>
    </Layout>
  )
}

export default ProductDetail
