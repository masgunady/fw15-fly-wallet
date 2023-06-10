import { BsTelephone, BsDownload } from 'react-icons/bs'
import { AiOutlineLock } from 'react-icons/ai'
const HomeSupportSection = () => {
  return (
    <section>
      <div className="h-screen w-full px-7 xl:px-36 flex flex-col items-center justify-center">
        <div className="text-6xl font-extrabold text-neutral pb-7 text-center">
          <span className="text-primary">About</span> the Application.
        </div>
        <div className="text-lg text-neutral text-center max-w-[567px] pb-11">
          We have some great features from the application and it’s totally free
          to use by all users around the world.
        </div>
        <div className="w-full">
          <div className="flex items-center justify-between gap-7 overflow-scroll scrollbar-hide">
            <div>
              <div className="w-[366px] h-[344px] flex flex-col items-center justify-center gap-7 cursor-pointer hover:bg-[#EAEAEA] hover:border hover:border-snow rounded-xl p-7">
                <div className="w-16 h-16 rounded-full bg-accent flex items-center justify-center">
                  <i>
                    <BsTelephone size={25} className="text-white" />
                  </i>
                </div>
                <div className="text-center text-neutral text-2xl font-bold">
                  24/7 Support
                </div>
                <div className="text-center text-lg text-neutral">
                  We have 24/7 contact support so you can contact us whenever
                  you want and we will respond it.
                </div>
              </div>
            </div>
            <div>
              <div className="w-[366px] h-[344px] flex flex-col items-center justify-center gap-7 cursor-pointer hover:bg-[#EAEAEA] hover:border hover:border-snow rounded-xl p-7">
                <div className="w-16 h-16 rounded-full bg-accent flex items-center justify-center">
                  <i>
                    <AiOutlineLock size={25} className="text-white" />
                  </i>
                </div>
                <div className="text-center text-neutral text-2xl font-bold">
                  Data Privacy
                </div>
                <div className="text-center text-lg text-neutral">
                  We make sure your data is safe in our database and we will
                  encrypt any data you submitted to us.
                </div>
              </div>
            </div>
            <div>
              <div className="w-[366px] h-[344px] flex flex-col items-center justify-center gap-7 cursor-pointer hover:bg-[#EAEAEA] hover:border hover:border-snow rounded-xl p-7">
                <div className="w-16 h-16 rounded-full bg-accent flex items-center justify-center">
                  <i>
                    <BsDownload size={25} className="text-white" />
                  </i>
                </div>
                <div className="text-center text-neutral text-2xl font-bold">
                  Easy Download
                </div>
                <div className="text-center text-lg text-neutral">
                  Zwallet is 100% totally free to use it’s now available on
                  Google Play Store and App Store.
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default HomeSupportSection
