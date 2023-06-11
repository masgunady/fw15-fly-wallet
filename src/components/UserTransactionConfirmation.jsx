import React from 'react'
import Image from 'next/image'
import profilePict from '../../public/user1.png'
import Link from 'next/link'

const UserTransactionConfirmation = () => {
  const [otpPin, setOtpPin] = React.useState(['', '', '', '', '', ''])
  const handleOtpPin = (event, index) => {
    const spreadOtp = [...otpPin]
    spreadOtp[index] = event.target.value
    setOtpPin(spreadOtp)
  }
  return (
    <div className="p-11 flex flex-col items-start justify-start gap-9">
      <div className="w-full flex items-center justify-between">
        <div className="text-lg text-neutral font-semibold">Transfer To</div>
      </div>
      <div className="w-full h-[800px] overflow-scroll scrollbar-hide flex flex-col items-start justify-start gap-11">
        <div className="w-full h-28 flex items-center justify-start p-5 rounded-xl shadow-md shadow-[#EAEAEA]">
          <div className="w-full h-full flex items-center justify-start gap-5">
            <div>
              <Image src={profilePict} alt="" />
            </div>
            <div>
              <Link
                href="/user/transaction/amount"
                className="text-neutral text-base font-semibold"
              >
                Samuel Suhi
              </Link>
              <div className="">+61 813-8975-0987</div>
            </div>
          </div>
        </div>
        <div className="w-full h-full flex flex-col items-center justify-start gap-5 rounded-xl shadow-md shadow-[#EAEAEA]">
          <div className="self-start w-full text-neutral text-lg font-semibold">
            Details
          </div>

          <div className="w-full h-28 flex items-center justify-start p-5 rounded-xl shadow-md shadow-[#EAEAEA]">
            <div className="w-full h-full flex flex-col items-start justify-start gap-5">
              <div className="text-base">Amount</div>
              <div className="text-xl text-neutral font-semibold">
                Rp100.000
              </div>
            </div>
          </div>
          <div className="w-full h-28 flex items-center justify-start p-5 rounded-xl shadow-md shadow-[#EAEAEA]">
            <div className="w-full h-full flex flex-col items-start justify-start gap-5">
              <div className="text-base">Balance Left</div>
              <div className="text-xl text-neutral font-semibold">Rp20.000</div>
            </div>
          </div>
          <div className="w-full h-28 flex items-center justify-start p-5 rounded-xl shadow-md shadow-[#EAEAEA]">
            <div className="w-full h-full flex flex-col items-start justify-start gap-5">
              <div className="text-base">Date & Time</div>
              <div className="text-xl text-neutral font-semibold">
                May 11, 2020 - 12.20
              </div>
            </div>
          </div>
          <div className="w-full h-28 flex items-center justify-start p-5 rounded-xl shadow-md shadow-[#EAEAEA]">
            <div className="w-full h-full flex flex-col items-start justify-start gap-5">
              <div className="text-base">Notes</div>
              <div className="text-xl text-neutral font-semibold">
                For buying soe socks
              </div>
            </div>
          </div>
          <div className="w-full text-end mt-5">
            <button
              onClick={() => window.my_modal_3.showModal()}
              className="btn btn-primary capitalize text-white w-full lg:w-[170px]"
            >
              Continue
            </button>
          </div>
        </div>
      </div>
      <dialog id="my_modal_3" className="modal">
        <form
          method="dialog"
          className="modal-box bg-white flex flex-col items-start justify-center gap-7"
        >
          <button
            htmlFor="my-modal-3"
            className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2"
          >
            ✕
          </button>
          <div className="font-bold text-lg">Enter PIN to Transfer</div>
          <div className="py-4">
            Enter your 6 digits PIN for confirmation to continue transferring
            money.
          </div>
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
          <div className="w-full text-end mt-5">
            <Link
              href="/user/transaction/status"
              className="btn btn-primary capitalize text-white w-full lg:w-[170px]"
            >
              Continue
            </Link>
          </div>
        </form>
      </dialog>
    </div>
  )
}

export default UserTransactionConfirmation
