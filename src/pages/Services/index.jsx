import React from 'react'
import Layout from '../../shared_components/Layout'
import Title from '../../shared_components/Title'
import Portfolio from './Services_components/Section_bottom'
import ServicesTypes from './Services_components/Services_types'

function Services() {
  return (
    <Layout>
      <Title
        title="Services"
        text="The product crafted by talented crafter and using high quality material with love inside"
      />
      <img
        className="animate__animated animate__zoomIn"
        src="https://i.postimg.cc/ZqjjrLLj/Rectangle-24.png"
        alt="service_photo"
      />
      <ServicesTypes />
      <Portfolio />
    </Layout>
  )
}

export default Services
