import React from 'react'
import Logo from '../assets/images/pumpkin.png'
import Image from 'next/image'
import { Container, HeaderContainer } from '@/styles/Header'


export default function Header() {
  return (
    <HeaderContainer>
      <Container>
        <Image src={Logo} alt="Logo" width={110} height={110} priority />
        <h1>Halloween Game</h1>
      </Container>
    </HeaderContainer>
  )
}