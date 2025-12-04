import { AppSidebar } from "@/components/app-sidebar";
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbPage, BreadcrumbSeparator } from "@/components/ui/breadcrumb";
import { Separator } from "@/components/ui/separator";
import { SidebarInset, SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { useState } from "react";
import { BrowserRouter } from "react-router";
import Routing from "./Routing";

function App() {
   const [isLoggedIn, setIsLoggedIn] = useState(() => {
      const token = localStorage.getItem("access_token");
      return !!token;
   });

   /* const handleLoginSuccess = async (response: TokenResponse) => {
      try {
         const googleProfile = await axios.get("https://www.googleapis.com/oauth2/v3/userinfo", {
            headers: {
               Authorization: `Bearer ${response.access_token}`,
            },
         });

         // kirim ke backend untuk membuat/verify user
         const res = await axios.post(`${import.meta.env.VITE_API_URL}/auth/google`, {
            profile: googleProfile.data,
            access_token: response.access_token,
         });

         localStorage.setItem("access_token", res.data.access_token);
         setIsLoggedIn(true);
      } catch (err) {
         console.error("Login gagal:", err);
      }
   };

   const login = useGoogleLogin({
      onSuccess: (response) => {
         handleLoginSuccess(response);
      },
      onError: () => {
         console.log("Login gagal");
      },
      flow: "implicit", // untuk Oauth Web
   });

   if (!isLoggedIn) {
      return (
         <div className="bg-muted flex min-h-svh flex-col items-center justify-center gap-6 p-6 md:p-10">
            <div className="flex w-full max-w-sm flex-col gap-6">
               <div className="flex items-center gap-2 self-center font-medium">
                  <div className="text-primary-foreground flex size-6 items-center justify-center rounded-md">
                     <img src="/32x32.png" alt="logo uin" />
                  </div>
                  Ar Raniry Peduli
               </div>
               <div className="flex flex-col gap-6">
                  <Card>
                     <CardHeader className="text-center">
                        <CardTitle className="text-xl">Welcome back</CardTitle>
                        <CardDescription>Login with your Apple or Google account</CardDescription>
                     </CardHeader>
                     <CardContent>
                        <form>
                           <FieldGroup>
                              <Field>
                                 <Button variant="outline" type="button" onClick={() => login()}>
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                                       <path
                                          d="M12.48 10.92v3.28h7.84c-.24 1.84-.853 3.187-1.787 4.133-1.147 1.147-2.933 2.4-6.053 2.4-4.827 0-8.6-3.893-8.6-8.72s3.773-8.72 8.6-8.72c2.6 0 4.507 1.027 5.907 2.347l2.307-2.307C18.747 1.44 16.133 0 12.48 0 5.867 0 .307 5.387.307 12s5.56 12 12.173 12c3.573 0 6.267-1.173 8.373-3.36 2.16-2.16 2.84-5.213 2.84-7.667 0-.76-.053-1.467-.173-2.053H12.48z"
                                          fill="currentColor"
                                       />
                                    </svg>
                                    Login with Google
                                 </Button>
                              </Field>
                           </FieldGroup>
                        </form>
                     </CardContent>
                  </Card>
               </div>
            </div>
         </div>
      );
   } */

   const queryClient = new QueryClient();

   console.log(isLoggedIn);

   return (
      <BrowserRouter basename="/admin">
         <QueryClientProvider client={queryClient}>
            <SidebarProvider>
               <AppSidebar setIsLoggedIn={setIsLoggedIn} />
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
         </QueryClientProvider>
      </BrowserRouter>
   );
}

export default App;
