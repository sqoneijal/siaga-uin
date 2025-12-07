import TextInput from "@/components/form/text-input";
import { Button } from "@/components/ui/button";
import { ButtonGroup } from "@/components/ui/button-group";
import { Card, CardAction, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Item, ItemActions, ItemContent, ItemTitle } from "@/components/ui/item";
import { Spinner } from "@/components/ui/spinner";
import { crudService } from "@/lib/crudService";
import { useState } from "react";
import { useNavigate } from "react-router";
import { toast } from "sonner";

type FormData = Record<string, string>;

export default function Index() {
   const navigate = useNavigate();

   const [formData, setFormData] = useState<FormData>({});
   const [daftarLink, setDaftarLink] = useState<Array<string>>([]);

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
                           { ...formData, daftarLink },
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
               <div className="col-12 col-md-12">
                  <div className="flex w-full flex-col gap-4">
                     <Item variant="outline" className="w-full">
                        <ItemContent>
                           <TextInput
                              divClassName="col-12 col-md-12"
                              label="Link Gambar/Foto"
                              name="link"
                              value={formData?.link}
                              onChange={(value) => setFormData({ ...formData, link: value })}
                           />
                        </ItemContent>
                        <ItemActions className="mt-5">
                           <Button
                              variant="outline"
                              size="sm"
                              onClick={() => {
                                 setDaftarLink([...daftarLink, formData.link]);
                                 setFormData({ ...formData, link: "" });
                              }}>
                              Tambah
                           </Button>
                        </ItemActions>
                     </Item>
                     {daftarLink?.map((item, i) => {
                        return (
                           <Item variant="outline" key={i}>
                              <ItemContent>
                                 <a href={item} target="_blank">
                                    <ItemTitle>{item}</ItemTitle>
                                 </a>
                              </ItemContent>
                              <ItemActions>
                                 <Button variant="outline" size="sm" onClick={() => setDaftarLink(daftarLink.filter((_, idx) => idx !== i))}>
                                    Hapus
                                 </Button>
                              </ItemActions>
                           </Item>
                        );
                     })}
                  </div>
               </div>
            </div>
         </CardContent>
      </Card>
   );
}
