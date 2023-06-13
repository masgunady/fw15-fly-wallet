import React from 'react'
import Image from 'next/image'
import profilePict from '../../public/user1.png'
import Link from 'next/link'
import { AiOutlineArrowRight } from 'react-icons/ai'
import { BsPencil } from 'react-icons/bs'
import http from '@/helpers/http'

function UserProfileContent({ token }) {
  const [profile, setProfile] = React.useState({})

  React.useEffect(() => {
    if (token) {
      async function getProfile() {
        const { data } = await http(token).get('/profile')
        setProfile(data.results)
      }
      getProfile()
    }
  }, [token])
  return (
    <div className=" p-16 flex flex-col items-start justify-start gap-9">
      <div className="w-full flex flex-col items-center justify-between gap-5">
        <div className="w-full flex flex-col justify-center items-center gap-4">
          <div className="w-20 h-20 flex items-center justify-center rounded-full">
            {profile?.picture ? (
              <Image
                width={150}
                height={150}
                className="object-fit"
                src={user.picture}
                alt="userImage"
              />
            ) : (
              <Image
                width={150}
                height={150}
                className="object-fit"
                src={profilePict}
                alt="user"
              />
            )}
          </div>
          <button className="text-neutral text-sm font-semibold flex items-center gap-2">
            <i>
              <BsPencil />
            </i>
            <div>Edit</div>
          </button>
        </div>
        <div className="text-2xl text-neutral font-semibold capitalize">
          {profile?.fullName}
        </div>
        <div className="text-base text-neutral">+62 813-9387-7946</div>
      </div>

      <div className="w-full h-full flex flex-col items-center justify-center gap-5">
        <Link
          href="/user/profile/information"
          className="w-[50%] h-16 flex items-center justify-start p-5 bg-[#EAEAEA] rounded-lg"
        >
          <div className="w-full h-full flex items-start justify-between gap-5">
            <div className="text-xl text-neutral font-semibold">
              Personal Information
            </div>
            <div>
              <i>
                <AiOutlineArrowRight size={25} className="text-black" />
              </i>
            </div>
          </div>
        </Link>
        <Link
          href="/user/profile/update/password"
          className="w-[50%] h-16 flex items-center justify-start p-5 bg-[#EAEAEA] rounded-lg"
        >
          <div className="w-full h-full flex items-start justify-between gap-5">
            <div className="text-xl text-neutral font-semibold">
              Change Password
            </div>
            <div>
              <i>
                <AiOutlineArrowRight size={25} className="text-black" />
              </i>
            </div>
          </div>
        </Link>
        <Link
          href="/user/profile/update/pin"
          className="w-[50%] h-16 flex items-center justify-start p-5 bg-[#EAEAEA] rounded-lg"
        >
          <div className="w-full h-full flex items-start justify-between gap-5">
            <div className="text-xl text-neutral font-semibold">Change PIN</div>
            <div>
              <i>
                <AiOutlineArrowRight size={25} className="text-black" />
              </i>
            </div>
          </div>
        </Link>
        <Link
          href="/"
          className="w-[50%] h-16 flex items-center justify-start p-5 bg-[#EAEAEA] rounded-lg"
        >
          <div className="w-full h-full flex items-start justify-between gap-5">
            <div className="text-xl text-neutral font-semibold">Logout</div>
          </div>
        </Link>
      </div>
    </div>
  )
}

export default UserProfileContent
