"use client"

import useLayoutStore from "@/store/fetures/zustand/layout"
import NavBar from "@/components/layout/navbar/page"



type Props = {
  children: React.ReactNode
}

const DashBoardLayout = ({ children }: Props) => {
  
  const { collapse } = useLayoutStore((state: any) => state)

  return (
    <>
      <div>
        
          <NavBar />
        
        <div className="h-[calc(100vh-100px)] bg-[#ECEFF3] shadow dark:bg-black overflow-y-auto p-2 md:p-6 mx-14  my-3">
          {children}
        </div>
        <footer className="z-10 shadow-2xl ">
          <div className="flex h-[35px] w-full items-center justify-end gap-3 bg-[#F3F4F6] dark:bg-background px-6 py-1 text-secondary">
            <p className="text-xs uppercase">
              All Rights Reserved © 2024 MoCat
            </p>

            <p className="text-xs">
              Designed & Developed by
              
            </p>
          </div>
        </footer>
      </div>
    </>
  )
}

export default DashBoardLayout
