'use client'

import { ContextType } from "@/types/ContextType"
import { ReactNode, createContext, useState } from "react"

export const Context = createContext<ContextType>({
  isLoading: true,
  modalOpen: false,
  points: 0,
  characters: '',
  up: false,
  cactoVerifyLost: false,
  characterBruxaLost: false,
  characterZumbiLost: false,
  setCactoVerifyLost: () => {},
  setCharacterBruxaLost: () => {},
  setCharacterZumbiLost: () => {},
  setUp: () => {},
  setIsLoading: () => {},
  setModalOpen: () => {},
  setPoints: () => {},
  setCharacters: () => {}
})

export const ContextProvider = ({children}: {children: ReactNode}) => {
  const [isLoading, setIsLoading] = useState(true)
  const [modalOpen, setModalOpen] = useState(false)
  const [points, setPoints] = useState(0)
  const [characters, setCharacters] = useState('')
  const [up, setUp] = useState(false)
  const [cactoVerifyLost, setCactoVerifyLost] = useState(false)
  const [characterBruxaLost, setCharacterBruxaLost] = useState(false)
  const [characterZumbiLost, setCharacterZumbiLost] = useState(false)

  return (
    <Context.Provider value={{isLoading, modalOpen, points, characters, up, cactoVerifyLost, characterBruxaLost, characterZumbiLost, setCactoVerifyLost, setCharacterBruxaLost, setCharacterZumbiLost, setUp, setCharacters, setModalOpen, setPoints, setIsLoading}}>
      {children}
    </Context.Provider>
  )
}