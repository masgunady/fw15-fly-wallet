import React from 'react'
import {
  AiOutlineLock,
  AiOutlineMail,
  AiOutlineExclamation,
} from 'react-icons/ai'
import { FiEye, FiEyeOff } from 'react-icons/fi'
import ElementSideAuth from '@/components/ElementSideAuth'
import Link from 'next/link'
import { Formik } from 'formik'
import * as Yup from 'yup'
import { withIronSessionSsr } from 'iron-session/next'
import cookieConfig from '@/helpers/cookieConfig'
import axios from 'axios'
import { useRouter } from 'next/router'
import Head from 'next/head'

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
  cookieConfig
)

const validationSchema = Yup.object({
  email: Yup.string()
    .email('Please insert valid email')
    .required('Email is required'),
  password: Yup.string().required('Password is required'),
})

const Login = () => {
  const router = useRouter()
  const [iconEye, setIconEye] = React.useState(false)
  const [errorMessage, setErrorMessage] = React.useState('')
  const [typePassword, setTypePassword] = React.useState(false)
  const [loading, setLoading] = React.useState(false)

  const doLogin = async (values) => {
    setErrorMessage('')
    setLoading(true)
    const form = new URLSearchParams({
      email: values.email,
      password: values.password,
    }).toString()

    const { data } = await axios.post('http://localhost:3000/api/login', form)
    if (data.success === false) {
      setErrorMessage('Wrong email or password !')
      setLoading(false)
    }
    if (data.success === true) {
      router.push('/user/dashboard')
      setLoading(false)
    }
  }

  const handleInputPassword = () => {
    setIconEye(!typePassword)
    setTypePassword(!iconEye)
  }

  return (
    <main>
      <Head>
        <title>Login</title>
      </Head>
      <div className=" bg-login-pattern bg-no-repeat bg-cover w-full h-screen flex items-center justify-center">
        <ElementSideAuth />
        <section className="bg-white w-full h-full flex flex-col justify-center items-start gap-9 lg:basis-2/5 pl-5 lg:pl-11 pr-5 lg:pr-11 xl:pr-36">
          <div className="text-neutral text-2xl font-bold leading-8">
            Start Accessing Banking Needs With All Devices and All Platforms
            With 30.000+ Users
          </div>
          <div className="text-base text-neutral leading-6">
            Transfering money is eassier than ever, you can access FlyWallet
            wherever you are. Desktop, laptop, mobile phone? we cover all of
            that for you!
          </div>
          {errorMessage && (
            <div className="flex flex-row justify-center alert alert-error shadow-lg text-white text-lg">
              <AiOutlineExclamation size={30} />
              {errorMessage}
            </div>
          )}

          <Formik
            initialValues={{
              email: '',
              password: '',
            }}
            validationSchema={validationSchema}
            onSubmit={doLogin}
          >
            {({
              values,
              errors,
              touched,
              handleChange,
              handleBlur,
              handleSubmit,
            }) => (
              <form
                onSubmit={handleSubmit}
                className="w-full flex flex-col gap-5"
                autoComplete="off"
              >
                <div className="flex flex-col gap-12">
                  <div
                    className={`border-b-[1px] border-[#eaeaea] ${
                      errors.email && touched.email && 'border-error'
                    } w-full h-12 flex items-center gap-5`}
                  >
                    <div>
                      <i>
                        <AiOutlineMail
                          size={20}
                          className={
                            errors.email && touched.email && 'text-error'
                          }
                        />
                      </i>
                    </div>
                    <div className="h-full w-full">
                      <input
                        type="email"
                        name="email"
                        placeholder="Enter your e-mail"
                        className="h-full w-full outline-none text-neutral"
                        onChange={handleChange}
                        onBlur={handleBlur}
                        value={values.email}
                      />
                      {errors.email && touched.email && (
                        <label className="label">
                          <span className="label-text-alt text-error">
                            {errors.email}
                          </span>
                        </label>
                      )}
                    </div>
                  </div>
                  <div
                    className={`border-b-[1px] border-[#eaeaea] ${
                      errors.password && touched.password && 'border-error'
                    } w-full h-12 flex items-center gap-5`}
                  >
                    <div>
                      <i>
                        <AiOutlineLock
                          size={20}
                          className={
                            errors.password && touched.password && 'text-error'
                          }
                        />
                      </i>
                    </div>
                    <div className="h-full w-full relative">
                      <input
                        type={typePassword ? 'text' : 'password'}
                        name="password"
                        placeholder="Enter your password"
                        className="h-full w-full outline-none text-neutral"
                        onChange={handleChange}
                        onBlur={handleBlur}
                        value={values.password}
                      />
                      {errors.password && touched.password && (
                        <label className="label">
                          <span className="label-text-alt text-error">
                            {errors.password}
                          </span>
                        </label>
                      )}
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
                <div className="self-end text-info font-semibold">
                  <Link
                    href="/auth/forgot-password"
                    className="hover:font-bold"
                  >
                    Forgot Password ?
                  </Link>
                </div>
                <div className="self-center w-full mt-7">
                  {loading ? (
                    <button className="w-full btn btn-primary capitalize text-base text-white font-semibold hover:font-bold">
                      <span className="loading loading-spinner loading-sm"></span>
                    </button>
                  ) : (
                    <button className="w-full btn btn-primary capitalize text-base text-white font-semibold hover:font-bold">
                      Log In
                    </button>
                  )}

                  {/* <button
                    type="submit"
                    className="w-full btn btn-primary capitalize text-base text-white font-semibold hover:font-bold"
                  >
                    Login
                  </button> */}
                </div>
                <div className="self-center w-full text-center pt-5">
                  Don&apos;t have an account? Let&apos;s{' '}
                  <Link
                    href="/auth/register"
                    className="text-info font-semibold hover:font-bold"
                  >
                    Sign Up
                  </Link>
                </div>
              </form>
            )}
          </Formik>
        </section>
      </div>
    </main>
  )
}

export default Login
