/* eslint-disable prettier/prettier */
import { ReactNode } from "react";

import SidebarMain from "@/app/(admin)/_components/ui/sidebar";

interface LayoutProps {
  children: ReactNode;
}

export default function DashboardLayout({ children }: LayoutProps) {
  return <SidebarMain>{children}</SidebarMain>;
}
