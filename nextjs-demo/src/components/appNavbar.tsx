// app/components/ThemeSwitcher.tsx
"use client";

import { Button, Link, Navbar, NavbarBrand, NavbarContent, NavbarItem } from "@nextui-org/react";
import {useTheme} from "next-themes";
import { useEffect, useState } from "react";
import { AppLogo } from "./appLogo";

export function AppNavbar() {
  const [mounted, setMounted] = useState(false)
  const { theme, setTheme } = useTheme()

  useEffect(() => {
    setMounted(true)
  }, [])

  return (
    <Navbar shouldHideOnScroll isBordered={true} maxWidth="full">
      <NavbarContent justify="start">
        <NavbarBrand>
          <AppLogo/>
          <p>Brand</p>
        </NavbarBrand>
      </NavbarContent>
      <NavbarContent className="hidden sm:flex gap-4" justify="center">
        {mounted && (
          <button onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}>
            Switch Theme
          </button>
        )}
      </NavbarContent>
      <NavbarContent justify="end">
        <NavbarItem className="hidden lg:flex">
          <Link href="#">Login</Link>
        </NavbarItem>
        <NavbarItem>
          <Button as={Link} color="primary" href="#" variant="flat">
            Sign Up
          </Button>
        </NavbarItem>
      </NavbarContent>
    </Navbar>
  )
};