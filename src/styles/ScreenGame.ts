import styled, { keyframes } from 'styled-components'

export const Section = styled.section`
  margin: 0 auto;
  max-width: 70%;
  height: 60vh;
`

export const ContainerInfo = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  margin: 0px 0px -10px 0px;
`

export const Instrution = styled.p`
  font-size: 30px;
  color: #6930C3;
  display: flex;
  align-items: center;

  img {
    gap: 10px
  }
`

export const Points = styled.p`
  font-size: 30px;
  color: #6930C3;
  display: flex;
  align-items: center;

  span {
    border-radius: 5px;
    font-size: 32px;
    font-weight: 600;
    background-color: #6930C3;
    color: #fff;
    min-width: 160px;
    padding: 5px 5px;
    text-align: center;
    margin-left: 20px;
  }
`

export const ContainerGame = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  border: 1px solid #6930C3;
  position: relative;
  height: 100%;
  overflow-x: hidden;
`

export const Sky = styled.div`
  background: linear-gradient(180deg, rgb(116,0,184,.7), rgb(105,48,195,.4));
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 85%;
`

export const Floor = styled.div`
  z-index: 2;
  background-color: #588157;
  width: 100%;
  height: 15%;
  position: absolute;
  bottom: 0;
  left: 0;
`