import React from 'react'

const UserTransactionTopup = ({ visibleModal }) => {
  const [closeModal, setCloseModal] = React.useState(visibleModal)
  const close = () => {
    setCloseModal(false)
  }
  return (
    <>
      <div>
        <input
          type="checkbox"
          id="loading"
          className="modal-toggle"
          checked={closeModal}
          onChange={() => setCloseModal(!closeModal)}
        />
        <div className="modal">
          <div className="modal-box bg-white">
            <div className="py-4 text-black text-lg font-semibold">Topup</div>
            <div className="text-black text-lg">
              Enter the amount of money, and click submit
            </div>
            <form className="modal-action flex flex-col items-center justify-center gap-7 w-full">
              <div className="w-full">
                <input type="text" className="input input-primary w-full" />
              </div>
              <button
                type="button"
                className="btn btn-primary w-20 capitalize text-white self-end"
                onClick={() => {
                  close()
                }}
              >
                Confirm
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  )
}

export default UserTransactionTopup
