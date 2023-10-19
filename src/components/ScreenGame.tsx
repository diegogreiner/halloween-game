import { Context } from '@/context/Context'
import React, { useContext, useEffect, useState } from 'react'
import Image from 'next/image'
import up from '@/assets/images/up.png'
import { Section, ContainerGame, ContainerInfo, Instrution, Points, Sky, Floor } from '@/styles/ScreenGame'
import ContainerCacto from './ContainerCacto'
import ContainerBruxa from './ContainerBruxa'
import ContainerZumbi from './ContainerZumbi'
import ContainerNuvem from './ContainerNuvem'

export default function ScreenGame() {
  const ctx = useContext(Context)

  useEffect(() => {
    const charactersAtual = ctx.characters === 'bruxa' ? ctx.characterBruxaLost : ctx.characterZumbiLost
    console.log('cacto: ' + ctx.cactoVerifyLost)
    console.log('zumbi: ' + ctx.characterZumbiLost)
    console.log('bruxa: ' + ctx.characterBruxaLost)
    if (ctx.cactoVerifyLost && charactersAtual && !ctx.modalOpen) {
      ctx.setModalOpen(true)
    } else if (ctx.cactoVerifyLost && !charactersAtual && !ctx.modalOpen) {
      ctx.setPoints(ctx.points + 10)   
    }
    if(ctx.modalOpen === false) {
      document.addEventListener('keydown', (e: KeyboardEvent) => {
        if (e.key === 'ArrowUp') {
          ctx.setUp(true)
          setTimeout(() => {
            ctx.setUp(false)
          }, 1000)
        }
      })
    }
  }, [KeyboardEvent, ctx.cactoVerifyLost, ctx.characterBruxaLost, ctx.characterZumbiLost, ctx])


  return (
    <>
      <Section>
        <ContainerInfo>
          <Instrution>Aperte <Image src={up} alt="up" width={30} height={30} priority /> para pular</Instrution>
          <Points>Pontuação: <span>{ctx.points}</span></Points>
        </ContainerInfo>
        <ContainerGame>
          <Sky></Sky>
          <ContainerCacto />
          <ContainerNuvem />
          {ctx.characters === 'bruxa' ? <ContainerBruxa /> : <ContainerZumbi />}
          <Floor></Floor>
        </ContainerGame>
      </Section>
    </>
  )
}
