import Image from 'next/image'
import { AiFillApple } from 'react-icons/ai'
import { FaGooglePlay } from 'react-icons/fa'
import phoneImageHome from '../../public/home-pattern-phone.png'
import Link from 'next/link'

const HomeBannerSection = () => {
  return (
    <section>
      <div className="w-full h-screen px-7 xl:px-36 flex items-center justify-center">
        <div className="h-screen flex-1 hidden md:flex items-center md:items-start justify-center 2xl:pl-11 min-w-[350px]">
          <Image
            priority
            src={phoneImageHome}
            alt="Follow us"
            className="w-[400px]"
          />
        </div>
        <div className="flex-1 flex flex-col justify-center items-start gap-11 h-screen">
          <div className="text-6xl font-extrabold text-neutral leading-[80px] max-w-[500px]">
            Awesome App For Saving <span className="text-primary">Time.</span>
          </div>
          <div className="text-neutral text-lg">
            We bring you a mobile app for banking problems that oftenly wasting
            much of your times.
          </div>
          <div>
            <Link
              href="/"
              className="btn btn-primary capitalize text-white w-36"
            >
              Try IT Free
            </Link>
          </div>
          <div>
            <div className="pb-5 text-neutral text-lg">Available on</div>
            <div className="flex items-center gap-9 pl-2">
              <div className="text-neutral">
                <i>
                  <FaGooglePlay size={30} />
                </i>
              </div>
              <div className="text-neutral">
                <i>
                  <AiFillApple size={35} />
                </i>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default HomeBannerSection
