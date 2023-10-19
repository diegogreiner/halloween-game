import styled, { keyframes } from 'styled-components'

const cacto = keyframes`
  0% {
    right: -10%;
  }
  100% {
    right: 100%;
  }
`

export const CactoAnimated = styled.div`
  img {
    z-index: 1;
    position: absolute;
    bottom: 79px;
    right: -50%;
    animation: ${cacto} 3s linear infinite;
  }
`

export const Cacto = styled.div`
  img {
    z-index: 1;
    position: absolute;
    bottom: 79px;
    right: -50%;
  }
`