import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Field, FieldGroup, FieldLabel } from "@/components/ui/field";
import { Input } from "@/components/ui/input";
import { crudService } from "@/lib/crudService";
import { cn } from "@/lib/utils";
import { useState } from "react";
import { Spinner } from "./ui/spinner";

type FormData = Record<string, string>;

export function LoginForm({ className, ...props }: React.ComponentProps<"div">) {
   const { useCreate } = crudService("/login");
   const { mutate, isPending } = useCreate();

   const [formData, setFormData] = useState<FormData>({});

   return (
      <div className={cn("flex flex-col gap-6", className)} {...props}>
         <Card>
            <CardHeader className="text-center">
               <CardTitle className="text-xl">Welcome back</CardTitle>
               <CardDescription>Login with your Apple or Google account</CardDescription>
            </CardHeader>
            <CardContent>
               <FieldGroup>
                  <Field>
                     <FieldLabel htmlFor="username">Username</FieldLabel>
                     <Input
                        id="username"
                        type="text"
                        required
                        autoFocus
                        value={formData?.username || ""}
                        onChange={(e) => setFormData({ ...formData, username: e.target.value })}
                     />
                  </Field>
                  <Field>
                     <div className="flex items-center">
                        <FieldLabel htmlFor="password">Password</FieldLabel>
                     </div>
                     <Input
                        id="password"
                        type="password"
                        required
                        value={formData?.password || ""}
                        onChange={(e) => setFormData({ ...formData, password: e.target.value })}
                     />
                  </Field>
                  <Field>
                     <Button
                        type="submit"
                        disabled={isPending}
                        onClick={() =>
                           mutate(
                              { ...formData },
                              {
                                 onSuccess: (res) => {
                                    const { data } = res;
                                    localStorage.setItem("access_token", data.access_token);
                                    localStorage.setItem("refresh_token", data.refresh_token);

                                    if (data) {
                                       globalThis.location.reload();
                                    }
                                 },
                              }
                           )
                        }>
                        {isPending && <Spinner />}Login
                     </Button>
                  </Field>
               </FieldGroup>
            </CardContent>
         </Card>
      </div>
   );
}
