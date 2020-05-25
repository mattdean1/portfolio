import React from "react"
import styled from 'styled-components'

import Layout from "../components/layout"
import SEO from "../components/seo"
import Social from '../components/Social'
import Sections from '../components/Sections'
import SectionTeaser from '../components/SectionTeaser'
import Title from '../components/Title'



const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: calc(100vh - 70px);
`




const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <Social />
    {/* <Sections /> */}
    <Container>
      <Title />
      
      
    </Container>
    <SectionTeaser />
    <Container style={{backgroundColor: '#f2f2f2'}}></Container>
  </Layout>
)

export default IndexPage
