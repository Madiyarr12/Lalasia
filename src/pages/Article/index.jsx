import React from 'react'
import Layout from '../../shared_components/Layout'
import Title from '../../shared_components/Title'
import ThirdArticle from './Article_components/Second_3'
import FirstArticle from './Article_components/Section_1'
import SecondArticle from './Article_components/Section_2'

function Article() {
  return (
    <Layout>
      <Title
        title="Article"
        text="We display products based on the latest products we have, if you want
to see our old products please enter the name of the item"
      />
      <FirstArticle />
      <SecondArticle />
      <ThirdArticle/>
    </Layout>
  )
}

export default Article
