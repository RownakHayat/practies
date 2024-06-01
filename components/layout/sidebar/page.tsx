/* eslint-disable @next/next/no-img-element */
/* eslint-disable tailwindcss/classnames-order */
"use client";

import Image from "next/image";
import Link from "next/link";
import {
  CSSObject,
  Menu,
  MenuItem,
  MenuItemStylesParams,
  Sidebar,
  Sidebar as Sidebars,
} from "react-pro-sidebar";

type Props = {};
interface MenuItemStyles {
  root?: ElementStyles;
  button?: ElementStyles;
  label?: ElementStyles;
  prefix?: ElementStyles;
  suffix?: ElementStyles;
  icon?: ElementStyles;
  subMenuContent?: ElementStyles;
  SubMenuExpandIcon?: ElementStyles;
}

type ElementStyles =
  | CSSObject
  | ((params: MenuItemStylesParams) => CSSObject | undefined);

const SideBar = (props: Props) => {
  return (
    <>
      <div className="h-fit bg-green-300 py-5 flex  items-center justify-center border-b flex-row gap-2 mx-2">
        {/* <Link href="/">
          <Image
            src=""
            alt="Logo"
            width= "80" 
            height="80"
          />
        </Link> */}
        <h2 className="text-[#080939] my-2">TEA</h2>
      </div>
      <div className=" relative h-full bg-green-300 overflow-y-auto scrollbar-thin scrollbar-thumb-rounded scrollbar-thumb-gray-300 scrollbar-track-transparent">
        <Sidebars width="300" style={{ height: "calc(100vh - 140px)" }}>
          <Sidebar>
            <Menu
              menuItemStyles={{
                button: {
                  // the active class will be added automatically by react router
                  // so we can use it to style the active menu item
                  [`&.active`]: {
                    backgroundColor: "#13395e",
                    color: "#b6c8d9",
                  },
                },
              }}
            >
               <MenuItem component={<Link href="/admin/dashboard" />}>
                Home
              </MenuItem>
               <MenuItem component={<Link href="/admin/contact" />}>
                Contact
              </MenuItem>
              <MenuItem component={<Link href="/calendar" />}>
                Calendar
              </MenuItem>
              <MenuItem component={<Link href="/e-commerce" />}>
                E-commerce
              </MenuItem>
            </Menu>
          </Sidebar>
        </Sidebars>
      </div>
    </>
  );
};

export default SideBar;
