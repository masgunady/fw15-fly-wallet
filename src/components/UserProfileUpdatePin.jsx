import React from 'react'
import Link from 'next/link'
import { BsTelephone } from 'react-icons/bs'

const UserProfileUpdatePin = () => {
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
    <div className="p-11 flex flex-col items-start justify-start gap-9">
      <div className="w-full flex items-center justify-between">
        <div className="text-lg text-neutral font-semibold">
          Edit Phone Number
        </div>
      </div>
      <div className="w-full h-[500px] overflow-scroll scrollbar-hide flex flex-col items-start justify-start gap-11">
        <div className="w-full h-full flex flex-col items-center justify-start rounded-xl shadow-md shadow-[#EAEAEA]">
          <div className="self-start w-full lg:w-[35%] text-[#7A7886]">
            Add at least one phone number for the transfer ID so you can start
            transfering your money to another user.
          </div>
          <form className="w-full h-full flex flex-col items-center justify-center gap-11">
            <div className="w-full lg:w-[40%] h-12 flex gap-5">
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
            <div className="w-full text-center">
              {/* <button
                type="submit"
                className="btn btn-primary capitalize text-white w-full lg:w-[170px]"
              >
                Continue
              </button> */}
              <Link
                href="/user/transaction/confirmation"
                className="btn btn-primary capitalize text-white w-full lg:w-[40%]"
              >
                Continue
              </Link>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}

export default UserProfileUpdatePin
