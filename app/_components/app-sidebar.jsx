"use client"

import { Button } from "@/components/ui/button"
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarHeader,
} from "@/components/ui/sidebar"
import { Moon, Sun } from "lucide-react"
import { useTheme } from "next-themes"
import Image from "next/image"

export function AppSidebar() {

    const {theme, setTheme} = useTheme();
  return (
    <Sidebar>
      <SidebarHeader >
            <div className="p-2">
            <div className="flex items-center gap-3 m-1 justify-between">
                <Image src={'./logo.svg'} alt="logo" height={60} width={60} 
                className="w-10 h-10"/>
                <h2 className="font-bold text-xl flex justify-center">AI Fusion Lab</h2>
                <div className="">
                {theme=="dark" ? <Button variant="ghost" onClick={()=>setTheme("light")}><Sun/></Button> : <Button variant="ghost" onClick={()=>setTheme("dark")}><Moon/></Button>}
                </div>
            </div>
            <div>
                <Button className="w-full mt-7">+ New Chat</Button>
            </div>
            </div>
      </SidebarHeader >
      <SidebarContent>
        <SidebarGroup>
            <div className="p-5">
                <h2 className="font-bold text-lg">Chat</h2>
                <p className="text-sm text-gray-600">Sign in to continue</p>
            </div>
        </SidebarGroup >
      </SidebarContent>
      <SidebarFooter >
        <div className="p-5 mb-10">
            <Button className="w-full">Sign In/Sign Up</Button>
        </div>
        </SidebarFooter >
    </Sidebar>
  )
}