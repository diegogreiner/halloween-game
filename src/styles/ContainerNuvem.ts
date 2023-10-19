import styled, { keyframes } from 'styled-components'

const cloudFirst = keyframes`
  0% {
    right: -50%;
  }
  100% {
    right: 100%;
  }
`

const cloudLast = keyframes`
  0% {
    right: -50%;
  }
  100% {
    right: 100%;
  }
`

export const Cloud = styled.div`
  img:first-child {
    z-index: 1;
    position: absolute;
    top: 79px;
    right: -50%;
  }
  img:last-child {
    z-index: 1;
    position: absolute;
    top: 30px;
    right: -50%;
  }
`

export const CloudAnimated = styled.div`
  img:first-child {
    z-index: 1;
    position: absolute;
    top: 79px;
    animation: ${cloudFirst} 15s linear infinite;
  }
  img:last-child {
    z-index: 1;
    position: absolute;
    top: 30px;
    right: -50%;
    animation: ${cloudLast} 15s 7.5s linear infinite;
  }
`