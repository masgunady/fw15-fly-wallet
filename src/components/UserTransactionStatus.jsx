import React from 'react'
import Image from 'next/image'
import profilePict from '../../public/user1.png'
import Link from 'next/link'
import { AiOutlineCheck } from 'react-icons/ai'

const UserTransactionStatus = () => {
  return (
    <div className=" p-11 flex flex-col items-start justify-start gap-9">
      <div className="w-full flex items-center justify-between">
        <div className="w-full flex flex-col justify-center items-center gap-5">
          <div className="w-16 h-16 bg-[#1EC15F] flex items-center justify-center rounded-full">
            <i>
              <AiOutlineCheck size={50} className="text-white" />
            </i>
          </div>
          <div className="text-neutral text-lg font-semibold">
            Transfer Success
          </div>
        </div>
      </div>
      <div className="w-full h-full flex flex-col items-start justify-start gap-11">
        <div className="w-full h-full flex flex-col items-center justify-start gap-5 rounded-xl">
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
        </div>
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
        <div className="w-full text-end mt-5 flex flex-col md:flex-row items-center justify-end gap-5">
          <div className="w-full lg:w-[170px]">
            <button className="btn btn-accent capitalize text-white w-full ">
              Download PDF
            </button>
          </div>
          <div className="w-full lg:w-[170px]">
            <Link
              href="/user/dashboard"
              className="btn btn-primary capitalize text-white w-full"
            >
              Continue
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}

export default UserTransactionStatus
