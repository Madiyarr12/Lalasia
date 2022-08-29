import React from 'react'
import Container from '../Container'
import Footer from '../Footer'
import Header from '../Header'
function Layout(props) {
  return (
    <Container>
      <Header />
      <div>{props.children}</div>
      <Footer />
    </Container>
  )
}

export default Layout
