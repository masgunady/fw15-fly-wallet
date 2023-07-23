import React from 'react'
import Image from 'next/image'
import profilePict from '../../public/user1.png'
import Link from 'next/link'
import { AiOutlineCheck } from 'react-icons/ai'
import { useRouter } from 'next/router'
import { useSelector } from 'react-redux'
import http from '@/helpers/http'
import moment from 'moment'

const UserTransactionStatus = ({ token, id }) => {
  const profile = useSelector((state) => state.profile.data)
  const [transaction, setTransaction] = React.useState({})
  const [recipient, setRecipient] = React.useState({})
  const router = useRouter()
  const balanceLeft = profile.balance - transaction.amount

  const getDataStatus = React.useCallback(async () => {
    const { data } = await http(token).get('/transactions/' + id)
    console.log(data)
    if (data.results) {
      setTransaction(data.results)
      setRecipient(data.results.recipient)
    }
  }, [id, token])

  React.useEffect(() => {
    getDataStatus()
  }, [getDataStatus])

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
                {transaction.amount &&
                  `Rp${Number(transaction.amount).toLocaleString('id')}`}
              </div>
            </div>
          </div>
          <div className="w-full h-28 flex items-center justify-start p-5 rounded-xl shadow-md shadow-[#EAEAEA]">
            <div className="w-full h-full flex flex-col items-start justify-start gap-5">
              <div className="text-base">Balance Left</div>
              <div className="text-xl text-neutral font-semibold">
                {profile?.balance &&
                  `Rp${Number(profile?.balance).toLocaleString('id')}`}
              </div>
            </div>
          </div>
          <div className="w-full h-28 flex items-center justify-start p-5 rounded-xl shadow-md shadow-[#EAEAEA]">
            <div className="w-full h-full flex flex-col items-start justify-start gap-5">
              <div className="text-base">Date & Time</div>
              <div className="text-xl text-neutral font-semibold">
                {moment(transaction.createdAt).format('MMMM Do, YYYY - HH.mm')}
              </div>
            </div>
          </div>
          <div className="w-full h-28 flex items-center justify-start p-5 rounded-xl shadow-md shadow-[#EAEAEA]">
            <div className="w-full h-full flex flex-col items-start justify-start gap-5">
              <div className="text-base">Notes</div>
              <div className="text-xl text-neutral font-semibold">
                {transaction.notes}
              </div>
            </div>
          </div>
        </div>
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
