import Header from '@/components/Header'
import UserSidebar from '@/components/UserSideBar'
import UserDashboardContent from '@/components/UserDashboardContent'
import UserFooter from '@/components/UserFooter'

const Dashboard = () => {
  return (
    <>
      <Header />
      <main className="pt-28 pb-16 bg-[#EAEAEA]">
        <div className="w-full min-h-[850px] lg:h-[850px] px-7 xl:px-36 2xl:px-56 py-11">
          <div className="w-full h-full flex justify-center items-start gap-7">
            <aside className="hidden min-w-[220px] md:block basis-1/4 bg-white h-full rounded-3xl py-11">
              <UserSidebar />
            </aside>
            <section className="w-full lg:basis-3/4 h-full rounded-3xl flex flex-col gap-5">
              <UserDashboardContent />
            </section>
          </div>
        </div>
      </main>
      <UserFooter />
    </>
  )
}

export default Dashboard