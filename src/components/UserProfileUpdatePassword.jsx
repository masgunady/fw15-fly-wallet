import React from 'react'
import Link from 'next/link'
import { AiOutlineLock, AiOutlineMail } from 'react-icons/ai'
import { FiEye, FiEyeOff } from 'react-icons/fi'

const UserProfileUpdatePassword = () => {
  const [iconEye, setIconEye] = React.useState(false)
  const [iconEye1, setIconEye1] = React.useState(false)
  const [iconEye2, setIconEye2] = React.useState(false)
  const [typeOldPassword, setTypeOldPassword] = React.useState(false)
  const [typeNewPassword, setTypeNewPassword] = React.useState(false)
  const [typeConfirmPassword, setTypeConfirmPassword] = React.useState(false)

  const handleOldPassword = () => {
    setIconEye(!typeOldPassword)
    setTypeOldPassword(!iconEye)
  }
  const handleNewPassword = () => {
    setIconEye1(!typeNewPassword)
    setTypeNewPassword(!iconEye1)
  }
  const handleConfirmPassword = () => {
    setIconEye2(!typeConfirmPassword)
    setTypeConfirmPassword(!iconEye2)
  }
  return (
    <div className="p-11 flex flex-col items-start justify-start gap-9">
      <div className="w-full flex items-center justify-between">
        <div className="text-lg text-neutral font-semibold">
          Change Password
        </div>
      </div>
      <div className="w-full h-[500px] overflow-scroll scrollbar-hide flex flex-col items-start justify-start gap-11">
        <div className="w-full h-full flex flex-col items-center justify-start gap-16 rounded-xl shadow-md shadow-[#EAEAEA]">
          <div className="self-start w-full lg:w-[35%] text-[#7A7886]">
            You must enter your current password and then type your new password
            twice.
          </div>
          <form
            className="w-full lg:w-[50%] flex flex-col gap-5"
            autoComplete="off"
          >
            <div className="flex flex-col gap-12">
              <div className="border-b-[1px] border-[#eaeaea] w-full h-12 flex items-center gap-5">
                <div>
                  <i>
                    <AiOutlineLock size={20} />
                  </i>
                </div>
                <div className="h-full w-full relative">
                  <input
                    type={typeOldPassword ? 'text' : 'password'}
                    name="oldPassword"
                    placeholder="Enter your password"
                    className="h-full w-full outline-none text-neutral"
                  />
                  <button
                    type="button"
                    onClick={handleOldPassword}
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
              <div className="border-b-[1px] border-[#eaeaea] w-full h-12 flex items-center gap-5">
                <div>
                  <i>
                    <AiOutlineLock size={20} />
                  </i>
                </div>
                <div className="h-full w-full relative">
                  <input
                    type={typeNewPassword ? 'text' : 'password'}
                    name=""
                    placeholder="Enter your password"
                    className="h-full w-full outline-none text-neutral"
                  />
                  <button
                    type="button"
                    onClick={handleNewPassword}
                    className="absolute top-3 right-2"
                  >
                    {iconEye1 ? (
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
              <div className="border-b-[1px] border-[#eaeaea] w-full h-12 flex items-center gap-5">
                <div>
                  <i>
                    <AiOutlineLock size={20} />
                  </i>
                </div>
                <div className="h-full w-full relative">
                  <input
                    type={typeConfirmPassword ? 'text' : 'password'}
                    name=""
                    placeholder="Enter your password"
                    className="h-full w-full outline-none text-neutral"
                  />
                  <button
                    type="button"
                    onClick={handleConfirmPassword}
                    className="absolute top-3 right-2"
                  >
                    {iconEye2 ? (
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
              <button
                type="submit"
                className="w-full btn btn-primary capitalize text-base text-white font-semibold hover:font-bold"
              >
                Change Password
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}

export default UserProfileUpdatePassword
