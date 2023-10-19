import React, { useContext, useEffect, useRef } from 'react'
import Image from 'next/image'
import cacto from '@/assets/images/cacto.png'
import { Cacto, CactoAnimated } from '@/styles/ContainerCacto'
import { Context } from '@/context/Context'

export default function ContainerCacto() {
  const ctx = useContext(Context)
  const cactoRef = useRef<HTMLImageElement>(null)

  useEffect(() => {
    if (cactoRef.current) {
      const intervalVerify = setInterval(() => {
        if (cactoRef.current && cactoRef.current.offsetLeft >= 233) {
          ctx.setCactoVerifyLost(false);
        } else if (cactoRef.current && cactoRef.current.offsetLeft <= 200) {
          ctx.setCactoVerifyLost(false);
        } else {
          ctx.setCactoVerifyLost(true);
        }
      }, 1)

      return () => {
        clearInterval(intervalVerify);
      }
    }
  }, [cactoRef.current])


  return (
    <>
      {
        ctx.modalOpen ?
          <Cacto>
            <Image src={cacto} alt="cacto" width={150} height={150} priority />
          </Cacto>
          :
          <CactoAnimated>
            <Image src={cacto} alt="cacto" width={150} height={150} priority ref={cactoRef} />
          </CactoAnimated>
      }
    </>
  )
}
