import Header from '@/components/Header'
import UserSidebar from '@/components/UserSidebar'
import UserFooter from '@/components/UserFooter'
import UserTransactionStatus from '@/components/UserTransactionStatus'
import checkCredentials from '@/helpers/checkCredentials'
import { withIronSessionSsr } from 'iron-session/next'
import cookieConfig from '@/helpers/cookieConfig'
export const getServerSideProps = withIronSessionSsr(
  async function getServerSideProps({ req, res }) {
    const token = req.session?.token
    checkCredentials(token, res, '/auth/login')
    return {
      props: {
        token,
      },
    }
  },
  cookieConfig
)
const Status = ({ token }) => {
  return (
    <>
      <Header token={token} />
      <main className="pt-28 pb-16 bg-[#EAEAEA]">
        <div className="w-full min-h-[1100px] lg:h-[800px] px-7 xl:px-36 2xl:px-56 py-11">
          <div className="w-full h-full flex justify-center items-start gap-7">
            <aside className="hidden min-w-[220px] md:block basis-1/4 bg-white h-full rounded-3xl py-11">
              <UserSidebar token={token} />
            </aside>
            <section className="w-full lg:basis-3/4 h-full rounded-3xl flex flex-col gap-5 bg-white">
              <UserTransactionStatus />
            </section>
          </div>
        </div>
      </main>
      <UserFooter />
    </>
  )
}

export default Status
