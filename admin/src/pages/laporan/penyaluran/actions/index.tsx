import DatePicker from "@/components/form/date-picker";
import FormSelect from "@/components/form/select";
import TextInput from "@/components/form/text-input";
import { Button } from "@/components/ui/button";
import { ButtonGroup } from "@/components/ui/button-group";
import { Card, CardAction, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Spinner } from "@/components/ui/spinner";
import { crudService } from "@/lib/crudService";
import moment from "moment";
import { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router";
import { toast } from "sonner";

type DaftarProgram = Record<string, string>;

type FormData = {
   id_program?: string;
   jumlah_penerima?: string;
   total_dana?: string;
   tanggal?: Date | string;
};

export default function Index() {
   const { id } = useParams();
   const isEdit = !!id;

   const navigate = useNavigate();

   const { useList } = crudService("/laporan/penyaluran/program");
   const { data: daftarProgram, isLoading } = useList<Array<DaftarProgram>>();

   const { useCreate, useUpdate, useDetail } = crudService("/laporan/penyaluran");
   const { mutate: handleCreate, isPending: isPendingCreate } = useCreate();
   const { mutate: handleUpdate, isPending: isPendingUpdate } = useUpdate();
   const { data, isLoading: isLoadingDetail } = useDetail(id);

   const [formData, setFormData] = useState<FormData>({});

   useEffect(() => {
      if (!isLoadingDetail && data) {
         setFormData({
            ...data,
            tanggal: (data as FormData).tanggal ? moment((data as FormData)?.tanggal).format("YYYY-MM-DD") : undefined,
         });
      }
      return () => {};
   }, [isLoadingDetail, data]);

   const onSuccess = (res: { status: boolean; message: string }) => {
      const { status, message } = res;
      if (status) {
         toast.success(message);
         navigate("/laporan/penyaluran");
      } else {
         toast.error(message);
      }
   };

   const handleSubmit = (e: React.MouseEvent<HTMLButtonElement>) => {
      e.preventDefault();

      const payload = { ...formData, tanggal: formData.tanggal ? moment(formData?.tanggal).format("YYYY-MM-DD") : undefined };

      if (isEdit) {
         handleUpdate({ ...payload, id }, { onSuccess });
      } else {
         handleCreate(payload, { onSuccess });
      }
   };

   if (isLoading || isLoadingDetail) {
      return <div>loading...</div>;
   }

   const findTanggal = typeof formData.tanggal === "string" ? new Date(formData.tanggal) : formData.tanggal;
   const tanggal = formData?.tanggal ? findTanggal : undefined;

   return (
      <Card>
         <CardHeader>
            <CardTitle>Laporan Penyaluran</CardTitle>
            <CardDescription>Daftar Laporan Penyaluran</CardDescription>
            <CardAction>
               <ButtonGroup>
                  <Button variant="outline" asChild>
                     <Link to="/laporan/penyaluran">Batal</Link>
                  </Button>
                  <Button disabled={isPendingCreate || isPendingUpdate} onClick={handleSubmit}>
                     {isPendingCreate || (isPendingUpdate && <Spinner />)}Simpan
                  </Button>
               </ButtonGroup>
            </CardAction>
         </CardHeader>
         <CardContent>
            <div className="row">
               <FormSelect
                  divClassName="col-12 col-md-6"
                  label="Program"
                  value={formData?.id_program}
                  onChange={(value) => setFormData({ ...formData, id_program: value })}
                  options={daftarProgram?.map((item) => ({ value: item?.id, label: item?.judul })) || []}
               />
               <TextInput
                  divClassName="col-12 col-md-6"
                  label="Jumlah Penerima"
                  type="number"
                  value={formData?.jumlah_penerima}
                  onChange={(value) => setFormData({ ...formData, jumlah_penerima: value })}
               />
            </div>
            <div className="row">
               <TextInput
                  type="number"
                  divClassName="col-12 col-md-6"
                  label="Total Dana"
                  value={formData?.total_dana}
                  onChange={(value) => setFormData({ ...formData, total_dana: value })}
               />
               <DatePicker
                  divClassName="col-12 col-md-6"
                  label="Tanggal"
                  value={tanggal}
                  onChange={(date) => setFormData({ ...formData, tanggal: date })}
               />
            </div>
         </CardContent>
      </Card>
   );
}
