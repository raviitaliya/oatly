

import { SidebarMenuItem, SidebarMenuButton } from "@/components/ui/sidebar";

export function NavMain({ items }) {
  return (
    <>
      {items.map((item) => (
        <SidebarMenuItem key={item?.title}>
          <SidebarMenuButton asChild>
            <a href={item?.url}>
              {item.icon && <item.icon />}
              <span>{item?.title}</span>
            </a>
          </SidebarMenuButton>
        </SidebarMenuItem>
      ))}
    </>
  );
}
