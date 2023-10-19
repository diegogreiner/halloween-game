import styled, { keyframes } from 'styled-components'

const show = keyframes`
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
`

export const Section = styled.section`
  width: 100%;
  height: 100%;
  z-index: 4;
  position: fixed;
  top: 0;
  left: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  animation: ${show} 1s ease;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    opacity: 0.3;
    background-color: #000;
  }
`

export const Container = styled.div`
  z-index: 5;
  width: 700px;
  height: 440px;
  background-color: #fff;
  border-radius: 20px;
  color: #6930C3;
  font-weight: 600;
  box-shadow: 1px 2px 30px #6930C3;
  border: 1px solid #6930C3;
  text-align: center;
  display: flex;
  align-items: center;
  justify-content: start;
  flex-direction: column;
  gap: 20px;

  p {
    font-size: 26px;
    margin-top: 70px;
  }

  h2 {
    font-size: 40px;
  }
`

export const ContainerButtons = styled.div`
  display: flex;
  justify-content: center;
  gap: 30px;
`

export const Button = styled.button`
  display: inline-flex;
  padding: 15px 40px;
  border-radius: 5px;
  border: none;
  background-color: #6930C3;

  &:hover {
    cursor: pointer;
    opacity: 0.9;
  }
`