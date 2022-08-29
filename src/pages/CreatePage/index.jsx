import axios from 'axios'
import React, { useState } from 'react'
import Layout from '../../shared_components/Layout'
import Title from '../../shared_components/Title'
import { useNavigate } from 'react-router-dom'
import './createPage.css'
function CreatePage() {
  let navigate = useNavigate()
  const [category, setCategory] = useState('')
  const [title, setTitle] = useState('')
  const [description, setDescription] = useState('')
  const [price, setPrice] = useState('')
  const [imageUrl, setImageUrl] = useState('')
  function addNewProduct() {
    axios
      .post('http://localhost:3000/productCard', {
        category: category,
        title: title,
        description: description,
        price: Number(price),
        imageUrl: imageUrl,
      })
      .then(function (response) {
        console.log(response)
      })
      .catch(function (error) {
        console.log(error)
      })
      navigate(`/product`)
  }

  return (
    <Layout>
      <Title title="Create New Product" />
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
          <button className='createBtn' onClick={addNewProduct}>Add New Product</button>
        </div>
      </div>
    </Layout>
  )
}

export default CreatePage
