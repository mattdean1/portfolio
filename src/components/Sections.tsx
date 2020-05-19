import React from 'react'
import styled from 'styled-components'

const Section = styled.div`
  padding: 5px 0;
  background-color: paleturquoise;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 200px;
`

const Container = styled.div`
  position: absolute;
  bottom: 0;
  right: 0;
  display: flex;
  flex-direction: column;
  padding: 20px;
  & > div {
    margin-bottom: 5px;
    &:last-child {
      margin-bottom: 0;
    }
  }
`

const Sections = () => (
  <Container>
    <Section>About</Section>
    <Section>CV</Section>
    <Section>Portfolio</Section>
  </Container>
)

export default Sections