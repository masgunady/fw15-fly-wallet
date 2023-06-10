import Header from '@/components/Header'
import Image from 'next/image'
import {
  AiOutlineArrowDown,
  AiOutlineArrowUp,
  AiOutlinePlus,
  AiOutlineUser,
} from 'react-icons/ai'
import { FiLogOut } from 'react-icons/fi'
import { RxDashboard } from 'react-icons/rx'
import graphics from '../../../public/graphic.png'
import profilePict from '../../../public/user1.png'
import Link from 'next/link'

const Dashboard = () => {
  return (
    <>
      <Header />
      <main className="pt-28 pb-16 bg-[#EAEAEA]">
        <div className="w-full h-[850px] px-36 py-11">
          <div className="w-full h-full flex justify-center items-center gap-7">
            <div className="basis-1/4 bg-white h-full rounded-3xl py-11">
              <div className="h-full flex flex-col items-start justify-between gap-11">
                <div className="flex flex-col items-start justify-start gap-11">
                  <div className="flex items-center gap-5 h-9 pl-10 border-l-4 border-l-primary">
                    <div>
                      <i>
                        <RxDashboard size={25} className="text-primary" />
                      </i>
                    </div>
                    <div className="text-primary text-lg font-bold">
                      Dashboard
                    </div>
                  </div>
                  <div className="flex items-center gap-5 h-9 pl-10 ">
                    <div>
                      <i>
                        <AiOutlineArrowUp size={25} className="text-neutral" />
                      </i>
                    </div>
                    <div className="text-neutral text-lg">Transfer</div>
                  </div>
                  <div className="flex items-center gap-5 h-9 pl-10 ">
                    <div>
                      <i>
                        <AiOutlinePlus size={25} className="text-neutral" />
                      </i>
                    </div>
                    <div className="text-neutral text-lg">Top Up</div>
                  </div>
                  <div className="flex items-center gap-5 h-9 pl-10 ">
                    <div>
                      <i>
                        <AiOutlineUser size={25} className="text-neutral" />
                      </i>
                    </div>
                    <div className="text-neutral text-lg">Profile</div>
                  </div>
                </div>
                <div className="flex items-center gap-5 h-9 pl-10 ">
                  <div>
                    <i>
                      <FiLogOut size={25} className="text-neutral" />
                    </i>
                  </div>
                  <div className="text-neutral text-lg">Logout</div>
                </div>
              </div>
            </div>
            <div className="basis-3/4 h-full rounded-3xl flex flex-col gap-5">
              <div className="w-full h-48 rounded-3xl bg-primary flex items-center justify-between p-9">
                <div className="h-full flex flex-col items-start justify-between">
                  <div className="text-[#EAEAEA] text-lg">Balance</div>
                  <div className="text-white text-4xl font-semibold">
                    Rp120.000
                  </div>
                  <div className="text-[#EAEAEA] text-lg">
                    +61 812-9387-7946
                  </div>
                </div>
                <div className="h-full flex flex-col gap-5">
                  <div>
                    <button className="btn btn-accent text-white capitalize text-lg w-40">
                      <AiOutlineArrowUp size={25} className="text-[#EAEAEA]" />{' '}
                      Transfer
                    </button>
                  </div>
                  <div>
                    <button className="btn btn-accent text-white capitalize text-lg w-40">
                      <AiOutlinePlus size={25} className="text-[#EAEAEA]" /> Top
                      Up
                    </button>
                  </div>
                </div>
              </div>
              <div className="w-full h-full flex items-center justify-start gap-5">
                <div className="w-[55%] h-full bg-white rounded-3xl p-9">
                  <div className="flex items-center justify-between">
                    <div className="flex flex-col justify-start items-start gap-3">
                      <div>
                        <i>
                          <AiOutlineArrowDown
                            size={25}
                            className="text-green-500"
                          />
                        </i>
                      </div>
                      <div className="text-sm text-neutral">Income</div>
                      <div className="text-lg font-bold text-neutral">
                        Rp2.120.000
                      </div>
                    </div>
                    <div className="flex flex-col justify-start items-start gap-3">
                      <div>
                        <i>
                          <AiOutlineArrowUp
                            size={25}
                            className="text-primary"
                          />
                        </i>
                      </div>
                      <div className="text-sm text-neutral">Expense</div>
                      <div className="text-lg font-bold text-neutral">
                        Rp2.120.000
                      </div>
                    </div>
                  </div>
                  <div className="w-full flex items-center justify-center pt-11">
                    <Image src={graphics} alt="" />
                  </div>
                </div>
                <div className="w-[45%] h-full bg-white rounded-3xl flex flex-col items-start justify-start gap-9 p-7">
                  <div className="w-full flex items-center justify-between">
                    <div className="text-neutral text-lg font-semibold">
                      Transaction History
                    </div>
                    <Link
                      href="user/history"
                      className="text-primary font-medium text-sm"
                    >
                      See All
                    </Link>
                  </div>
                  <div className="w-full flex items-center justify-between">
                    <div className="flex items-center justify-start gap-3">
                      <div>
                        <Image src={profilePict} alt="" />
                      </div>
                      <div>
                        <div className="text-neutral text-base font-semibold">
                          Samuel Suhi
                        </div>
                        <div className="text-">Accept</div>
                      </div>
                    </div>
                    <div className="text-base font-semibold text-green-500">
                      +Rp50.000
                    </div>
                  </div>
                  <div className="w-full flex items-center justify-between">
                    <div className="flex items-center justify-start gap-3">
                      <div>
                        <Image src={profilePict} alt="" />
                      </div>
                      <div>
                        <div className="text-neutral text-base font-semibold">
                          Netflix
                        </div>
                        <div className="text-">Transfer</div>
                      </div>
                    </div>
                    <div className="text-base font-semibold text-accent">
                      +Rp50.000
                    </div>
                  </div>
                  <div className="w-full flex items-center justify-between">
                    <div className="flex items-center justify-start gap-3">
                      <div>
                        <Image src={profilePict} alt="" />
                      </div>
                      <div>
                        <div className="text-neutral text-base font-semibold">
                          Cristine Mar ...
                        </div>
                        <div className="text-">Accept</div>
                      </div>
                    </div>
                    <div className="text-base font-semibold text-green-500">
                      +Rp50.000
                    </div>
                  </div>
                  <div className="w-full flex items-center justify-between">
                    <div className="flex items-center justify-start gap-3">
                      <div>
                        <Image src={profilePict} alt="" />
                      </div>
                      <div>
                        <div className="text-neutral text-base font-semibold">
                          Cristine Mar ...
                        </div>
                        <div className="text-">Accept</div>
                      </div>
                    </div>
                    <div className="text-base font-semibold text-green-500">
                      +Rp50.000
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
      <footer>
        <div className="w-full h-[68px] bg-primary px-11 lg:px-36 flex flex-col items-start justify-center gap-11">
          <div className="w-full flex flex-col md:flex-row items-center justify-between">
            <div className="text-white text-base">
              2023 FlyWallet. All right reserved.
            </div>
            <div className="flex flex-col md:flex-row items-center gap-5 md:gap-11 pt-5 md:pt-0 text-white text-base">
              <div>+62 567888829901</div>
              <div>contact@flywallet.com</div>
            </div>
          </div>
        </div>
      </footer>
    </>
  )
}

export default Dashboard
