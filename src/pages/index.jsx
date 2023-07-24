import React from 'react'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import HomeBannerSection from '@/components/HomeBannerSection'
import HomePartnerSection from '@/components/HomePartnerSection'
import HomeSupportSection from '@/components/HomeSupportSection'
import HomeFeatureSection from '@/components/HomeFeatureSection'
import HomeTestimonySection from '@/components/HomeTestimonySection'
import { withIronSessionSsr } from 'iron-session/next'
import cookieConfig from '@/helpers/cookieConfig'
import Head from 'next/head'

export const getServerSideProps = withIronSessionSsr(
  async function getServerSideProps({ req }) {
    const token = req.session?.token || null
    return {
      props: {
        token,
      },
    }
  },
  cookieConfig
)

function Home({ token }) {
  return (
    <>
      <Head>
        <title>FlyWallet</title>
      </Head>
      <Header token={token} />
      <main className="pt-28">
        <HomeBannerSection />
        <HomePartnerSection />
        <HomeSupportSection />
        <HomeFeatureSection />
        <HomeTestimonySection />
        <Footer />
      </main>
    </>
  )
}

export default Home
