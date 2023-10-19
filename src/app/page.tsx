'use client'
import Header from '@/components/Header'
import { Context } from '@/context/Context'
import { useContext, useEffect } from 'react'
import { Inter } from 'next/font/google'
import Characters from '@/components/Characters'
import ScreenGame from '@/components/ScreenGame'
import Loading from '@/components/Loading'
import GameOver from '@/components/GameOver'

export const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  const ctx = useContext(Context)
  
  useEffect(() => {
    ctx.setIsLoading(false)
  })

  if(ctx.isLoading) {
    return (
      <main className={inter.className}>
        <Loading />
      </main>
    )
  }

  return (
    <main className={inter.className}>
      {ctx.modalOpen && <GameOver />}
      <Header />
      {
        ctx.characters === '' ? <Characters /> : <ScreenGame />
      }
    </main>  
  )
}
