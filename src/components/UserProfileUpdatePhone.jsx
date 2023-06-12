import Link from 'next/link'
import { BsTelephone } from 'react-icons/bs'

const UserProfileUpdatePhone = () => {
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
            <div className="w-full lg:w-[40%] text-center relative border-b">
              <input
                type="text"
                className="w-full h-12 text-xl font-semibold pl-24 outline-none text-neutral"
                placeholder="Enter your phone number"
              />
              <div className="text-lg text-neutral font-semibold pt-1 absolute top-2 left-4">
                <i>
                  <BsTelephone size={20} />
                </i>
              </div>
              <div className="text-lg text-neutral font-semibold pt-1 absolute top-1 left-12">
                +62
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

export default UserProfileUpdatePhone
