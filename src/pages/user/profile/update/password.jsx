import Header from '@/components/Header'
import UserFooter from '@/components/UserFooter'
import UserProfileUpdatePassword from '@/components/UserProfileUpdatePassword'
import UserSidebar from '@/components/UserSidebar'
import React from 'react'

function Password() {
  return (
    <>
      <Header />
      <main className="pt-28 pb-16 bg-[#EAEAEA]">
        <div className="w-full min-h-[650px] lg:h-[750px] px-7 xl:px-36 2xl:px-56 py-11">
          <div className="w-full h-full flex justify-center items-start gap-7">
            <aside className="hidden min-w-[220px] md:block basis-1/4 bg-white h-full rounded-3xl py-11">
              <UserSidebar />
            </aside>
            <section className="w-full lg:basis-3/4 h-full rounded-3xl flex flex-col gap-5 bg-white">
              <UserProfileUpdatePassword />
            </section>
          </div>
        </div>
      </main>
      <UserFooter />
    </>
  )
}

export default Password
