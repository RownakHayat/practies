"use client"

import { AlignJustify, X } from "lucide-react"
import Link from "next/link"
import { useState } from "react"

const NavBar = () => {
  const [showNav, setShowNav] = useState(true)

  return (

    <>
     {showNav && <div className="w-48 bg-gray-200 h-screen py-10">
        <button className="bg-primary w-32 h-12 rounded-lg text-white" onClick={() => setShowNav(false)}>Close Navbar</button>       
        <h1>Dashboard</h1>
        <h2>Menu item</h2>
        <h2>Menu item</h2>
        <h2>Menu item</h2>
    </div>
   }

<div className="p-10 bg-green-300 text-red-300">
      <nav className='dark-theme relative flex items-center min-w-screen'>
        {/* <!--  Only For Below Tablets --> */}
        <ul className='flex p-4 w-full h-12 items-center justify-between sm:hidden'>
          <li className='w-full pt-1'>
            <span className="menu cursor-pointer">
              <AlignJustify />
            </span>
            <span className="close cursor-pointer">
              <X />
            </span>
          </li>
          <li className='w-full pt-1 -mr-5'>
            <span className="logo material-symbols-outlined">
              android
            </span>
          </li>
          <li className='flex gap-1 w-max justify-end'>
            <span className="bell material-symbols-outlined text-gray-300 hover:text-white ">
              notifications
            </span>
            <div className=' my-auto h-6 aspect-square rounded-full avatar'></div>
          </li>
        </ul>
        {/* <!--  Only For Tablets & Above --> */}
        <ul className='hidden p-4 w-full h-20 gap-4 md:px-8 lg:px-12 xl:px-16 2xl:px-20 items-center justify-between sm:flex'>
          <li className='flex gap-8 justify-between items-center rounded-lg'>
            <span className='items-center flex gap-2'>
              <span className="logo material-symbols-outlined">
                android
              </span>
              <span className="hidden md:flex">
                Name
              </span>
            </span>
            <Link href='' className="px-4 py-2 rounded-lg Link">Dashboard</Link>
            <Link href='' className="px-4 py-2 rounded-lg Link">Team</Link>
            <Link href='' className="px-4 py-2 rounded-lg Link">Projects</Link>
            <Link href='' className="px-4 py-2 rounded-lg Link">Calendar</Link>
          </li>
          <li className='flex gap-1 w-fit justify-end'>
            <span className="bell material-symbols-outlined text-gray-300 hover:text-white ">
              notifications
            </span>
            <div className=' my-auto h-6 aspect-square rounded-full avatar'></div>
          </li>
        </ul>
      </nav>
      <ul className=" w-screen origin-top rounded-b-md shadow-md hover:shadow-lg transition-all duration-300 absolute z-[-1] top-12 flex-col sm:hidden gap-3 nav-menu -translate-y-full scale-y-0 hidden scale-x-90 p-4 ">
        <li className='w-full '>
          <a className="w-full px-2 py-1 rounded-lg Link">Dashboard</a>
        </li>
        <li>
          <a className="px-2 py-1 rounded-lg Link">Team</a>
        </li>
        <li>
          <a className="px-2 py-1 rounded-lg Link">Projects</a>
        </li>
        <li>
          <a className="px-2 py-1 rounded-lg Link">Calendar</a>
        </li>
      </ul>
    </div>
    </>
    
  )
}

export default NavBar
