"use client"
import Image from "next/image"
import Link from "next/link"
import { Menu, MenuItem } from "react-pro-sidebar"

const NavBar = () => {
  return (
    <div className="p-10 bg-green-300 text-red-300">
      <Menu className="flex items-center space-x-4">
        <Image 
          src='/assest/image/lloginpage.webp' 
          alt="logo" 
          width={80}
          height={80}
        />
        <MenuItem className="flex">
          <Link href="/">Home</Link>
        </MenuItem>
        <MenuItem className="flex">
          <Link href="/admin/contact">Contact</Link>
        </MenuItem>
        <MenuItem className="flex">
          <Link href="/admin/address">Address</Link>
        </MenuItem>
        <MenuItem className="flex">
          <Link href="/">Home</Link>
        </MenuItem>
        <MenuItem className="flex">
          <Link href="/">Home</Link>
        </MenuItem>
      </Menu>
    </div>
  )
}

export default NavBar
