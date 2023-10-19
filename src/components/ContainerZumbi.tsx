import React, { useContext, useEffect, useRef } from 'react'
import Image from 'next/image'
import zumbiGif from '@/assets/images/zombie-gif.gif'
import { Context } from '@/context/Context'
import { CharacterZumbi, CharacterZumbiAnimated } from '@/styles/ContainerZumbi'

export default function ContainerZumbi() {
  const ctx = useContext(Context)
  const zumbiRef = useRef<HTMLImageElement>(null)


  useEffect(() => {
    const intervalVerify = setInterval(() => {
      if (zumbiRef.current && zumbiRef.current.offsetTop <= 175 && zumbiRef.current.offsetTop >= 165) {
        ctx.setCharacterZumbiLost(false);
      } else if (zumbiRef.current && zumbiRef.current.offsetTop >= 175) {
        ctx.setCharacterZumbiLost(false);
      } else {
        ctx.setCharacterZumbiLost(true);
      }
    }, 1)

    return () => {
      clearInterval(intervalVerify);
    }
  }, [zumbiRef.current, ctx])

  return (
    <>
      {
        ctx.up ?
          <CharacterZumbiAnimated>
            <Image src={zumbiGif} alt="Zumbi" width={150} height={180} priority ref={zumbiRef} />
          </CharacterZumbiAnimated>
          :
          <CharacterZumbi>
            {!ctx.modalOpen && <Image src={zumbiGif} alt="Bruxa" width={150} height={180} priority />}
          </CharacterZumbi>
      }
    </>
  )
}
