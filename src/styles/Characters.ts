import styled from 'styled-components'

export const Section = styled.section`
  display: flex;
  align-items: center;
  flex-direction: column;

  h2 {
    color: #6930C3;
    font-size: 36px;
    font-weight: 600;
    margin-bottom: 40px;
  }
`

export const Container = styled.div`
  display: flex;
  gap: 50px;
  margin-bottom: 40px;
`

export const ContainerImg = styled.div`
  background-color: #6930C3;
  width: 210px;
  height: 175px;
  border-radius: 10px;
  display: flex;
  justify-content: center;
  align-items: center;

  &:hover {
    cursor: pointer;
    opacity: 0.8;
  }
`

export const Button = styled.button`
  min-width: 300px;
  padding: 10px 0px;
  font-size: 36px;
  font-weight: 600;
  color: #fff;
  border-radius: 10px;
  background-color: #6930C3;
  border: none;

  &:hover {
    cursor: pointer;
    opacity: 0.8;
  }
`