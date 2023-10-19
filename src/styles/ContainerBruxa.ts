import styled, { keyframes } from 'styled-components'

const up = keyframes`
  0% {
    bottom: 90px;
  }
  20% {
    bottom: 230px;
  }
  50% {
    bottom: 230px;
  }
  100% {
    bottom: 90px;
  }
`

export const CharacterBruxa = styled.div`
  img {
    z-index: 3;
    position: absolute;
    bottom: 90px;
    left: 80px;
  }
`

export const CharacterBruxaAnimated = styled.div`
  img {
    z-index: 3;
    position: absolute;
    bottom: 90px;
    left: 80px;
    animation: ${up} 1s ease-out infinite;
  }
`