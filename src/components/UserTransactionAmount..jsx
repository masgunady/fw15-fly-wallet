import Image from 'next/image'
import profilePict from '../../public/user1.png'
import Link from 'next/link'
import { AiOutlineSearch } from 'react-icons/ai'
import { BsPencil } from 'react-icons/bs'

const UserTransactionAmount = () => {
  return (
    <div className="p-11 flex flex-col items-start justify-start gap-9">
      <div className="w-full flex items-center justify-between">
        <div className="text-lg text-neutral font-semibold">Transfer Money</div>
      </div>
      <div className="w-full h-[600px] overflow-scroll scrollbar-hide flex flex-col items-start justify-start gap-11">
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
        <div className="w-full h-full flex flex-col items-center justify-start rounded-xl shadow-md shadow-[#EAEAEA]">
          <div className="self-start w-full lg:w-[50%] text-[#7A7886]">
            Type the amount you want to transfer and then press continue to the
            next steps.
          </div>
          <form className="w-full h-full flex flex-col items-center justify-center gap-11">
            <div className="w-[70%] text-center">
              <input
                type="text"
                className="w-full h-24 text-4xl font-semibold text-center"
                placeholder="0.00"
              />
              <div className="text-lg text-neutral font-semibold pt-2">
                Rp120.000 Available
              </div>
            </div>
            <div className="w-[70%] text-center relative">
              <input
                type="text"
                className="w-full h-12 text-xl font-semibold pl-11"
                placeholder="Add some notes"
              />
              <div className="text-lg text-neutral font-semibold pt-2 absolute top-2 left-4">
                <i>
                  <BsPencil />
                </i>
              </div>
            </div>
            <div className="w-full text-end">
              {/* <button
                type="submit"
                className="btn btn-primary capitalize text-white w-full lg:w-[170px]"
              >
                Continue
              </button> */}
              <Link
                href="/user/transaction/confirmation"
                className="btn btn-primary capitalize text-white w-full lg:w-[170px]"
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

export default UserTransactionAmount
