import React from 'react'
import Image from 'next/image'
import profilePict from '../../public/user1.png'
import Link from 'next/link'
import { BsPencil } from 'react-icons/bs'
import { useDispatch, useSelector } from 'react-redux'
import { useRouter } from 'next/router'
import { setAmount } from '@/redux/reducers/transfer'

const UserTransactionAmount = ({ token }) => {
  const router = useRouter()
  const dispatch = useDispatch()
  const profile = useSelector((state) => state.profile.data)
  const recipient = useSelector((state) => state.transfer.user)
  const amount = useSelector((state) => state.transfer.amount)
  const note = useSelector((state) => state.transfer.note)

  React.useEffect(() => {
    if (!recipient) {
      router.replace('user/transaction/select-receiver')
    }
  }, [recipient])

  const chackAmount = (amount) => {
    amount = parseInt(amount)
    if (amount > profile.balance) {
      return profile.balance
    }
    return amount
  }

  return (
    <div className="p-11 flex flex-col items-start justify-start gap-9">
      <div className="w-full flex items-center justify-between">
        <div className="text-lg text-neutral font-semibold">Transfer Money</div>
      </div>
      <div className="w-full h-[600px] overflow-scroll scrollbar-hide flex flex-col items-start justify-start gap-11">
        <div className="w-full h-28 flex items-center justify-start p-5 rounded-xl shadow-md shadow-[#EAEAEA]">
          <div className="w-full h-full flex items-center justify-start gap-5">
            <div>
              {recipient.picture ? (
                <Image
                  className="object-cover w-16 h-16 rounded-xl"
                  width={150}
                  height={150}
                  src={recipient.picture}
                  alt="userImage"
                />
              ) : (
                <Image
                  className="object-cover w-16 h-16 rounded-xl"
                  width={150}
                  height={150}
                  src={profilePict}
                  alt="user"
                />
              )}
            </div>
            <div>
              <div
                className={`text-neutral text-base font-semibold ${
                  recipient?.fullName ? 'capitalize' : ''
                }`}
              >
                {recipient?.fullName || recipient?.username}
              </div>
              <div className="">
                {recipient?.phones ? recipient.phones : recipient?.email}
              </div>
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
                type="number"
                className="w-full h-24 text-4xl font-semibold text-center"
                placeholder="0.00"
                onChange={(e) => dispatch(setAmount(e.target.value))}
                value={chackAmount(amount)}
              />
              <div className="text-lg text-neutral font-semibold pt-2">
                Rp. {!profile?.balance ? '0' : profile?.balance} Available
              </div>
            </div>
            <div className="w-[70%] text-center relative">
              <input
                type="text"
                className="w-full h-12 text-xl font-semibold pl-11"
                placeholder="Add some notes"
                onChange={(e) => dispatch(setNote(e.target.value))}
              />
              <div className="text-lg text-neutral font-semibold pt-2 absolute top-2 left-4">
                <i>
                  <BsPencil />
                </i>
              </div>
            </div>
            <div className="w-full text-end">
              <button
                type="button"
                className="btn btn-primary capitalize text-white w-full lg:w-[170px]"
                onClick={() => router.replace('/user/transaction/confirmation')}
                disabled={amount < 10000}
              >
                Continue
              </button>
              {/* <Link
                href="/user/transaction/confirmation"
                className="btn btn-primary capitalize text-white w-full lg:w-[170px]"
              >
                Continue
              </Link> */}
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}

export default UserTransactionAmount
