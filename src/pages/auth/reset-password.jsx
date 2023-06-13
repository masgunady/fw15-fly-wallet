import React from 'react'
import { AiOutlineLock, AiOutlineMail } from 'react-icons/ai'
import { FiEye, FiEyeOff } from 'react-icons/fi'
import ElementSideAuth from '@/components/ElementSideAuth'

import { Formik } from 'formik'
import * as Yup from 'yup'

import { withIronSessionSsr } from 'iron-session/next'
import coockieConfig from '@/helpers/cookieConfig'
import axios from 'axios'
import { useRouter } from 'next/router'
import react from 'react'

export const getServerSideProps = withIronSessionSsr(
  async function getServerSideProps({ req, res }) {
    const token = req.session?.token

    if (token) {
      res.setHeader('location', '/home')
      res.statusCode = 302
      res.end()
      return { prop: { token } }
    }

    return {
      props: {
        token: null,
      },
    }
  },
  coockieConfig
)

const validationSchema = Yup.object({
  email: Yup.string().email('Email is invalid').required('Email is invalid'),
  password: Yup.string()
    .min(8, 'must have input 8 characters')
    .required('Password is invalid'),
  confirmPassword: Yup.string()
    .required('Confirm password is empty !')
    .oneOf([Yup.ref('password'), null], 'Passwords must match'),
})

const ResetPassword = () => {
  const [iconEye, setIconEye] = React.useState(false)
  const [typePassword, setTypePassword] = React.useState(false)
  const [iconEyeConf, setIconEyeConf] = React.useState(false)
  const [typePasswordConf, setTypePasswordConf] = React.useState(false)

  const handleInputPassword = () => {
    setIconEye(!typePassword)
    setTypePassword(!iconEye)
  }
  const handleConfirmPassword = () => {
    setIconEyeConf(!typePasswordConf)
    setTypePasswordConf(!iconEyeConf)
  }
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
            Now you can create a new password for your FlyWallet account. Type
            your password twice so we can confirm your new passsword.
          </div>
          <form className="w-full flex flex-col gap-5" autoComplete="off">
            <div className="flex flex-col gap-12">
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
                    placeholder="Create new password"
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
              <div className="border-b-[1px] border-[#eaeaea] w-full h-12 flex items-center gap-5">
                <div>
                  <i>
                    <AiOutlineLock size={20} />
                  </i>
                </div>
                <div className="h-full w-full relative">
                  <input
                    type={typePasswordConf ? 'text' : 'password'}
                    name=""
                    placeholder="Enter confirm password"
                    className="h-full w-full outline-none text-neutral"
                  />
                  <button
                    type="button"
                    onClick={handleConfirmPassword}
                    className="absolute top-3 right-2"
                  >
                    {iconEyeConf ? (
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
                Reset Password
              </button>
            </div>
          </form>
        </section>
      </div>
    </main>
  )
}

export default ResetPassword
