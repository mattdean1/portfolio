import React from 'react'
import styled from 'styled-components'

const Circle = styled.div`
  background-color: lightblue;
  border-radius: 50%;
  width: 50px;
  height: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
`

const Container = styled.div`
  position: absolute;
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

const Social = () => (
  <Container>
    <Circle>1</Circle>
    <Circle>2</Circle>
    <Circle>3</Circle>
  </Container>
)

export default Social