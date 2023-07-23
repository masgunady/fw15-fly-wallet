import React from 'react'
import Image from 'next/image'
import profilePict from '../../public/user1.png'
import Link from 'next/link'
import PinInput from '@/components/PinInput'
import { useDispatch, useSelector } from 'react-redux'
import { useRouter } from 'next/router'
import { clearTransferState } from '@/redux/reducers/transfer'
import http from '@/helpers/http'
import moment from 'moment'
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

const UserTransactionConfirmation = ({ token }) => {
  const router = useRouter()
  const dispatch = useDispatch()
  const recipient = useSelector((state) => state.transfer.user)
  const amount = useSelector((state) => state.transfer.amount)
  const note = useSelector((state) => state.transfer.note)
  const profile = useSelector((state) => state.profile.data)
  const [pin, setPin] = React.useState('')
  const balanceLeft = profile.balance - amount

  const notifyWarnReq = (data) => toast.warn(data)

  React.useEffect(() => {
    if (!recipient) {
      router.replace('/user/transaction/select-receiver')
    }
  }, [recipient])

  const doTransfer = async () => {
    try {
      const form = new URLSearchParams({
        recipientId: recipient.id,
        notes: note,
        amount,
        pin,
      })
      const { data } = await http(token).post('/transactions/transfer', form)
      dispatch(clearTransferState())
      if (data.results) {
        router.replace('/user/transaction/status/' + data.results.id)
      }
    } catch (error) {
      const message = error?.response?.data?.message
      if (message === 'transfer_wrong_pin') {
        notifyWarnReq('Opss! Wrong PIN')
      } else {
        notifyWarnReq(message)
      }
    }
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
        <div className="w-full h-full flex flex-col items-center justify-start gap-5 rounded-xl shadow-md shadow-[#EAEAEA]">
          <div className="self-start w-full text-neutral text-lg font-semibold">
            Details
          </div>

          <div className="w-full h-28 flex items-center justify-start p-5 rounded-xl shadow-md shadow-[#EAEAEA]">
            <div className="w-full h-full flex flex-col items-start justify-start gap-5">
              <div className="text-base">Amount</div>
              <div className="text-xl text-neutral font-semibold">
                {amount && `Rp${Number(amount).toLocaleString('id')}`}
              </div>
            </div>
          </div>
          <div className="w-full h-28 flex items-center justify-start p-5 rounded-xl shadow-md shadow-[#EAEAEA]">
            <div className="w-full h-full flex flex-col items-start justify-start gap-5">
              <div className="text-base">Balance Left</div>
              <div className="text-xl text-neutral font-semibold">
                {balanceLeft && `Rp${Number(balanceLeft).toLocaleString('id')}`}
              </div>
            </div>
          </div>
          <div className="w-full h-28 flex items-center justify-start p-5 rounded-xl shadow-md shadow-[#EAEAEA]">
            <div className="w-full h-full flex flex-col items-start justify-start gap-5">
              <div className="text-base">Date & Time</div>
              <div className="text-xl text-neutral font-semibold">
                {moment(new Date()).format('MMMM Do, YYYY - HH.mm')}
              </div>
            </div>
          </div>
          <div className="w-full h-28 flex items-center justify-start p-5 rounded-xl shadow-md shadow-[#EAEAEA]">
            <div className="w-full h-full flex flex-col items-start justify-start gap-5">
              <div className="text-base">Notes</div>
              <div className="text-xl text-neutral font-semibold">{note}</div>
            </div>
          </div>
          <div className="w-full text-end mt-5">
            <button
              onClick={() => window.my_modal_1.showModal()}
              className="btn btn-primary capitalize text-white w-full lg:w-[170px]"
            >
              Continue
            </button>
          </div>
        </div>
      </div>
      <dialog id="my_modal_1" className="modal">
        <form
          method="dialog"
          className="modal-box flex flex-col gap-6 bg-white"
        >
          <h3 className="font-bold text-primary text-lg">
            Enter PIN to Transfer
          </h3>
          <p className="py-4 pr-28 text-left">
            Enter your 6 digits PIN for confirmation to continue transferring
            money.{' '}
          </p>
          <PinInput onChangePin={setPin} />
          <div className="modal-action">
            <button
              onClick={doTransfer}
              disabled={!(pin.length >= 6)}
              type="submit"
              className="btn btn-primary w-full h-full lg:w-36 normal-case rounded-xl text-md"
            >
              Continue
            </button>
          </div>
        </form>
      </dialog>
      <div className="pt-24">
        <ToastContainer
          position="top-right"
          autoClose={2000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="colored"
        />
      </div>
    </div>
  )
}

export default UserTransactionConfirmation
