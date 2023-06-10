import Image from 'next/image'
import userPict from '../../public/user1.png'
const HomeTestimonySection = () => {
  return (
    <section>
      <div className="h-screen w-full px-7 xl:px-36 flex flex-col items-center justify-center">
        <div className="text-6xl font-extrabold text-neutral pb-7 text-center">
          What User are <span className="text-primary">Saying.</span>
        </div>
        <div className="text-lg text-neutral text-center max-w-[567px] pb-11">
          We have some great features from the application and it&apos;s totally
          free to use by all users around the world.
        </div>
        <div className="w-full">
          <div className="flex items-center justify-between gap-7 overflow-scroll scrollbar-hide">
            <div>
              <div className="w-[366px] h-[344px] flex flex-col items-center justify-center gap-7 cursor-pointer hover:bg-[#EAEAEA] hover:border hover:border-snow rounded-xl p-7">
                <div className="flex items-center justify-center">
                  <Image src={userPict} alt="profile" width={60} height={60} />
                </div>
                <div className="text-center text-neutral text-2xl font-bold">
                  Sherina Chaw
                </div>
                <div className="text-center text-lg text-neutral">
                  “I use this app since 2 years ago and this is the best app
                  that I’ve ever use in my entire life”
                </div>
              </div>
            </div>
            <div>
              <div className="w-[366px] h-[344px] flex flex-col items-center justify-center gap-7 cursor-pointer hover:bg-[#EAEAEA] hover:border hover:border-snow rounded-xl p-7">
                <div className="flex items-center justify-center">
                  <Image src={userPict} alt="profile" width={60} height={60} />
                </div>
                <div className="text-center text-neutral text-2xl font-bold">
                  Jessica Mera
                </div>
                <div className="text-center text-lg text-neutral">
                  “I use Zwallet to manage all financial needs. It&apos;s super
                  easy to use and it&apos;s 100% free app”
                </div>
              </div>
            </div>
            <div>
              <div className="w-[366px] h-[344px] flex flex-col items-center justify-center gap-7 cursor-pointer hover:bg-[#EAEAEA] hover:border hover:border-snow rounded-xl p-7">
                <div className="flex items-center justify-center">
                  <Image src={userPict} alt="profile" width={60} height={60} />
                </div>
                <div className="text-center text-neutral text-2xl font-bold">
                  Robert Chandler
                </div>
                <div className="text-center text-lg text-neutral">
                  “Since I&apos;m using this app, I&apos;m not going to move to
                  another similar app. Thank you Zwallet!”
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default HomeTestimonySection
