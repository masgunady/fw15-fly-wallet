import Image from 'next/image'
import profilePict from '../../public/user1.png'
import Link from 'next/link'

const UserHistoryContent = () => {
  return (
    <div className="p-11 flex flex-col items-start justify-start gap-9">
      <div className="w-full h-[56px] flex items-center justify-between">
        <div className="text-neutral text-lg font-semibold">
          Transaction History
        </div>
        <Link href="/user/history" className="text-primary font-medium text-sm">
          Select Filter
        </Link>
      </div>
      <div className="w-full h-[600px] overflow-scroll scrollbar-hide flex flex-col items-start justify-start gap-11">
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
          <div className="text-base font-semibold text-accent">+Rp50.000</div>
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
  )
}

export default UserHistoryContent
