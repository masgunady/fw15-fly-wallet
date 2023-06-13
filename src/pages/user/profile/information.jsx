import Header from '@/components/Header'
import UserSidebar from '@/components/UserSideBar'
import UserFooter from '@/components/UserFooter'
import UserProfileInformation from '@/components/UserProfileInformation'

import { withIronSessionSsr } from 'iron-session/next'
import cookieConfig from '@/helpers/cookieConfig'
import axios from 'axios'
import Head from 'next/head'

export const getServerSideProps = withIronSessionSsr(
  async function getServerSideProps({ req, res }) {
    const token = req.session?.token

    if (!token) {
      res.setHeader('location', '/auth/login')
      res.statusCode = 302
      res.end()
      return {
        prop: {},
      }
    }
    const { data } = await axios.get(
      'https://cute-lime-goldfish-toga.cyclic.app/profile',
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    )

    return {
      props: {
        token,
        user: data.results,
      },
    }
  },
  cookieConfig
)

const Information = ({ token }) => {
  return (
    <>
      <Head>
        <title>Profile Info</title>
      </Head>
      <Header token={token} />
      <main className="pt-28 pb-16 bg-[#EAEAEA]">
        <div className="w-full min-h-[800px] lg:h-[870px] px-7 xl:px-36 2xl:px-56 py-11">
          <div className="w-full h-full flex justify-center items-start gap-7">
            <aside className="hidden min-w-[220px] md:block basis-1/4 bg-white h-full rounded-3xl py-11">
              <UserSidebar />
            </aside>
            <section className="w-full lg:basis-3/4 h-full rounded-3xl flex flex-col gap-5 bg-white">
              <UserProfileInformation />
            </section>
          </div>
        </div>
      </main>
      <UserFooter />
    </>
  )
}

export default Information
