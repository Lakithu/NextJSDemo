// app/components/ThemeSwitcher.tsx
"use client";

import { Navbar } from "@nextui-org/react";
import {useTheme} from "next-themes";
import { useEffect, useState } from "react";

export function AppNavbar() {
  const [mounted, setMounted] = useState(false)
  const { theme, setTheme } = useTheme()

  useEffect(() => {
    setMounted(true)
  }, [])

  return (
    <Navbar shouldHideOnScroll>
      {mounted && (
        <button onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}>
          Switch Theme
        </button>
      )}
    </Navbar>
  )
};