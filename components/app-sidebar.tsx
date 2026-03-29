'use client'
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuAction,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarRail,
  SidebarTrigger,
  useSidebar,
} from "@/components/ui/sidebar"
import { Home, FileText, Settings, Users, BarChart3, Database, Menu, X, LogOut } from "lucide-react"
import Image from "next/image"

export function AppSidebar() {
  const {state,
    open,
    setOpen,
    openMobile,
    setOpenMobile,
    isMobile,
    toggleSidebar} = useSidebar();

  const dashboardItems = [
    {
      title: "Dashboard",
      icon: Home,
      url: "/dashboard"
    },
    {
      title: "Analytics",
      icon: BarChart3,
      url: "/analytics"
    },
    {
      title: "Documents",
      icon: FileText,
      url: "/documents"
    },
    {
      title: "Team",
      icon: Users,
      url: "/team"
    },
    {
      title: "Database",
      icon: Database,
      url: "/database"
    },
    {
      title: "Settings",
      icon: Settings,
      url: "/settings"
    }
  ];

  return (
    <Sidebar collapsible="icon">
      <SidebarHeader>
        <div className="flex items-center justify-between w-full">
          {(open || isMobile) && (
            <SidebarMenuButton size="lg" className="data-sidebar-menu-button-lg">
              <div className="flex aspect-square size-8 items-center justify-center rounded-lg bg-sidebar-primary text-sidebar-primary-foreground">
                <Image src="/file.svg" alt="File" width={20} height={20} />
              </div>
              <div className="flex flex-col gap-0.5 leading-none">
                <span className="font-semibold">Nkirra</span>
                <span className="text-xs text-muted-foreground">Dashboard</span>
              </div>
            </SidebarMenuButton>
          )}
          
          {!isMobile && (
            <SidebarTrigger>
              <SidebarMenuButton className="h-8 w-8 p-0">
                {open ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
              </SidebarMenuButton>
            </SidebarTrigger>
          )}
        </div>
      </SidebarHeader>
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupLabel>Main</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {dashboardItems.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton asChild className="h-12 text-base">
                    <a href={item.url}>
                      <item.icon className="h-5 w-5" />
                      <span>{item.title}</span>
                    </a>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
      <SidebarFooter>
        <SidebarMenu>
          <SidebarMenuItem>
            <SidebarMenuButton className="h-12 text-base">
              <LogOut className="h-5 w-5" />
              <span>Logout</span>
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarFooter>
    </Sidebar>
  )
}