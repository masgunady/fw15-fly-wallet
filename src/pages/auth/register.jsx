import React from 'react'
import {
  AiOutlineLock,
  AiOutlineMail,
  AiOutlineExclamation,
} from 'react-icons/ai'
import { FiEye, FiEyeOff } from 'react-icons/fi'
import { IoPersonOutline } from 'react-icons/io5'
import Link from 'next/link'
import ElementSideAuth from '@/components/ElementSideAuth'
import Head from 'next/head'
import { withIronSessionSsr } from 'iron-session/next'
import cookieConfig from '@/helpers/cookieConfig'
import axios from 'axios'
import { useRouter } from 'next/router'
import { Formik } from 'formik'
import * as Yup from 'yup'
import { useDispatch } from 'react-redux'
import { saveEmail } from '@/redux/reducers/auth'
import styles from './Auth.module.css'

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
  username: Yup.string()
    .required('Username is required')
    .min(3, 'Please enter username min 3 character'),
  email: Yup.string()
    .email('Please inser valid email')
    .required('Email is required'),
  password: Yup.string()
    .min(4, 'Password min 4 characters')
    .required('Password is required'),
})

const Register = () => {
  const dispatch = useDispatch()
  const router = useRouter()
  const [errorMessage, setErrorMessage] = React.useState('')
  const [loading, setLoading] = React.useState(false)
  const [iconEye, setIconEye] = React.useState(false)
  const [typePassword, setTypePassword] = React.useState(false)

  const doRegister = async (values) => {
    try {
      setLoading(true)
      setErrorMessage('')
      const form = new URLSearchParams({
        username: values.username,
        email: values.email,
        password: values.password,
      }).toString()

      const { data } = await axios.post('/api/register', form)
      // const { data } = await axios.post(
      //   'http://localhost:3000/api/register',
      //   form
      // )

      if (data.success === true) {
        dispatch(saveEmail(values.email))
        router.push('/auth/create-pin')
      }
      const message = data.message
      if (message?.includes('duplicate')) {
        setErrorMessage('Email has been registered!')
      }
    } finally {
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
        <title>Register</title>
      </Head>
      <div
        className={`${styles.side_auth} bg-no-repeat bg-cover w-full h-screen flex items-center justify-center`}
      >
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
          {errorMessage && (
            <div className="flex flex-row justify-center alert alert-error shadow-lg text-white text-lg">
              <AiOutlineExclamation size={30} />
              {errorMessage}
            </div>
          )}
          <Formik
            initialValues={{
              username: '',
              email: '',
              password: '',
            }}
            validationSchema={validationSchema}
            onSubmit={doRegister}
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
                <div className="flex flex-col gap-9">
                  <div
                    className={`border-b-[1px] ${
                      errors.username && touched.username
                        ? 'border-error'
                        : 'border-[#eaeaea]'
                    } w-full h-12 flex items-center gap-5`}
                  >
                    <div>
                      <i>
                        <IoPersonOutline
                          size={20}
                          className={
                            errors.username && touched.username && 'text-error'
                          }
                        />
                      </i>
                    </div>
                    <div className="h-full w-full">
                      <input
                        type="text"
                        name="username"
                        placeholder="Enter your username"
                        className="h-full w-full outline-none text-neutral"
                        onChange={handleChange}
                        onBlur={handleBlur}
                        value={values.username}
                      />
                      {errors.username && touched.username && (
                        <label className="label">
                          <span className="label-text-alt text-error">
                            {errors.username}
                          </span>
                        </label>
                      )}
                    </div>
                  </div>
                  <div
                    className={`border-b-[1px]  ${
                      errors.email && touched.email
                        ? 'border-error'
                        : 'border-[#EAEAEA]'
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
                    className={`border-b-[1px] ${
                      errors.password && touched.password
                        ? 'border-error'
                        : 'border-[#eaeaea]'
                    }  w-full h-12 flex items-center gap-5`}
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
                <div className="self-center w-full mt-7">
                  {loading ? (
                    <button className="w-full btn btn-primary capitalize text-base text-white font-semibold hover:font-bold">
                      <span className="loading loading-spinner loading-sm"></span>
                    </button>
                  ) : (
                    <button
                      type="submit"
                      className="w-full btn btn-primary capitalize text-base text-white font-semibold hover:font-bold"
                    >
                      Sign Up
                    </button>
                  )}
                  {/* <button
                    type="submit"
                    className="w-full btn btn-primary capitalize text-base text-white font-semibold hover:font-bold"
                  >
                    Sign Up
                  </button> */}
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
            )}
          </Formik>
        </section>
      </div>
    </main>
  )
}

export default Register
