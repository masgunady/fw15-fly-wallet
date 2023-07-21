import React from 'react'
import http from '@/helpers/http'
import Link from 'next/link'
import profilePict from '../../public/user1.png'
import { FiAlignJustify } from 'react-icons/fi'
import Image from 'next/image'
import { MdNotificationsNone } from 'react-icons/md'
import { useDispatch, useSelector } from 'react-redux'
import { useRouter } from 'next/router'
import { setProfile } from '@/redux/reducers/profile'

const Header = ({ token }) => {
  const profile = useSelector((state) => state.profile.data)
  const dispatch = useDispatch()
  const router = useRouter()

  const getProfile = React.useCallback(async () => {
    try {
      const { data } = await http(token).get('/profile')
      // console.log(data.results)
      dispatch(setProfile(data.results))
    } catch (error) {
      const message = error?.response?.data?.message
      return console.log(message)
    }
  }, [token, dispatch])

  React.useEffect(() => {
    getProfile()
  }, [getProfile])

  return (
    <nav className="w-full h-28 px-7 xl:px-36 fixed z-10 bg-white rounded-b-2xl drop-shadow-sm">
      <div className="w-full h-full flex items-center justify-between">
        <Link
          href="/"
          className="text-primary text-3xl font-extrabold italic drop-shadow-sm"
        >
          FlyWallet
        </Link>
        {token ? (
          <div className="hidden lg:flex justify-center items-center gap-3">
            <Link
              href="/user/profile"
              className="w-16 h-16 overflow-hidden object-cover rounded-2xl"
            >
              {profile?.picture ? (
                <Image
                  width={150}
                  height={150}
                  className="object-cover w-full h-full"
                  src={profile?.picture}
                  alt="userImage"
                />
              ) : (
                <Image
                  width={150}
                  height={150}
                  className="object-cover"
                  src={profilePict}
                  alt="user"
                />
              )}
            </Link>
            <div className="flex flex-col">
              <p className="font-bold text-primary capitalize">
                {profile?.fullName}
              </p>
              <p>{profile?.username}</p>
            </div>
            <MdNotificationsNone
              className="text-accent hover:text-primary"
              size={30}
            />
          </div>
        ) : (
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
        )}
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
