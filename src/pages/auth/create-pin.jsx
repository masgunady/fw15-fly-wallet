import React from 'react'
import ElementSideAuth from '@/components/ElementSideAuth'

import { useRouter } from 'next/router'
import http from '@/helpers/http'

import { withIronSessionSsr } from 'iron-session/next'
import cookieConfig from '@/helpers/cookieConfig'
import PinInput from '@/components/PinInput'
import { AiOutlineExclamation } from 'react-icons/ai'

export const getServerSideProps = withIronSessionSsr(
  async function getServerSideProps({ req, res }) {
    const token = req.session?.token

    if (!token) {
      res.setHeader('location', '/')
      res.statusCode = 302
      res.end()
      return {
        prop: {},
      }
    }
    const { data } = await http(token).get('/profile')

    return {
      props: {
        token,
        user: data.results,
      },
    }
  },
  cookieConfig
)

const CreatePin = ({ user }) => {
  const email = user.email
  const router = useRouter()
  const [pin, setPin] = React.useState(0)
  const [loading, setLoading] = React.useState(false)
  const [errorMessage, setErrorMessage] = React.useState('')
  const [successMessage, setSuccessMassage] = React.useState(false)

  const doCreatePin = async (e) => {
    try {
      e.preventDefault()

      setErrorMessage('')
      setSuccessMassage('')
      setLoading(true)

      const form = new URLSearchParams({
        email,
        pin,
      }).toString()

      const { data } = await http().post('/auth/set-pin', form)
      if (data.success === false) {
        setErrorMessage('Create pin failed, try again')
        setLoading(false)
      }
      if (data.success === true) {
        router.push('/auth/create-pin-status')
        setLoading(false)
      }
    } catch (error) {
      const message = error?.response?.data.message
      if (message?.includes('Internal')) {
        setErrorMessage('Internal Server Error')
      }
    } finally {
      setLoading(false)
    }
  }
  return (
    <main>
      <div className=" bg-login-pattern bg-no-repeat bg-cover w-full h-screen flex items-center justify-center">
        <ElementSideAuth />
        <section className="bg-white w-full h-full flex flex-col justify-center items-start gap-9 lg:basis-2/5 pl-5 lg:pl-11 pr-5 lg:pr-11 xl:pr-36">
          <div className="text-neutral text-2xl font-bold leading-8">
            Secure Your Account, Your Wallet, and Your Data With 6 Digits PIN
            That You Created Yourself.
          </div>
          <div className="text-base text-neutral leading-6">
            Create 6 digits pin to secure all your money and your data in
            FlyWallet app. Keep it secret and don&apos;t tell anyone about your
            FlyWallet account password and the PIN.
          </div>
          <form
            onSubmit={doCreatePin}
            className="w-full flex flex-col gap-5"
            autoComplete="off"
          >
            {errorMessage && (
              <div className="flex flex-row justify-center alert alert-error shadow-lg text-white text-lg">
                <AiOutlineExclamation size={30} />
                {errorMessage}
              </div>
            )}
            <div className="flex flex-col gap-12">
              <PinInput onChangePin={setPin} />
            </div>
            <div className="self-center w-full mt-7">
              {loading ? (
                <button
                  className={`w-full btn btn-primary capitalize text-base text-white font-semibold hover:font-bold ${
                    successMessage && 'hidden'
                  }`}
                >
                  <span className="loading loading-spinner loading-sm"></span>
                </button>
              ) : (
                <button
                  className={`w-full btn btn-primary capitalize text-base text-white font-semibold hover:font-bold ${
                    successMessage && 'hidden'
                  }`}
                >
                  Create
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
        </section>
      </div>
    </main>
  )
}

export default CreatePin
