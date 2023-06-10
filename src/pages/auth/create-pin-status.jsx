import React from 'react'
import { AiOutlineCheck } from 'react-icons/ai'
import ElementSideAuth from '@/components/element-side-auth'
import Link from 'next/link'

function CreatePinStatus() {
  return (
    <main>
      <div className=" bg-login-pattern bg-no-repeat bg-cover w-full h-screen flex items-center justify-center">
        <ElementSideAuth />
        <section className="bg-white w-full h-full flex flex-col justify-center items-start gap-9 lg:basis-2/5 pl-5 lg:pl-11 pr-5 lg:pr-11 xl:pr-36">
          <div>
            <div className="w-16 h-16 bg-[#1EC15F] flex items-center justify-center rounded-full">
              <i>
                <AiOutlineCheck size={50} className="text-white" />
              </i>
            </div>
          </div>
          <div className="text-neutral text-2xl font-bold leading-8">
            Your PIN Was Successfully Created
          </div>
          <div className="text-base text-neutral leading-6">
            Your PIN was successfully created and you can now access all the
            features in FlyWallet.
          </div>
          <div className="self-center w-full mt-7">
            <Link
              href="/"
              className="w-full btn btn-primary capitalize text-base text-white font-semibold hover:font-bold"
            >
              Go to dashboard
            </Link>
          </div>
        </section>
      </div>
    </main>
  )
}

export default CreatePinStatus
