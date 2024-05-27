"use client"

import Link from "next/link"
import { useEffect } from "react"
import { addAuthInformation } from "@/store/fetures/auth"
import { useAppDispatch } from "@/store/fetures/useReduxStore"
import useAuthStore from "@/store/fetures/zustand/suth"
import useLayoutStore from "@/store/fetures/zustand/layout"
import SideBar from "@/components/layout/sidebar/page"
import NavBar from "@/components/layout/navbar/page"



type Props = {
  children: React.ReactNode
}

const DashBoardLayout = ({ children }: Props) => {
  const { user } = useAuthStore((state: any) => state)
  const dispatch = useAppDispatch()
  useEffect(() => {
    dispatch(addAuthInformation(user))
  }, [user])
  
  const { collapse } = useLayoutStore((state: any) => state)

  return (
    <>
      <div
        className={`transition-body fixed hidden h-screen md:block ${
          collapse ? "md:w-[300px]" : "md:w-[100px]"
        }`}
      >
        <SideBar />
      </div>
      <div
        className={`transition-body fixed w-full ${
          collapse ? "md:left-[300px]" : "md:left-[100px]"
        } ${
          collapse
            ? "md:h-screen md:w-[calc(100%-300px)]"
            : "md:h-screen md:w-[calc(100%-100px)]"
        }`}
      >
        <nav className="flex h-[70px] w-full items-center justify-between pl-2 pr-8">
          <NavBar />
        </nav>
        <div className="h-[calc(100vh-100px)] bg-[#ECEFF3] shadow-inner dark:bg-black md:rounded-tl-xl overflow-y-auto p-2 md:p-6 ">
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
