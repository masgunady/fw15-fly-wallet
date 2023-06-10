import Link from 'next/link'
import { FiAlignJustify } from 'react-icons/fi'

const Header = () => {
  return (
    <nav className="w-full h-28 px-7 xl:px-36 fixed bg-white rounded-b-2xl drop-shadow-sm">
      <div className="w-full h-full flex items-center justify-between">
        <Link
          href="/"
          className="text-primary text-3xl font-extrabold italic drop-shadow-sm"
        >
          FlyWallet
        </Link>
        <div className="hidden md:flex items-center gap-8">
          <Link
            href="/auth/login"
            className="btn btn-ghost w-28 text-base font-semibold capitalize text-primary border-primary rounded-xl"
          >
            Login
          </Link>
          <Link
            href="/auth/register"
            className="btn btn-primary w-28 text-base font-semibold capitalize text-white rounded-xl"
          >
            Sign Up
          </Link>
        </div>
        <div className="block md:hidden">
          <div>
            <button>
              <i className="">
                <FiAlignJustify size={25} />
              </i>
            </button>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Header
