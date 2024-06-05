import Link from "next/link"
import { Menu, MenuItem } from "react-pro-sidebar"


const NavBar = () => {
  

  return (
    <div className="p-10 bg-green-300 text-red-300">
      <Menu>
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
    </div>
  )
}

export default NavBar
