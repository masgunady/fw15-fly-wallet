import React from 'react'
import Image from 'next/image'
import profilePict from '../../public/user1.png'
import Link from 'next/link'
import { AiOutlineSearch } from 'react-icons/ai'
import { useRouter } from 'next/router'
import { useDispatch, useSelector } from 'react-redux'
import http from '@/helpers/http'
import { setRecipient as setRecipientAction } from '@/redux/reducers/transfer'

const UserTransactionSelect = ({ token }) => {
  const router = useRouter()
  const dispatch = useDispatch()
  const [recipient, setRecipient] = React.useState({})
  const [search, setSearch] = React.useState('')
  const [page, setPage] = React.useState({})
  const recipientRedux = useSelector((state) => state.transfer.user)

  const getUsers = React.useCallback(
    async (page = 1, search = '', limit = 4) => {
      const { data } = await http(token).get('/users', {
        params: {
          page,
          search,
          limit,
        },
      })
      setRecipient(data)
      setPage(data.pageInfo)
    },
    [token]
  )

  React.useEffect(() => {
    getUsers()
  }, [getUsers])

  React.useEffect(() => {
    getUsers(1, search)
  }, [search, getUsers])

  React.useEffect(() => {
    if (recipientRedux) {
      router.push('/user/transaction/amount')
    }
  }, [recipientRedux])

  return (
    <div className="p-11 flex flex-col items-start justify-start gap-9">
      <div className="w-full flex items-center justify-between">
        <form className="w-full">
          <div className="text-lg text-neutral font-semibold mb-7">
            Search Receiver
          </div>
          <div className="relative w-full">
            <input
              onChange={(e) => setSearch(e.target.value)}
              type="text"
              name="search"
              className="input input-primary w-full pl-12 text-neutral"
              placeholder="Search receiver here"
            />
            <div className="absolute top-2 left-3">
              <i>
                <AiOutlineSearch size={30} />
              </i>
            </div>
          </div>
        </form>
      </div>
      <div className="w-full h-[650px] overflow-scroll scrollbar-hide flex flex-col items-start justify-start gap-11">
        {recipient.results &&
          recipient.results.map((items) => (
            <div
              onClick={() => dispatch(setRecipientAction(items))}
              key={`recipient-list${items.id}`}
              className="w-full h-28 flex items-center justify-start p-5 rounded-xl shadow-md shadow-[#EAEAEA]"
            >
              <div className="w-full h-full flex items-center justify-start gap-5">
                <div>
                  {items.picture ? (
                    <Image
                      width={150}
                      height={150}
                      className="object-cover h-16 w-16 rounded-2xl"
                      src={items.picture}
                      alt="userImage"
                    />
                  ) : (
                    <Image
                      width={150}
                      height={150}
                      className="object-cover h-16 w-16 rounded-2xl"
                      src={profilePict}
                      alt="user"
                    />
                  )}
                </div>
                <div>
                  <Link
                    href="/user/transaction/amount"
                    className="text-neutral text-base font-semibold capitalize"
                  >
                    {!items.fullName || items.fullName === undefined
                      ? 'user'
                      : items.fullName}
                  </Link>
                  <div className="">{items.email}</div>
                </div>
              </div>
            </div>
          ))}
        <div className="flex gap-6 justify-center w-full">
          <button
            onClick={() => getUsers(page.page - 1)}
            disabled={page.page <= 1}
            className="btn btn-secondary shadow-md normal-case"
          >
            Prev
          </button>
          <label className="flex justify-center items-center font-[500] text-md text-secondary">
            {page.page} of {page.totalPage}
          </label>
          <button
            onClick={() => getUsers(page.page + 1)}
            disabled={page.page === page.totalPage}
            className="btn btn-secondary shadow-md normal-case"
          >
            Next
          </button>
        </div>
      </div>
    </div>
  )
}

export default UserTransactionSelect
