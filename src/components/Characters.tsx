import React, { useContext, useState } from 'react'
import Image from 'next/image'
import bruxa from '@/assets/images/bruxa-foto.png'
import zumbi from '@/assets/images/zombie-foto.png'
import { Context } from '@/context/Context'
import { Button, Container, ContainerImg, Section } from '@/styles/Characters'


export default function Characters() {
  const ctx = useContext(Context)
  const [characterActual, setCharacter] = useState('')

  const handleClickCharacter = (c: string) => {
    c === 'bruxa' ? setCharacter('bruxa') : setCharacter('zumbi')
  }

  return (
    <Section>
      <h2>Selecione o personagem:</h2>
      <Container>
        <ContainerImg style={characterActual === 'bruxa' ? {opacity: .8} : {}} onClick={() => handleClickCharacter('bruxa')}>
          <Image src={bruxa} alt="Bruxa" width={180} height={150} priority />
        </ContainerImg>
        <ContainerImg style={characterActual === 'zumbi' ? {opacity: .8} : {}} onClick={() => handleClickCharacter('zumbi')}>
          <Image src={zumbi} alt="Zumbi" width={130} height={160} priority />
        </ContainerImg>
      </Container>
      <Button onClick={() => ctx.setCharacters(characterActual)}>Começar</Button>
    </Section>
  )
}
