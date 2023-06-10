import React from 'react'
import { AiOutlineLock, AiOutlineMail } from 'react-icons/ai'
import { FiEye, FiEyeOff } from 'react-icons/fi'
import { IoPersonOutline } from 'react-icons/io5'
import Link from 'next/link'
import ElementSideAuth from '@/components/element-side-auth'

function Register() {
  const [iconEye, setIconEye] = React.useState(false)
  const [typePassword, setTypePassword] = React.useState(false)

  const handleInputPassword = () => {
    setIconEye(!typePassword)
    setTypePassword(!iconEye)
  }
  return (
    <main>
      <div className=" bg-login-pattern bg-no-repeat bg-cover w-full h-screen flex items-center justify-center">
        <ElementSideAuth />
        <section className="bg-white w-full h-full flex flex-col justify-center items-start gap-9 lg:basis-2/5 pl-5 lg:pl-11 pr-5 lg:pr-11 xl:pr-36 pt-16">
          <div className="text-neutral text-2xl font-bold leading-8">
            Start Accessing Banking Needs With All Devices and All Platforms
            With 30.000+ Users
          </div>
          <div className="text-base text-neutral leading-6">
            Transfering money is eassier than ever, you can access FlyWallet
            wherever you are. Desktop, laptop, mobile phone? we cover all of
            that for you!
          </div>
          <form className="w-full flex flex-col gap-5" autoComplete="off">
            <div className="flex flex-col gap-9">
              <div className="border-b-[1px] border-[#eaeaea] w-full h-12 flex items-center gap-5">
                <div>
                  <i>
                    <IoPersonOutline size={20} />
                  </i>
                </div>
                <div className="h-full w-full">
                  <input
                    type="text"
                    name=""
                    placeholder="Enter your firstname"
                    className="h-full w-full outline-none text-neutral"
                  />
                </div>
              </div>
              <div className="border-b-[1px] border-[#eaeaea] w-full h-12 flex items-center gap-5">
                <div>
                  <i>
                    <IoPersonOutline size={20} />
                  </i>
                </div>
                <div className="h-full w-full">
                  <input
                    type="text"
                    name=""
                    placeholder="Enter your lastname"
                    className="h-full w-full outline-none text-neutral"
                  />
                </div>
              </div>
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
              <div className="border-b-[1px] border-[#eaeaea] w-full h-12 flex items-center gap-5">
                <div>
                  <i>
                    <AiOutlineLock size={20} />
                  </i>
                </div>
                <div className="h-full w-full relative">
                  <input
                    type={typePassword ? 'text' : 'password'}
                    name=""
                    placeholder="Enter your password"
                    className="h-full w-full outline-none text-neutral"
                  />
                  <button
                    type="button"
                    onClick={handleInputPassword}
                    className="absolute top-3 right-2"
                  >
                    {iconEye ? (
                      <i>
                        <FiEye size={20} />
                      </i>
                    ) : (
                      <i>
                        <FiEyeOff size={20} />
                      </i>
                    )}
                  </button>
                </div>
              </div>
            </div>
            <div className="self-center w-full mt-7">
              <button
                type="submit"
                className="w-full btn btn-primary capitalize text-base text-white font-semibold hover:font-bold"
              >
                Sign Up
              </button>
            </div>
            <div className="self-center w-full text-center pt-5">
              Already have an account? Let&apos;s{' '}
              <Link
                href="/auth/login"
                className="text-info font-semibold hover:font-bold"
              >
                Login
              </Link>
            </div>
          </form>
        </section>
      </div>
    </main>
  )
}

export default Register
