
import { FiHome, FiPlus, FiBox, FiDollarSign, FiUsers } from "react-icons/fi"

import { NavMain } from "@/components/nav-main"
import { NavProjects } from "@/components/nav-projects"
import { NavUser } from "@/components/nav-user"
import { TeamSwitcher } from "@/components/team-switcher"
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarRail,
} from "@/components/ui/sidebar"

// This is sample data.
const data = {
  navMain: [
    {
      title: "Home",
      url: "/",
      icon: FiHome,
      isActive: true,
    },
    {
      title: "Add Product",
      url: "/add-product",
      icon: FiPlus,
    },
    {
      title: "Product Details",
      url: "/product-details",
      icon: FiBox,
    },
    {
      title: "Payment",
      url: "/payment",
      icon: FiDollarSign,
    },
    {
      title: "Users",
      url: "/users",
      icon: FiUsers,
    },
  ],
}

export function AppSidebar({
  ...props
}) {
  return (
    (<Sidebar collapsible="icon" {...props}>
      <SidebarHeader>
        <TeamSwitcher teams={data.teams} />
      </SidebarHeader>
      <SidebarContent>
        <NavMain items={data.navMain} />
        <NavProjects projects={data.projects} />
      </SidebarContent>
      <SidebarFooter>
        <NavUser user={data.user} />
      </SidebarFooter>
      <SidebarRail />
    </Sidebar>)
  );
}
