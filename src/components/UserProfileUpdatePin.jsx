import React from 'react'
import Link from 'next/link'
import { BsCheckCircleFill, BsTelephone } from 'react-icons/bs'
import PinInput from '@/components/PinInput'
import { useRouter } from 'next/router'
import { MdError } from 'react-icons/md'
import http from '@/helpers/http'

const UserProfileUpdatePin = ({ token }) => {
  const [oldPin, setOldPin] = React.useState('')
  const [newPin, setNewPin] = React.useState('')
  const [confirmPin, setConfirmPin] = React.useState('')
  const [showFormOld, setShowFormOld] = React.useState(true)
  const [showFormNew, setShowFormNew] = React.useState(false)
  const [showFormCnfr, setShowFormCnfr] = React.useState(false)

  const [successMessage, setSuccessMessage] = React.useState(false)
  const [errorMessage, setErrorMessage] = React.useState('')

  const router = useRouter()

  const doOldPin = () => {
    setErrorMessage('')
    if (oldPin.length === 6) {
      setShowFormOld(false)
      setShowFormNew(true)
      console.log('oldPin :' + oldPin)
    } else {
      setErrorMessage('Pin must be 6 digits')
    }
  }

  const doNewPin = () => {
    setErrorMessage('')
    if (newPin.length === 6) {
      setShowFormNew(false)
      setShowFormCnfr(true)
      console.log('newPin :' + newPin)
    } else {
      setErrorMessage('Pin must be 6 digits')
    }
  }

  const doChangePin = async () => {
    setErrorMessage('')
    if (newPin === oldPin) {
      setErrorMessage('Pin must be different from the old pin')
      setShowFormOld(true)
      setShowFormNew(false)
      setShowFormCnfr(false)
      setOldPin('')
      setNewPin('')
      setConfirmPin('')
    }
    if (newPin !== confirmPin) {
      setErrorMessage('Confirm Pin does not match')
    } else if (newPin.length === 6 && newPin !== oldPin) {
      console.log('confirm :' + confirmPin)
      const form = new URLSearchParams({
        oldPin: oldPin,
        newPin: newPin,
        confirmPin: confirmPin,
      }).toString()

      try {
        const { data } = await http(token).patch('/profile/change-pin', form)
        console.log(data)
        if (data) {
          setSuccessMessage(true)
          setShowFormNew(false)
          setShowFormCnfr(false)
          setShowFormOld(true)
          setOldPin('')
          setNewPin('')
          setConfirmPin('')
        }
      } catch (error) {
        console.log(error)
        setErrorMessage('An error occurred. Please try again.')
      }
    } else if (confirmPin.length < 6) {
      setErrorMessage('Pin must be 6 digits')
    }
  }

  const handleSubmitOldPin = (e) => {
    e.preventDefault()
    doOldPin()
  }

  const handleSubmitNewPin = (e) => {
    e.preventDefault()
    doNewPin()
  }

  const handleSubmitChangePin = (e) => {
    e.preventDefault()
    doChangePin()
  }

  return (
    <div className="p-11 flex flex-col items-start justify-start gap-9">
      <div className="w-full flex items-center justify-between">
        <div className="text-lg text-neutral font-semibold">Edit PIN</div>
      </div>
      <div className="w-full h-[500px] overflow-scroll scrollbar-hide flex flex-col items-start justify-start gap-11">
        <div className="w-full h-full flex flex-col items-center justify-start rounded-xl shadow-md shadow-[#EAEAEA]">
          <div className="self-start w-full lg:w-[35%] text-[#7A7886]">
            Enter your current 6 digits Fazzpay PIN below to continue to the
            next steps.
          </div>
          <div className="w-full h-full flex flex-col items-center justify-center gap-11">
            <div className="w-full lg:w-[40%] h-12 flex gap-5">
              <div className="h-full w-full flex gap-5">
                {showFormOld && (
                  <form
                    onSubmit={handleSubmitOldPin}
                    className="w-full flex flex-col gap-7 items-center justify-center"
                  >
                    {successMessage && (
                      <div className="w-full flex flex-row justify-center text-white text-lg">
                        <BsCheckCircleFill
                          className="text-green-400"
                          size={60}
                        />
                      </div>
                    )}
                    <div className="w-full flex flex-row justify-center text-black font-semibold text-base">
                      Input Your Old PIN
                    </div>
                    {errorMessage && (
                      <div className="w-full flex flex-row justify-center text-red-500 font-semibold text-base">
                        *{errorMessage}
                      </div>
                    )}
                    <PinInput onChangePin={setOldPin} />
                    <button
                      type="submit"
                      className="btn btn-primary w-full normal-case"
                    >
                      Continue
                    </button>
                  </form>
                )}
                {showFormNew && (
                  <form
                    onSubmit={handleSubmitNewPin}
                    className="w-full flex flex-col gap-7 items-center justify-center"
                  >
                    {successMessage && (
                      <div className="w-full flex flex-row justify-center text-white text-lg">
                        <BsCheckCircleFill
                          className="text-green-400"
                          size={60}
                        />
                      </div>
                    )}
                    <div className="w-full flex flex-row justify-center text-black font-semibold text-base">
                      Input New PIN
                    </div>
                    {errorMessage && (
                      <div className="w-full flex flex-row justify-center text-red-500 font-semibold text-base">
                        *{errorMessage}
                      </div>
                    )}
                    <PinInput onChangePin={setNewPin} />
                    <button
                      type="submit"
                      className="btn btn-primary w-full normal-case"
                    >
                      Continue
                    </button>
                  </form>
                )}
                {showFormCnfr && (
                  <form
                    onSubmit={handleSubmitChangePin}
                    className="w-full flex flex-col gap-7 items-center justify-center"
                  >
                    {successMessage && (
                      <div className="w-full flex flex-row justify-center text-white text-lg">
                        <BsCheckCircleFill
                          className="text-green-400"
                          size={60}
                        />
                      </div>
                    )}
                    <div className="w-full flex flex-row justify-center text-black font-semibold text-base">
                      Input PIN Confirmation
                    </div>
                    {errorMessage && (
                      <div className="w-full flex flex-row justify-center text-red-500 font-semibold text-base">
                        *{errorMessage}
                      </div>
                    )}
                    <PinInput onChangePin={setConfirmPin} />
                    <button
                      type="submit"
                      className="btn btn-primary w-full normal-case"
                    >
                      Continue
                    </button>
                  </form>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default UserProfileUpdatePin
