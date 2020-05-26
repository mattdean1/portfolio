import React from 'react'
import styled from 'styled-components'

import github from '../images/social/github.png'
import linkedin from '../images/social/linkedin.png'
import twitter from '../images/social/twitter.png'

const Circle = styled.div`
  border-radius: 50%;
  width: 35px;
  height: 35px;
  display: flex;
  justify-content: center;
  align-items: center;
`

const Container = styled.div`
  position: fixed;
  top: 0;
  right: 0;
  padding: 20px;
  display: flex;
  flex-direction: row;
  & > ${Circle} {
    margin-right: 20px;
    &:last-child {
      margin-right: 0px;
    }
  }
`

const Img = styled.img`
  height: 100%;
  width: 100%;
`

const Social = () => (
  <Container>
    <Circle>
      <a href="https://github.com/mattdean1">
        <Img src={github} />
      </a>
    </Circle>
    <Circle>
      <a href="https://www.linkedin.com/in/deanmatt/">
       <Img src={linkedin} />
      </a>
    </Circle>
    <Circle>
      <a href="https://twitter.com/tersetweet">
        <Img src={twitter} />
      </a>
    </Circle>
  </Container>
)

export default Social