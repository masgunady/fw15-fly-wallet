import React from 'react'
import { Formik } from 'formik'
import Link from 'next/link'
import { BsTelephone } from 'react-icons/bs'
import { MdCheck, MdError } from 'react-icons/md'
import { useDispatch, useSelector } from 'react-redux'
import * as Yup from 'yup'
import { setProfile } from '@/redux/reducers/profile'
import http from '@/helpers/http'
const regExp = /\b\d{10}\b/
const validationSchema = Yup.object({
  phones: Yup.number().test(
    'len',
    'Must be exactly 7 characters',
    (val) => !val || (val && val.toString().length >= 7)
  ),
})

const UserProfileUpdatePhone = (props) => {
  const { token } = props
  const dispatch = useDispatch()
  const profile = useSelector((state) => state.profile.data)
  const [errorMessage, setErrorMessage] = React.useState('')
  const [successMessage, setSuccessMassage] = React.useState('')

  const doUpdateData = async (values) => {
    const formData = new FormData()
    if (values.phones) {
      formData.append('phones', values.phones)
    }
    const { data } = await http(token).patch('/profile', formData)
    if (data.results) {
      dispatch(setProfile(data.results))
      setSuccessMassage(`${data.message} Phone Updated!`)
      setTimeout(() => {
        setSuccessMassage('')
      }, 1500)
    }
  }

  return (
    <div className="p-11 flex flex-col items-start justify-start gap-9">
      <div className="w-full flex items-center justify-between">
        <div className="text-lg text-neutral font-semibold">
          Edit Phone Number
        </div>
      </div>
      <div className="w-full h-[500px] overflow-scroll scrollbar-hide flex flex-col items-start justify-start gap-11">
        <div className="w-full h-full flex flex-col items-center justify-start rounded-xl shadow-md shadow-[#EAEAEA]">
          <div className="self-start w-full lg:w-[35%] text-[#7A7886]">
            Add at least one phone number for the transfer ID so you can start
            transfering your money to another user.
          </div>

          {errorMessage && (
            <div className="flex flex-row justify-center alert alert-error shadow-lg text-white text-lg">
              <MdError size={30} />
              {errorMessage}
            </div>
          )}
          {successMessage && (
            <div className="flex flex-row justify-center alert alert-success shadow-lg text-white text-lg">
              <MdCheck size={30} />
              {successMessage}
            </div>
          )}
          <Formik
            initialValues={{
              phones: profile?.phones || [],
            }}
            validationSchema={validationSchema}
            onSubmit={doUpdateData}
            enableReinitialize={true}
          >
            {({
              values,
              errors,
              touched,
              handleChange,
              handleBlur,
              handleSubmit,
            }) => (
              <form
                onSubmit={handleSubmit}
                className="w-full h-full flex flex-col items-center justify-center gap-11"
              >
                <div
                  className={`w-full lg:w-[40%] text-center relative ${
                    errors.phones && touched.phones && 'border-error'
                  } border-b`}
                >
                  <input
                    type="text"
                    name="phones"
                    className="w-full h-12 text-xl font-semibold pl-24 outline-none text-neutral"
                    placeholder="Enter your phone number"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.phones}
                  />
                  {errors.phones && touched.phones && (
                    <label className="label">
                      <span className="label-text-alt text-error">
                        {errors.phones}
                      </span>
                    </label>
                  )}
                  <div className="text-lg text-neutral font-semibold pt-1 absolute top-2 left-4">
                    <i>
                      <BsTelephone size={20} />
                    </i>
                  </div>
                  <div className="text-lg text-neutral font-semibold pt-1 absolute top-1 left-12">
                    +62
                  </div>
                </div>
                <div className="w-full text-center">
                  <button
                    type="submit"
                    className="btn btn-primary capitalize text-white w-full lg:w-[170px]"
                  >
                    Continue
                  </button>
                </div>
              </form>
            )}
          </Formik>
        </div>
      </div>
    </div>
  )
}

export default UserProfileUpdatePhone
