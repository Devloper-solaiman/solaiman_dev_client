"use client";

import type { ThemeProviderProps } from "next-themes";

import * as React from "react";
import { NextUIProvider } from "@nextui-org/system";
import { useRouter } from "next/navigation";
import { ThemeProvider as NextThemesProvider } from "next-themes";
import { Toaster } from "sonner";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
export interface ProvidersProps {
  children: React.ReactNode;
  themeProps?: ThemeProviderProps;
}
// Create a client
const queryClient = new QueryClient();


export function Providers({ children, themeProps }: ProvidersProps) {
  const router = useRouter();

  return (
    <NextUIProvider navigate={router.push}>
      <Toaster/>
      <QueryClientProvider client={queryClient}>
      <NextThemesProvider {...themeProps}>{children}</NextThemesProvider>
      </QueryClientProvider>
    </NextUIProvider>
  );
}
