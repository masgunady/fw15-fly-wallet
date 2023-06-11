const UserFooter = () => {
  return (
    <footer>
      <div className="w-full md:h-[68px] bg-primary py-5 px-11 lg:px-36 flex flex-col items-start justify-center gap-11">
        <div className="w-full flex flex-col md:flex-row items-center justify-between">
          <div className="text-white text-base">
            2023 FlyWallet. All right reserved.
          </div>
          <div className="flex flex-col md:flex-row items-center gap-5 md:gap-11 pt-5 md:pt-0 text-white text-base">
            <div>+62 567888829901</div>
            <div>contact@flywallet.com</div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default UserFooter
