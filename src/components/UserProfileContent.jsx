import React from 'react'
import Image from 'next/image'
import profilePict from '../../public/user1.png'
import Link from 'next/link'
import { AiOutlineArrowRight } from 'react-icons/ai'
import { BsPencil } from 'react-icons/bs'
import { useDispatch, useSelector } from 'react-redux'
import { setProfile } from '@/redux/reducers/profile'
import http from '@/helpers/http'
import { useRouter } from 'next/router'
import axios from 'axios'

function UserProfileContent({ token }) {
  const dispatch = useDispatch()
  const profile = useSelector((state) => state.profile.data)
  const [pictureURI, setPictureURI] = React.useState('')
  const [selectedPicture, setSelectedPicture] = React.useState({})
  const [loading, setLoading] = React.useState(false)
  const router = useRouter()

  const fileToDataUrl = (file) => {
    const reader = new FileReader()
    reader.addEventListener('load', () => {
      setPictureURI(reader.result)
    })
    reader.readAsDataURL(file)
  }

  const changePicture = (e) => {
    const file = e.target.files[0]
    setSelectedPicture(file)
    fileToDataUrl(file)
  }

  const doChangePicture = async (values) => {
    setLoading(true)
    const form = new FormData()
    Object.keys(values).forEach((key) => {
      if (values[key]) {
        form.append(key, values[key])
      }
    })
    if (selectedPicture) {
      form.append('picture', selectedPicture)
    }
    if (token) {
      const { data } = await http(token).patch('/profile', form, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      })
      dispatch(setProfile(data.results))
      setLoading(false)
      setPictureURI('')
    }
  }

  const doLogout = async () => {
    await axios.get('/api/logout')
    router.replace('/auth/login')
  }

  return (
    <div className=" p-7 lg:p-16 flex flex-col items-start justify-start gap-9">
      <div className="w-full flex flex-col items-center justify-between gap-5">
        <div className="w-full flex flex-col justify-center items-center gap-4">
          <div className="w-20 h-20 flex items-center justify-center rounded-2xl overflow-hidden">
            {pictureURI && (
              <div className="w-20 h-20 overflow-hidden rounded-2xl">
                <Image
                  className="object-cover w-full h-full"
                  src={pictureURI}
                  width={150}
                  height={150}
                  alt="selected-picture"
                />
              </div>
            )}
            {!pictureURI && (
              <div className="w-16 h-16 overflow-hidden rounded-2xl">
                {profile?.picture ? (
                  <Image
                    width={150}
                    height={150}
                    className="object-cover w-full h-full"
                    src={profile?.picture}
                    alt="user-profile-img"
                  />
                ) : (
                  <Image
                    width={150}
                    height={150}
                    className="object-cover"
                    src={profilePict}
                    alt="user-profile-default"
                  />
                )}
              </div>
            )}
          </div>
          <label className="flex gap-2 items-center justify-center font-[500] text-accent hover:text-primary">
            {!pictureURI ? (
              <>
                <input
                  name="picture"
                  type="file"
                  className="hidden"
                  onChange={changePicture}
                />
                <BsPencil size={17} />
                Edit
              </>
            ) : null}
          </label>
          {pictureURI && (
            <div className="flex items-start gap-2">
              <button
                onClick={doChangePicture}
                className="font-[500] text-accent hover:text-primary"
                type="button"
              >
                Save
              </button>
              {loading && (
                <span className="loading loading-spinner loading-sm"></span>
              )}
            </div>
          )}
        </div>
        <div
          className={`text-2xl text-neutral font-semibold ${
            profile?.fullName ? 'capitalize' : 'lowercase'
          }`}
        >
          {!profile?.fullName ? profile?.email : profile?.fullName}
        </div>
        <div className="text-base text-neutral">
          {profile?.phones?.length >= 1 ? profile?.phones : '-'}
        </div>
      </div>

      <div className="w-full h-full flex flex-col items-center justify-center gap-5">
        <Link
          href="/user/profile/information"
          className="w-full lg:w-[50%] h-16 flex items-center justify-center p-5 bg-[#EAEAEA] rounded-lg"
        >
          <div className="w-full h-full flex items-start justify-between gap-5">
            <div className="text-base md:text-xl text-neutral font-semibold">
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
          className="w-full lg:w-[50%] h-16 flex items-center justify-center p-5 bg-[#EAEAEA] rounded-lg"
        >
          <div className="w-full h-full flex items-start justify-between gap-5">
            <div className="text-base md:text-xl text-neutral font-semibold">
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
          className="w-full lg:w-[50%] h-16 flex items-center justify-center p-5 bg-[#EAEAEA] rounded-lg"
        >
          <div className="w-full h-full flex items-start justify-between gap-5">
            <div className="text-base md:text-xl text-neutral font-semibold">
              Change PIN
            </div>
            <div>
              <i>
                <AiOutlineArrowRight size={25} className="text-black" />
              </i>
            </div>
          </div>
        </Link>
        <button
          onClick={doLogout}
          className="w-full lg:w-[50%] h-16 flex items-center justify-center p-5 bg-[#EAEAEA] rounded-lg"
        >
          <div className="w-full h-full flex items-start justify-between gap-5">
            <div className="text-base md:text-xl text-neutral font-semibold">
              Logout
            </div>
          </div>
        </button>
      </div>
    </div>
  )
}

export default UserProfileContent
