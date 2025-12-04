import TextInput from "@/components/form/text-input";
import { Button } from "@/components/ui/button";
import { Card, CardAction, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Spinner } from "@/components/ui/spinner";
import { useErrorStore } from "@/hooks/store";
import { crudService } from "@/lib/crudService";
import { useEffect, useState } from "react";
import { toast } from "sonner";

export default function LinkPendataan() {
   const { errors } = useErrorStore();

   const [formData, setFormData] = useState<Partial<Record<string, string>>>({ id: "1" });

   const { useUpdate, useDetail } = crudService("/api/link-pendataan");
   const { data, isLoading } = useDetail(1);
   const { mutate, isPending } = useUpdate();

   useEffect(() => {
      if (!isLoading && data) {
         setFormData(data);
      }
      return () => {};
   }, [data, isLoading]);

   if (isLoading) {
      return <div>loading...</div>;
   }

   return (
      <Card>
         <CardHeader>
            <CardTitle>Link Pendataan</CardTitle>
            <CardDescription>Link Pendataan Pendaftaran Mahasiswa</CardDescription>
            <CardAction>
               <Button
                  onClick={() =>
                     mutate(
                        { ...formData, id: 1 },
                        {
                           onSuccess: (res) => {
                              const { status, message } = res;
                              if (status) {
                                 toast.success(message);
                              }
                           },
                        }
                     )
                  }>
                  {isPending && <Spinner />}Simpan
               </Button>
            </CardAction>
         </CardHeader>
         <CardContent>
            <div className="row">
               <TextInput
                  divClassName="col-12 col-md-12"
                  label="Link Pendataan"
                  name="link"
                  value={formData?.link}
                  errors={errors}
                  onChange={(value) => setFormData({ ...formData, link: value })}
               />
            </div>
         </CardContent>
      </Card>
   );
}
