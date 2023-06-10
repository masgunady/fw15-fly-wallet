import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import phoneImage from '@../../public/auth-img.png'

const ElementSideAuth = () => {
  return (
    <section className="hidden w-full h-full basis-3/5 px-7 md:flex flex-col items-center justify-center">
      <div className="lg:self-start lg:pl-16 xl:pl-24 text-white text-3xl font-bold italic">
        <Link href="/">FlyWallet</Link>
      </div>
      <div>
        <Image
          priority
          src={phoneImage}
          alt="Follow us"
          className="w-[500px]"
        />
      </div>
      <div className="text-2xl font-bold pb-7 text-white">
        App that Covering Banking Needs.
      </div>
      <div className="w-full max-w-[550px] text-base leading-7 text-white">
        FlyWallet is an application that focussing in banking needs for all
        users in the world. Always updated and always following world trends.
        5000+ users registered in FlyWallet everyday with worldwide users
        coverage.
      </div>
    </section>
  )
}

export default ElementSideAuth
