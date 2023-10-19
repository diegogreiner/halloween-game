import { Context } from '@/context/Context'
import { Section, Container, ContainerButtons, Button } from '@/styles/GameOver'
import React, { useContext } from 'react'
import menu from '@/assets/images/menu.png'
import reiniciar from '@/assets/images/reiniciar.png'
import Image from 'next/image'

export default function GameOver() {
  const ctx = useContext(Context)

  const handleClickReset = () => {
    ctx.setModalOpen(false)
    ctx.setCactoVerifyLost(false)
    ctx.setCharacterBruxaLost(false)
    ctx.setCharacterZumbiLost(false)
    ctx.setPoints(0)
  }

  const handleClickMenu = () => {
    ctx.setModalOpen(false)
    ctx.setCactoVerifyLost(false)
    ctx.setCharacterBruxaLost(false)
    ctx.setCharacterZumbiLost(false)
    ctx.setPoints(0)
    ctx.setIsLoading(true)
    ctx.setCharacters('')
  }

  return (
    <Section>
      <Container>
        <p>Pontuação total:</p>
        <h2>{ctx.points}</h2>
        <ContainerButtons>
          <Button onClick={handleClickReset}>
            <Image src={reiniciar} alt="reiniciar" width={50} height={50} priority />
          </Button>
          <Button onClick={handleClickMenu}>
            <Image src={menu} alt="menu" width={50} height={50} priority />
          </Button>
        </ContainerButtons>
      </Container>
    </Section>
  )
}