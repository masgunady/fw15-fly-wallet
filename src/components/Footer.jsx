import Link from 'next/link'

const Footer = () => {
  return (
    <footer>
      <div className="w-full h-[438px] bg-primary px-11 lg:px-36 py-24 flex flex-col items-start justify-center gap-11">
        <div className="text-white text-3xl font-extrabold italic">
          <Link href="/">FlyWallet</Link>
        </div>
        <div className="max-w-[300px] text-lg text-white">
          Simplify financial needs and saving much time in banking needs with
          one single app.
        </div>
        <div className="w-full border-t border-white"></div>
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
  )
}

export default Footer
