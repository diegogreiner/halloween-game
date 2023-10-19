'use client'
import Header from '@/components/Header'
import { Context } from '@/context/Context'
import { useContext, useEffect } from 'react'
import Characters from '@/components/Characters'
import ScreenGame from '@/components/ScreenGame'
import GameOver from '@/components/GameOver'
import Loading from './loading'

export default function Home() {
  const ctx = useContext(Context)

  useEffect(() => {
    ctx.setIsLoading(false)
  })

  if(ctx.isLoading) {
    return (
      <Loading />
    )
  }

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