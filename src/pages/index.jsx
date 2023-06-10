import React from 'react'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import HomeBannerSection from '@/components/HomeBannerSection'
import HomePartnerSection from '@/components/HomePartnerSection'
import HomeSupportSection from '@/components/HomeSupportSection'
import HomeFeatureSection from '@/components/HomeFeatureSection'
import HomeTestimonySection from '@/components/HomeTestimonySection'
function Home() {
  return (
    <>
      <Header />
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
