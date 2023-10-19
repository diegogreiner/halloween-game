import styled from 'styled-components'

export const HeaderContainer = styled.header`
  margin: 30px auto 20px auto;
  max-width: 750px;
  display: flex;
  justify-content: center;
  transition: all 1s;

  h1 {
    font-size: 64px;
    color: #7400B8;
    font-weight: 500;
    text-shadow: 2px 5px 5px rgba(0,0,0,0.3);
  }
`

export const Container = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-around;
  align-items: center;
`