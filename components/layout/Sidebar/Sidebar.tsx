"use client";
import Link from "next/link";
import React from "react";
import { Sidebar, Menu, MenuItem, SubMenu } from "react-pro-sidebar";

const CustomSidebar = () => {
  return (
    <Sidebar>
  <Menu
    menuItemStyles={{
      button: {
        // the active class will be added automatically by react router
        // so we can use it to style the active menu item
        [`&.active`]: {
          backgroundColor: '#13395e',
          color: '#b6c8d9',
        },
      },
    }}
  >
    <MenuItem component={<Link href='/home' />}> Home</MenuItem>
    <SubMenu label="How to Find Me">
    <MenuItem component={<Link href='/contact' />}> Contact</MenuItem>
    <MenuItem component={<Link href='/address' />}> Address</MenuItem>
    </SubMenu>
    
    <MenuItem component={<Link href='/e-commerce' />}> E-commerce</MenuItem>
  </Menu>
</Sidebar>

)
  
};

export default CustomSidebar;
