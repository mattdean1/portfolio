import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  height: 70px;
`

const Triangle = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 0;
  height: 0;
  border-style: solid;
  border-width: 70px 0 0 100vw;
  border-color: transparent transparent transparent #f2f2f2;
  z-index: -1;
`

const Img = styled.img`
  height: 40px;
  width: 40px;
  margin-left: 20px;
`

const SectionTeaser = () => (
  <Container>
    <Triangle />
  </Container>
)

export default SectionTeaser