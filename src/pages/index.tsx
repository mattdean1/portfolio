import React from "react"
import styled from 'styled-components'

import Layout from "../components/layout"
import SEO from "../components/seo"
import Social from '../components/Social'
import Sections from '../components/Sections'

const Title = styled.div`
  color: gray;
`
const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
`

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <Social />
    <Sections />
    <Container>
      <h1>Hey, I'm Matt</h1>
      <h2>check out the links on the right -></h2>
    </Container>
  </Layout>
)

export default IndexPage
