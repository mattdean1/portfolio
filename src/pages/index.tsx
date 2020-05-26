import React from "react"
import styled from 'styled-components'

import Layout from "../components/layout"
import SEO from "../components/seo"
import Social from '../components/Social'
import Sections from '../components/Sections'
import SectionTeaser from '../components/SectionTeaser'
import Title from '../components/Title'
import About from '../components/About'
import { config } from '../config'

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: calc(100vh - 80px);

  @media only screen 
  and (max-width: ${config.bigBreakpoint}px) 
  and (orientation: landscape) {
    height: 400px
  }
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
    <Container style={{backgroundColor: '#f2f2f2'}}>
      <About/>
    </Container>
  </Layout>
)

export default IndexPage
