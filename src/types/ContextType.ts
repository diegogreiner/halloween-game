import { CharacterBruxa } from '@/styles/ContainerBruxa';
import { Dispatch, SetStateAction } from "react"

export type ContextType = {
  isLoading: boolean
  modalOpen: boolean
  points: number
  characters: string
  up: boolean
  cactoVerifyLost: boolean
  characterBruxaLost: boolean
  characterZumbiLost: boolean
  setCharacterBruxaLost: Dispatch<SetStateAction<boolean>>
  setCharacterZumbiLost: Dispatch<SetStateAction<boolean>>
  setCactoVerifyLost: Dispatch<SetStateAction<boolean>>
  setUp: Dispatch<SetStateAction<boolean>>
  setCharacters: Dispatch<SetStateAction<string>>
  setModalOpen: Dispatch<SetStateAction<boolean>>
  setPoints: Dispatch<SetStateAction<number>>
  setIsLoading: Dispatch<SetStateAction<boolean>>
}