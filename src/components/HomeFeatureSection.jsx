import Image from 'next/image'
import phoneImageHome2 from '../../public/home-pattern-phone2.png'
const HomeFeatureSection = () => {
  return (
    <section>
      <div className="w-full h-screen px-7 xl:px-36 flex items-center justify-center bg-accent">
        <div className="h-screen flex-1 hidden md:flex items-center justify-center 2xl:pl-11 min-w-[350px]">
          <Image
            priority
            src={phoneImageHome2}
            alt="Follow us"
            className="w-[400px]"
          />
        </div>
        <div className="flex-1 flex flex-col justify-center items-start gap-9 h-screen">
          <div className="text-6xl font-extrabold text-black leading-[80px] max-w-[600px]">
            All The <span className="text-primary">Greate</span>{' '}
            <span className="italic">FlyWallet</span> Features
          </div>
          <div className="w-full max-w-[620px]">
            <div className="w-full h-32 bg-[#FFFFFF] flex flex-col items-start justify-center gap-3 p-5 rounded-2xl">
              <div className="flex items-center gap-4">
                <div className="text-primary text-xl font-semibold">1.</div>
                <div className="text-neutral text-xl font-semibold">
                  Small Fee
                </div>
              </div>
              <div className="text-neutral text-lg">
                We only charge 5% of every success transaction done in FlyWallet
                app.
              </div>
            </div>
          </div>
          <div className="w-full max-w-[620px]">
            <div className="w-full h-32 bg-[#FFFFFF] flex flex-col items-start justify-center gap-3 p-5 rounded-2xl">
              <div className="flex items-center gap-4">
                <div className="text-primary text-xl font-semibold">2.</div>
                <div className="text-neutral text-xl font-semibold">
                  Data Secured
                </div>
              </div>
              <div className="text-neutral text-lg">
                All your data is secured properly in our system and it&apos;s
                encrypted.
              </div>
            </div>
          </div>
          <div className="w-full max-w-[620px]">
            <div className="w-full h-32 bg-[#FFFFFF] flex flex-col items-start justify-center gap-3 p-5 rounded-2xl">
              <div className="flex items-center gap-4">
                <div className="text-primary text-xl font-semibold">3.</div>
                <div className="text-neutral text-xl font-semibold">
                  User Friendly
                </div>
              </div>
              <div className="text-neutral text-lg">
                FlyWallet come up with modern and sleek design and not
                complicated.
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
export default HomeFeatureSection
