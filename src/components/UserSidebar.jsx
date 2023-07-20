import React from 'react'
import Link from 'next/link'
import { AiOutlineArrowUp, AiOutlinePlus, AiOutlineUser } from 'react-icons/ai'
import { FiLogOut } from 'react-icons/fi'
import { RxDashboard } from 'react-icons/rx'
import UserTransactionTopup from './UserTransactionTopup'
import { useRouter } from 'next/router'
import axios from 'axios'
const UserSidebar = () => {
  const [modalOpen, setModalOpen] = React.useState(false)
  const openModal = () => {
    if (modalOpen === true) {
      setModalOpen(false)
      setTimeout(() => {
        setModalOpen(true)
      }, 100)
    } else {
      setModalOpen(true)
    }
  }

  const router = useRouter()
  const doLogout = async () => {
    await axios.get('/api/logout')
    router.replace('/auth/login')
  }

  return (
    <>
      <div className="h-full flex flex-col items-start justify-between gap-11">
        <div className="flex flex-col items-start justify-start gap-11">
          <Link
            href="/user/dashboard"
            className="flex items-center gap-3 xl:gap-5 h-11 w-full pl-5 xl:px-10 border-l-4 border-l-primary"
          >
            <div>
              <i>
                <RxDashboard size={25} className="text-primary" />
              </i>
            </div>
            <div className="text-primary text-lg font-bold">Dashboard</div>
          </Link>
          <Link
            href="/user/transaction/select-receiver"
            className="flex items-center gap-3 xl:gap-5 h-11 w-full pl-5 xl:px-10"
          >
            <div>
              <i>
                <AiOutlineArrowUp size={25} className="text-neutral" />
              </i>
            </div>
            <div className="text-neutral text-lg">Transfer</div>
          </Link>
          <div className="flex items-center gap-3 xl:gap-5 h-11 w-full pl-5 xl:px-10 ">
            <div>
              <i>
                <AiOutlinePlus size={25} className="text-neutral" />
              </i>
            </div>
            <button
              onClick={() => {
                openModal()
              }}
              className="text-neutral text-lg"
            >
              Top Up
            </button>
          </div>
          <Link
            href="/user/profile"
            className="flex items-center gap-3 xl:gap-5 h-11 w-full pl-5 xl:px-10 "
          >
            <div>
              <i>
                <AiOutlineUser size={25} className="text-neutral" />
              </i>
            </div>
            <div className="text-neutral text-lg">Profile</div>
          </Link>
        </div>
        <button
          onClick={() => window.my_modal_5.showModal()}
          className="flex items-center gap-3 xl:gap-5 h-11 w-full pl-5 xl:px-10 "
        >
          <div>
            <i>
              <FiLogOut size={25} className="text-neutral" />
            </i>
          </div>
          <div className="text-neutral text-lg">Logout</div>
        </button>
        <dialog id="my_modal_5" className="modal modal-bottom sm:modal-middle ">
          <form method="dialog" className="modal-box bg-white ">
            <h3 className="font-bold text-lg">Log Out</h3>
            <p className="py-4">Are you sure you want to logout?</p>
            <div className="modal-action">
              <button
                type="button"
                onClick={doLogout}
                className="btn btn-error"
              >
                Ok
              </button>
              <button className="btn">Close</button>
            </div>
          </form>
        </dialog>
      </div>
      {modalOpen && <UserTransactionTopup visibleModal={modalOpen} />}
    </>
  )
}

export default UserSidebar
