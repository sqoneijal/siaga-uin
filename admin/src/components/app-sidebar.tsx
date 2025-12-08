import { SearchForm } from "@/components/search-form";
import {
   Sidebar,
   SidebarContent,
   SidebarFooter,
   SidebarGroup,
   SidebarGroupContent,
   SidebarGroupLabel,
   SidebarHeader,
   SidebarMenu,
   SidebarMenuButton,
   SidebarMenuItem,
   SidebarRail,
} from "@/components/ui/sidebar";
import { VersionSwitcher } from "@/components/version-switcher";
import * as React from "react";
import { Link } from "react-router";
import { NavUser } from "./nav-user";

// This is sample data.
const data = {
   versions: ["1.0.1", "1.1.0-alpha", "2.0.0-beta1"],
   navMain: [
      {
         title: "Getting Started",
         url: "#",
         items: [
            {
               title: "Link Pendataan",
               url: "/link-pendataan",
            },
            {
               title: "Program",
               url: "/program",
            },
            {
               title: "Visi",
               url: "/visi",
            },
            {
               title: "Misi",
               url: "/misi",
            },
            {
               title: "Galleri",
               url: "/galleri",
            },
            {
               title: "Berita",
               url: "/berita",
            },
         ],
      },
      {
         title: "Laporan",
         url: "#",
         items: [
            {
               title: "Penerimaan",
               url: "/laporan/penerimaan",
            },
            {
               title: "Penyaluran",
               url: "/laporan/penyaluran",
            },
         ],
      },
      {
         title: "Informasi",
         url: "#",
         items: [
            {
               title: "Pengumuman",
               url: "/informasi/pengumuman",
            },
            {
               title: "Link Penting",
               url: "/informasi/link-penting",
            },
         ],
      },
   ],
};

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
   return (
      <Sidebar {...props}>
         <SidebarHeader>
            <VersionSwitcher versions={data.versions} defaultVersion={data.versions[0]} />
            <SearchForm />
         </SidebarHeader>
         <SidebarContent>
            {/* We create a SidebarGroup for each parent. */}
            {data.navMain.map((item) => (
               <SidebarGroup key={item.title}>
                  <SidebarGroupLabel>{item.title}</SidebarGroupLabel>
                  <SidebarGroupContent>
                     <SidebarMenu>
                        {item.items.map((item) => (
                           <SidebarMenuItem key={item.title}>
                              <SidebarMenuButton asChild>
                                 <Link to={item.url}>{item.title}</Link>
                              </SidebarMenuButton>
                           </SidebarMenuItem>
                        ))}
                     </SidebarMenu>
                  </SidebarGroupContent>
               </SidebarGroup>
            ))}
         </SidebarContent>
         <SidebarFooter>
            <NavUser />
         </SidebarFooter>
         <SidebarRail />
      </Sidebar>
   );
}
