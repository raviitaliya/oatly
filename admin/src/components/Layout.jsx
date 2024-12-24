import { AppSidebar } from "@/components/app-sidebar";
import { Separator } from "@/components/ui/separator";
import {
  SidebarProvider,
  SidebarTrigger,
} from "@/components/ui/sidebar";

const Layout = ({ children }) => {
  return (
    <div className="flex h-screen">
      <SidebarProvider>
        <AppSidebar />
        <div className="flex-1 overflow-auto">
          <header className="flex h-16 items-center border-b px-4 sticky top-0 bg-white z-10">
            <SidebarTrigger className="mr-4" />
            <Separator orientation="vertical" className="h-6" />
          </header>
          <main className="p-4">
            {children}
          </main>
        </div>
      </SidebarProvider>
    </div>
  );
};

export default Layout;
