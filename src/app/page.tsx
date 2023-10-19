'use client'
import Header from '@/components/Header'
import { Context } from '@/context/Context'
import { useContext } from 'react'
import Characters from '@/components/Characters'
import ScreenGame from '@/components/ScreenGame'
import GameOver from '@/components/GameOver'

export default function Home() {
  const ctx = useContext(Context)

  return (
    <main>
      {ctx.modalOpen && <GameOver />}
      <Header />
      {
        ctx.characters === '' ? <Characters /> : <ScreenGame />
      }
    </main>  
  )
}
