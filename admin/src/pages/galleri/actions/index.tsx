import TextInput from "@/components/form/text-input";
import { Button } from "@/components/ui/button";
import { ButtonGroup } from "@/components/ui/button-group";
import { Card, CardAction, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Spinner } from "@/components/ui/spinner";
import { crudService } from "@/lib/crudService";
import { useState } from "react";
import { useNavigate } from "react-router";
import { toast } from "sonner";

type FormData = Record<string, string>;

export default function Index() {
   const navigate = useNavigate();

   const [formData, setFormData] = useState<FormData>({});

   const { useCreate } = crudService("/galleri");
   const { mutate, isPending } = useCreate();

   return (
      <Card>
         <CardHeader>
            <CardTitle>Galleri</CardTitle>
            <CardDescription>Detail Galleri</CardDescription>
            <CardAction>
               <ButtonGroup>
                  <Button variant="outline" onClick={() => navigate("/galleri")}>
                     Batal
                  </Button>
                  <Button
                     disabled={isPending}
                     onClick={() =>
                        mutate(
                           { ...formData },
                           {
                              onSuccess: (res) => {
                                 const { status, message } = res;
                                 if (status) {
                                    toast.success(message);
                                    navigate("/galleri");
                                 } else {
                                    toast.error(message);
                                 }
                              },
                           }
                        )
                     }>
                     {isPending && <Spinner />}Simpan
                  </Button>
               </ButtonGroup>
            </CardAction>
         </CardHeader>
         <CardContent>
            <div className="row">
               <TextInput
                  divClassName="col-12 col-md-12"
                  label="Judul Galleri"
                  name="judul"
                  value={formData?.judul}
                  onChange={(value) => setFormData({ ...formData, judul: value })}
               />
            </div>
            <div className="row">
               <TextInput
                  divClassName="col-12 col-md-12"
                  label="Link Folder Google Drive"
                  name="link_folder_drive"
                  value={formData?.link_folder_drive}
                  onChange={(value) => setFormData({ ...formData, link_folder_drive: value })}
               />
            </div>
         </CardContent>
      </Card>
   );
}
