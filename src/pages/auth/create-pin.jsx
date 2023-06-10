import React from 'react'
import { AiOutlineMail } from 'react-icons/ai'
import ElementSideAuth from '@/components/element-side-auth'

function CreatePin() {
  const [otpPin, setOtpPin] = React.useState(['', '', '', '', '', ''])
  const handleOtpPin = (event, index) => {
    const spreadOtp = [...otpPin]
    spreadOtp[index] = event.target.value
    setOtpPin(spreadOtp)
  }

  const handleSubmit = (event) => {
    event.preventDefault()
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
            onSubmit={handleSubmit}
            className="w-full flex flex-col gap-5"
            autoComplete="off"
          >
            <div className="flex flex-col gap-12">
              <div className="w-full h-12 flex gap-5">
                <div className="h-full w-full flex gap-5">
                  {otpPin.map((value, index) => {
                    return (
                      <input
                        key={index}
                        type="text"
                        value={value}
                        onChange={(event) => handleOtpPin(event, index)}
                        maxLength={1}
                        placeholder="____"
                        className="text-center h-full w-full outline-none text-neutral input input-bordered border-neutral"
                      />
                    )
                  })}
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

export default CreatePin
