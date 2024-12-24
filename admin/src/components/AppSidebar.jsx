import { FiHome, FiPlus, FiBox, FiDollarSign, FiUsers } from "react-icons/fi";
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarRail,
} from "@/components/ui/sidebar";
import { NavMain } from "@/components/nav-main";
import { NavUser } from "@/components/nav-user";

// Sample data
const data = {
  user: {
    name: "Admin",
    email: "admin@example.com",
    avatar: "https://github.com/shadcn.png",
  },
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
};

export function AppSidebar(props) {
  return (
    <Sidebar collapsible="icon" {...props}>
      <SidebarHeader>
      </SidebarHeader>
      <SidebarContent>
        <NavMain items={data.navMain} />
      </SidebarContent>
      <SidebarFooter>
        <NavUser user={data.user} />
      </SidebarFooter>
      <SidebarRail />
    </Sidebar>
  );
}
