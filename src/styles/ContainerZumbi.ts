import styled, { keyframes } from 'styled-components'

const up = keyframes`
  0% {
    bottom: 65px;
  }
  20% {
    bottom: 210px;
  }
  50% {
    bottom: 210px;
  }
  100% {
    bottom: 65px;
  }
`

export const CharacterZumbi = styled.div`
  img {
    z-index: 3;
    position: absolute;
    bottom: 65px;
    left: 148px;
  }
`

export const CharacterZumbiAnimated = styled.div`
  img {
    z-index: 3;
    position: absolute;
    bottom: 90px;
    left: 148px;
    animation: ${up} 1s ease-out infinite;
  }
`