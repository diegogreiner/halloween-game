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

  const charactersAtual = ctx.characters === 'bruxa' ? ctx.characterBruxaLost : ctx.characterZumbiLost

  useEffect(() => {
    if (ctx.cactoVerifyLost && charactersAtual && !ctx.modalOpen) {
      ctx.setModalOpen(true)
    }
    if (ctx.cactoVerifyLost && !charactersAtual && !ctx.modalOpen) {
      setTimeout(() => {
        ctx.setPoints(ctx.points + 10)
      }, 500);
    }
    if (!ctx.modalOpen) {
      document.addEventListener('keydown', (e: KeyboardEvent) => {
        if (e.key === 'ArrowUp') {
          ctx.setUp(true)
          setTimeout(() => {
            ctx.setUp(false)
          }, 1000)
        }
      })
    }
  }, [charactersAtual, ctx])

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
