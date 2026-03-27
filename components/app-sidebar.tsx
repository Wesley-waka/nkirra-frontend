'use client'
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarHeader,
  SidebarMenuAction,
  SidebarMenuButton,
  SidebarRail,
  useSidebar,
} from "@/components/ui/sidebar"

export function AppSidebar() {
  const {state,
    open,
    setOpen,
    openMobile,
    setOpenMobile,
    isMobile,
    toggleSidebar} = useSidebar();

  return (
    <Sidebar collapsible="icon">
      {/* <SidebarMenuButton /> */}
      <SidebarMenuAction className="peer-data-[active=true]/menu-button:opacity-100" />
      <SidebarHeader>
        <div className="text-xl font-bold" >Nkirra</div>
      </SidebarHeader>
      {/* <SidebarContent>
        <SidebarGroup />
        <SidebarGroup />
      </SidebarContent> */}
      <SidebarContent>
        <SidebarGroup className="group-data-[collapsible=icon]:hidden" />
      </SidebarContent>
      <SidebarFooter />
      {/* <SidebarRail /> */}
    </Sidebar>
  )
}