import React from 'react'
import Link from 'next/link'

const UserProfileInformation = () => {
  return (
    <div className="p-11 flex flex-col items-start justify-start gap-9">
      <div className="w-full flex flex-col items-start justify-between gap-7">
        <div className="text-lg text-neutral font-semibold">
          Profile Information
        </div>
        <div className="w-full lg:w-[40%] text-base">
          We got your personal information from the sign up proccess. If you
          want to make changes on your information, contact our support.
        </div>
      </div>
      <div className="w-full h-[550px] overflow-scroll scrollbar-hide flex flex-col items-start justify-start gap-11">
        <div className="w-full h-full flex flex-col items-center justify-start gap-5 rounded-xl shadow-md shadow-[#EAEAEA]">
          <div className="w-full h-28 flex items-center justify-start p-5 rounded-xl shadow-md shadow-[#EAEAEA]">
            <div className="w-full h-full flex flex-col items-start justify-start gap-5">
              <div className="text-base">First Name</div>
              <div className="text-xl text-neutral font-semibold">Robert</div>
            </div>
          </div>
          <div className="w-full h-28 flex items-center justify-start p-5 rounded-xl shadow-md shadow-[#EAEAEA]">
            <div className="w-full h-full flex flex-col items-start justify-start gap-5">
              <div className="text-base">Last Name</div>
              <div className="text-xl text-neutral font-semibold">Chandler</div>
            </div>
          </div>
          <div className="w-full h-28 flex items-center justify-start p-5 rounded-xl shadow-md shadow-[#EAEAEA]">
            <div className="w-full h-full flex flex-col items-start justify-start gap-5">
              <div className="text-base">Verified e-mail</div>
              <div className="text-xl text-neutral font-semibold">
                robert@mail.com
              </div>
            </div>
          </div>
          <div className="w-full h-28 flex items-center justify-start p-5 rounded-xl shadow-md shadow-[#EAEAEA]">
            <div className="w-full h-full flex flex-col items-start justify-start gap-5">
              <div className="text-base">Phone Number</div>
              <div className="text-xl text-neutral font-semibold">
                +62 813-9387-7946
              </div>
            </div>
            <Link
              href="/user/profile/update/phone-number"
              className="text-primary text-lg font-semibold"
            >
              Manage
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}

export default UserProfileInformation
