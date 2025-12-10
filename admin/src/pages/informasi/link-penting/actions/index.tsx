import TextInput from "@/components/form/text-input";
import { Button } from "@/components/ui/button";
import { ButtonGroup } from "@/components/ui/button-group";
import { Card, CardAction, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Spinner } from "@/components/ui/spinner";
import { crudService } from "@/lib/crudService";
import { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router";
import { toast } from "sonner";

type FormData = Record<string, string>;

export default function Index() {
   const { id } = useParams();
   const isEdit = !!id;

   const navigate = useNavigate();

   const [formData, setFormData] = useState<FormData>({});

   const { useCreate, useUpdate, useDetail } = crudService("/informasi/link-penting");
   const { mutate: handleCreate, isPending: isPendingCreate } = useCreate();
   const { mutate: handleUpdate, isPending: isPendingUpdate } = useUpdate();
   const { data, isLoading: isLoadingDetail } = useDetail(id);

   useEffect(() => {
      if (!isLoadingDetail && data) {
         setFormData({
            ...data,
         });
      }
      return () => {};
   }, [isLoadingDetail, data]);

   const onSuccess = (res: { status: boolean; message: string }) => {
      const { status, message } = res;
      if (status) {
         toast.success(message);
         navigate("/informasi/link-penting");
      } else {
         toast.error(message);
      }
   };

   const handleSubmit = (e: React.MouseEvent<HTMLButtonElement>) => {
      e.preventDefault();

      const payload = { ...formData };

      if (isEdit) {
         handleUpdate({ ...payload, id }, { onSuccess });
      } else {
         handleCreate(payload, { onSuccess });
      }
   };

   if (isLoadingDetail) {
      return <div>loading...</div>;
   }

   return (
      <Card>
         <CardHeader>
            <CardTitle>Link Penting</CardTitle>
            <CardDescription>Detail Link Penting</CardDescription>
            <CardAction>
               <ButtonGroup>
                  <Button variant="outline" asChild>
                     <Link to="/informasi/link-penting">Batal</Link>
                  </Button>
                  <Button disabled={isPendingCreate || isPendingUpdate} onClick={handleSubmit}>
                     {isPendingCreate || (isPendingUpdate && <Spinner />)}Simpan
                  </Button>
               </ButtonGroup>
            </CardAction>
         </CardHeader>
         <CardContent>
            <div className="row">
               <TextInput
                  divClassName="col-12 col-md-6"
                  label="Nama"
                  name="nama"
                  value={formData?.nama}
                  onChange={(value) => setFormData({ ...formData, nama: value })}
               />
               <TextInput
                  divClassName="col-12 col-md-6"
                  label="Link"
                  name="link"
                  value={formData?.link}
                  onChange={(value) => setFormData({ ...formData, link: value })}
               />
            </div>
            <div className="row">
               <TextInput
                  divClassName="col-12 col-md-12"
                  label="Keterangan"
                  name="keterangan"
                  value={formData?.keterangan}
                  onChange={(value) => setFormData({ ...formData, keterangan: value })}
               />
            </div>
         </CardContent>
      </Card>
   );
}
