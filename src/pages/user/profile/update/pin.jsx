import Header from '@/components/Header'
import UserFooter from '@/components/UserFooter'
import UserProfileUpdatePin from '@/components/UserProfileUpdatePin'
import UserSidebar from '@/components/UserSidebar'
import React from 'react'

import { withIronSessionSsr } from 'iron-session/next'
import cookieConfig from '@/helpers/cookieConfig'
import Head from 'next/head'
import checkCredentials from '@/helpers/checkCredentials'

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

function Pin({ token }) {
  return (
    <>
      <Head>
        <title>Update - PIN</title>
      </Head>
      <Header token={token} />
      <main className="pt-28 pb-16 bg-[#EAEAEA]">
        <div className="w-full min-h-[650px] lg:h-[750px] px-7 xl:px-36 2xl:px-56 py-11">
          <div className="w-full h-full flex justify-center items-start gap-7">
            <aside className="hidden min-w-[220px] md:block basis-1/4 bg-white h-full rounded-3xl py-11">
              <UserSidebar token={token} />
            </aside>
            <section className="w-full lg:basis-3/4 h-full rounded-3xl flex flex-col gap-5 bg-white">
              <UserProfileUpdatePin token={token} />
            </section>
          </div>
        </div>
      </main>
      <UserFooter />
    </>
  )
}

export default Pin
