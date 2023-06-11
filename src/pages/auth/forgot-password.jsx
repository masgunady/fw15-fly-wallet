import React from 'react'
import { AiOutlineMail } from 'react-icons/ai'
import ElementSideAuth from '@/components/ElementSideAuth'

const ForgotPassword = () => {
  return (
    <main>
      <div className=" bg-login-pattern bg-no-repeat bg-cover w-full h-screen flex items-center justify-center">
        <ElementSideAuth />
        <section className="bg-white w-full h-full flex flex-col justify-center items-start gap-9 lg:basis-2/5 pl-5 lg:pl-11 pr-5 lg:pr-11 xl:pr-36">
          <div className="text-neutral text-2xl font-bold leading-8">
            Did You Forgot Your Password? Don&apos;t Worry, You Can Reset Your
            Password In a Minutes.
          </div>
          <div className="text-base text-neutral leading-6">
            To reset your password, you must type your e-mail and we will send a
            link to your email and you will be directed to the reset password
            screens.
          </div>
          <form className="w-full flex flex-col gap-5" autoComplete="off">
            <div className="flex flex-col gap-12">
              <div className="border-b-[1px] border-[#eaeaea] w-full h-12 flex items-center gap-5">
                <div>
                  <i>
                    <AiOutlineMail size={20} />
                  </i>
                </div>
                <div className="h-full w-full">
                  <input
                    type="email"
                    name=""
                    placeholder="Enter your e-mail"
                    className="h-full w-full outline-none text-neutral"
                  />
                </div>
              </div>
            </div>
            <div className="self-center w-full mt-7">
              <button
                type="submit"
                className="w-full btn btn-primary capitalize text-base text-white font-semibold hover:font-bold"
              >
                Confirm
              </button>
            </div>
          </form>
        </section>
      </div>
    </main>
  )
}

export default ForgotPassword
