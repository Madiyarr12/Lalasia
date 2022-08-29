import React from 'react'
import 'animate.css'
import Container from '../../shared_components/Container'
import Layout from '../../shared_components/Layout'
import Title from '../../shared_components/Title'
import SectionOne from './Home_components/Section_1/index'
import SectionTwo from './Home_components/Section_2/index'
import SectionThird from './Home_components/Section_3/index'
import SectionFourth from './Home_components/Section_4/index'
import SectionFifth from './Home_components/section_5'
import SectionSixth from './Home_components/Section_6'

function Home() {
  return (
    <Container>
      <Layout>
        <div className="animate__animated animate__fadeInDown">
          <Title
            className="animate__animated animate__bounce"
            title="Discover Furniture With High Quality Wood"
            text="Pellentesque etiam blandit in tincidunt at donec. Eget ipsum dignissim placerat nisi, adipiscing mauris non. Purus parturient viverra nunc, tortor sit laoreet. Quam tincidunt aliquam adipiscing tempor."
          />
        </div>
        <SectionOne />
        <SectionTwo />
        <SectionThird />
        <SectionFourth />
        <SectionFifth />
        <SectionSixth />
      </Layout>
    </Container>
  )
}

export default Home
