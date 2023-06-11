import Image from 'next/image'
import profilePict from '../../public/user1.png'
import Link from 'next/link'
import { AiOutlineSearch } from 'react-icons/ai'

const UserTransactionSelect = () => {
  return (
    <div className="p-11 flex flex-col items-start justify-start gap-9">
      <div className="w-full flex items-center justify-between">
        <form className="w-full">
          <div className="text-lg text-neutral font-semibold mb-7">
            Search Receiver
          </div>
          <div className="relative w-full">
            <input
              type="text"
              name="search"
              className="input input-primary w-full pl-12 text-neutral"
              placeholder="Search receiver here"
            />
            <div className="absolute top-2 left-3">
              <i>
                <AiOutlineSearch size={30} />
              </i>
            </div>
          </div>
        </form>
      </div>
      <div className="w-full h-[550px] overflow-scroll scrollbar-hide flex flex-col items-start justify-start gap-11">
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
        <div className="w-full h-28 flex items-center justify-start p-5 rounded-xl shadow-md shadow-[#EAEAEA]">
          <div className="w-full h-full flex items-center justify-start gap-5">
            <div>
              <Image src={profilePict} alt="" />
            </div>
            <div>
              <Link
                href="/user/transaction/select-receiver"
                className="text-neutral text-base font-semibold"
              >
                Samuel Suhi
              </Link>
              <div className="">+61 813-8975-0987</div>
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
                href="/user/transaction/select-receiver"
                className="text-neutral text-base font-semibold"
              >
                Samuel Suhi
              </Link>
              <div className="">+61 813-8975-0987</div>
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
                href="/user/transaction/select-receiver"
                className="text-neutral text-base font-semibold"
              >
                Samuel Suhi
              </Link>
              <div className="">+61 813-8975-0987</div>
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
                href="/user/transaction/select-receiver"
                className="text-neutral text-base font-semibold"
              >
                Samuel Suhi
              </Link>
              <div className="">+61 813-8975-0987</div>
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
                href="/user/transaction/select-receiver"
                className="text-neutral text-base font-semibold"
              >
                Samuel Suhi
              </Link>
              <div className="">+61 813-8975-0987</div>
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
                href="/user/transaction/select-receiver"
                className="text-neutral text-base font-semibold"
              >
                Samuel Suhi
              </Link>
              <div className="">+61 813-8975-0987</div>
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
                href="/user/transaction/select-receiver"
                className="text-neutral text-base font-semibold"
              >
                Samuel Suhi
              </Link>
              <div className="">+61 813-8975-0987</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default UserTransactionSelect
