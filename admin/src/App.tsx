import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Field, FieldGroup } from "@/components/ui/field";
import { useGoogleLogin, type TokenResponse } from "@react-oauth/google";
import axios from "axios";

function App() {
   const handleLoginSuccess = async (response: TokenResponse) => {
      try {
         const res = await axios.post("http://localhost:3001/auth/google", {
            token: response.access_token,
         });

         localStorage.setItem("access_token", res.data.access_token);
         console.log("Login berhasil");
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
}

export default App;
