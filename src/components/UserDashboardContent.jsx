import React from 'react'
import Image from 'next/image'
import {
  AiOutlineArrowDown,
  AiOutlineArrowUp,
  AiOutlinePlus,
} from 'react-icons/ai'
import graphics from '../../public/graphic.png'
import profilePict from '../../public/user1.png'
import Link from 'next/link'
import UserTransactionTopup from './UserTransactionTopup'
import { useDispatch, useSelector } from 'react-redux'
import http from '@/helpers/http'
import { setTransactions } from '@/redux/reducers/transactions'
const UserDashboardContent = ({ token }) => {
  const dispatch = useDispatch()
  const profile = useSelector((state) => state.profile.data)
  const transaction = useSelector((state) => state.transactions.data)
  const [modalOpen, setModalOpen] = React.useState(false)

  const transactionList = React.useCallback(async () => {
    const { data } = await http(token).get('/transactions', {
      params: { limit: 10 },
    })
    dispatch(setTransactions(data.results))
  }, [token, dispatch])

  React.useEffect(() => {
    transactionList()
  }, [transactionList])
  const openModal = () => {
    if (modalOpen === true) {
      setModalOpen(false)
      setTimeout(() => {
        setModalOpen(true)
      }, 200)
    } else {
      setModalOpen(true)
    }
  }
  return (
    <>
      <div className="w-full h-48 rounded-3xl bg-primary flex items-center justify-between p-9">
        <div className="h-full flex flex-col items-start justify-between">
          <div className="text-[#EAEAEA] text-lg">Balance</div>
          <div className="text-white text-4xl font-semibold">
            Rp.
            {!profile?.balance ? '0' : profile?.balance}
          </div>
          <div className="text-[#EAEAEA] text-lg">+61 812-9387-7946</div>
        </div>
        <div className="h-full flex flex-col gap-5">
          <div>
            <Link
              href={'/user/transaction/select-receiver'}
              className="btn btn-accent text-white capitalize text-sm md:text-lg sm:w-40"
            >
              <AiOutlineArrowUp size={25} className="text-[#EAEAEA]" />{' '}
              <span className="hidden md:block">Transfer</span>
            </Link>
          </div>
          <div>
            <button
              onClick={() => {
                openModal()
              }}
              className="btn btn-accent text-white capitalize text-sm md:text-lg sm:w-40"
            >
              <AiOutlinePlus size={25} className="text-[#EAEAEA]" />{' '}
              <span className="hidden md:block">Top Up</span>
            </button>
          </div>
        </div>
      </div>
      <div className="w-full h-full flex flex-col lg:flex-row items-start justify-start gap-5">
        <div className="w-full lg:w-[55%] 2xl:w-[60%] h-full bg-white rounded-3xl p-9">
          <div className="flex items-center justify-between">
            <div className="flex flex-col justify-start items-start gap-3">
              <div>
                <i>
                  <AiOutlineArrowDown size={25} className="text-green-500" />
                </i>
              </div>
              <div className="text-sm text-neutral">Income</div>
              <div className="text-lg font-bold text-neutral">Rp2.120.000</div>
            </div>
            <div className="flex flex-col justify-start items-start gap-3">
              <div>
                <i>
                  <AiOutlineArrowUp size={25} className="text-primary" />
                </i>
              </div>
              <div className="text-sm text-neutral">Expense</div>
              <div className="text-lg font-bold text-neutral">Rp2.120.000</div>
            </div>
          </div>
          <div className="w-full flex items-center justify-center pt-11">
            <Image priority src={graphics} alt="" />
          </div>
        </div>
        <div className="w-full lg:w-[45%] 2xl:w-[40%] h-full bg-white rounded-3xl p-7 flex flex-col items-start justify-start gap-7">
          <div className="w-full h-[56px] flex items-center justify-between">
            <div className="text-neutral text-lg font-semibold">
              Transaction History
            </div>
            <Link
              href="/user/history"
              className="text-primary font-medium text-sm"
            >
              See All
            </Link>
          </div>
          <div className="w-full h-[380px] overflow-scroll scrollbar-hide flex flex-col items-start justify-start gap-9">
            {transaction.map((item) => {
              return (
                <div
                  key={`transactions-list-${item?.id}`}
                  className="w-full h-[72px] flex items-center justify-between"
                >
                  {item.type === 'TOP-UP' && (
                    <div className="flex items-center justify-start gap-3">
                      <div>
                        {item.recipient.picture ? (
                          <Image
                            width={150}
                            height={150}
                            className="object-cover w-16 h-16 rounded-xl overflow-hidden"
                            src={item.recipient.picture}
                            alt="userImage"
                          />
                        ) : (
                          <Image
                            className="object-cover w-16 h-16 rounded-xl overflow-hidden"
                            src={profilePict}
                            alt="user"
                          />
                        )}
                      </div>
                      <div>
                        <div
                          className={`text-neutral text-base font-semibold ${
                            item?.recipient?.fullName ? 'capitalize' : ''
                          }`}
                        >
                          {item?.recipient?.fullName || item?.recipient?.email}
                        </div>

                        <div className="text-">Topup</div>
                      </div>
                    </div>
                  )}

                  {item.type === 'TRANSFER' && (
                    <>
                      {item.recipient.id !== profile.id && (
                        <div className="flex items-center justify-start gap-3">
                          <div>
                            {item.recipient.picture ? (
                              <Image
                                width={150}
                                height={150}
                                className="object-cover w-16 h-16 rounded-xl overflow-hidden"
                                src={item.recipient.picture}
                                alt="userImage"
                              />
                            ) : (
                              <Image
                                className="object-cover w-16 h-16 rounded-xl overflow-hidden"
                                src={profilePict}
                                alt="user"
                              />
                            )}
                          </div>
                          <div>
                            <div
                              className={`text-neutral text-base font-semibold ${
                                item?.recipient?.fullName ? 'capitalize' : ''
                              }`}
                            >
                              {item?.recipient?.fullName ||
                                item?.recipient?.email}
                            </div>

                            <div className="text-">Outcome</div>
                          </div>
                        </div>
                      )}

                      {item.recipient.id === profile.id && (
                        <div className="flex items-center justify-start gap-3">
                          <div>
                            {item.recipient.picture ? (
                              <Image
                                width={150}
                                height={150}
                                className="object-cover w-16 h-16 rounded-xl overflow-hidden"
                                src={item.recipient.picture}
                                alt="userImage"
                              />
                            ) : (
                              <Image
                                className="object-cover w-16 h-16 rounded-xl overflow-hidden"
                                src={profilePict}
                                alt="user"
                              />
                            )}
                          </div>
                          <div>
                            <div
                              className={`text-neutral text-base font-semibold ${
                                item?.recipient?.fullName ? 'capitalize' : ''
                              }`}
                            >
                              {item?.recipient?.fullName ||
                                item?.recipient?.email}
                            </div>

                            <div className="text-">Income</div>
                          </div>
                        </div>
                      )}
                    </>
                  )}

                  {item?.type === 'TOP-UP' && (
                    <div className="text-base font-semibold text-blue-500">
                      +
                      {item.amount &&
                        `Rp${Number(item.amount).toLocaleString('id')}`}
                    </div>
                  )}
                  {item?.type === 'TRANSFER' &&
                    (item.sender.id !== profile.id ? (
                      <div className="text-base font-semibold text-green-500">
                        +
                        {item.amount &&
                          `Rp${Number(item.amount).toLocaleString('id')}`}
                      </div>
                    ) : (
                      <div className="text-base font-semibold text-primary">
                        -
                        {item.amount &&
                          `Rp${Number(item.amount).toLocaleString('id')}`}
                      </div>
                    ))}
                </div>
              )
            })}
          </div>
        </div>
      </div>
      {modalOpen && (
        <UserTransactionTopup visibleModal={modalOpen} token={token} />
      )}
    </>
  )
}

export default UserDashboardContent
