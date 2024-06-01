import Link from "next/link"
import { Menu, MenuItem } from "react-pro-sidebar"


const NavBar = () => {
  

  return (
    <>
      <Menu className="bg-green-300 text-red-300">
        <MenuItem>
        <Link href="/">Home</Link>
        </MenuItem>
        <MenuItem>
        <Link href="/admin/contact">Contact</Link>
        </MenuItem>
        <MenuItem>Home</MenuItem>
        <MenuItem>Home</MenuItem>
        <MenuItem>Home</MenuItem>
      </Menu>
    </>
  )
}

export default NavBar
