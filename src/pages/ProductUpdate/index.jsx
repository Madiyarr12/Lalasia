import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import Title from './../../shared_components/Title/index'
import Layout from './../../shared_components/Layout/index'
import axios from 'axios'
import './update.css'
function ProductUpdate() {
  let params = useParams()
  let navigate = useNavigate()
  const [category, setCategory] = useState('')
  const [title, setTitle] = useState('')
  const [description, setDescription] = useState('')
  const [price, setPrice] = useState('')
  const [imageUrl, setImageUrl] = useState('')
  useEffect(() => {
    axios
      .get(`http://localhost:3000/productCard/${params.id}`)
      .then(function (response) {
        // handle success
        setCategory(response.data.category)
        setTitle(response.data.title)
        setDescription(response.data.description)
        setPrice(response.data.price)
        setImageUrl(response.data.imageUrl)
      })
      .catch(function (error) {
        // handle error
        console.log(error)
      })
      .then(function () {
        // always executed
      })
  }, [])
  function update() {
    axios
      .put(`http://localhost:3000/productCard/${params.id}`, {
        category: category,
        title: title,
        description: description,
        price: Number(price),
        imageUrl: imageUrl,
      })
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
  return (
    <Layout>
      <Title title="Update Product Informations" />
      <div className="create_page_parent">
        <img
          src={
            'https://images.unsplash.com/photo-1632935190508-bd46801c14af?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80'
          }
          alt="new-product-photo"
        />
        <div className="inputs">
          <input
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            type="text"
            placeholder="Enter Product Category"
          />
          <input
            placeholder="Enter Product Title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            type="text"
          />
          <input
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            type="text"
            placeholder="Enter Product Description"
          />
          <input
            value={price}
            onChange={(e) => setPrice(e.target.value)}
            type="number"
            placeholder="Enter Product Price"
          />
          <input
            value={imageUrl}
            onChange={(e) => setImageUrl(e.target.value)}
            type="text"
            placeholder="Enter Product Image URL"
          />
          <button onClick={update}>Update</button>
        </div>
      </div>
    </Layout>
  )
}

export default ProductUpdate
