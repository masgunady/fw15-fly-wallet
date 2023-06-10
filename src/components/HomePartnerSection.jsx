import Image from 'next/image'
import microsoft from '../../public/partner1.png'
import dropbox from '../../public/partner2.png'
import hnm from '../../public/partner3.png'
import airbnb from '../../public/partner4.png'
import canon from '../../public/partner5.png'
import dell from '../../public/partner6.png'

const HomePartnerSection = () => {
  return (
    <section>
      <div className="w-full px-7 xl:px-36 bg-accent">
        <div className="h-[300px] overflow-scroll  scrollbar-hide flex items-center justify-between gap-5">
          <div className="">
            <div className="w-[173px] h-[120px]">
              <Image
                priority
                src={microsoft}
                alt="Follow us"
                className="w-[173px] h-[120px]"
              />
            </div>
          </div>
          <div className="">
            <div className="w-[173px] h-[120px]">
              <Image
                priority
                src={dropbox}
                alt="Follow us"
                className="w-[173px] h-[120px]"
              />
            </div>
          </div>
          <div className="">
            <div className="w-[173px] h-[120px]">
              <Image
                priority
                src={hnm}
                alt="Follow us"
                className="w-[173px] h-[120px]"
              />
            </div>
          </div>
          <div className="">
            <div className="w-[173px] h-[120px]">
              <Image
                priority
                src={airbnb}
                alt="Follow us"
                className="w-[173px] h-[120px]"
              />
            </div>
          </div>
          <div className="">
            <div className="w-[173px] h-[120px]">
              <Image
                priority
                src={canon}
                alt="Follow us"
                className="w-[173px] h-[120px]"
              />
            </div>
          </div>
          <div className="">
            <div className="w-[173px] h-[120px]">
              <Image
                priority
                src={dell}
                alt="Follow us"
                className="w-[173px] h-[120px]"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default HomePartnerSection
