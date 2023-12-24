"use client";

import { AppNavbar } from '@/components/appNavbar';
import {NextUIProvider} from '@nextui-org/react'
import {ThemeProvider as NextThemesProvider} from "next-themes";

export function Providers({children}: { children: React.ReactNode }) {
  return (
    <NextUIProvider>
      <NextThemesProvider defaultTheme="dark">
      <AppNavbar />
        {children}
      </NextThemesProvider>
    </NextUIProvider>
  )
}