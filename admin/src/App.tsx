import { AppSidebar } from "@/components/app-sidebar";
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbPage, BreadcrumbSeparator } from "@/components/ui/breadcrumb";
import { Separator } from "@/components/ui/separator";
import { SidebarInset, SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import { GalleryVerticalEnd } from "lucide-react";
import { BrowserRouter } from "react-router";
import Routing from "./Routing";
import { LoginForm } from "./components/login-form";

function App() {
   const token = localStorage.getItem("access_token");

   if (!token) {
      return (
         <div className="bg-muted flex min-h-svh flex-col items-center justify-center gap-6 p-6 md:p-10">
            <div className="flex w-full max-w-sm flex-col gap-6">
               <span className="flex items-center gap-2 self-center font-medium">
                  <div className="bg-primary text-primary-foreground flex size-6 items-center justify-center rounded-md">
                     <GalleryVerticalEnd className="size-4" />
                  </div>
                  Ar Raniry Peduli
               </span>
               <LoginForm />
            </div>
         </div>
      );
   }

   return (
      <BrowserRouter basename="/admin">
         <SidebarProvider>
            <AppSidebar />
            <SidebarInset>
               <header className="flex h-16 shrink-0 items-center gap-2 border-b px-4">
                  <SidebarTrigger className="-ml-1" />
                  <Separator orientation="vertical" className="mr-2 data-[orientation=vertical]:h-4" />
                  <Breadcrumb>
                     <BreadcrumbList>
                        <BreadcrumbItem className="hidden md:block">
                           <BreadcrumbLink href="#">Building Your Application</BreadcrumbLink>
                        </BreadcrumbItem>
                        <BreadcrumbSeparator className="hidden md:block" />
                        <BreadcrumbItem>
                           <BreadcrumbPage>Data Fetching</BreadcrumbPage>
                        </BreadcrumbItem>
                     </BreadcrumbList>
                  </Breadcrumb>
               </header>
               <div className="flex flex-1 flex-col gap-4 p-4">
                  <Routing />
               </div>
            </SidebarInset>
         </SidebarProvider>
      </BrowserRouter>
   );
}

export default App;
