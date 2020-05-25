import React from 'react'
import styled from 'styled-components'

import downArrow from '../images/down-arrow.png'

const Img = styled.img`
  height: 17px;
  width: 17px;
`

const MainTitle = styled.h1`
`
const Subtitle = styled.h2`
  margin-bottom: 5px;
`

const SubtitleContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  position: absolute;
  bottom: 70px;
`

const Title = () => (
  <>
    <MainTitle>hi, i'm matt</MainTitle>

    <SubtitleContainer>
      <Subtitle>scroll down</Subtitle>
      <Img src={downArrow} />
    </SubtitleContainer>
  </>
)

export default Title