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
import { usePathname } from "next/navigation"

export function AppSidebar() {
  const {state,
    open,
    setOpen,
    openMobile,
    setOpenMobile,
    isMobile,
    toggleSidebar} = useSidebar();
  const pathname = usePathname();

  const dashboardItems = [
    {
      title: "Dashboard",
      icon: Home,
      url: "/dashboard"
    },
    {
      title: "Contributions",
      icon: BarChart3,
      url: "/analytics"
    },
    {
      title: "Request Support",
      icon: FileText,
      url: "/documents"
    },
    {
      title: "Group Ledgers",
      icon: Users,
      url: "/team"
    },
    {
      title: "My Statements",
      icon: Database,
      url: "/database"
    },
    {
      title: "Beneficiaries",
      icon: Settings,
      url: "/settings"
    },
    {
      title: "Announcements",
      icon: Settings,
      url: "/settings"
    },
    {
      title: "Settings",
      icon: Settings,
      url: "/dashboard/settings"
    }
  ];

  return (
    <Sidebar collapsible="icon" >
      <SidebarHeader>
        <div className="flex items-center justify-between w-full">
          {(open || isMobile) && (
            <SidebarMenuButton size="lg" className="data-sidebar-menu-button-lg">
              <div className="flex aspect-square size-8 items-center justify-center rounded-lg  text-sidebar-primary-foreground">
                <Image
                            src="/logo1.png"
                            alt="Logo"
                            width={70}
                            height={70}
                            className="w-[15%] max-w-[70px] min-w-[65px] h-auto"
                          />
              </div>
              <div className="flex flex-col gap-0.5 leading-none">
                <Image
                            src="/logo.png"
                            alt="Logo"
                            width={70}
                            height={70}
                            className="w-[15%] max-w-[70px] min-w-[65px] h-auto"
                          />
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
              {dashboardItems.map((item) => {
                const isActive = pathname === item.url || (pathname === "/" && item.url === "/dashboard");
                return (
                  <SidebarMenuItem key={item.title}>
                    <SidebarMenuButton 
                      asChild 
                      className={`h-10 text-md  ${isActive ? 'sidebar-menu-active' : ''}`}
                    >
                      <a href={item.url}>
                        <item.icon className="h-10 w-10" />
                        <span>{item.title}</span>
                      </a>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                );
              })}
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