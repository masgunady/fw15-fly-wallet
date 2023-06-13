import React from 'react'
import { AiOutlineMail, AiOutlineExclamation } from 'react-icons/ai'
import ElementSideAuth from '@/components/ElementSideAuth'
import Head from 'next/head'
import { Formik } from 'formik'
import { withIronSessionSsr } from 'iron-session/next'
import coockieConfig from '@/helpers/cookieConfig'
import axios from 'axios'
import { useRouter } from 'next/router'
import * as Yup from 'yup'

import { useDispatch } from 'react-redux'
import { saveEmail } from '@/redux/reducers/auth'

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
  email: Yup.string()
    .email('Please enter valid email')
    .required('Email is required'),
})

const ForgotPassword = () => {
  const dispatch = useDispatch()
  const router = useRouter()
  const [loading, setLoading] = React.useState(false)
  const [errorMessage, setErrorMessage] = React.useState('')

  const doForgot = async (values) => {
    setErrorMessage('')
    setLoading(true)
    const form = new URLSearchParams({
      email: values.email,
    }).toString()

    const { data } = await axios.post(
      'http://localhost:3000/api/forgot-password',
      form
    )
    if (data.message === 'auth_forgot_already_requested') {
      dispatch(saveEmail(values.email))
      setErrorMessage('Request OK, You will redirect to reset page')
      setLoading(false)
      setTimeout(() => {
        router.push('/auth/reset-password')
      }, 1500)
    }
    if (data.message === 'auth_wrong_user') {
      setErrorMessage('Email not registered')
      setLoading(false)
    }
    if (data.message === 'internal_server_error') {
      setErrorMessage('Backend not connected')
      setLoading(false)
    }
    if (data.success === true) {
      dispatch(saveEmail(values.email))
      router.push('/auth/reset-password')
      setLoading(false)
    }
  }
  return (
    <main>
      <Head>
        <title>Forgot Password</title>
      </Head>
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
          <Formik
            initialValues={{
              email: '',
            }}
            validationSchema={validationSchema}
            onSubmit={doForgot}
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
                {errorMessage && (
                  <div className="flex flex-row justify-center alert alert-warning shadow-lg text-white text-lg">
                    <AiOutlineExclamation size={30} />
                    {errorMessage}
                  </div>
                )}
                <div className="flex flex-col gap-12">
                  <div
                    className={`border-b-[1px] ${
                      errors.email && touched.email && 'border-error'
                    } border-[#eaeaea] w-full h-12 flex items-center gap-5`}
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
                      Confirm
                    </button>
                  )}
                  {/* <button
                    type="submit"
                    className="w-full btn btn-primary capitalize text-base text-white font-semibold hover:font-bold"
                  >
                    Confirm
                  </button> */}
                </div>
              </form>
            )}
          </Formik>
        </section>
      </div>
    </main>
  )
}

export default ForgotPassword
