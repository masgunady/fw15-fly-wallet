import Image from 'next/image'
import {
  AiOutlineArrowDown,
  AiOutlineArrowUp,
  AiOutlinePlus,
} from 'react-icons/ai'
import graphics from '../../public/graphic.png'
import profilePict from '../../public/user1.png'
import Link from 'next/link'
const UserDashboardContent = () => {
  return (
    <>
      <div className="w-full h-48 rounded-3xl bg-primary flex items-center justify-between p-9">
        <div className="h-full flex flex-col items-start justify-between">
          <div className="text-[#EAEAEA] text-lg">Balance</div>
          <div className="text-white text-4xl font-semibold">Rp120.000</div>
          <div className="text-[#EAEAEA] text-lg">+61 812-9387-7946</div>
        </div>
        <div className="h-full flex flex-col gap-5">
          <div>
            <button className="btn btn-accent text-white capitalize text-sm md:text-lg sm:w-40">
              <AiOutlineArrowUp size={25} className="text-[#EAEAEA]" />{' '}
              <span className="hidden md:block">Transfer</span>
            </button>
          </div>
          <div>
            <button className="btn btn-accent text-white capitalize text-sm md:text-lg sm:w-40">
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
            <Image src={graphics} alt="" />
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
            <div className="w-full h-[56px] flex items-center justify-between">
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
            <div className="w-full h-[56px] flex items-center justify-between">
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
            <div className="w-full h-[56px] flex items-center justify-between">
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
            <div className="w-full h-[56px] flex items-center justify-between">
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
            <div className="w-full h-[56px] flex items-center justify-between">
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
            <div className="w-full h-[56px] flex items-center justify-between">
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
            <div className="w-full h-[56px] flex items-center justify-between">
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
    </>
  )
}

export default UserDashboardContent
