import React, { useContext, useEffect, useRef } from 'react'
import Image from 'next/image'
import bruxaGif from '@/assets/images/bruxa-gif.gif'
import { Context } from '@/context/Context'
import { CharacterBruxa, CharacterBruxaAnimated  } from '@/styles/ContainerBruxa'

export default function ContainerBruxa() {
  const ctx = useContext(Context)
  const bruxaRef = useRef<HTMLImageElement>(null)

  useEffect(() => {
    const intervalVerify = setInterval(() => {
      if (bruxaRef.current && bruxaRef.current.offsetTop <= 183 && bruxaRef.current.offsetTop >= 175) {
        ctx.setCharacterBruxaLost(false);
      } else if (bruxaRef.current && bruxaRef.current.offsetTop >= 183) {
        ctx.setCharacterBruxaLost(false);
      } else {
        ctx.setCharacterBruxaLost(true);
      }
    }, 1)
  
    return () => {
      clearInterval(intervalVerify);
    }
  }, [bruxaRef.current])

  return (
    <>
      {
        ctx.up ?
          <CharacterBruxaAnimated>
            <Image src={bruxaGif} alt="Bruxa" width={180} height={150} priority ref={bruxaRef} />
          </CharacterBruxaAnimated>
        :
          <CharacterBruxa>
            {!ctx.modalOpen && <Image src={bruxaGif} alt="Bruxa" width={180} height={150} priority />}
          </CharacterBruxa>
      }
    </>
  )
}
