import React, { useContext } from 'react'
import { Context } from '@/context/Context'
import Image from 'next/image'
import { Cloud, CloudAnimated } from '@/styles/ContainerNuvem'
import cloud from '@/assets/images/nuvem.png'

export default function ContainerNuvem() {
  const ctx = useContext(Context)

  return (
    <>
      {
        ctx.modalOpen ? 
          <Cloud>
            <Image src={cloud} alt="nuvem" width={240} height={180} priority />
            <Image src={cloud} alt="nuvem" width={240} height={180} priority />
          </Cloud>
        : 
          <CloudAnimated>
            <Image src={cloud} alt="nuvem" width={240} height={180} priority />
            <Image src={cloud} alt="nuvem" width={240} height={180} priority />
          </CloudAnimated>
      }
    </>
  )
}
