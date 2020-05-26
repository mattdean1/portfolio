import React from 'react'
import styled from 'styled-components'

import Image from './image'

const Container = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`

const ImageContainer = styled.div`
  height: 300px;
  width: 300px;
  border-radius: 50%;
  overflow: hidden;
`

const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  padding: 50px;
`

const Link = styled.div`
  padding: 10px;
  color: black;
  font-family: yikes;
  font-size: 1.2em;
`

const About = () => (
  <Container>
    <ImageContainer>
      <Image />
    </ImageContainer>
    <TextContainer>
      <h2 style={{marginBottom: '20px'}}>Full-stack software engineer</h2>
      <h2 style={{marginBottom: '20px'}}>3+ years experience</h2>
      <h2 style={{marginBottom: '30px'}}>Currently looking for a backend or data focused role </h2>
      <h3>Key skills:</h3>
      <ul style={{marginBottom: '30px'}}>
        <li>Infrastructure: Serverless, Kubernetes, AWS</li>
        <li>Backend: Node, TypeScript, Python</li>
        <li>Frontend: React, React Native, Vue</li>
      </ul>
      <div style={{display: 'flex', flexDirection: 'row'}}>
        <a href="https://drive.google.com/open?id=1U_nlTPKHsG2wevHrVH59kGU1EtRC9t4D" target="blank"><Link>CV</Link></a>
        <a href="https://github.com/mattdean1" target="blank"><Link>GitHub</Link></a>
      </div>
    </TextContainer>
  </Container>
)

export default About