import { Formik } from 'formik'
import React from 'react'
import { AiOutlineLock } from 'react-icons/ai'
import { FiEye, FiEyeOff } from 'react-icons/fi'
import * as Yup from 'yup'
import { MdError, MdCheck } from 'react-icons/md'
import http from '@/helpers/http'

const validationSchema = Yup.object({
  oldPassword: Yup.string().required('Password is invalid'),
  newPassword: Yup.string()
    .min(4, 'must have input 4 characters')
    .required('Password is invalid'),
  confirmPassword: Yup.string()
    .required('Confirm password is empty !')
    .oneOf([Yup.ref('newPassword'), null], 'Passwords must match'),
})

const UserProfileUpdatePassword = (props) => {
  const { token } = props
  const [iconEye, setIconEye] = React.useState(false)
  const [iconEye1, setIconEye1] = React.useState(false)
  const [iconEye2, setIconEye2] = React.useState(false)
  const [loading, setLoading] = React.useState(false)
  const [typeOldPassword, setTypeOldPassword] = React.useState(false)
  const [typeNewPassword, setTypeNewPassword] = React.useState(false)
  const [typeConfirmPassword, setTypeConfirmPassword] = React.useState(false)
  const [errorMessage, setErrorMessage] = React.useState('')
  const [successMessage, setSuccessMessage] = React.useState('')

  const doChangePassword = async (values, { resetForm }) => {
    setErrorMessage('')
    setSuccessMessage('')
    setLoading(true)

    try {
      const form = new URLSearchParams({
        oldPassword: values.oldPassword,
        newPassword: values.newPassword,
        confirmPassword: values.confirmPassword,
      }).toString()

      const { data } = await http(token).patch('/profile/change-password', form)
      if (data.success === true) {
        setSuccessMessage('Change password success!')
        setTimeout(() => {
          setSuccessMessage('')
        }, 2000)
        setLoading(false)
        resetForm()
      }
    } catch (error) {
      const message = 'failed, wrong old password!'
      setErrorMessage(message)
      setLoading(false)
    }
  }

  const handleOldPassword = () => {
    setIconEye(!typeOldPassword)
    setTypeOldPassword(!iconEye)
  }
  const handleNewPassword = () => {
    setIconEye1(!typeNewPassword)
    setTypeNewPassword(!iconEye1)
  }
  const handleConfirmPassword = () => {
    setIconEye2(!typeConfirmPassword)
    setTypeConfirmPassword(!iconEye2)
  }
  return (
    <div className="p-11 flex flex-col items-start justify-start gap-9">
      <div className="w-full flex items-center justify-between">
        <div className="text-lg text-neutral font-semibold">
          Change Password
        </div>
      </div>
      <div className="w-full h-[600px] overflow-scroll scrollbar-hide flex flex-col items-start justify-start gap-11">
        <div className="w-full h-full flex flex-col items-center justify-start gap-16 rounded-xl">
          <div className="self-start w-full lg:w-[35%] text-[#7A7886]">
            You must enter your current password and then type your new password
            twice.
          </div>
          {errorMessage && (
            <div className="flex flex-row justify-center text-primary text-lg gap-3">
              <MdError size={30} />
              {errorMessage}
            </div>
          )}
          {successMessage && (
            <div className="flex flex-row justify-center text-green-500 text-lg gap-3">
              <MdCheck size={30} />
              {successMessage}
            </div>
          )}
          <Formik
            initialValues={{
              oldPassword: '',
              newPassword: '',
              confirmPassword: '',
            }}
            validationSchema={validationSchema}
            onSubmit={doChangePassword}
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
                className="w-full lg:w-[50%] flex flex-col gap-5"
                autoComplete="off"
              >
                <div className="flex flex-col gap-12">
                  <div
                    className={`border-b-[1px] ${
                      errors.oldPassword && touched.oldPassword
                        ? 'border-primary'
                        : 'border-[#eaeaea]'
                    } w-full h-12 flex items-center gap-5`}
                  >
                    <div>
                      <i>
                        <AiOutlineLock size={20} />
                      </i>
                    </div>
                    <div className="h-full w-full relative">
                      <input
                        type={typeOldPassword ? 'text' : 'password'}
                        name="oldPassword"
                        placeholder="Enter your old password"
                        className="h-full w-full outline-none text-neutral"
                        onChange={handleChange}
                        onBlur={handleBlur}
                        value={values.oldPassword}
                      />
                      <button
                        type="button"
                        onClick={handleOldPassword}
                        className="absolute top-3 right-2"
                      >
                        {iconEye ? (
                          <i>
                            <FiEye size={20} />
                          </i>
                        ) : (
                          <i>
                            <FiEyeOff size={20} />
                          </i>
                        )}
                      </button>
                      {errors.oldPassword && touched.oldPassword && (
                        <label className="label">
                          <span className="label-text-alt text-error">
                            {errors.oldPassword}
                          </span>
                        </label>
                      )}
                    </div>
                  </div>
                  <div
                    className={`border-b-[1px] ${
                      errors.newPassword && touched.newPassword
                        ? 'border-primary'
                        : 'border-[#eaeaea]'
                    } w-full h-12 flex items-center gap-5`}
                  >
                    <div>
                      <i>
                        <AiOutlineLock size={20} />
                      </i>
                    </div>
                    <div className="h-full w-full relative">
                      <input
                        type={typeNewPassword ? 'text' : 'password'}
                        name="newPassword"
                        placeholder="Enter your password"
                        className="h-full w-full outline-none text-neutral"
                        onChange={handleChange}
                        onBlur={handleBlur}
                        value={values.newPassword}
                      />
                      <button
                        type="button"
                        onClick={handleNewPassword}
                        className="absolute top-3 right-2"
                      >
                        {iconEye1 ? (
                          <i>
                            <FiEye size={20} />
                          </i>
                        ) : (
                          <i>
                            <FiEyeOff size={20} />
                          </i>
                        )}
                      </button>
                      {errors.newPassword && touched.newPassword && (
                        <label className="label">
                          <span className="label-text-alt text-error">
                            {errors.newPassword}
                          </span>
                        </label>
                      )}
                    </div>
                  </div>
                  <div
                    className={`border-b-[1px] ${
                      errors.confirmPassword && touched.confirmPassword
                        ? 'border-primary'
                        : 'border-[#eaeaea]'
                    } w-full h-12 flex items-center gap-5`}
                  >
                    <div>
                      <i>
                        <AiOutlineLock size={20} />
                      </i>
                    </div>
                    <div className="h-full w-full relative">
                      <input
                        type={typeConfirmPassword ? 'text' : 'password'}
                        name="confirmPassword"
                        placeholder="Enter your password"
                        className="h-full w-full outline-none text-neutral"
                        onChange={handleChange}
                        onBlur={handleBlur}
                        value={values.confirmPassword}
                      />
                      <button
                        type="button"
                        onClick={handleConfirmPassword}
                        className="absolute top-3 right-2"
                      >
                        {iconEye2 ? (
                          <i>
                            <FiEye size={20} />
                          </i>
                        ) : (
                          <i>
                            <FiEyeOff size={20} />
                          </i>
                        )}
                      </button>
                      {errors.confirmPassword && touched.confirmPassword && (
                        <label className="label">
                          <span className="label-text-alt text-error">
                            {errors.confirmPassword}
                          </span>
                        </label>
                      )}
                    </div>
                  </div>
                </div>
                <div className="self-center w-full mt-7">
                  {loading ? (
                    <button className="w-full btn btn-primary capitalize text-base text-white font-semibold hover:font-bold">
                      <span className="loading loading-spinner loading-sm"></span>
                    </button>
                  ) : (
                    <button
                      type="submit"
                      className="w-full btn btn-primary capitalize text-base text-white font-semibold hover:font-bold"
                    >
                      Change Password
                    </button>
                  )}
                </div>
              </form>
            )}
          </Formik>
        </div>
      </div>
    </div>
  )
}

export default UserProfileUpdatePassword
